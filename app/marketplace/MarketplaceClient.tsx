"use client";

import { useState } from "react";
import { useUser, SignInButton } from "@clerk/nextjs";

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

export default function MarketplaceClient({
  modules,
}: {
  modules: Module[];
}) {
  const { isSignedIn } = useUser();

  const [items, setItems] = useState(modules);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const buy = async (moduleId: string) => {
    if (!isSignedIn) return;

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

      if (!res.ok) throw new Error(data.error || "Checkout failed");

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      // módulo gratis
      setItems((prev) =>
        prev.map((m) =>
          m.id === moduleId ? { ...m, enabled: true } : m
        )
      );

      setLoading(null);
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
        {items.map((module) => (
          <div
            key={module.id}
            className="rounded-2xl border border-border bg-card p-6 flex flex-col shadow-sm hover:shadow-md transition"
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

              {!isSignedIn ? (
                <SignInButton mode="modal">
                  <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
                    Iniciar sesión
                  </button>
                </SignInButton>
              ) : (
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
              )}
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <p className="text-muted-foreground text-sm mt-6">
          No hay módulos disponibles.
        </p>
      )}
    </section>
  );
}
