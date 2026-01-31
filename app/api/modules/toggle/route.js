import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { moduleId } = await req.json();

  // 1️⃣ asegurar usuario en DB
  const user = await prisma.user.upsert({
    where: { clerkId: userId },
    update: {},
    create: { clerkId: userId },
  });

  // 2️⃣ toggle módulo
  const existing = await prisma.userModule.findUnique({
    where: {
      userId_moduleId: {
        userId: user.id,
        moduleId,
      },
    },
  });

  let result;

  if (existing) {
    result = await prisma.userModule.update({
      where: { id: existing.id },
      data: { active: !existing.active },
    });
  } else {
    result = await prisma.userModule.create({
      data: {
        userId: user.id,
        moduleId,
        active: true,
      },
    });
  }

  return NextResponse.json({ success: true, active: result.active });
}
