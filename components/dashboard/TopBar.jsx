import { UserButton } from "@clerk/nextjs";

export default function TopBar() {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      <span className="text-sm text-slate-600">
        Dashboard
      </span>

      <UserButton afterSignOutUrl="/" />
    </header>
  );
}
