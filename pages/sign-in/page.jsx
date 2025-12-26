// pages/signin.js
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px' }}>
      <h1>Iniciar sesión</h1>
      <SignIn />
    </div>
  );
};

export default SignInPage;
