import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ModuleGrid from "@/components/marketplace/ModuleGrid";

export const dynamic = "force-dynamic";

export default async function MarketplacePage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-5xl font-semibold tracking-tight text-white">
        Marketplace
      </h1>

      <p className="mt-2 text-zinc-400">
        Activa módulos según tus necesidades.
      </p>

      <div className="mt-10">
        <ModuleGrid />
      </div>
    </section>
  );
}
