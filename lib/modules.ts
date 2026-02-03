import { prisma } from "@/lib/prisma";

/**
 * Devuelve los módulos activos de un usuario
 */
export async function getActiveModules(clerkId: string) {
  if (!clerkId) return [];

  const userModules = await prisma.userModule.findMany({
    where: { clerkUserId: clerkId, enabled: true },
    include: { module: true },
  });

  return userModules.map((um) => um.module);
}
