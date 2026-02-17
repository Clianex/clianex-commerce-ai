import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ModuleGrid from "@/components/ModuleGrid";

/**
 * Modules Dashboard Page (Server Component)
 * -----------------------------------------
 * Aquí se cargan los módulos desde Prisma.
 * Luego se pasan al componente cliente.
 */

export default async function ModulesPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Traemos todos los módulos activos
  const modules = await prisma.module.findMany({
    where: { active: true },
    orderBy: { createdAt: "asc" },
  });

  return (
    <section className="p-8 space-y-6">
      <h1 className="text-2xl font-semibold">
        Marketplace de Módulos
      </h1>

      <ModuleGrid modules={modules} />
    </section>
  );
}
