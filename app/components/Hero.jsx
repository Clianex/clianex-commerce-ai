"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center">
        <span className="inline-block mb-6 px-4 py-1 text-xs font-semibold tracking-widest border border-white/20 rounded-full text-white/70">
          COMMERCE · AI · AUTOMATION
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Construye negocios digitales <br />
          <span className="text-white/80">
            impulsados por Inteligencia Artificial
          </span>
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto mb-10">
          Clianex Commerce AI es una plataforma serverless que te permite
          lanzar, automatizar y escalar e-commerce y negocios digitales
          usando módulos de IA autónoma.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/marketplace"
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Explorar Marketplace
          </Link>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="border border-white/30 px-8 py-4 rounded-xl hover:border-white transition">
                Crear cuenta gratis
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              className="border border-white/30 px-8 py-4 rounded-xl hover:border-white transition"
            >
              Ir al Dashboard
            </Link>
          </SignedIn>
        </div>

        {/* Trust / Proof */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/50 text-sm">
          <Stat label="IA Modules" value="+40" />
          <Stat label="Automations" value="∞" />
          <Stat label="Setup" value="5 min" />
          <Stat label="Serverless" value="100%" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-white">{value}</span>
      <span>{label}</span>
    </div>
  );
}
