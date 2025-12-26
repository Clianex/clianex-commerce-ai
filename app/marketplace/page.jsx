import Link from "next/link";

const products = [
  {
    name: "AI Viral Trends",
    slug: "ai-viral-trends",
    price: "29€/mes",
    description: "Detecta tendencias virales en tiempo real usando IA.",
  },
  {
    name: "Auto Blogging AI",
    slug: "auto-blogging-ai",
    price: "39€/mes",
    description: "Genera y publica artículos automáticamente.",
  },
  {
    name: "Smart Providers",
    slug: "smart-providers",
    price: "19€/mes",
    description: "Encuentra proveedores ideales con IA.",
  },
];

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <h1 className="text-4xl font-bold mb-10">Marketplace</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.slug}
            className="border border-white/10 rounded-xl p-6 hover:border-white/30 transition"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-white/60 mt-2">{product.description}</p>
            <p className="mt-4 font-bold">{product.price}</p>

            <Link
              href={`/marketplace/${product.slug}`}
              className="inline-block mt-6 text-sm text-blue-400 hover:underline"
            >
              Ver módulo →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
