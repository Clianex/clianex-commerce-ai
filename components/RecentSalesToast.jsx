"use client";

import { useEffect, useState } from "react";

const SAMPLE_EVENTS = [
  "Alguien instaló Optimizador IA",
  "Nueva tienda activó Productos en tendencia",
  "Un usuario conectó su proveedor",
];

export default function RecentSalesToast() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        SAMPLE_EVENTS[Math.floor(Math.random() * SAMPLE_EVENTS.length)];
      setMessage(random);

      setTimeout(() => setMessage(null), 4000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-6 bg-white border shadow-lg px-4 py-3 rounded-lg text-sm z-50">
      🔔 {message}
    </div>
  );
}
