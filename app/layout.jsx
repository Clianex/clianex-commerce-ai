import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Clianex Commerce AI",
  description: "Plataforma serverless de comercio impulsado por IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
