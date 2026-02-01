import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const modules = await prisma.module.findMany({
    where: { active: true },
    orderBy: { name: "asc" },
    include: {
      users: {
        where: { clerkUserId: userId },
        select: { enabled: true },
      },
    },
  });

  const normalized = modules.map((m) => ({
    id: m.id,
    key: m.key,
    name: m.name,
    description: m.description,
    icon: m.icon,
    price: m.price,
    enabled: m.users[0]?.enabled ?? false,
  }));

  return NextResponse.json(normalized);
}
