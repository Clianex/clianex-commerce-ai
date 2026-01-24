export default function ModuleCard({ module, onToggle }) {
  return (
    <div
      className={`relative rounded-2xl border bg-white p-6 shadow-sm transition
        ${module.active ? "border-green-500" : "border-slate-200"}
      `}
    >
      {/* Badge */}
      <span
        className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold
          ${
            module.active
              ? "bg-green-100 text-green-700"
              : "bg-slate-100 text-slate-600"
          }
        `}
      >
        {module.active ? "Activo" : "Inactivo"}
      </span>

      {module.featured && (
        <span className="absolute -top-3 left-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
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

        <button
          onClick={onToggle}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition
            ${
              module.active
                ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }
          `}
        >
          {module.active ? "Desactivar" : "Activar"}
        </button>
      </div>
    </div>
  );
}
