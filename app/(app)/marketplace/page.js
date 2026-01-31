import ModuleGrid from "@/components/marketplace/ModuleGrid";

export default function MarketplacePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-5xl font-semibold tracking-tight text neutral">Marketplace de Módulos</h1>
      <p className="mt-2 text-muted-foreground">
        Activa o desactiva funcionalidades según tus necesidades.
      </p>

      <div className="mt-8">
        <ModuleGrid />
      </div>
    </section>
  );
}
