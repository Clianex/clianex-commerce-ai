// app/dashboard.jsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/login");
  }

  return <h1>Dashboard privado Clianex 🚀</h1>;
}
