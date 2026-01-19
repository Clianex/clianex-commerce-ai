export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center gap-8">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        Comercio <span className="text-blue-400">Serverless</span>  
        <br />
        impulsado por <span className="text-purple-400">IA</span>
      </h1>

      <p className="max-w-2xl text-lg text-gray-300">
        Clianex Commerce AI te permite lanzar, automatizar y escalar tu tienda
        con módulos inteligentes, análisis en tiempo real y marketplace integrado.
      </p>

      <div className="flex gap-4">
        <a
          href="/register"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium"
        >
          Empezar gratis
        </a>
        <a
          href="/marketplace"
          className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-xl font-medium"
        >
          Ver Marketplace
        </a>
      </div>
    </section>
  );
}
