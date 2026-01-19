import "./globals.css";
import NavBar from "../components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#0b0f1a] text-gray-100">
        <NavBar />
        <main className="max-w-7xl mx-auto px-6 pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
