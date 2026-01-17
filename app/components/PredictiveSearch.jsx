"use client";
import { useState } from "react";

const sampleResults = [
  "Tendencias IA",
  "Proveedor AI",
  "Búsqueda Predictiva",
];

export default function PredictiveSearch() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-64">
      <input
        type="text"
        placeholder="Buscar módulos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-full rounded"
      />

      {query && (
        <div className="absolute bg-white border w-full mt-1 rounded shadow">
          {sampleResults
            .filter((r) =>
              r.toLowerCase().includes(query.toLowerCase())
            )
            .map((r) => (
              <div key={r} className="p-2 hover:bg-gray-100 cursor-pointer">
                {r}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
