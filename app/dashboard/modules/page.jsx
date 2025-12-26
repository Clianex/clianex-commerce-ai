const modules = [
  {
    name: "AI Viral Trends",
    status: "Activo",
  },
  {
    name: "Auto Blogging AI",
    status: "Inactivo",
  },
  {
    name: "Smart Providers",
    status: "Activo",
  },
];

export default function ModulesPage() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Mis Módulos</h1>

      <div className="space-y-4 max-w-xl">
        {modules.map((mod) => (
          <div
            key={mod.name}
            className="flex justify-between items-center border border-white/10 rounded-lg p-4"
          >
            <span>{mod.name}</span>
            <span
              className={`text-sm ${
                mod.status === "Activo"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {mod.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
