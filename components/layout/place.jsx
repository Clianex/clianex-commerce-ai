import ModuleGrid from "@/components/marketplace/ModuleGrid";

export default function MarketplacePage() {
  return (
    <section className="space-y-12">
      
      {/* Hero */}
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Marketplace
        </h1>
        <p className="text-neutral-400">
          Discover modular AI components you can activate instantly
          inside your Clianex workspace.
        </p>
      </div>

      {/* Modules */}
      <ModuleGrid />
    </section>
  );
}
