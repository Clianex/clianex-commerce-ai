export default function ModuleCard({ module }) {
  return (
    <div
      className={`relative rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md
        ${module.featured ? "border-indigo-500" : "border-slate-200"}
      `}
    >
      {module.featured && (
        <span className="absolute -top-3 right-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
          Recomendado
        </span>
      )}

      <h3 className="text-xl font-semibold text-slate-900">
        {module.name}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {module.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-semibold text-indigo-600">
          {module.price}
        </span>

        <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
          Activar
        </button>
      </div>
    </div>
  );
}
