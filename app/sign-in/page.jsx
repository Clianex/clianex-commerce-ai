import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-center mb-6">
          Iniciar sesión
        </h1>
        <SignIn path="/sign-in" routing="path" signUpUrl="/register" />
      </div>
    </div>
  );
}
