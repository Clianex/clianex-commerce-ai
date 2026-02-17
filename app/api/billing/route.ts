import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const session = await auth();
    const userId = session.userId;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { moduleId } = await req.json();

    const module = await prisma.module.findUnique({
      where: { id: moduleId },
    });

    if (!module || !module.active) {
      return NextResponse.json({ error: "Module not found" }, { status: 404 });
    }

    if (!module.stripePriceId) {
      return NextResponse.json(
        { error: "Module not configured for Stripe" },
        { status: 400 }
      );
    }

    // Crear sesión checkout
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: module.stripePriceId,
          quantity: 1,
        },
      ],
      metadata: {
        clerkUserId: userId,
        moduleId: module.id,
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/marketplace?canceled=true`,
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (err) {
    console.error("Billing error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
