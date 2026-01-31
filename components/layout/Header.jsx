"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="text-3xl font-semibold tracking-tight">
          <span className="text-white">Clianex</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm text-neutral-300">
          <Link href="/marketplace" className="hover:text-white">
            Marketplace
          </Link>
          <SignedIn>
            <Link href="/dashboard" className="hover:text-white">
              Dashboard
            </Link>
          </SignedIn>
        </nav>

        {/* Auth */}
        <div className="flex items-center gap-4">
          <SignedOut>
            <Link
              href="/sign-in"
              className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-black hover:bg-neutral-200"
            >
              Sign in
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
