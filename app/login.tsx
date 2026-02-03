// app/login.tsx
import { SignIn } from '@clerk/nextjs';

export default function Login() {
  return (
    <div>
      <SignIn routing="path" path="/signIn" />
    </div>
  );
}
