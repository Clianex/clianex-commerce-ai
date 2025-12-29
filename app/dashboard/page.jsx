import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardHome() {
  const user = await currentUser();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Bienvenido{user?.firstName ? `, ${user.firstName}` : ""}
      </h1>

      <p className="text-white/60 mb-8">
        Gestiona tus módulos, automatizaciones y crecimiento desde aquí.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Módulos activos" value="0" />
        <Card title="Automatizaciones" value="0" />
        <Card title="Estado" value="Gratis" />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="border border-white/10 rounded-xl p-6">
      <h3 className="text-sm text-white/60 mb-2">{title}</h3>
      <span className="text-2xl font-bold">{value}</span>
    </div>
  );
}
