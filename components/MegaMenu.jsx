import Link from "next/link";

export default function MegaMenu() {
  return (
    <div className="absolute left-0 top-full w-full bg-white border-b shadow-lg hidden group-hover:block fade-in">
      <div className="container grid grid-cols-3 gap-8 py-8">
        <div>
          <h4 className="font-bold mb-3">Automatización</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/marketplace/ai-optimizer">Optimizador IA</Link></li>
            <li><Link href="/marketplace/trend-products">Productos en tendencia</Link></li>
            <li><Link href="/marketplace/supplier-connect">Conectar proveedor</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Analytics</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Métricas en tiempo real</li>
            <li>Predicciones de demanda</li>
            <li>Conversión por canal</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">AI Commerce</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Recomendaciones inteligentes</li>
            <li>Personalización por país</li>
            <li>Optimización automática</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
