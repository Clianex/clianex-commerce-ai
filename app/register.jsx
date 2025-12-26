// app/register.jsx
import { SignUp } from '@clerk/nextjs';

export default function Register() {
  return (
    <div>
      <SignUp routing="path" path="/register" />
    </div>
  );
}
