export default function ModulePage({ params }) {
  return (
    <div className="clianex-container py-16">
      <h1 className="text-3xl font-bold capitalize">
        {params.slug.replace("-", " ")}
      </h1>

      <p className="mt-4 text-gray-600">
        Este módulo potencia tu tienda con IA avanzada y automatización total.
      </p>

      <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg">
        Activar módulo
      </button>
    </div>
  );
}
