<<<<<<< HEAD
=======

"use client";
>>>>>>> fbc312ff808e9d9bcbe1b6bb3c2a294189aa02d7
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function NavBar() {
  return (
<<<<<<< HEAD
    <nav className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="font-bold text-xl">
          Clianex Commerce AI
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/marketplace" className="hover:underline">Marketplace</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>

          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
=======
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
>>>>>>> fbc312ff808e9d9bcbe1b6bb3c2a294189aa02d7
        </div>
      </div>
    </nav>
  );
}
