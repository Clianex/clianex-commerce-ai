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
          <a href="/product" className="hover:text-blue-600">
            Ver Producto Demo
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold">Panel Principal</h1>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Ventas hoy</h3>
            <p className="text-2xl mt-2">€1,245</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Módulos activos</h3>
            <p className="text-2xl mt-2">3</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Conversión</h3>
            <p className="text-2xl mt-2">4.8%</p>
          </div>
        </div>
      </main>
    </div>
  );
}
