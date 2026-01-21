export default function HomePage() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">
        Clianex Commerce AI
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
        Plataforma de comercio impulsada por inteligencia artificial,
        automatización y crecimiento escalable.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/dashboard"
          className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800"
        >
          Ir al Dashboard
        </a>
        <a
          href="/marketplace"
          className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100"
        >
          Explorar Marketplace
        </a>
      </div>
    </section>
  );
}
