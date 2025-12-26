import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white/70 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold mb-4">Clianex</h2>
          <p className="text-white/50 text-sm">
            Plataforma serverless de comercio impulsado por IA.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="font-semibold mb-4">Enlaces</h3>
          <ul className="flex flex-col gap-2">
            <li><Link href="/marketplace" className="hover:text-white">Marketplace</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="flex flex-col gap-2">
            <li><Link href="/legal/privacy" className="hover:text-white">Política de Privacidad</Link></li>
            <li><Link href="/legal/terms" className="hover:text-white">Términos de Uso</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <p className="text-white/50 text-sm mb-2">Recibe novedades de Clianex.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="tu@correo.com"
              className="flex-1 px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
              Suscribir
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-white/40 text-sm">
        &copy; {new Date().getFullYear()} Clianex. Todos los derechos reservados.
      </div>
    </footer>
  );
}
