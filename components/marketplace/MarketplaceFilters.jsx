"use client";

const filters = [
  { id: "all", label: "Todos" },
  { id: "active", label: "Activos" },
  { id: "free", label: "Gratis" },
  { id: "pro", label: "Pro" },
];

export default function MarketplaceFilters({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = value === filter.id;

        return (
          <button
            key={filter.id}
            onClick={() => onChange(filter.id)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition
              ${
                isActive
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white"
              }
            `}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
