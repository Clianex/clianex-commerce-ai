"use client";

import { useEffect, useState } from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

type Module = {
  id: string;
  key: string;
  name: string;
  description: string | null;
  price: number;
  stripePriceId: string;
  active: boolean;
  enabled: boolean;
};

function MarketplaceContent() {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Cargar módulos
  useEffect(() => {
    const loadModules = async () => {
      try {
        const res = await fetch("/api/modules", { credentials: "include" });
        if (!res.ok) throw new Error("Failed to load modules");
        const data = await res.json();
        setModules(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los módulos");
      }
    };
    loadModules();
  }, []);

  // Comprar módulo
  const buy = async (moduleId: string) => {
    try {
      setLoading(moduleId);
      setError(null);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ moduleId }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || data.message || "Checkout failed");

      if (data.url) {
        // Módulo de pago → Stripe Checkout
        window.location.href = data.url;
      } else {
        // Módulo gratis → feedback
        setModules((prev) =>
          prev.map((m) => (m.id === moduleId ? { ...m, enabled: true } : m))
        );
        setLoading(null);
      }
    } catch (err) {
      console.error(err);
      setError("No se pudo iniciar el pago");
      setLoading(null);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold mb-10">Marketplace</h1>

      {error && (
        <div className="mb-6 rounded-lg bg-red-500/10 border border-red-500 p-4 text-sm">
          {error}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        {modules.map((module) => (
          <div
            key={module.id}
            className="rounded-2xl border border-border bg-card p-6 flex flex-col"
          >
            <h2 className="text-lg font-semibold">{module.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground flex-1">
              {module.description || "Sin descripción"}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-xl font-medium">
                {module.price === 0
                  ? "Gratis"
                  : `${(module.price / 100).toFixed(2)} €`}
              </span>

              <button
                onClick={() => buy(module.id)}
                disabled={loading === module.id || module.enabled}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
              >
                {module.enabled
                  ? "Comprado"
                  : module.price === 0
                  ? "Activar Gratis"
                  : loading === module.id
                  ? "Procesando..."
                  : "Comprar"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {modules.length === 0 && !error && (
        <p className="text-muted-foreground text-sm mt-6">No hay módulos disponibles.</p>
      )}
    </section>
  );
}

export default function MarketplacePage() {
  return (
    <>
      <SignedIn>
        <MarketplaceContent />
      </SignedIn>
      <SignedOut>
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <p className="text-lg mb-4">Debes iniciar sesión para ver y comprar módulos.</p>
          <SignInButton />
        </div>
      </SignedOut>
    </>
  );
}
