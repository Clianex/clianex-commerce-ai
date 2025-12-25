/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,  // Esto es importante para habilitar las rutas de tipo App Router
  },
};

module.exports = nextConfig;
const { withClerk } = require('@clerk/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Asegúrate de habilitar el App Router
  },
  env: {
    NEXT_PUBLIC_CLERK_FRONTEND_API: "https://api.clerk.dev",
    CLERK_API_KEY: "tu-clerk-api-key-backend", // Sustituye con tu API key de backend
  },
};

module.exports = withClerk(nextConfig);
