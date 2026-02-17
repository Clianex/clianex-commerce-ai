// /app/dashboard/settings/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { requireRole } from "@/lib/roles";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const isAllowed = await requireRole(userId, ["OWNER", "ADMIN"]);

  if (!isAllowed) {
    redirect("/dashboard");
  }

  return (
    <section className="max-w-5xl px-6 py-10">
      <h1 className="text-4xl font-semibold">
        System Settings
      </h1>
      <p className="mt-2 text-muted-foreground">
        Configuración avanzada del sistema
      </p>
    </section>
  );
}
