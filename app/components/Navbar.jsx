"use client";

import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          Clianex
        </Link>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <Link href="/marketplace" className="hover:text-white">
            Marketplace
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/dashboard" className="hover:text-white">
            Dashboard
          </Link>
        </div>

        {/* Auth actions */}
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="border border-white/30 px-4 py-2 rounded-lg text-sm hover:border-white transition">
                Entrar
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
