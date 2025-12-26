// app/benefits.jsx
export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Beneficios de Clianex</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Automatización Completa</h3>
            <p>
              Olvídate de las tareas repetitivas. Clianex automatiza cada proceso, 
              desde el inventario hasta las recomendaciones de productos.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Escalabilidad Inmediata</h3>
            <p>
              A medida que tu negocio crece, Clianex se adapta automáticamente para 
              escalar de manera eficiente y sin interrupciones.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Inteligencia Artificial</h3>
            <p>
              Utiliza algoritmos de IA para predecir tendencias, sugerir productos y mejorar la experiencia de compra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

