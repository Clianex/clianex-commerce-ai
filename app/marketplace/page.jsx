export default function Marketplace() {
  return (
    <div className="pt-6">
      <h1 className="text-4xl font-bold mb-6">Marketplace</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Tendencias AI", "Proveedores Premium", "Automación Avanzada"].map((item) => (
          <div key={item} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">{item}</h2>
            <p className="text-gray-400 text-sm">
              Módulo inteligente para optimizar tu comercio con datos en tiempo real.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
