"use client";

import { useState } from "react";
import Link from "next/link";

const SAMPLE_RESULTS = [
  { id: "trend-products", label: "Productos en tendencia" },
  { id: "supplier-connect", label: "Conectar proveedor" },
  { id: "ai-optimizer", label: "Optimizador IA" },
];

export default function PredictiveSearch() {
  const [query, setQuery] = useState("");
  const results = query
    ? SAMPLE_RESULTS.filter((r) =>
        r.label.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="relative w-64">
      <input
        type="text"
        placeholder="Buscar módulos..."
        className="w-full border rounded-lg px-3 py-2 text-sm"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && results.length > 0 && (
        <div className="absolute left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-50">
          {results.map((r) => (
            <Link
              key={r.id}
              href={`/marketplace/${r.id}`}
              className="block px-4 py-2 hover:bg-gray-100 text-sm"
            >
              {r.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
