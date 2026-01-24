import { auth } from "@clerk/nextjs/server";
import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json([], { status: 401 });
  }

  const modules = await prisma.userModule.findMany({
    where: { userId },
  });

  return NextResponse.json(modules);
}
