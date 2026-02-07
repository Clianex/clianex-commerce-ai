import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({}, { status: 401 });

  await prisma.userRoleAssignment.upsert({
    where: { clerkUserId: userId },
    update: {},
    create: {
      clerkUserId: userId,
      role: "USER",
    },
  });

  return NextResponse.json({ ok: true });
}
