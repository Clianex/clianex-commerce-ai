import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { moduleId, enabled } = await req.json();

  if (!moduleId || typeof enabled !== "boolean") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await prisma.userModule.upsert({
    where: {
      clerkUserId_moduleId: {
        clerkUserId: userId,
        moduleId,
      },
    },
    update: { enabled },
    create: {
      clerkUserId: userId,
      moduleId,
      enabled,
    },
  });

  return NextResponse.json({ ok: true });
}
