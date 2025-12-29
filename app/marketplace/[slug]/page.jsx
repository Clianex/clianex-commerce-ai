import { marketplaceItems } from "@/lib/data/marketplace";
import Link from "next/link";

export default function MarketplaceItemPage({ params }) {
  const item = marketplaceItems.find(
    (i) => i.slug === params.slug
  );

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Módulo no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-8 py-16 max-w-3xl mx-auto">
      <span className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/60">
        {item.tag}
      </span>

      <h1 className="text-4xl font-bold mt-4 mb-4">
        {item.name}
      </h1>

      <p className="text-white/70 mb-8">
        {item.description}
      </p>

      <div className="flex items-center gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
          Activar módulo
        </button>

        <Link
          href="/marketplace"
          className="text-white/60 hover:text-white"
        >
          ← Volver
        </Link>
      </div>
    </div>
  );
}
