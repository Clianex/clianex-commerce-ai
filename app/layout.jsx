import "./globals.css";
import Navbar from "../components/Navbar";
import FreeShippingBar from "../components/FreeShippingBar";
import PromotionTimer from "../components/PromotionTimer";

export const metadata = {
  title: "Clianex Commerce",
  description: "Plataforma de comercio impulsada por IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        <Navbar />

        {/* Elementos de conversión globales */}
        <FreeShippingBar />
        <PromotionTimer />

        <main>{children}</main>
      </body>
    </html>
  );
}
