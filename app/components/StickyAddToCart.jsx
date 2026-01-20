export default function StickyAddToCart() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg py-3">
      <div className="container flex justify-between items-center">
        <span className="font-semibold">Módulo seleccionado</span>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Instalar ahora
        </button>
      </div>
    </div>
  );
}
