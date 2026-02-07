import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.module.createMany({
    skipDuplicates: true,
    data: [
      {
        key: "autoblogging",
        name: "Autoblogging",
        description: "Publicación automática con IA",
        price: 2900,
        stripePriceId: "price_AUTOBLOGGING_PLACEHOLDER",
        active: true,
      },
      {
        key: "billing",
        name: "Billing",
        description: "Gestión de pagos y facturación",
        price: 0,
        stripePriceId: "free",
        active: true,
      },
    ],
  });
}

main()
  .then(() => {
    console.log("✅ Seed ejecutado correctamente");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
