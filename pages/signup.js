// pages/signup.js
import { SignUp, useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SignUpPage = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  // Redirigir a perfil si el usuario ya está autenticado
  useEffect(() => {
    if (isSignedIn) {
      router.push('/profile');
    }
  }, [isSignedIn, router]);

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px' }}>
      <h1>Crear una cuenta</h1>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
