import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function DashboardLayout({ children }) {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen flex">
          {/* Sidebar */}
          <aside className="w-64 border-r border-white/10 p-6">
            <h2 className="font-bold text-lg mb-6">Clianex</h2>

            <nav className="flex flex-col gap-4 text-sm text-white/70">
              <a href="/dashboard">Inicio</a>
              <a href="/dashboard/modules">Módulos</a>
              <a href="/dashboard/billing">Facturación</a>
              <a href="/dashboard/settings">Ajustes</a>
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1 p-10">
            {children}
          </main>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
