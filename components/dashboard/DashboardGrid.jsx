"use client";

import KPICard from "./KPICard";
import { useDashboard } from "./useDashboard";

export default function DashboardGrid() {
  const { kpis, activeModules } = useDashboard();

  return (
    <div className="space-y-10">
      {/* KPI Grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.label} {...kpi} />
        ))}
      </div>

      {/* Active Modules */}
      <div>
        <h2 className="text-x1 font-semibold text-slate-900">
          Módulos activos
        </h2>

        {activeModules.length === 0 ? (
          <p className="mt-2 text-sm text-slate-500">
            No hay módulos activos. Activa módulos desde el Marketplace.
          </p>
        ) : (
          <ul className="mt-4 space-y-2">
            {activeModules.map((m) => (
              <li
                key={m.id}
                className="rounded-lg border bg-white px-4 py-2 text-sm"
              >
                {m.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
