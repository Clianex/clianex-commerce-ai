"use client";

import { useEffect, useState } from "react";

export default function PromotionTimer({ minutes = 15 }) {
  const [time, setTime] = useState(minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="bg-red-600 text-white text-center py-2 text-sm">
      ⚡ Oferta termina en: {format(time)}
    </div>
  );
}
