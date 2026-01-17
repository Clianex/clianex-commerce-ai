"use client";
import { useEffect, useState } from "react";

export default function FreeShippingBar() {
  const [progress, setProgress] = useState(40); // simulación %

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p < 90 ? p + 5 : p));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-black text-white p-3 text-center text-sm">
      {progress < 100
        ? `Te falta un ${100 - progress}% para envío gratis`
        : "🎉 ¡Tienes envío gratis!"}
      <div className="w-full bg-gray-700 h-1 mt-2">
        <div
          className="bg-white h-1 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
