import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/marketplace/:path*",
    "/((?!_next|favicon.ico|api|sign-in|sign-up).*)",
  ],
};
