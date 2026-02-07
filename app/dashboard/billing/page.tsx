import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { requireRole } from "@/lib/roles";

export const dynamic = "force-dynamic";

export default async function BillingPage() {
  // 1️⃣ Auth Clerk (SERVER)
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // 2️⃣ Protección por ROL (OWNER / ADMIN)
  const allowed = await requireRole(userId, ["OWNER", "ADMIN"]);

  if (!allowed) {
    redirect("/dashboard");
  }

  // 3️⃣ UI
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 space-y-6">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">
          Billing
        </h1>
        <p className="mt-2 text-muted-foreground">
          Gestión de suscripciones, módulos y facturación.
        </p>
      </header>

      <div className="rounded-xl border p-6">
        <p className="text-sm text-muted-foreground">
          Aquí irá la integración con Stripe (planes, invoices, upgrades).
        </p>
      </div>
    </section>
  );
}
