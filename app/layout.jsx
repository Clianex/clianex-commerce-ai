import "./globals.css";
import Navbar from "../components/Navbar";
import CookieBar from "../components/CookieBar";
import FreeShippingBar from "../components/FreeShippingBar";
import PromotionTimer from "../components/PromotionTimer";
import RecentSalesToast from "@/components/RecentSalesToast";

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
        <RecentSalesToast />
        <PromotionTimer />
        
        <CookieBar />

        <main>{children}</main>
      </body>
    </html>
  );
}
