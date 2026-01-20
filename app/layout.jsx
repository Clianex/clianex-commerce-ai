
import "./globals.css";
import NavBar from "../components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Clianex Commerce AI",
  description: "Plataforma de comercio con IA",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body>
          <NavBar />
          <main className="container mt-6">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
