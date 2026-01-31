import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp
        appearance={{
		elements: {
            card:
              "bg-zinc-300 border border-zinc-700 shadow-2xl rounded-2xl",
            headerTitle: "text-zinc text-3xl font-semibold",
            headerSubtitle: "text-zinc-600",
            socialButtonsBlockButton:
              "bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700",
            formFieldLabel: "text-zinc-900",
            formFieldInput:
              "bg-zinc-300 border border-zinc-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
            formButtonPrimary:
              "bg-indigo-600 hover:bg-indigo-500 text-white font-semibold",
            footerActionText: "text-zinc-400",
            footerActionLink:
              "text-indigo-400 hover:text-indigo-300",
          },
        }}
      />
    </div>
  );
}
