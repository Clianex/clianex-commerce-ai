import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function ModulesPage() {
  const { userId } = await auth();

  if (!userId) {
    return <p className="p-10">No autorizado.</p>;
  }

  const modules = [
    { id: "trend-products", name: "Productos en tendencia" },
    { id: "supplier-connect", name: "Conectar proveedor" },
    { id: "ai-optimizer", name: "Optimizador IA" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Módulos</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modules.map((m) => (
          <div key={m.id} className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-2">{m.name}</h3>
            <Link
              href={`/marketplace/${m.id}`}
              className="text-blue-600 hover:underline"
            >
              Ver en Marketplace →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
