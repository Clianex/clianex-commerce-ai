import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav style={{ padding: 16, borderBottom: "1px solid #eee" }}>
      <Link href="/">Clianex</Link>{" | "}
      <Link href="/marketplace">Marketplace</Link>{" | "}
      <SignedOut>
        <Link href="/sign-in">Login</Link>{" | "}
        <Link href="/sign-up">Registro</Link>
      </SignedOut>
      <SignedIn>
        <Link href="/dashboard">Dashboard</Link>{" | "}
        <UserButton />
      </SignedIn>
    </nav>
  );
}
