import { auth } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Acceso requerido</h1>
        <p>Por favor inicia sesión.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-700">
        Panel principal de Clianex Commerce AI.
      </p>
      <a
        href="/dashboard/modules"
        className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg"
      >
        Ver módulos
      </a>
    </div>
  );
}
