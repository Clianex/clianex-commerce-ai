export default function MarketplaceItem({ params }) {
  const { slug } = params;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">
        Módulo: {slug.replace("-", " ")}
      </h1>
      <p className="text-gray-700 mb-6">
        Detalles del módulo, beneficios y cómo integrarlo con tu tienda.
      </p>

      <button className="bg-black text-white px-6 py-3 rounded-lg">
        Activar módulo
      </button>
    </div>
  );
}
