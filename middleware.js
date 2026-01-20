
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
<<<<<<< HEAD
    "/((?!_next|favicon.ico|public).*)",
    "/dashboard/:path*",
    "/marketplace/:path*"
=======
    "/dashboard/:path*",
    "/((?!_next|static|favicon.ico).*)",
>>>>>>> fbc312ff808e9d9bcbe1b6bb3c2a294189aa02d7
  ],
};
