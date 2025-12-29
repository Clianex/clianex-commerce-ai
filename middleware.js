import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  // Protege dashboard y todas sus subrutas
  matcher: ["/dashboard/:path*"],
};
