"use client";

import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Clianex
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/marketplace" className="hover:text-white/70">
            Marketplace
          </Link>
          <Link href="/blog" className="hover:text-white/70">
            Blog
          </Link>
          <Link href="/about" className="hover:text-white/70">
            About
          </Link>
          <Link href="/dashboard" className="hover:text-white/70">
            Dashboard
          </Link>
        </div>

        {/* Auth */}
        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold">
                Entrar
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
