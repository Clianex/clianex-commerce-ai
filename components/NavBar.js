// components/NavBar.js
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li>
          <Link href="/signin">
            <a style={{ color: '#fff', textDecoration: 'none' }}>Iniciar sesión</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a style={{ color: '#fff', textDecoration: 'none' }}>Crear cuenta</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
