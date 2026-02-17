"use client";

import { useState } from "react";

export type ModuleItem = {
  id: string;
  key: string;
  name: string;
  description: string | null;
  price: number;
  icon: string | null;
};

type ModuleGridProps = {
  modules: ModuleItem[];
};

export default function ModuleGrid({ modules }: ModuleGridProps) {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleBuy(moduleId: string) {
    setLoadingId(moduleId);

    const res = await fetch("/api/billing", {
      method: "POST",
      body: JSON.stringify({ moduleId }),
    });

    const data = await res.json();
    window.location.href = data.url;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {modules.map((module) => (
        <div key={module.id} className="rounded-xl border p-6 space-y-4">
          <h3 className="text-lg font-semibold">{module.name}</h3>

          <p className="text-sm text-muted-foreground">
            {module.description}
          </p>

          <p className="text-xl font-medium">
            {(module.price / 100).toFixed(2)} €
          </p>

          <button
            onClick={() => handleBuy(module.id)}
            disabled={loadingId === module.id}
            className="w-full rounded-lg bg-primary px-4 py-2 text-primary-foreground"
          >
            {loadingId === module.id ? "Redirigiendo…" : "Comprar"}
          </button>
        </div>
      ))}
    </div>
  );
}
