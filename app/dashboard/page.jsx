export default function Dashboard() {
  return (
    <div className="clianex-container py-16">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4 text-gray-600">
        Panel principal de Clianex Commerce AI.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold">Ventas</h3>
          <p>Próximamente con datos en tiempo real.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold">Módulos</h3>
          <p>Activa funciones de IA y automatización.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold">Configuración</h3>
          <p>Administra tu cuenta y tienda.</p>
        </div>
      </div>
    </div>
  );
}
