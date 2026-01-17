export default function Home() {
  return (
    <div className="clianex-container py-20">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold leading-tight">
          Clianex Commerce AI
        </h1>
        <p className="mt-6 text-xl text-gray-600">
          La plataforma serverless de e-commerce con agentes de IA autónomos que
          optimizan productos, marketing y conversiones 24/7.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="/register"
            className="bg-black text-white px-7 py-3 rounded-lg text-lg"
          >
            Empezar Gratis
          </a>
          <a
            href="/marketplace"
            className="border px-7 py-3 rounded-lg text-lg"
          >
            Explorar Marketplace
          </a>
        </div>
      </section>

      <section className="mt-24 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "IA Autónoma",
            text: "Agentes que gestionan precios, descripciones y recomendaciones.",
          },
          {
            title: "Serverless",
            text: "Escala automática sin infraestructura que mantener.",
          },
          {
            title: "Marketplace de Módulos",
            text: "Añade funciones premium en un clic.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-xl">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
