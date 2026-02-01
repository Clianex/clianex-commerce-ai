import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

/**
 * Define qué rutas requieren autenticación
 * Puedes agregar más rutas aquí si lo necesitas
 */
const protectedRoutes = createRouteMatcher([
  "/marketplace(.*)",
  "/dashboard(.*)",
]);

/**
 * Middleware Clerk
 * - Protege rutas especificadas
 * - Redirige automáticamente a /sign-in si no está autenticado
 */
export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) {
    try {
      auth.protect(); // si no hay sesión → lanza NEXT_REDIRECT
    } catch (err: unknown) {
      // Solo para desarrollo, no afecta producción
      if (process.env.NODE_ENV === "development") {
        console.log("Clerk NEXT_REDIRECT (usuario no autenticado)");
      }
      throw err; // permite que Next maneje la redirección
    }
  }
});

/**
 * Configuración de matcher
 * - Aplica middleware a todas las rutas excepto recursos estáticos
 */
export const config = {
  matcher: [
    "/((?!_next|favicon.ico|.*\\.(?:css|js|json|png|jpg|svg|ico)).*)",
  ],
};
