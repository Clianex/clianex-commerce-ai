import Link from "next/link";

export default function Marketplace() {
  const items = [
    { slug: "ai-cart", name: "AI Cart Booster" },
    { slug: "trend-finder", name: "Trend Finder AI" },
    { slug: "copycat-protector", name: "Copycat Stopper" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
      <p className="mb-6 text-gray-700">
        Explora módulos y apps para potenciar tu tienda.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/marketplace/${item.slug}`}
            className="border p-4 rounded-lg hover:shadow"
          >
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600">
              Haz clic para ver detalles.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
