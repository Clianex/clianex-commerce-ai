import DashboardGrid from "../../../components/dashboard/DashboardGrid";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Dashboard
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Vista general del rendimiento de tu sistema Clianex AI.
        </p>
      </div>

      <DashboardGrid />
    </div>
  );
}
