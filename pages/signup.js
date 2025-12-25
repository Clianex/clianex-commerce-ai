// pages/signup.js
import { SignUp, useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SignUpPage = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/profile');  // O la página que desees redirigir al usuario
    }
  }, [isSignedIn, router]);

  return (
    <div>
      <h1>Crear una cuenta</h1>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
