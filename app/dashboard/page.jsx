import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main style={{ padding: 40 }}>
      <SignedIn>
        <h1>📊 Dashboard</h1>
        <p>Bienvenido a Clianex Commerce AI</p>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      <SignedOut>
        <p>Debes iniciar sesión para acceder al dashboard.</p>
        <SignInButton />
      </SignedOut>
    </main>
  );
}
