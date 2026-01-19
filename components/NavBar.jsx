"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Clianex <span className="text-blue-400">Commerce AI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="/marketplace" className="hover:text-white transition">Marketplace</Link>
          <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/sign-in"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </header>
  );
}
