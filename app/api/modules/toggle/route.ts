import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/modules/toggle
 * Body: { moduleKey: string; enabled: boolean }
 */
export async function POST(req: Request) {
  try {
    // 1️⃣ Auth (SIEMPRE await)
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 2️⃣ Leer body
    const body = await req.json();
    const { moduleKey, enabled } = body;

    if (
      typeof moduleKey !== "string" ||
      typeof enabled !== "boolean"
    ) {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400 }
      );
    }

    // 3️⃣ Buscar módulo
    const module = await prisma.module.findUnique({
      where: { key: moduleKey },
    });

    if (!module) {
      return NextResponse.json(
        { error: "Module not found" },
        { status: 404 }
      );
    }

    // 4️⃣ Upsert UserModule (activar / desactivar)
    await prisma.userModule.upsert({
      where: {
        clerkUserId_moduleId: {
          clerkUserId: userId,
          moduleId: module.id,
        },
      },
      update: {
        enabled,
      },
      create: {
        clerkUserId: userId,
        moduleId: module.id,
        enabled,
      },
    });

    // 5️⃣ OK
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Toggle module error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
