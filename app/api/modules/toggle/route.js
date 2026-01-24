import { auth } from "@clerk/nextjs/server";
import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userId } = auth();
  const { moduleId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const existing = await prisma.userModule.findUnique({
    where: {
      userId_moduleId: {
        userId,
        moduleId,
      },
    },
  });

  if (existing) {
    await prisma.userModule.update({
      where: { id: existing.id },
      data: { active: !existing.active },
    });
  } else {
    await prisma.userModule.create({
      data: {
        userId,
        moduleId,
        active: true,
      },
    });
  }

  return NextResponse.json({ success: true });
}
