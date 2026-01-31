import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { hasModuleAccess } from "@/lib/permissions";
export const dynamic = "force-dynamic";
export default async function AutobloggingPage() {
  const { userId } = auth();

  // Si no está logueado (doble seguridad)
  if (!userId) {
    redirect("/sign-in");
  }

  // Verificación REAL de permiso
  const hasAccess = await hasModuleAccess({
    clerkId: userId,
    moduleKey: "autoblogging",
  });

  // Si no tiene el módulo → fuera
  if (!hasAccess) {
    redirect("/marketplace");
  }

  // --- Página normal ---
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold">Autoblogging</h1>
      <p className="mt-2 text-muted-foreground">
        Gestión automática de contenidos con IA.
      </p>

      {/* CONTENIDO DEL MÓDULO */}
    </section>
  );
}
