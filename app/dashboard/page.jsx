import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main style={{ padding: 40 }}>
      <SignedIn>
        <h1>Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      <SignedOut>
        <p>No autorizado</p>
        <SignInButton />
      </SignedOut>
    </main>
  );
}
