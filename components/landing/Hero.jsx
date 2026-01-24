import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <h1 className="max-w-3xl text-5xl font-bold leading-tight">
          Automatiza tu negocio con
          <span className="text-indigo-400"> Inteligencia Artificial</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Clianex Commerce AI es una plataforma modular que activa
          automatizaciones reales para ventas, contenido, analytics y más.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/sign-up"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-700"
          >
            Empieza gratis
          </Link>

          <Link
            href="/marketplace"
            className="rounded-lg border border-slate-700 px-6 py-3 text-slate-300 hover:bg-slate-800"
          >
            Ver módulos
          </Link>
        </div>
      </div>
    </section>
  );
}
