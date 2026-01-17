import StickyAddToCart from "@/components/StickyAddToCart";

export default function ProductPage({ params }) {
  const { slug } = params;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">
        Módulo: {slug.replace("-", " ")}
      </h1>

      <div className="bg-white p-6 rounded-xl shadow mb-24">
        <p className="text-gray-700 mb-4">
          Este módulo se integra automáticamente con tu tienda y optimiza ventas con IA.
        </p>

        <ul className="list-disc ml-5 text-gray-600 space-y-2">
          <li>Integración automática</li>
          <li>Configuración sin código</li>
          <li>Escalable y serverless</li>
        </ul>
      </div>

      <StickyAddToCart />
    </div>
  );
}
