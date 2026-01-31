import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <SignUp
        signInUrl="/sign-in"
        redirectUrl="/dashboard"
        appearance={{
          elements: {
            card: "bg-zinc-900 border border-zinc-800 shadow-xl rounded-xl",
            headerTitle: "text-white text-2xl font-semibold",
            headerSubtitle: "text-zinc-400",

            socialButtonsBlockButton:
              "bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700",

            dividerLine: "bg-zinc-700",
            dividerText: "text-zinc-400",

            formFieldLabel: "text-zinc-300",
            formFieldInput:
              "bg-zinc-800 border border-zinc-700 text-white focus:ring-2 focus:ring-indigo-500",

            formButtonPrimary:
              "bg-indigo-600 hover:bg-indigo-500 text-white font-medium",

            footerActionText: "text-zinc-400",
            footerActionLink: "text-indigo-400 hover:text-indigo-300",
          },
        }}
      />
    </div>
  );
}
