export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <section className="text-center">
        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Clianex Commerce AI
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          La primera plataforma serverless de comercio con IA autónoma, módulos plug-and-play
          y marketplace inteligente.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Empezar gratis
          </a>
          <a
            href="/marketplace"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black"
          >
            Explorar Marketplace
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-2">Serverless</h3>
          <p className="text-gray-600">Escala sin infraestructura.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-2">Clerk Auth</h3>
          <p className="text-gray-600">Login seguro y profesional.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-2">AI Commerce</h3>
          <p className="text-gray-600">Predicciones y optimización automática.</p>
        </div>
      </section>
    </div>
  );
}
