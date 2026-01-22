import ModuleCard from "./ModuleCard";

const MODULES = [
  {
    id: "autoblogging",
    name: "Auto Blogging AI",
    description: "Genera artículos optimizados y publícalos automáticamente.",
    price: "Gratis",
    featured: false,
  },
  {
    id: "shop-ai",
    name: "Shop AI",
    description: "Optimiza productos, precios y conversiones con IA.",
    price: "19€/mes",
    featured: true,
  },
  {
    id: "analytics",
    name: "Analytics Pro",
    description: "Dashboards inteligentes para decisiones avanzadas.",
    price: "29€/mes",
    featured: false,
  },
  {
    id: "providers",
    name: "Gestión de Proveedores",
    description: "Automatiza sourcing, pedidos y comunicación.",
    price: "Premium",
    featured: false,
  },
];

export default function ModuleGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {MODULES.map((module) => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </div>
  );
}
