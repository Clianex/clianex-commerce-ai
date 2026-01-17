import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-center mb-6">
          Crear cuenta en Clianex
        </h1>
        <SignUp path="/register" routing="path" signInUrl="/sign-in" />
      </div>
    </div>
  );
}
