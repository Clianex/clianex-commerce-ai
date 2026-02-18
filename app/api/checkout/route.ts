import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe"; // singleton reutilizable

export const runtime = "nodejs";

// ─── Constantes ───────────────────────────────────────────────────────────────

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
const SUPPORTED_CURRENCIES = ["eur", "usd"] as const;
type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number];

// ─── Validaciones ─────────────────────────────────────────────────────────────

function validateEnv(): void {
  if (!APP_URL) throw new Error("NEXT_PUBLIC_APP_URL is not defined");
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("STRIPE_SECRET_KEY is not defined");
}

function parseBody(body: unknown): { moduleId: string } {
  if (
    typeof body !== "object" ||
    body === null ||
    typeof (body as Record<string, unknown>).moduleId !== "string" ||
    !(body as Record<string, unknown>).moduleId
  ) {
    throw new ValidationError("moduleId inválido o ausente");
  }
  return { moduleId: (body as Record<string, string>).moduleId.trim() };
}

// ─── Errores tipados ──────────────────────────────────────────────────────────

class ValidationError extends Error {
  readonly status = 400;
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

class NotFoundError extends Error {
  readonly status = 404;
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

class ConflictError extends Error {
  readonly status = 409;
  constructor(message: string) {
    super(message);
    this.name = "ConflictError";
  }
}

// ─── Handler principal ────────────────────────────────────────────────────────

export async function POST(req: Request): Promise<NextResponse> {
  // 1. Validar variables de entorno al arrancar (falla rápido en misconfiguraciones)
  try {
    validateEnv();
  } catch (err) {
    console.error("[checkout] Misconfiguration:", err);
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  // 2. Autenticación
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 3. Parsear y validar body
    const rawBody = await req.json().catch(() => null);
    const { moduleId } = parseBody(rawBody);

 // 4. Buscar módulo en base de datos
const module = await prisma.module.findUnique({
  where: { id: moduleId },
  select: { id: true, name: true, price: true, active: true }, // ← sin currency
});

if (!module) {
  throw new NotFoundError(`Módulo no encontrado: ${moduleId}`);
}

if (!module.active) {
  throw new ValidationError("Este módulo no está disponible para compra");
}

// 5. Evitar compras duplicadas
const alreadyOwned = await prisma.userModule.findUnique({
  where: { clerkUserId_moduleId: { clerkUserId: userId, moduleId } },
  select: { enabled: true },
});

if (alreadyOwned?.enabled) {
  throw new ConflictError("Ya tienes acceso a este módulo");
}

// 6. Crear sesión de Stripe Checkout
const checkoutSession = await stripe.checkout.sessions.create({
  mode: "payment",
  payment_method_types: ["card"],
  line_items: [
    {
      price_data: {
        currency: "eur",           // ← hardcodeado, no viene de DB
        product_data: { name: module.name },
        unit_amount: module.price,
      },
      quantity: 1,
    },
  ],
  metadata: {
    clerkUserId: userId,
    moduleId: module.id,
  },
  expires_at: Math.floor(Date.now() / 1000) + 60 * 30,
  success_url: `${APP_URL}/marketplace?success=true&module=${module.id}`,
  cancel_url: `${APP_URL}/marketplace?canceled=true`,
});

    if (!checkoutSession.url) {
      throw new Error("Stripe no devolvió una URL de checkout");
    }

    return NextResponse.json({ url: checkoutSession.url }, { status: 201 });

  } catch (err) {
    // Errores de dominio controlados
    if (err instanceof ValidationError || err instanceof NotFoundError || err instanceof ConflictError) {
      console.warn(`[checkout] ${err.name}:`, err.message);
      return NextResponse.json({ error: err.message }, { status: err.status });
    }

    // Errores de Stripe
    if (err instanceof Stripe.errors.StripeError) {
      console.error("[checkout] Stripe error:", err.message);
      return NextResponse.json(
        { error: "Error al procesar el pago. Inténtalo de nuevo." },
        { status: 502 }
      );
    }

    // Error inesperado
    console.error("[checkout] Unexpected error:", err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}