const FEATURES = [
  {
    title: "Módulos activables",
    text: "Activa solo lo que necesitas. Sin complejidad innecesaria.",
  },
  {
    title: "Automatización real",
    text: "IA aplicada a procesos reales, no solo dashboards bonitos.",
  },
  {
    title: "Escalable",
    text: "Empieza gratis y escala a Pro o Enterprise cuando crezcas.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900">
          Diseñado para crecer contigo
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
