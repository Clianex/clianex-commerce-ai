import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">🚀 Clianex Commerce AI</h1>
      <p className="mb-6">Plataforma serverless de comercio impulsado por IA.</p>
      <div className="flex gap-4">
        <Link href="/register">Registrarse</Link>
        <Link href="/login">Iniciar sesión</Link>
      </div>
    </div>
  );
}
