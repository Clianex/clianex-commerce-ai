export default function Dashboard() {
  return (
    <div className="pt-6">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-300">
        Panel de control de Clianex Commerce AI.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h2 className="text-lg font-semibold">Ventas hoy</h2>
          <p className="text-3xl font-bold mt-2">€0</p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h2 className="text-lg font-semibold">Módulos activos</h2>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
      </div>
    </div>
  );
}
