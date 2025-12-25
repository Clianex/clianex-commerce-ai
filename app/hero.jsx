// app/hero.jsx
export default function Hero() {
  return (
    <section className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white h-screen">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Clianex Commerce AI
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          La plataforma de e-commerce impulsada por IA que te ayuda a automatizar
          y escalar tu negocio online.
        </p>
        <a
          href="/register"
          className="bg-yellow-500 text-black py-3 px-6 rounded-full text-xl hover:bg-yellow-600 transition duration-300"
        >
          Regístrate Ahora
        </a>
      </div>
    </section>
  );
}
