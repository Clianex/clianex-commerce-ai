import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { userId } = auth();
  if (!userId) redirect("/login");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Dashboard Privado Clianex 🚀</h1>
      <p>Bienvenido, usuario autenticado con Clerk</p>
    </div>
  );
}
