import Link from "next/link";
import { LayoutGrid, Store, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 hidden lg:flex flex-col bg-bg-soft border-r border-border">
      <div className="h-16 flex items-center px-6 font-bold text-white">
        Clianex
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <SidebarItem href="/dashboard" icon={<LayoutGrid size={18} />}>
          Dashboard
        </SidebarItem>
        <SidebarItem href="/marketplace" icon={<Store size={18} />}>
          Marketplace
        </SidebarItem>
        <SidebarItem href="/settings" icon={<Settings size={18} />}>
          Settings
        </SidebarItem>
      </nav>
    </aside>
  );
}

function SidebarItem({ href, icon, children }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-text-soft hover:bg-bg hover:text-white transition"
    >
      {icon}
      {children}
    </Link>
  );
}
