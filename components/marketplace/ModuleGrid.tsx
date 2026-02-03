"use client";

import { useEffect, useState } from "react";

type Module = {
  id: string;
  key: string;
  name: string;
  description?: string;
  price: number;
  enabled: boolean;
};

export default function ModuleGrid() {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/modules")
      .then((r) => r.json())
      .then(setModules)
      .finally(() => setLoading(false));
  }, []);

  async function toggleModule(moduleId: string, enabled: boolean) {
    await fetch("/api/modules/toggle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduleId, enabled }),
    });

    setModules((prev) =>
      prev.map((m) =>
        m.id === moduleId ? { ...m, enabled } : m
      )
    );
  }

  if (loading) {
    return <p className="text-zinc-400">Cargando módulos…</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((m) => (
        <div
          key={m.id}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
        >
          <h3 className="text-xl font-medium text-white">
            {m.name}
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            {m.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-zinc-300">
              {m.price === 0 ? "Gratis" : `${m.price}€ / mes`}
            </span>

            <button
              onClick={() => toggleModule(m.id, !m.enabled)}
              className={`rounded-md px-4 py-2 text-sm font-medium ${
                m.enabled
                  ? "bg-zinc-700 text-white"
                  : "bg-indigo-600 text-white hover:bg-indigo-500"
              }`}
            >
              {m.enabled ? "Desactivar" : "Activar"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
