import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { canAccessModule } from "@/lib/permissions";

export const dynamic = "force-dynamic";

export default async function AutobloggingPage() {
  const { userId } = await auth();

  // Seguridad base
  if (!userId) {
    redirect("/sign-in");
  }

  // Verificación REAL (roles + módulos)
  const allowed = await canAccessModule(userId, "autoblogging");

  if (!allowed) {
    redirect("/marketplace");
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-5xl font-semibold tracking-tight text-white">
        Autoblogging
      </h1>

      <p className="mt-2 text-zinc-400">
        Gestión automática de contenidos con IA.
      </p>

      {/* CONTENIDO DEL MÓDULO */}
      <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <p className="text-zinc-300">
          Aquí irá el panel de autoblogging.
        </p>
      </div>
    </section>
  );
}
