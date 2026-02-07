import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Clianex
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/marketplace" className="nav-link">
            Marketplace
          </Link>
          <Link href="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link href="/sign-in" className="nav-link">
            Acceder
          </Link>
        </nav>

        {/* CTA */}
        <Link href="/sign-up" className="btn btn-primary text-sm">
          Crear cuenta
        </Link>
      </div>
    </header>
  );
}
