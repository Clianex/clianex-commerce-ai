import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "../components/NavBar";

export default function RootLayout({ children }) {
  return (
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
  );
}
