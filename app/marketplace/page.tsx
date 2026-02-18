"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Module = {
  id: string;
  key: string;
  name: string;
  description: string | null;
  price: number;
  active: boolean;
};

type FetchState = "idle" | "loading" | "error" | "success";

type BuyError = {
  moduleId: string;
  message: string;
};

// ─── Componentes auxiliares ───────────────────────────────────────────────────

function StatusScreen({
  children,
  action,
}: {
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <p className="text-center text-muted-foreground">{children}</p>
      {action}
    </main>
  );
}

function AlertBanner({
  message,
  onDismiss,
}: {
  message: string;
  onDismiss: () => void;
}) {
  return (
    <div
      role="alert"
      className="mb-6 flex items-start justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
    >
      <span>{message}</span>
      <button
        onClick={onDismiss}
        aria-label="Cerrar error"
        className="ml-4 shrink-0 font-medium hover:opacity-70"
      >
        ✕
      </button>
    </div>
  );
}

function SuccessBanner({ moduleId }: { moduleId: string | null }) {
  if (!moduleId) return null;
  return (
    <div
      role="status"
      className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
    >
      ¡Módulo activado correctamente! Ya tienes acceso.
    </div>
  );
}

function ModuleCard({
  module,
  isBuying,
  buyError,
  onBuy,
}: {
  module: Module;
  isBuying: boolean;
  buyError: string | null;
  onBuy: (id: string) => void;
}) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md">
      <div>
        <h2 className="text-xl font-semibold">{module.name}</h2>
        {module.description && (
          <p className="mt-2 text-sm text-muted-foreground">
            {module.description}
          </p>
        )}
      </div>

      {/* Error específico de esta card */}
      {buyError && (
        <p role="alert" className="mt-3 text-xs text-red-600">
          {buyError}
        </p>
      )}

      <div className="mt-6 flex items-center justify-between">
        <span className="text-lg font-medium">
          €{(module.price / 100).toFixed(2)}
        </span>
        <button
          onClick={() => onBuy(module.id)}
          disabled={isBuying}
          aria-busy={isBuying}
          className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isBuying ? "Procesando…" : "Comprar"}
        </button>
      </div>
    </div>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────

export default function MarketplacePage() {
  const router = useRouter();

  const [modules, setModules] = useState<Module[]>([]);
  const [fetchState, setFetchState] = useState<FetchState>("loading");
  const [buyingId, setBuyingId] = useState<string | null>(null);
  const [buyError, setBuyError] = useState<BuyError | null>(null);

  // Leer ?success=true&module=xxx desde la URL tras volver de Stripe
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const successModuleId = searchParams?.get("success") === "true"
    ? searchParams.get("module")
    : null;
  const wasCanceled = searchParams?.get("canceled") === "true";

  // Limpiar query params de Stripe de la URL sin recargar la página
  useEffect(() => {
    if (successModuleId || wasCanceled) {
      router.replace("/marketplace", { scroll: false });
    }
  }, [successModuleId, wasCanceled, router]);

  // ── Cargar módulos ────────────────────────────────────────────────────────

  const loadModules = useCallback(async () => {
    setFetchState("loading");
    setBuyError(null);
    try {
      const res = await fetch("/api/modules", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data: Module[] = await res.json();
      setModules(data.filter((m) => m.active));
      setFetchState("success");
    } catch (err) {
      console.error("[MarketplacePage] loadModules:", err);
      setFetchState("error");
    }
  }, []);

  useEffect(() => {
    loadModules();
  }, [loadModules]);

  // ── Comprar → Stripe Checkout ─────────────────────────────────────────────

  const handleBuy = useCallback(async (moduleId: string) => {
    setBuyingId(moduleId);
    setBuyError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleId }),
      });

      // Sesión expirada → el middleware redirigió o devolvió 401
      if (res.status === 401) {
        router.push(`/sign-in?redirect_url=/marketplace`);
        return;
      }

      const data = await res.json();

      if (!res.ok) {
        // Error 409 = ya tienes el módulo → refrescar lista
        if (res.status === 409) {
          await loadModules();
          setBuyError({ moduleId, message: data.error });
          return;
        }
        throw new Error(data.error ?? "Checkout error");
      }

      if (!data.url) throw new Error("No se recibió URL de Stripe");

      // Redirigir a Stripe fuera del try/catch
      window.location.href = data.url;

    } catch (err) {
      console.error("[MarketplacePage] handleBuy:", err);
      setBuyError({
        moduleId,
        message: "No se pudo iniciar el pago. Inténtalo de nuevo.",
      });
    } finally {
      setBuyingId(null);
    }
  }, [loadModules, router]);

  // ── Render guards ─────────────────────────────────────────────────────────

  if (fetchState === "loading") {
    return <StatusScreen>Cargando módulos…</StatusScreen>;
  }

  if (fetchState === "error") {
    return (
      <StatusScreen
        action={
          <button
            onClick={loadModules}
            className="rounded-lg border px-4 py-2 text-sm hover:bg-accent"
          >
            Reintentar
          </button>
        }
      >
        No se pudieron cargar los módulos.
      </StatusScreen>
    );
  }

  if (modules.length === 0) {
    return <StatusScreen>No hay módulos disponibles.</StatusScreen>;
  }

  // ── Vista principal ───────────────────────────────────────────────────────

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-10 text-4xl font-semibold">Marketplace de Módulos</h1>

      {/* Banners de estado post-Stripe */}
      <SuccessBanner moduleId={successModuleId} />

      {wasCanceled && !successModuleId && (
        <div
          role="status"
          className="mb-6 rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-700"
        >
          Pago cancelado. Puedes intentarlo de nuevo cuando quieras.
        </div>
      )}

      {/* Error global no asociado a ninguna card */}
      {buyError && buyError.moduleId === "" && (
        <AlertBanner
          message={buyError.message}
          onDismiss={() => setBuyError(null)}
        />
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            isBuying={buyingId === module.id}
            buyError={
              buyError?.moduleId === module.id ? buyError.message : null
            }
            onBuy={handleBuy}
          />
        ))}
      </div>
    </main>
  );
}