import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            card: "bg-zinc-900 border border-zinc-800",
          },
        }}
      />
    </div>
  );
}
