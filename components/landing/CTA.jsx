import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-indigo-600 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Empieza hoy. Escala mañana.
        </h2>
        <p className="mt-4 text-indigo-100">
          Activa inteligencia artificial real en tu negocio.
        </p>

        <Link
          href="/sign-up"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-indigo-700"
        >
          Crear cuenta gratis
        </Link>
      </div>
    </section>
  );
}
