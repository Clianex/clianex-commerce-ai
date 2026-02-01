import { prisma } from "@/lib/prisma";

export async function hasModuleAccess(
  clerkUserId: string,
  moduleKey: string
): Promise<boolean> {
  const module = await prisma.module.findUnique({
    where: { key: moduleKey },
    select: {
      active: true,
      users: {
        where: {
          clerkUserId,
          enabled: true,
        },
        select: { id: true },
      },
    },
  });

  if (!module) return false;
  if (!module.active) return false;

  return module.users.length > 0;
}
