import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function BillingPage() {
  const { userId } = await auth();

  // Seguridad básica: no logueado → sign-in
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-5xl font-semibold tracking-tight text-neutral">Billing</h1>
        <p className="text-sm text-muted-foreground">
          Gestiona tu suscripción y módulos activos
        </p>
      </div>

      <div className="rounded-lg border p-6 space-y-4">
        <h2 className="text-lg font-medium">Suscripción</h2>

        <p className="text-sm text-muted-foreground">
          Aquí podrás gestionar tus pagos, facturas y módulos adquiridos.
        </p>

        {/* 
          Este botón luego llamará a:
          /api/stripe/create-billing-portal
        */}
        <form action="/api/stripe/portal" method="POST">
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
          >
            Abrir portal de facturación
          </button>
        </form>
      </div>

      <div className="rounded-lg border p-6 space-y-4">
        <h2 className="text-lg font-medium">Módulos</h2>

        <p className="text-sm text-muted-foreground">
          Los módulos se activan y facturan de forma individual.
        </p>

        <a
          href="/marketplace"
          className="text-sm font-medium underline underline-offset-4"
        >
          Ir al marketplace de módulos
        </a>
      </div>
    </div>
  );
}
