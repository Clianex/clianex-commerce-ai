import { prisma } from "@/lib/prisma";

/**
 * Devuelve los módulos activos de un usuario
 */
export async function getActiveModules(clerkId) {
  if (!clerkId) return [];

  const user = await prisma.user.findUnique({
    where: { clerkId },
    include: {
      modules: {
        where: { active: true },
        include: {
          module: true,
        },
      },
    },
  });

  if (!user) return [];

  return user.modules.map((m) => m.module);
}
