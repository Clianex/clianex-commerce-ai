import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = await currentUser();
  if (!user) {
    return new NextResponse("User not found", { status: 404 });
  }

  const email = user.primaryEmailAddress?.emailAddress ?? null;

  const dbUser = await prisma.user.upsert({
    where: { clerkId: user.id },
    update: {
      email,
    },
    create: {
      clerkId: user.id,
      email,
    },
  });

  return NextResponse.json(dbUser);
}
