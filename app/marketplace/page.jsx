export default function MarketplacePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Marketplace</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Producto #{item}</h3>
            <p className="text-gray-600">
              Solución impulsada por IA para comercio.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              Ver más
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
