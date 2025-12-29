import { marketplaceItems } from "@/lib/data/marketplace";
import MarketplaceCard from "../components/MarketplaceCard";

export default function MarketplacePage() {
  return (
    <div className="min-h-screen px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">
        Marketplace
      </h1>

      <p className="text-white/60 mb-12 max-w-2xl">
        Activa módulos de IA, automatización y crecimiento.
        Empieza gratis. Escala cuando quieras.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {marketplaceItems.map((item) => (
          <MarketplaceCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
