"use client";
import { useState } from "react";

export default function CookieBar() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed bottom-0 w-full bg-black text-white p-4 flex justify-between items-center">
      <span>
        Usamos cookies para mejorar tu experiencia.
      </span>
      <button
        onClick={() => setOpen(false)}
        className="bg-white text-black px-4 py-1 rounded"
      >
        Aceptar
      </button>
    </div>
  );
}
