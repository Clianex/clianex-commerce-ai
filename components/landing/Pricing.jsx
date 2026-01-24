const PLANS = [
  {
    name: "Free",
    price: "0€",
    features: ["Acceso básico", "1 módulo activo", "Soporte limitado"],
  },
  {
    name: "Pro",
    price: "49€/mes",
    featured: true,
    features: [
      "Módulos ilimitados",
      "Automatizaciones avanzadas",
      "Soporte prioritario",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Integraciones a medida", "SLA", "Soporte dedicado"],
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900">
          Planes simples y claros
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border bg-white p-8 shadow-sm ${
                plan.featured
                  ? "border-indigo-600 ring-2 ring-indigo-600"
                  : ""
              }`}
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-4 text-3xl font-bold">
                {plan.price}
              </div>

              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              <button className="mt-8 w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700">
                Elegir plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
