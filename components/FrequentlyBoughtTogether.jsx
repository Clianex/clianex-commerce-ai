"use client";

import { useState } from "react";

const DEFAULT_ITEMS = [
  { id: "a", name: "AI Optimizer", price: 29 },
  { id: "b", name: "Auto Blogging", price: 19 },
  { id: "c", name: "Trend Scanner", price: 24 },
];

export default function FrequentlyBoughtTogether() {
  const [selected, setSelected] = useState(
    DEFAULT_ITEMS.map((i) => i.id)
  );

  const toggle = (id) =>
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );

  const total = DEFAULT_ITEMS.filter((i) =>
    selected.includes(i.id)
  ).reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-10">
      <h2 className="text-xl font-bold mb-4">
        Comprados juntos con frecuencia
      </h2>

      <div className="space-y-3">
        {DEFAULT_ITEMS.map((item) => (
          <label key={item.id} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selected.includes(item.id)}
              onChange={() => toggle(item.id)}
            />
            <span>
              {item.name} — {item.price}€
            </span>
          </label>
        ))}
      </div>

      <div className="mt-4 font-semibold">
        Total: {total}€
      </div>

      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">
        Añadir todo al carrito
      </button>
    </div>
  );
}
