import { auth } from "@clerk/nextjs/server";
import { getActiveModules } from "@/lib/modules";
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const { userId } = auth();
  const modules = await getActiveModules(userId);

  return (
    <section className="p-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {modules.map((module) => (
          <div
            key={module.key}
            className="rounded-lg border p-4 shadow-sm"
          >
            <h3 className="font-medium">{module.name}</h3>
            <p className="text-sm text-muted-foreground">
              Estado: activo
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
