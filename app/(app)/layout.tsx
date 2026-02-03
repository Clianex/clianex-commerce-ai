import { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface AppLayoutProps {
  children: ReactNode;
}

export const dynamic = "force-dynamic";

export default async function AppLayout({ children }: AppLayoutProps) {
  const { userId } = await auth();

  // 🔒 Protección GLOBAL de toda la app privada
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Aquí luego irá el sidebar global */}
      <main className="container mx-auto py-6 px-4">
        {children}
      </main>
    </div>
  );
}
