import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const modules = await prisma.module.findMany({
      where: { active: true },
      orderBy: { createdAt: "asc" },
    });

    const result = modules.map((m) => ({
      id: m.id,
      key: m.key,
      name: m.name,
      description: m.description,
      price: m.price,
      stripePriceId: m.stripePriceId,
      active: m.active,
      enabled: false, // se actualizará si el usuario ya lo compró
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error("❌ /api/modules error:", error);
    return NextResponse.json({ error: "Failed to load modules" }, { status: 500 });
  }
}
