"use client";

import { useState } from "react";
import { isModuleActive, toggleModule } from "../../../lib/modulesStore";

export default function ModulePage({ params }) {
  const slug = params.slug;
  const [active, setActive] = useState(isModuleActive(slug));

  const handleToggle = () => {
    toggleModule(slug);
    setActive(isModuleActive(slug));
  };

  return (
    <div className="clianex-container py-16">
      <h1 className="text-3xl font-bold capitalize">
        {slug.replace("-", " ")}
      </h1>

      <p className="mt-4 text-gray-600 max-w-2xl">
        Este módulo añade capacidades avanzadas de IA a tu tienda, optimizando
        conversiones, recomendaciones y automatizaciones en tiempo real.
      </p>

      <button
        onClick={handleToggle}
        className={`mt-6 px-6 py-3 rounded-lg text-white ${
          active ? "bg-red-600" : "bg-black"
        }`}
      >
        {active ? "Desactivar módulo" : "Activar módulo"}
      </button>

      <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-3xl">
        <h2 className="font-bold text-xl">Qué hace este módulo</h2>
        <ul className="mt-4 list-disc ml-6 text-gray-700">
          <li>Optimiza listados de productos con IA.</li>
          <li>Detecta tendencias automáticamente.</li>
          <li>Genera descripciones persuasivas.</li>
          <li>Aprende de datos de conversión.</li>
        </ul>
      </div>
    </div>
  );
}
