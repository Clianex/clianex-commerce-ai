import "./globals.css";
import Navbar from "../components/Navbar";
import CookieBar from "../components/CookieBar";
import FreeShippingBar from "../components/FreeShippingBar";
import RecentSalesToast from "@/components/RecentSalesToast";
import PromotionTimer from "@/components/PromotionTimer";
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
       <PromotionTimer minutes={20} /> 
       <RecentSalesToast />  
       <FreeShippingBar />
       <main>{children}</main> 
        <CookieBar />
      </body>
    </html>
  );
}
