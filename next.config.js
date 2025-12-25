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
    NEXT_PUBLIC_CLERK_FRONTEND_API: "pk_test_d2hvbGUta2luZ2Zpc2gtMjQuY2xlcmsuYWNjb3VudHMuZGV2JA",
    CLERK_API_KEY: "sk_test_tCb5ez2d6eIFeozaAHekKfo1OqnqI6HdOc55z1zgf8", // Sustituye con tu API key de backend
  },
};

module.exports = withClerk(nextConfig);
