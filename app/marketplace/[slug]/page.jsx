const PRODUCTS = {
  "ai-viral-trends": {
    name: "AI Viral Trends",
    description:
      "Sistema de IA que detecta tendencias virales antes de que exploten.",
    price: "29€/mes",
  },
  "auto-blogging-ai": {
    name: "Auto Blogging AI",
    description:
      "Publica artículos SEO automáticamente sin intervención humana.",
    price: "39€/mes",
  },
  "smart-providers": {
    name: "Smart Providers",
    description:
      "IA que encuentra proveedores óptimos para tu negocio.",
    price: "19€/mes",
  },
};

export default function ProductPage({ params }) {
  const product = PRODUCTS[params.slug];

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-2xl">Producto no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="text-white/70 mt-4 max-w-xl">
        {product.description}
      </p>

      <p className="mt-6 text-2xl font-bold">{product.price}</p>

      <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
        Activar módulo
      </button>
    </div>
  );
}
