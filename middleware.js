import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/dashboard/:path*"], // protege dashboard y subrutas
};
