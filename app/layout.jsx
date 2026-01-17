import "./globals.css";
import Navbar from "../components/Navbar";
import PromotionTimer from "../components/PromotionTimer";
export const metadata = {
  title: "Clianex Commerce AI",
  description: "Plataforma serverless de comercio impulsado por IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <FreeShippingBar />
        <PromotionTimer />
        <Navbar />
        import FreeShippingBar from "../components/FreeShippingBar";
        import CookieBar from "../components/CookieBar";
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <CookieBar />
      </body>
    </html>
  );
}
