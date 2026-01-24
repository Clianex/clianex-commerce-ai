"use client";

import ModuleCard from "./ModuleCard";
import { useModules } from "./useModules";

const INITIAL_MODULES = [
  {
    id: "autoblogging",
    name: "Auto Blogging AI",
    description: "Genera artículos optimizados y publícalos automáticamente.",
    price: "Gratis",
    featured: false,
    active: false,
  },
  {
    id: "shop-ai",
    name: "Shop AI",
    description: "Optimiza productos, precios y conversiones con IA.",
    price: "19€/mes",
    featured: true,
    active: false,
  },
  {
    id: "analytics",
    name: "Analytics Pro",
    description: "Dashboards inteligentesentes para decisiones avanzadas.",
    price: "29€/mes",
    featured: false,
    active: false,
  },
  {
    id: "providers",
    name: "Gestión de Proveedores",
    description: "Automatiza sourcing, pedidos y comunicación.",
    price: "Premium",
    featured: false,
    active: false,
  },
];

export default function ModuleGrid() {
  const { modules, toggleModule } = useModules(INITIAL_MODULES);

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {modules.map((module) => (
        <ModuleCard
          key={module.id}
          module={module}
          onToggle={() => toggleModule(module.id)}
        />
      ))}
    </div>
  );
}
