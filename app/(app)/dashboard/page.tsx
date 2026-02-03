import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-4xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Panel principal de tu cuenta
      </p>
    </section>
  );
}
