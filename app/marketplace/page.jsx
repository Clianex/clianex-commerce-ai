"use client";

import { useState } from "react";
import Link from "next/link";

const INITIAL_ITEMS = Array.from({ length: 6 }, (_, i) => ({
  id: `module-${i + 1}`,
  name: `Módulo #${i + 1}`,
}));

export default function MarketplacePage() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const loadMore = () => {
    const more = Array.from({ length: 3 }, (_, i) => ({
      id: `module-${items.length + i + 1}`,
      name: `Módulo #${items.length + i + 1}`,
    }));

    setItems((prev) => [...prev, ...more]);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Marketplace</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-gray-600 text-sm mt-2">
              Solución impulsada por IA para comercio.
            </p>
            <Link
              href={`/marketplace/${item.id}`}
              className="inline-block mt-4 text-blue-600 text-sm"
            >
              Ver más →
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={loadMore}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Cargar más
        </button>
      </div>
    </div>
  );
}
