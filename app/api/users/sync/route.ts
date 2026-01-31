import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  const { userId } = await auth(); // ✅ await

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = await currentUser();
  if (!user) {
    return new NextResponse("User not found", { status: 404 });
  }

  const email = user.emailAddresses[0]?.emailAddress;

  const dbUser = await prisma.user.upsert({
    where: { clerkId: user.id },
    update: {
      email,
      name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
      image: user.imageUrl,
    },
    create: {
      clerkId: user.id,
      email,
      name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
      image: user.imageUrl,
    },
  });

  return NextResponse.json(dbUser);
}
