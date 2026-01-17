import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import FreeShippingBar from "./FreeShippingBar";
import MegaMenu from "./MegaMenu";

export default function NavBar() {
  return (
    <>
      <FreeShippingBar />

      <nav className="sticky top-0 bg-white border-b shadow-sm z-50">
        <div className="container h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-blue-600">
            Clianex
          </Link>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <span className="cursor-pointer hover:text-blue-600">
                Marketplace ▾
              </span>
              <MegaMenu />
            </div>

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
    </>
  );
}
