import { prisma } from "../lib/prisma.js";

async function main() {
  const modules = [
    {
      key: "autoblogging",
      name: "Autoblogging IA",
      description: "Publicación automática optimizada para SEO.",
      type: "pro",
    },
    {
      key: "tendencias",
      name: "Tendencias",
      description: "Detección automática de oportunidades.",
      type: "free",
    },
    {
      key: "shop-ai",
      name: "Shop AI",
      description: "Ventas inteligentes con IA.",
      type: "pro",
    },
  ];

  for (const module of modules) {
    await prisma.module.upsert({
      where: { key: module.key },
      update: {},
      create: module,
    });
  }
}

main()
  .then(() => console.log("✅ Modules seeded"))
  .catch(console.error)
  .finally(() => prisma.$disconnect());
