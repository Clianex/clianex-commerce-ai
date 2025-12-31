import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/nextjs";

export default function DashboardLayout({ children }) {
  return (
    <>
      <SignedIn>
        <header style={{ padding: 20, borderBottom: "1px solid #ddd" }}>
          <strong>Clianex Commerce AI</strong>
          <div style={{ float: "right" }}>
            <UserButton afterSignOutUrl="/" />
          </div>
        </header>

        <main style={{ padding: 40 }}>
          {children}
        </main>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
