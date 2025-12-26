import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Clianex Commerce AI
      </h1>

      <p className="text-white/70 max-w-2xl mb-10">
        Plataforma serverless que te permite crear, escalar y automatizar
        negocios digitales usando Inteligencia Artificial.
      </p>

      <div className="flex gap-4">
        <Link
          href="/marketplace"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Explorar Marketplace
        </Link>

        <Link
          href="/register"
          className="border border-white/30 px-6 py-3 rounded-lg hover:border-white transition"
        >
          Crear cuenta
        </Link>
      </div>

      {/* Features */}
      <section className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl">
        <Feature
          title="Modular"
          text="Activa solo los módulos que necesites. Paga solo por lo que usas."
        />
        <Feature
          title="IA Autónoma"
          text="Sistemas que trabajan solos 24/7 generando valor."
        />
        <Feature
          title="Escalable"
          text="Empieza gratis. Crece sin límites."
        />
      </section>
    </main>
  );
}

function Feature({ title, text }) {
  return (
    <div className="border border-white/10 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/60 text-sm">{text}</p>
    </div>
  );
}
