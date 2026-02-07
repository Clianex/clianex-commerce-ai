import Link from "next/link";
import Header from "@/components/layout/Header";
export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
		{/* Brand */}
        <Link href="/" className="text-3xl font-semibold tracking-tight text-white hover:text-gray-200 transition-colors">
          Clianex
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/marketplace"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Marketplace
          </Link>
          <Link
            href="/sign-in"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Sign in
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-28 text-center">
        <h1 className="mx-auto max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
          Automatiza y monetiza tu negocio con IA modular
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Activa solo los módulos que necesitas. Paga por uso. Escala sin
          fricción.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/marketplace"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Explorar módulos
          </Link>

          <Link
            href="/sign-up"
            className="rounded-xl border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition"
          >
            Crear cuenta
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-32 md:grid-cols-3">
        <FeatureCard
          title="Módulos activables"
          description="Compra y activa funcionalidades solo cuando las necesitas."
        />
        <FeatureCard
          title="Billing integrado"
          description="Pagos y suscripciones gestionados con Stripe."
        />
        <FeatureCard
          title="IA autónoma"
          description="Automatizaciones reales listas para producción."
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Clianex. Todos los derechos reservados.
      </footer>
    </main>
  );
}

/* ----------------------------- */
/* Components internos           */
/* ----------------------------- */

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
