import { auth } from "@clerk/nextjs/server";
import { getActiveModules } from "@/lib/modules";
import Link from "next/link";

export default async function Sidebar() {
  const { userId } = auth();
  const modules = await getActiveModules(userId);

  return (
    <aside className="w-64 border-r bg-background p-4">
      <nav className="space-y-2">
        <Link href="/dashboard" className="block font-medium">
          Dashboard
        </Link>

        {modules.map((module) => (
          <Link
            key={module.key}
            href={`/${module.key}`}
            className="block rounded px-3 py-2 text-sm hover:bg-muted"
          >
            {module.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
