
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function DashboardLayout({ children }) {
  return (
    <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
