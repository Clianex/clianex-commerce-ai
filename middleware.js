
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/((?!_next|static|favicon.ico).*)",
  ],
};
