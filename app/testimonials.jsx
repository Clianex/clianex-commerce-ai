// app/testimonials.jsx
export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Lo que dicen nuestros usuarios</h2>
        <div className="flex justify-center space-x-8">
          <div className="p-6 bg-white shadow-lg rounded-lg w-64">
            <p className="text-lg mb-4">"Clianex cambió por completo la manera en que gestiono mi tienda online. ¡Una verdadera revolución!"</p>
            <p className="font-semibold">Juan Pérez</p>
            <p className="text-sm text-gray-500">CEO, TiendaXYZ</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg w-64">
            <p className="text-lg mb-4">"La automatización con IA es impresionante. ¡Mis ventas han crecido un 30% en solo 2 meses!"</p>
            <p className="font-semibold">Ana García</p>
            <p className="text-sm text-gray-500">Fundadora, ModaFácil</p>
          </div>
        </div>
      </div>
    </section>
  );
}
