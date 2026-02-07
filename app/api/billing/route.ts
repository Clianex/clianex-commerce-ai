import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

/**
 * POST /api/billing
 * Body: { moduleKey: string }
 */
export async function POST(req: Request) {
  try {
    // 1️⃣ Autenticación Clerk (SIEMPRE await)
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 2️⃣ Leer body
    const body = await req.json();
    const { moduleKey } = body;

    if (!moduleKey || typeof moduleKey !== "string") {
      return NextResponse.json(
        { error: "Invalid moduleKey" },
        { status: 400 }
      );
    }

    // 3️⃣ Buscar módulo en BD
    const module = await prisma.module.findUnique({
      where: { key: moduleKey },
    });

    if (!module || !module.active) {
      return NextResponse.json(
        { error: "Module not available" },
        { status: 404 }
      );
    }

    // 4️⃣ Crear sesión de Stripe (pago único)
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: module.price, // en céntimos
            product_data: {
              name: module.name,
              description: module.description ?? undefined,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        clerkUserId: userId,
        moduleKey: module.key,
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/modules?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/marketplace?canceled=1`,
    });

    // 5️⃣ Respuesta
    return NextResponse.json({
      checkoutUrl: session.url,
    });
  } catch (error) {
    console.error("Billing error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
