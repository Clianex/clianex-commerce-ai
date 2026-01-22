import ModuleGrid from "@/components/marketplace/ModuleGrid";

export default function MarketplacePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Marketplace
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Activa módulos de inteligencia artificial según las necesidades
          reales de tu negocio.
        </p>
      </div>

      <ModuleGrid />
    </div>
  );
}
