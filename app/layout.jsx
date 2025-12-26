import "../styles/globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        <nav className="flex justify-between p-6 bg-white shadow">
          <div className="font-bold text-xl">Clianex</div>
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
