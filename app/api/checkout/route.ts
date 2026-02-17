export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { moduleId } = await req.json();

  const module = await prisma.module.findUnique({ where: { id: moduleId } });
  if (!module || !module.active)
    return NextResponse.json({ error: "Module not available" }, { status: 404 });

  const alreadyActive = await prisma.userModule.findFirst({
    where: { clerkUserId: userId, moduleId, enabled: true },
  });
  if (alreadyActive)
    return NextResponse.json({ error: "Already purchased" }, { status: 400 });

  // ======= Módulo GRATIS =======
  if (module.price === 0) {
    await prisma.userModule.create({
      data: {
        clerkUserId: userId,
        moduleId: module.id,
        enabled: true,
      },
    });
    return NextResponse.json({ message: "Module activated (free)" });
  }

  // ======= Módulo de PAGO =======
  if (!module.stripePriceId)
    return NextResponse.json(
      { error: "Stripe price not configured for this module" },
      { status: 500 }
    );

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [{ price: module.stripePriceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/modules?success=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/marketplace?canceled=1`,
    metadata: { clerkUserId: userId, moduleId: module.id },
  });

  return NextResponse.json({ url: session.url });
}
