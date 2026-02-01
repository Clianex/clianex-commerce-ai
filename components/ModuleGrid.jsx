"use client";

import { useEffect, useState } from "react";

export default function ModuleGrid() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/modules")
      .then((res) => res.json())
      .then(setModules)
      .finally(() => setLoading(false));
  }, []);

  async function toggleModule(moduleId, enabled) {
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
    return <p className="text-zinc-400">Cargando módulos...</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {modules.map((mod) => (
        <div
          key={mod.id}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {mod.name}
              </h3>
              <p className="text-sm text-zinc-400">
                {mod.description}
              </p>
            </div>

            <input
              type="checkbox"
              checked={mod.enabled}
              onChange={(e) =>
                toggleModule(mod.id, e.target.checked)
              }
              className="h-5 w-5 accent-violet-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
