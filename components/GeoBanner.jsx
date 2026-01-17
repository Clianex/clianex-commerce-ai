"use client";

import { useEffect, useState } from "react";

export default function GeoBanner() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => setCountry(data.country_name))
      .catch(() => setCountry(null));
  }, []);

  if (!country) return null;

  return (
    <div className="bg-gray-900 text-white text-center text-sm py-2">
      🇪🇺 Oferta especial disponible en: {country}
    </div>
  );
}
