<<<<<<< HEAD
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    return <p>No autorizado</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4">
        Bienvenido, {user.firstName || "usuario"}.
      </p>
=======

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
      <p>Panel principal.</p>
      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
        Métricas y módulos aparecerán aquí.
      </div>
>>>>>>> fbc312ff808e9d9bcbe1b6bb3c2a294189aa02d7
    </div>
  );
}
