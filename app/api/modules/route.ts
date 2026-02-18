import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(): Promise<NextResponse> {
  try {
    const modules = await prisma.module.findMany({
      where: { active: true },
      select: {
        id: true,
        key: true,
        name: true,
        description: true,
        price: true,
        active: true,
      },
      orderBy: { name: "asc" },
    });

    return NextResponse.json(modules);
  } catch (err) {
    console.error("[api/modules] Error:", err);
    return NextResponse.json(
      { error: "No se pudieron cargar los módulos" },
      { status: 500 }
    );
  }
}