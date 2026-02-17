import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // protege todas las rutas excepto assets
};
