import Link from "next/link";

const modules = [
  {
    slug: "trending-products",
    name: "Tendencias IA",
    description: "Detecta productos virales automáticamente.",
  },
  {
    slug: "supplier-ai",
    name: "Proveedor AI",
    description: "Busca y gestiona proveedores con IA.",
  },
  {
    slug: "predictive-search",
    name: "Búsqueda Predictiva",
    description: "Mejora conversiones con predicción inteligente.",
  },
];

export default function Marketplace() {
  return (
    <div className="clianex-container py-16">
      <h1 className="text-3xl font-bold">Marketplace de Módulos</h1>
      <p className="mt-4 text-gray-600">
        Añade capacidades avanzadas a tu tienda con IA.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {modules.map((m) => (
          <Link
            key={m.slug}
            href={`/marketplace/${m.slug}`}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-xl">{m.name}</h3>
            <p className="mt-2 text-gray-600">{m.description}</p>
            <span className="text-blue-600 text-sm mt-3 inline-block">
              Ver detalles →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
