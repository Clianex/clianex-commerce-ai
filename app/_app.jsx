// pages/_app.js
import { ClerkProvider } from '@clerk/nextjs';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}>
      <NavBar />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
