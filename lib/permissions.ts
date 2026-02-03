import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";

/* =========================
   ROLES
========================= */

export async function getUserRole(
  clerkUserId: string
): Promise<UserRole> {
  const assignment = await prisma.userRoleAssignment.findUnique({
    where: { clerkUserId },
    select: { role: true },
  });

  return assignment?.role ?? UserRole.USER;
}

export async function requireRole(
  clerkUserId: string,
  allowedRoles: UserRole[]
): Promise<boolean> {
  const role = await getUserRole(clerkUserId);
  return allowedRoles.includes(role);
}

/* =========================
   MODULE ACCESS
========================= */

export async function hasModuleAccess(
  clerkUserId: string,
  moduleKey: string
): Promise<boolean> {
  const access = await prisma.userModule.findFirst({
    where: {
      clerkUserId,
      enabled: true,
      module: {
        key: moduleKey,
        active: true,
      },
    },
    select: { id: true },
  });

  return Boolean(access);
}

/* =========================
   COMBINED ACCESS
========================= */

export async function canAccessModule(
  clerkUserId: string,
  moduleKey: string
): Promise<boolean> {
  const role = await getUserRole(clerkUserId);

  // OWNER y ADMIN bypass total
  if (role === UserRole.OWNER || role === UserRole.ADMIN) {
    return true;
  }

  return hasModuleAccess(clerkUserId, moduleKey);
}
