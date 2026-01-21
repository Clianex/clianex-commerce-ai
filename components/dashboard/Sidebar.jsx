export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-xl font-bold mb-6">Clianex</h2>

      <nav className="space-y-3">
        <a href="/dashboard" className="block hover:text-indigo-400">
          Dashboard
        </a>
        <a href="/dashboard/modules" className="block hover:text-indigo-400">
          Modules
        </a>
        <a href="/marketplace" className="block hover:text-indigo-400">
          Marketplace
        </a>
      </nav>
    </aside>
  );
}
