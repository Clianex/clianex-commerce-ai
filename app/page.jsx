export default function Home() {
  return (
    <div className="clianex-container py-16">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold leading-tight">
          Clianex Commerce AI
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          La primera plataforma serverless de e-commerce impulsada por IA,
          diseñada para escalar automáticamente, optimizar ventas y automatizar
          tu tienda sin esfuerzo técnico.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/register"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Empezar Gratis
          </a>
          <a
            href="/marketplace"
            className="border px-6 py-3 rounded-lg"
          >
            Ver Marketplace
          </a>
        </div>
      </section>

      <section className="mt-20 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-xl">IA Autónoma</h3>
          <p className="mt-2 text-gray-600">
            Agentes inteligentes que optimizan productos, precios y marketing.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-xl">Serverless</h3>
          <p className="mt-2 text-gray-600">
            Infraestructura automática sin servidores que escalará contigo.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-xl">Marketplace</h3>
          <p className="mt-2 text-gray-600">
            Descubre módulos y herramientas listas para integrar.
          </p>
        </div>
      </section>
    </div>
  );
}
