import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { hasModuleAccess } from "@/lib/permissions";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const allowed = await hasModuleAccess(userId, "billing");

  if (!allowed) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.json({ data: "billing data" });
}
