import "./globals.css";
import Link from "next/link";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const metadata = {
  title: "Clianex Commerce AI",
  description: "Plataforma serverless de comercio impulsado por IA.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className="bg-gray-50 text-gray-900 antialiased">

          {/* HEADER / NAVBAR */}
          <header className="border-b bg-white sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
              
              <div className="font-bold text-lg tracking-tight">
                <Link href="/">Clianex Commerce AI</Link>
              </div>

              <div className="flex gap-6 text-sm font-medium items-center">
                <Link href="/marketplace" className="hover:opacity-70">
                  Marketplace
                </Link>

                <Link href="/about" className="hover:opacity-70">
                  About
                </Link>

                <Link href="/blog" className="hover:opacity-70">
                  Blog
                </Link>

                <SignedOut>
                  <Link href="/sign-in" className="hover:opacity-70">
                    Sign In
                  </Link>

                  <Link
                    href="/register"
                    className="bg-black text-white px-4 py-2 rounded-lg text-xs"
                  >
                    Register
                  </Link>
                </SignedOut>

                <SignedIn>
                  <Link
                    href="/dashboard"
                    className="bg-black text-white px-4 py-2 rounded-lg text-xs"
                  >
                    Dashboard
                  </Link>
                  <UserButton />
                </SignedIn>
              </div>
            </nav>
          </header>

          {/* MAIN CONTENT */}
          <main className="min-h-screen">{children}</main>

          {/* FOOTER */}
          <footer className="border-t bg-white py-10 text-center text-sm text-gray-500">
            <div className="max-w-7xl mx-auto px-4">
              <p>© {new Date().getFullYear()} Clianex Commerce AI</p>
              <p className="mt-2">
                <Link href="/about" className="mr-4 hover:underline">About</Link>
                <Link href="/blog" className="mr-4 hover:underline">Blog</Link>
                <Link href="/privacy" className="hover:underline">Privacy</Link>
              </p>
            </div>
          </footer>

        </body>
      </html>
    </ClerkProvider>
  );
}
