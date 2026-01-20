
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "Clianex Commerce AI",
  description: "Plataforma de comercio con IA",
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <ClerkProvider>
          <NavBar />
          <main className="container mx-auto px-4 py-6">
            {children}
          </main>
        </ClerkProvider>
      </body>
    </html>
=======
    <ClerkProvider>
      <html lang="es">
        <body>
          <NavBar />
          <main className="container mt-6">{children}</main>
        </body>
      </html>
    </ClerkProvider>
>>>>>>> fbc312ff808e9d9bcbe1b6bb3c2a294189aa02d7
  );
}
