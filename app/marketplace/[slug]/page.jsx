export default function ProductPage({ params }) {
  const { slug } = params;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">
        Módulo: {slug.replace("-", " ")}
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-700 mb-4">
          Este es un módulo del Marketplace de Clianex impulsado por IA.
        </p>

        <ul className="list-disc ml-5 text-gray-600">
          <li>Integración automática</li>
          <li>Configuración sin código</li>
          <li>Escalable y serverless</li>
        </ul>

        <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg">
          Instalar módulo
        </button>
      </div>
    </div>
  );
}
