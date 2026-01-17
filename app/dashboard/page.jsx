import { auth } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    return <p className="p-10">No autorizado.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Módulos</h3>
          <p>Gestiona tus apps y automatizaciones.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Ventas</h3>
          <p>Analiza rendimiento y métricas.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Configuración</h3>
          <p>Personaliza tu cuenta.</p>
        </div>
      </div>
    </div>
  );
}
