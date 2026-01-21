import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import NavBar from "../components/NavBar";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <NavBar />
          <main className="max-w-7xl mx-auto p-6">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
