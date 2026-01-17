"use client";

import Link from "next/link";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="clianex-container flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Clianex AI
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/marketplace" className="hover:text-blue-600">
            Marketplace
          </Link>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>

          <Link
            href="/dashboard"
            className="font-semibold text-blue-600 hover:underline"
          >
            Dashboard
          </Link>

          <Link href="/sign-in" className="hover:text-blue-600">
            Login
          </Link>

          <Link
            href="/register"
            className="bg-black text-white px-4 py-1.5 rounded-lg hover:bg-gray-900"
          >
            Registrarse
          </Link>

          <UserMenu />
        </div>
      </div>
    </nav>
  );
}
