export default function MarketplacePage() {
  return (
    <main className="container-page pt-24 pb-24">
      <h1>Marketplace de módulos</h1>

      <p className="mt-4 max-w-2xl">
        Amplía Clianex con módulos activables bajo demanda.
        Cada módulo añade capacidades reales al sistema.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Module
          title="Automatización avanzada"
          desc="Flujos inteligentes y ejecución autónoma."
        />
        <Module
          title="IA de contenido"
          desc="Generación, publicación y optimización."
        />
        <Module
          title="Proveedores & sourcing"
          desc="Integración con cadenas de suministro."
        />
      </div>
    </main>
  );
}

function Module({ title, desc }) {
  return (
    <div className="card hover:shadow-md transition">
      <h3>{title}</h3>
      <p className="mt-2 text-sm">{desc}</p>
    </div>
  );
}
