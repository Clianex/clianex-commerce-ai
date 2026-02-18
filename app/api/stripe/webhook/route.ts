import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface CheckoutSessionMetadata {
  clerkUserId: string;
  moduleId: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function parseCheckoutSession(
  session: Stripe.Checkout.Session
): CheckoutSessionMetadata {
  const { clerkUserId, moduleId } = session.metadata ?? {};

  if (!clerkUserId || !moduleId) {
    throw new Error(
      `Missing metadata in checkout session ${session.id}: clerkUserId=${clerkUserId}, moduleId=${moduleId}`
    );
  }

  return { clerkUserId, moduleId };
}

function resolvePaymentIntentId(
  pi: Stripe.Charge["payment_intent"]
): string | null {
  if (!pi) return null;
  return typeof pi === "string" ? pi : pi.id;
}

// ─── Handlers por evento ──────────────────────────────────────────────────────

async function handleCheckoutCompleted(
  session: Stripe.Checkout.Session,
  eventId: string
): Promise<void> {
  const { clerkUserId, moduleId } = parseCheckoutSession(session);

  const paymentIntentId = resolvePaymentIntentId(
    session.payment_intent as Stripe.Charge["payment_intent"]
  );

  if (!paymentIntentId || session.amount_total === null) {
    throw new Error(
      `Incomplete session data for event ${eventId}: payment_intent=${paymentIntentId}, amount_total=${session.amount_total}`
    );
  }

  await prisma.$transaction(async (tx) => {
    const purchase = await tx.purchase.create({
      data: {
        clerkUserId,
        moduleId,
        stripeEventId: eventId,
        stripePaymentIntent: paymentIntentId,
        amount: session.amount_total!,
        currency: session.currency ?? "eur",
        status: "PAID",
      },
    });

    await tx.userModule.upsert({
      where: { clerkUserId_moduleId: { clerkUserId, moduleId } },
      update: { enabled: true, activePurchaseId: purchase.id },
      create: {
        clerkUserId,
        moduleId,
        enabled: true,
        activePurchaseId: purchase.id,
      },
    });

    console.info(
      `[webhook] Compra registrada: purchaseId=${purchase.id} userId=${clerkUserId} moduleId=${moduleId}`
    );
  });
}

async function handleChargeRefunded(charge: Stripe.Charge): Promise<void> {
  const paymentIntentId = resolvePaymentIntentId(charge.payment_intent);

  if (!paymentIntentId) {
    console.warn(
      "[webhook] charge.refunded sin payment_intent — ignorado:",
      charge.id
    );
    return;
  }

  const purchase = await prisma.purchase.findUnique({
    where: { stripePaymentIntent: paymentIntentId },
    select: { id: true, clerkUserId: true, moduleId: true },
  });

  if (!purchase) {
    console.warn(
      "[webhook] No se encontró purchase para payment_intent:",
      paymentIntentId
    );
    return;
  }

  await prisma.$transaction([
    prisma.purchase.update({
      where: { id: purchase.id },
      data: { status: "REFUNDED", refundedAt: new Date() },
    }),
    prisma.userModule.updateMany({
      where: { activePurchaseId: purchase.id },
      data: { enabled: false, activePurchaseId: null },
    }),
  ]);

  console.info(
    `[webhook] Reembolso procesado: purchaseId=${purchase.id} userId=${purchase.clerkUserId} moduleId=${purchase.moduleId}`
  );
}

// ─── Handler principal ────────────────────────────────────────────────────────

export async function POST(req: Request): Promise<NextResponse> {
  // 1. Leer body raw ANTES de cualquier parseo — Stripe requiere el body sin tocar
  const body = await req.text();

  // 2. Leer firma — await obligatorio en Next.js App Router
  const signature = (await headers()).get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  // 3. Verificar firma criptográfica del webhook
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("[webhook] Firma inválida:", (err as Error).message);
    return NextResponse.json(
      { error: "Invalid webhook signature" },
      { status: 400 }
    );
  }

  // 4. Idempotencia — ignorar eventos ya procesados
  // Usamos stripeEventId como clave única para evitar doble procesamiento
  const alreadyProcessed = await prisma.purchase.findUnique({
    where: { stripeEventId: event.id },
    select: { id: true },
  });

  if (alreadyProcessed) {
    console.info("[webhook] Evento duplicado ignorado:", event.id);
    return NextResponse.json({ received: true });
  }

  // 5. Dispatch por tipo de evento
  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(
          event.data.object as Stripe.Checkout.Session,
          event.id
        );
        break;

      case "charge.refunded":
        await handleChargeRefunded(event.data.object as Stripe.Charge);
        break;

      default:
        // No lanzar error — Stripe reintentaría si devolvemos 5xx
        console.info("[webhook] Evento no manejado:", event.type);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    // 500 → Stripe reintentará automáticamente con backoff exponencial
    console.error("[webhook] Error procesando evento:", {
      eventId: event.id,
      eventType: event.type,
      error: (err as Error).message,
      stack: (err as Error).stack,
    });
    return NextResponse.json(
      { error: "Internal processing error" },
      { status: 500 }
    );
  }
}