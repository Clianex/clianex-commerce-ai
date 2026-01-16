export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold mb-4">Clianex Commerce AI</h1>
      <p className="text-xl mb-8">
        Plataforma serverless de comercio impulsado por IA.
      </p>
      <div className="flex gap-4">
        <a href="/sign-in" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Iniciar Sesión
        </a>
        <a href="/register" className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
          Registrarse
        </a>
      </div>
    </main>
  );
}
