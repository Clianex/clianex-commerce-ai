import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AppHomePage() {
  const { userId } = await auth();

  // Doble seguridad (aunque el layout ya protege)
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">
          Bienvenido a Clianex Commerce AI
        </h1>
        <p className="text-muted-foreground mt-2">
          Gestiona tus módulos, facturación y automatizaciones desde aquí.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dashboard */}
        <Link
          href="/dashboard"
          className="rounded-xl border p-6 hover:bg-muted transition"
        >
          <h2 className="text-xl font-semibold">📊 Dashboard</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Vista general de tu cuenta y actividad.
          </p>
        </Link>

        {/* Marketplace */}
        <Link
          href="/dashboard/marketplace"
          className="rounded-xl border p-6 hover:bg-muted transition"
        >
          <h2 className="text-xl font-semibold">🛒 Marketplace</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Compra y activa módulos.
          </p>
        </Link>

        {/* Billing */}
        <Link
          href="/dashboard/billing"
          className="rounded-xl border p-6 hover:bg-muted transition"
        >
          <h2 className="text-xl font-semibold">💳 Facturación</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Gestiona tus pagos y suscripciones.
          </p>
        </Link>
      </section>
    </div>
  );
}
