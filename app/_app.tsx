// pages/_app.tsx
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "../components/NavBar";
import "../app/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <NavBar />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
