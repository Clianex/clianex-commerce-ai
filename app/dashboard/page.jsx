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
    </div>
  );
}
