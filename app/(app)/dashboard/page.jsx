export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">
        Dashboard
      </h1>

      <p className="mt-2 text-slate-600">
        Bienvenido a tu panel de control Clianex.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="card p-6">
          <h3 className="font-semibold">Módulos activos</h3>
          <p className="text-2xl mt-2">3</p>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold">Ingresos</h3>
          <p className="text-2xl mt-2">€1.240</p>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold">Estado</h3>
          <p className="text-2xl mt-2 text-green-600">
            Operativo
          </p>
        </div>
      </div>
    </div>
  );
}
