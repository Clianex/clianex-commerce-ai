export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <h4 className="font-semibold">Clianex</h4>
          <p className="mt-2 text-slate-600">
            Plataforma modular de automatización y comercio impulsada por IA.
          </p>
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
