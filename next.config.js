/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,  // Esto es importante para habilitar las rutas de tipo App Router
  },
};

module.exports = nextConfig;
