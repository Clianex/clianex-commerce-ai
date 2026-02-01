"use client";
import { useState } from "react";
export const dynamic = "force-dynamic";
const tabs = {
  descripcion: "Producto optimizado por IA con recomendaciones inteligentes.",
  detalles: "Material premium, envío rápido y garantía de satisfacción.",
  opiniones: "⭐⭐⭐⭐⭐ 4.8/5 basado en 2,431 reseñas.",
};

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("descripcion");

  return (
    <div className="clianex-container py-16">
      <h1 className="text-3xl font-bold">Producto Destacado</h1>

      <div className="mt-6 flex gap-4 border-b">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 capitalize ${
              activeTab === tab ? "border-b-2 border-black" : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 bg-white p-6 rounded-xl shadow max-w-3xl">
        {tabs[activeTab]}
      </div>

      <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg">
        Añadir al carrito
      </button>
    </div>
  );
}
