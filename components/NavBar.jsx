import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          Clianex
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/marketplace" className="hover:text-blue-600">
            Marketplace
          </Link>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>

          <SignedOut>
            <SignInButton>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Login
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
