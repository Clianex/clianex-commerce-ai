import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature invalid:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // 🔒 Evitar duplicados
  const existing = await prisma.purchase.findUnique({
    where: { stripeEventId: event.id },
  });

  if (existing) {
    return NextResponse.json({ received: true });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as any;

        const clerkUserId = session.metadata.clerkUserId;
        const moduleId = session.metadata.moduleId;

        const purchase = await prisma.purchase.create({
          data: {
            clerkUserId,
            moduleId,
            stripeEventId: event.id,
            stripePaymentIntent: session.payment_intent,
            amount: session.amount_total,
            currency: session.currency,
            status: "PAID",
          },
        });

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

      case "charge.refunded": {
        const charge = event.data.object as any;

        const purchase = await prisma.purchase.findUnique({
          where: { stripePaymentIntent: charge.payment_intent },
        });

        if (purchase) {
          await prisma.purchase.update({
            where: { id: purchase.id },
            data: {
              status: "REFUNDED",
              refundedAt: new Date(),
            },
          });

          await prisma.userModule.updateMany({
            where: { activePurchaseId: purchase.id },
            data: { enabled: false, activePurchaseId: null },
          });
        }

        break;
      }

      default:
        console.log("Unhandled event:", event.type);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook processing error:", err);
    return NextResponse.json({ error: "Processing error" }, { status: 500 });
  }
}
