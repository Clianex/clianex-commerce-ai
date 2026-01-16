export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Clianex Commerce AI
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        La plataforma serverless que automatiza y potencia tu e-commerce con IA,
        agentes autónomos y crecimiento inteligente.
      </p>

      <div className="flex gap-4">
        <a
          href="/register"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Comenzar ahora
        </a>
        <a
          href="/marketplace"
          className="border px-6 py-3 rounded-lg"
        >
          Ver Marketplace
        </a>
      </div>
    </div>
  );
}
