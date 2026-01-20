
"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="text-lg font-semibold text-white">
          Clianex Commerce AI
        </Link>
        <div className="flex gap-6">
          <Link href="/marketplace" className="hover:text-white">Marketplace</Link>
          <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/about" className="hover:text-white">About</Link>
        </div>
      </div>
    </nav>
  );
}
