import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp
        appearance={{
          elements: {
            card: "bg-zinc-900 border border-zinc-800",
          },
        }}
      />
    </div>
  );
}
