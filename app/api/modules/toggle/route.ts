import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { moduleId, enabled } = await req.json();

  if (!moduleId || typeof enabled !== "boolean") {
    return new NextResponse("Bad request", { status: 400 });
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

  return NextResponse.json({ success: true });
}
