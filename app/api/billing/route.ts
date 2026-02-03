import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { requireRole } from "@/lib/permissions";
import { UserRole } from "@prisma/client";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  // SOLO OWNER puede acceder a billing
  const allowed = await requireRole(userId, [UserRole.OWNER]);

  if (!allowed) {
    return NextResponse.json(
      { error: "Forbidden" },
      { status: 403 }
    );
  }

  // Aquí irá Stripe / facturación
  return NextResponse.json({
    ok: true,
    message: "Billing access granted",
  });
}
