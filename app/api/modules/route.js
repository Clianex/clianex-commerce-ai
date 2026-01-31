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
      modules: true,
    },
  });

  const modules = await prisma.module.findMany();

  const enriched = modules.map((m) => {
    const relation = user?.modules.find((um) => um.moduleId === m.id);
    return {
      ...m,
      active: relation?.active ?? false,
    };
  });

  return NextResponse.json(enriched);
}
