"use client";

import { useEffect, useState } from "react";

export function useDashboard() {
  const [activeModules, setActiveModules] = useState([]);

  useEffect(() => {
    fetch("/api/modules")
      .then((res) => res.json())
      .then((modules) =>
        setActiveModules(modules.filter((m) => m.active))
      );
  }, []);

  const kpis = [
    {
      label: "Módulos activos",
      value: activeModules.length,
      trend: "+ real",
    },
    {
      label: "Automatizaciones",
      value: activeModules.length * 4,
      trend: "+ dinámico",
    },
    {
      label: "Impacto estimado",
      value: `${activeModules.length * 15}%`,
      trend: "+ IA",
    },
    {
      label: "Coste mensual",
      value: `${activeModules.length * 19}€`,
      trend: "optimizado",
    },
  ];

  return { kpis, activeModules };
}
