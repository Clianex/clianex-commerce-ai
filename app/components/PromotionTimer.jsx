"use client";
import { useEffect, useState } from "react";

export default function PromotionTimer() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <div className="bg-yellow-100 text-black text-center p-2 text-sm">
      ⚡ Oferta flash termina en: {formatTime(timeLeft)}
    </div>
  );
}
