import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "Clianex Commerce AI",
  description: "AI-powered commerce platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1 container mx-auto px-6 py-8">
            {children}
          </main>
          <footer className="border-t bg-white">
            <div className="container mx-auto px-6 py-4 text-sm text-gray-500">
              © {new Date().getFullYear()} Clianex Commerce AI
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
