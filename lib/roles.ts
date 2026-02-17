// /lib/roles.ts
import { prisma } from "@/lib/prisma";

export type UserRole = "OWNER" | "ADMIN" | "USER";

/**
 * Devuelve el rol del usuario o USER por defecto
 */
export async function getUserRole(
  clerkUserId: string
): Promise<UserRole> {
  const record = await prisma.userRoleAssignment.findUnique({
    where: { clerkUserId },
    select: { role: true },
  });

  return record?.role ?? "USER";
}

/**
 * Verifica si el usuario tiene uno de los roles permitidos
 */
export async function requireRole(
  clerkUserId: string,
  allowedRoles: UserRole[]
): Promise<boolean> {
  const role = await getUserRole(clerkUserId);
  return allowedRoles.includes(role);
}
