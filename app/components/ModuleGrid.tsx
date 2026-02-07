"use client";

import { useState } from "react";

export type ModuleItem = {
  id: string;
  key: string;
  name: string;
  description?: string | null;
  price: number;
  active: boolean;
  enabled?: boolean;
};

type ModuleGridProps = {
  modules: ModuleItem[];
  onToggle?: (moduleKey: string, enabled: boolean) => Promise<void>;
};

export default function ModuleGrid({
  modules,
  onToggle,
}: ModuleGridProps) {
  const [loadingKey, setLoadingKey] = useState<string | null>(null);

  async function handleToggle(module: ModuleItem) {
    if (!onToggle) return;

    setLoadingKey(module.key);
    try {
      await onToggle(module.key, !module.enabled);
    } finally {
      setLoadingKey(null);
    }
  }

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((module) => (
        <div
          key={module.id}
          className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold">{module.name}</h3>
            {module.description && (
              <p className="mt-2 text-sm text-muted-foreground">
                {module.description}
              </p>
            )}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm font-medium">
              {module.price === 0
                ? "Gratis"
                : `${(module.price / 100).toFixed(2)} €`}
            </span>

            {onToggle && (
              <button
                onClick={() => handleToggle(module)}
                disabled={loadingKey === module.key}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  module.enabled
                    ? "bg-destructive text-destructive-foreground hover:opacity-90"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {loadingKey === module.key
                  ? "..."
                  : module.enabled
                  ? "Desactivar"
                  : "Activar"}
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
