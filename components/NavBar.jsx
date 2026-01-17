"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import PredictiveSearch from "./PredictiveSearch";
export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Marca */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Clianex Commerce
            </Link>
          </div>

          {/* Navegación principal */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/marketplace"
              className="text-gray-700 hover:text-black transition"
            >
              Marketplace
            </Link>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-black transition"
            >
              Blog
            </Link>

            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-black transition"
            >
              Dashboard
            </Link>
          </div>
<PredictiveSearch />
          {/* Autenticación / Perfil */}
          <div className="flex items-center">
            <SignedOut>
              <div className="flex space-x-4">
                <Link
                  href="/sign-in"
                  className="text-sm text-gray-700 hover:text-black"
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="/sign-up"
                  className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-900 transition"
                >
                  Registrarse
                </Link>
              </div>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
