// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  await prisma.module.createMany({
    skipDuplicates: true,
    data: [
      {
        key: "autoblogging",
        name: "Autoblogging",
        description: "Publicación automática con IA",
        price: 2900,
        stripePriceId: "price_1T1VxRBhZge61srdWQVxZ15O", // ← CAMBIAR por el real de Stripe
        active: true,
      },
      {
        key: "billing",
        name: "Billing",
        description: "Gestión de pagos y facturación",
        price: 0,
        stripePriceId: "price_BILLING", // ← si es gratis puedes dejar dummy
        active: true,
      },
    ],
  });

  console.log("✅ Modules seeded");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
