import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r hidden md:block">
      <div className="p-6 font-bold text-xl">
        Clianex AI
      </div>

      <nav className="px-4 space-y-2">
        <Link href="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-100">
          Dashboard
        </Link>
        <Link href="/marketplace" className="block px-4 py-2 rounded hover:bg-gray-100">
          Marketplace
        </Link>
        <Link href="/blog" className="block px-4 py-2 rounded hover:bg-gray-100">
          Blog
        </Link>
      </nav>
    </aside>
  );
}
