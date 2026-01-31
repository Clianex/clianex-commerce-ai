import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json([], { status: 200 });
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      modules: {
        where: { active: true },
        include: {
          module: true,
        },
      },
    },
  });

  const activeModules =
    user?.modules.map((um) => um.module) ?? [];

  return NextResponse.json(activeModules);
}
