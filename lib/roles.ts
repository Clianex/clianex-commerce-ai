import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";

export async function getUserRole(clerkUserId: string): Promise<UserRole> {
  const role = await prisma.userRoleAssignment.findUnique({
    where: { clerkUserId },
    select: { role: true },
  });

  return role?.role ?? "USER";
}

export async function requireRole(
  clerkUserId: string,
  allowed: UserRole[]
): Promise<boolean> {
  const role = await getUserRole(clerkUserId);
  return allowed.includes(role);
}
