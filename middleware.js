import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  secretKey: process.env.CLERK_SECRET_KEY,
});

export const config = {
  matcher: [
    /*
      Protegemos SOLO dashboard y sus subrutas.
      Dejamos TODO lo demás fuera del middleware.
    */
    "/dashboard/:path*",
  ],
};
