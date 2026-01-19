import "./globals.css";
import NavBar from "../components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
