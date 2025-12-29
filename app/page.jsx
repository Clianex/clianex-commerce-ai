
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Clianex Commerce AI</h1>
      <Link href="/marketplace">Marketplace</Link><br/>
      <Link href="/dashboard">Dashboard</Link><br/>
      <Link href="/about">About</Link><br/>
      <Link href="/blog">Blog</Link><br/>
      <Link href="/sign-in">Sign In</Link><br/>
      <Link href="/sign-up">Register</Link>
    </main>
  );
}
