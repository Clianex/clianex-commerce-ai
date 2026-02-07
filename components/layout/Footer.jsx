import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-neutral-950/80 backdrop-blur">
      <div className="container-page py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
        <Link href="/" className="text-3xl font-semibold tracking-tight">
          <span className="text-white">Clianex</span>
        </Link>
        </div>

        <div>
          <h4 className="font-semibold">Producto</h4>
          <ul className="mt-2 space-y-2 text-slate-600">
            <li>Marketplace</li>
            <li>Automatización</li>
            <li>Gestión empresarial</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Legal</h4>
          <ul className="mt-2 space-y-2 text-slate-600">
            <li>Privacidad</li>
            <li>Términos</li>
            <li>Seguridad</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Clianex. All rights reserved.
      </div>
    </footer>
  );
}
