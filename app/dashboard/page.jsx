import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Módulos activos" value="3" />
        <StatCard title="Usuarios" value="12" />
        <StatCard title="Ingresos" value="€1.240" />
      </div>

      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Actividad reciente
        </h2>
        <p className="text-gray-600">
          Aquí aparecerán los últimos eventos del sistema.
        </p>
      </div>
    </div>
  );
}
