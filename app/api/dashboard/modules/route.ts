import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const { userId } = await auth(); // <- await obligatorio

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const userModules = await prisma.userModule.findMany({
    where: {
      clerkUserId: userId,
      enabled: true,
    },
    include: {
      module: true,
    },
  });

  const activeModules = userModules.map((um) => um.module);

  return NextResponse.json(activeModules);
}
