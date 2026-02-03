import { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const { userId } = await auth();

  // Seguridad base: dashboard solo para usuarios logueados
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/40 p-4">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Clianex</h2>
          <p className="text-xs text-muted-foreground">
            AI Commerce Platform
          </p>
        </div>

        <nav className="space-y-2 text-sm">
          <a href="/dashboard" className="block rounded px-2 py-1 hover:bg-muted">
            Dashboard
          </a>

          <a
            href="/dashboard/billing"
            className="block rounded px-2 py-1 hover:bg-muted"
          >
            Billing
          </a>

          <a
            href="/marketplace"
            className="block rounded px-2 py-1 hover:bg-muted"
          >
            Marketplace
          </a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
