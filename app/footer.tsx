// app/footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Clianex. Todos los derechos reservados.</p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-yellow-500 hover:text-yellow-400 mx-4">Política de Privacidad</a>
          <a href="/terms-of-use" className="text-yellow-500 hover:text-yellow-400 mx-4">Términos de Uso</a>
          <a href="/contact" className="text-yellow-500 hover:text-yellow-400 mx-4">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
