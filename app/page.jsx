import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
          Automatiza tu negocio con{" "}
          <span className="text-indigo-600">IA real</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
          Clianex Commerce AI te permite lanzar, gestionar y escalar negocios
          digitales con módulos de inteligencia artificial listos para usar.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/sign-up"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Empezar ahora
          </Link>

          <Link
            href="/marketplace"
            className="px-6 py-3 rounded-lg bg-white border text-slate-700 hover:bg-slate-100 transition"
          >
            Ver marketplace
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Feature
            title="Módulos listos"
            text="Activa funciones de IA sin código: ventas, contenidos, análisis y automatización."
          />
          <Feature
            title="Escalable"
            text="Empieza pequeño y escala con módulos premium según crece tu negocio."
          />
          <Feature
            title="Autónomo"
            text="Diseñado para operar con mínima intervención humana."
          />
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold mb-12">Planes simples</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="Gratis"
              features={[
                "Dashboard básico",
                "Acceso limitado a módulos",
                "Soporte comunidad",
              ]}
            />

            <PricingCard
              title="Pro"
              price="29€/mes"
              highlight
              features={[
                "Todos los módulos",
                "Automatización avanzada",
                "Soporte prioritario",
              ]}
            />

            <PricingCard
              title="Enterprise"
              price="Custom"
              features={[
                "IA personalizada",
                "Integraciones a medida",
                "Soporte dedicado",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold">
            Empieza hoy con Clianex
          </h2>
          <p className="mt-4 text-indigo-100">
            Lanza tu ecosistema de IA en minutos.
          </p>

          <Link
            href="/sign-up"
            className="inline-block mt-8 px-8 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition"
          >
            Crear cuenta
          </Link>
        </div>
      </section>
    </main>
  );
}

/* COMPONENTES INTERNOS */

function Feature({ title, text }) {
  return (
    <div className="card p-6 text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}

function PricingCard({ title, price, features, highlight }) {
  return (
    <div
      className={`card p-8 text-center ${
        highlight ? "ring-2 ring-indigo-600" : ""
      }`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 text-4xl font-bold">{price}</p>

      <ul className="mt-6 space-y-2 text-slate-600">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
