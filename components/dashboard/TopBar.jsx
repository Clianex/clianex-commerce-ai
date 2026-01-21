import { UserButton } from "@clerk/nextjs";

export default function TopBar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <span className="text-sm text-gray-600">
        Panel de control
      </span>
      <UserButton afterSignOutUrl="/" />
    </header>
  );
}
