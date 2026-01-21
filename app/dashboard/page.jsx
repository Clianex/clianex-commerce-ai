import { auth } from "@clerk/nextjs/server";

export default function Dashboard() {
  auth();

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4 text-gray-600">
        Área privada del usuario
      </p>
    </div>
  );
}
