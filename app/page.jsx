import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>🚀 Clianex Commerce AI</h1>
      <p>Plataforma serverless de comercio impulsado por IA</p>

      <nav style={{ marginTop: 20 }}>
        <ul>
          <li><Link href="/marketplace">Marketplace</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/sign-in">Login</Link></li>
          <li><Link href="/sign-up">Register</Link></li>
        </ul>
      </nav>
    </main>
  );
}
