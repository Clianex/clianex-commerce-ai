import "./globals.css";
import Link from "next/link";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Clianex Commerce AI",
  description: "Plataforma serverless de comercio impulsado por IA.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className="bg-gray-50 text-gray-900">
          <header className="border-b bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
              <div className="font-bold text-lg">
                <Link href="/">Clianex Commerce AI</Link>
              </div>

              <div className="flex gap-4 text-sm">
                <Link href="/marketplace">Marketplace</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/register">Register</Link>
                <Link href="/sign-in">Sign In</Link>
              </div>
            </nav>
          </header>

          <main className="min-h-screen">{children}</main>

          <footer className="border-t bg-white py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Clianex Commerce AI
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
