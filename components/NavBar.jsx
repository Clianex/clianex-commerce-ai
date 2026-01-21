import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function NavBar() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Clianex
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/marketplace" className="text-gray-600 hover:text-gray-900">
            Marketplace
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
		   <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>

          <SignedOut>
            <Link
              href="/sign-in"
              className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
            >
              Entrar
            </Link>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black"
            >
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}
