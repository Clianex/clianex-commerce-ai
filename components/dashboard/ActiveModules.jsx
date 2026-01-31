"use client";

import { useEffect, useState } from "react";

export default function ActiveModules() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard/modules")
      .then((res) => res.json())
      .then((data) => {
        setModules(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-muted-foreground">Cargando módulos…</p>;
  }

  if (modules.length === 0) {
    return (
      <div className="rounded-lg border bg-muted/30 p-6 text-center">
        <p className="text-muted-foreground">
          No tienes módulos activos todavía.
        </p>
        <p className="mt-2 text-sm">
          Activa módulos desde el Marketplace.
        </p>
      </div>
    );
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

          <div className="mt-4 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Activo
          </div>
        </div>
      ))}
    </div>
  );
}
