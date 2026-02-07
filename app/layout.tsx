import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className="bg-neutral-950 text-white">
          {/* Header aquí (puede detectar user) */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
