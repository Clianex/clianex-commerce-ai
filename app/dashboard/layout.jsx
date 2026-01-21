import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

export default function DashboardLayout({ children }) {
  return (
    <ClerkProvider>
      <SignedIn>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <TopBar />
            <main className="p-6">{children}</main>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}
