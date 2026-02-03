"use client";
import { useState } from "react";

export const dynamic = "force-dynamic";

type TabKey = "descripcion" | "detalles" | "opiniones";

const tabs: Record<TabKey, string> = {
  descripcion: "Producto optimizado por IA con recomendaciones inteligentes.",
  detalles: "Material premium, envío rápido y garantía de satisfacción.",
  opiniones: "⭐⭐⭐⭐⭐ 4.8/5 basado en 2,431 reseñas.",
};

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("descripcion");

  return (
    <div className="clianex-container py-16">
      <h1 className="text-3xl font-bold">Producto Destacado</h1>

      {/* Tabs */}
      <div className="mt-6 flex gap-4 border-b" role="tablist">
        {Object.keys(tabs).map((tab) => {
          const key = tab as TabKey;
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`pb-2 capitalize transition-colors ${
                isActive ? "border-b-2 border-black font-semibold" : "text-gray-500"
              }`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tab-panel-${key}`}
            >
              {key}
            </button>
          );
        })}
      </div>

      {/* Panel de contenido */}
      <div
        className="mt-6 bg-white p-6 rounded-xl shadow max-w-3xl"
        role="tabpanel"
        id={`tab-panel-${activeTab}`}
      >
        {tabs[activeTab]}
      </div>

      {/* Botón de acción */}
      <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
        Añadir al carrito
      </button>
    </div>
  );
}
