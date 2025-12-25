// pages/signup.js
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div>
      <h1>Crear una cuenta</h1>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
