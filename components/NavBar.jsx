import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function NavBar() {
  return (
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
        </div>
      </div>
    </nav>
  );
}
