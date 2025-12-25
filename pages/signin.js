// pages/signin.js
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div>
      <h1>Iniciar sesión</h1>
      <SignIn />
    </div>
  );
};

export default SignInPage;
