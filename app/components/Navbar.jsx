"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "Sobre Clianex" },
    { href: "/sign-in", label: "Acceder" },
    { href: "/sign-up", label: "Registrarse" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link href="/">Clianex Commerce AI</Link>
      </div>

      <ul className="navbar__links">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive ? "nav-link active" : "nav-link"}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
