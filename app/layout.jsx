import "./globals.css";
import NavBar from "../components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#0b0f1a] text-gray-100">
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <NavBar />
          <main className="max-w-7xl mx-auto px-6 pt-24">
            {children}
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
}
