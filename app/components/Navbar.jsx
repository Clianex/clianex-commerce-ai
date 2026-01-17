"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="clianex-container flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold">
          Clianex AI
        </Link>

        <div className="flex gap-6">
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard" className="font-semibold text-blue-600">
            Dashboard
          </Link>
          <Link href="/sign-in">Login</Link>
          <Link href="/register" className="bg-black text-white px-4 py-1 rounded">
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
}
