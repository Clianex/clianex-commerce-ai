export default function Home() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Construye tu e-commerce
            <span className="block text-indigo-600">con IA autónoma</span>
          </h1>

          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Clianex Commerce AI automatiza tu tienda, optimiza ventas,
            detecta tendencias y gestiona módulos inteligentes sin fricción.
            Serverless. Escalable. Preparado para crecer.
          </p>

          <div className="flex gap-4">
            <a
              href="/register"
              className="bg-black text-white px-6 py-3 rounded-lg font-medium"
            >
              Empieza gratis
            </a>

            <a
              href="/marketplace"
              className="border px-6 py-3 rounded-lg font-medium"
            >
              Ver Marketplace
            </a>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center text-gray-400">
          (Aquí irá tu hero visual / video / mockup más adelante)
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">IA Autónoma</h3>
            <p className="text-gray-700">
              Agentes que optimizan precios, contenidos y conversiones en piloto automático.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">Marketplace de Módulos</h3>
            <p className="text-gray-700">
              Activa funciones con un clic: tendencias, carrito inteligente, copycat protection y más.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">Serverless & Escalable</h3>
            <p className="text-gray-700">
              Infraestructura ligera que crece contigo sin mantenimiento pesado.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST / SOCIAL PROOF */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Diseñado para tiendas modernas
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Clianex está pensado para emprendedores, brands y retailers digitales
          que quieren competir con IA desde el primer día.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Lanza tu tienda con IA hoy
          </h2>
          <a
            href="/register"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium"
          >
            Crear cuenta
          </a>
        </div>
      </section>

    </div>
  );
}
