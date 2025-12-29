import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

<SignedIn>
  {/* Contenido privado */}
  <UserButton afterSignOutUrl="/" />
</SignedIn>

<SignedOut>
  {/* Contenido para usuarios no autenticados */}
  <SignInButton />
</SignedOut>
