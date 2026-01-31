import { prisma } from "@/lib/prisma";

/**
 * Comprueba si un usuario tiene acceso a un módulo concreto
 *
 * @param {Object} params
 * @param {string} params.clerkId - userId de Clerk
 * @param {string} params.moduleKey - key única del módulo (ej: "autoblogging")
 * @returns {Promise<boolean>}
 */
export async function hasModuleAccess({ clerkId, moduleKey }) {
  if (!clerkId || !moduleKey) return false;

  const user = await prisma.user.findUnique({
    where: { clerkId },
    include: {
      modules: {
        where: {
          active: true,
          module: {
            key: moduleKey,
          },
        },
        include: {
          module: true,
        },
      },
    },
  });

  if (!user) return false;

  return user.modules.length > 0;
}
