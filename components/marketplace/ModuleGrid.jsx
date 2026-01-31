"use client";

import { useEffect, useState } from "react";

export default function ModuleGrid() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/modules")
      .then((res) => res.json())
      .then((data) => {
        setModules(data);
        setLoading(false);
      });
  }, []);

  const toggleModule = async (moduleId) => {
    await fetch("/api/modules/toggle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduleId }),
    });

    setModules((prev) =>
      prev.map((m) =>
        m.id === moduleId ? { ...m, active: !m.active } : m
      )
    );
  };

  if (loading) {
    return <p className="text-muted-foreground">Cargando módulos…</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {modules.map((mod) => (
        <div
          key={mod.id}
          className="rounded-xl border bg-card p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold">{mod.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {mod.description}
          </p>

          <button
            onClick={() => toggleModule(mod.id)}
            className={`mt-4 w-full rounded-md px-4 py-2 text-sm font-medium transition
              ${
                mod.active
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-muted text-foreground hover:bg-muted/70"
              }`}
          >
            {mod.active ? "Activo" : "Activar"}
          </button>
        </div>
      ))}
    </div>
  );
}
