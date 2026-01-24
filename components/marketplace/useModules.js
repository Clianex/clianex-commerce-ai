"use client";

import { useEffect, useState } from "react";

export function useModules(initialModules) {
  const [modules, setModules] = useState(initialModules);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/modules")
      .then((res) => res.json())
      .then((userModules) => {
        setModules((prev) =>
          prev.map((m) => {
            const found = userModules.find(
              (u) => u.moduleId === m.id
            );
            return found ? { ...m, active: found.active } : m;
          })
        );
        setLoading(false);
      });
  }, []);

  async function toggleModule(id) {
    await fetch("/api/modules/toggle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduleId: id }),
    });

    setModules((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, active: !m.active } : m
      )
    );
  }

  return { modules, toggleModule, loading };
}
