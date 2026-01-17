export default function Dashboard() {
  return (
    <div className="flex">
      <aside className="w-64 bg-white border-r min-h-screen p-6">
        <h2 className="font-bold text-lg">Clianex Dashboard</h2>
        <nav className="mt-6 flex flex-col gap-3">
          <a href="/dashboard" className="hover:text-blue-600">Inicio</a>
          <a href="/dashboard/modules" className="hover:text-blue-600">
            Módulos
          </a>
          <a href="/dashboard/settings" className="hover:text-blue-600">
            Configuración
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold">Panel Principal</h1>
        <p className="mt-4 text-gray-600">
          Aquí verás métricas, módulos y automatizaciones.
        </p>
      </main>
    </div>
  );
}
