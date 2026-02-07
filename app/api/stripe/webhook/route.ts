import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text();

  // ✅ App Router: headers() es async
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      endpointSecret
    );
  } catch (err: any) {
    console.error("❌ Invalid Stripe signature", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // ✅ Anti-replay (evento duplicado)
  const alreadyProcessed = await prisma.purchase.findUnique({
    where: { stripeEventId: event.id },
  });

  if (alreadyProcessed) {
    return NextResponse.json({ received: true });
  }

  try {
    switch (event.type) {
      // ===============================
      // ✅ PAGO COMPLETADO
      // ===============================
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const metadata = session.metadata ?? {};
        const { clerkUserId, moduleId } = metadata;

        if (!clerkUserId || !moduleId) {
          throw new Error("Missing metadata (clerkUserId / moduleId)");
        }

        const paymentIntentId = session.payment_intent as string;

        // Recuperar el PaymentIntent para obtener el charge
        const paymentIntent = await stripe.paymentIntents.retrieve(
          paymentIntentId
        );

        const chargeId =
          typeof paymentIntent.latest_charge === "string"
            ? paymentIntent.latest_charge
            : null;

        // Crear compra
        const purchase = await prisma.purchase.create({
          data: {
            clerkUserId,
            moduleId,
            stripeEventId: event.id,
            stripePaymentIntent: paymentIntentId,
            stripeChargeId: chargeId,
            amount: session.amount_total ?? 0, // EN CÉNTIMOS
            currency: session.currency ?? "eur",
            status: "PAID",
          },
        });

        // Activar módulo
        await prisma.userModule.upsert({
          where: {
            clerkUserId_moduleId: { clerkUserId, moduleId },
          },
          update: {
            enabled: true,
            activePurchaseId: purchase.id,
          },
          create: {
            clerkUserId,
            moduleId,
            enabled: true,
            activePurchaseId: purchase.id,
          },
        });

        break;
      }

      // ===============================
      // 🔄 REEMBOLSO
      // ===============================
      case "charge.refunded": {
        const charge = event.data.object as Stripe.Charge;

        if (!charge.payment_intent) break;

        const purchase = await prisma.purchase.findUnique({
          where: {
            stripePaymentIntent: charge.payment_intent as string,
          },
        });

        if (!purchase) break;

        await prisma.purchase.update({
          where: { id: purchase.id },
          data: {
            status: "REFUNDED",
            refundedAt: new Date(),
          },
        });

        await prisma.userModule.updateMany({
          where: { activePurchaseId: purchase.id },
          data: {
            enabled: false,
            activePurchaseId: null,
          },
        });

        break;
      }

      // ===============================
      // ❌ PAGO FALLIDO
      // ===============================
      case "payment_intent.payment_failed": {
        const intent = event.data.object as Stripe.PaymentIntent;

        const purchase = await prisma.purchase.findUnique({
          where: { stripePaymentIntent: intent.id },
        });

        if (!purchase) break;

        await prisma.purchase.update({
          where: { id: purchase.id },
          data: {
            status: "FAILED",
          },
        });

        await prisma.userModule.updateMany({
          where: { activePurchaseId: purchase.id },
          data: {
            enabled: false,
            activePurchaseId: null,
          },
        });

        break;
      }

      default:
        console.log("ℹ️ Evento Stripe no manejado:", event.type);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("🔥 Error procesando webhook:", err);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
