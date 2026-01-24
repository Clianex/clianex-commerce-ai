export default function KPICard({ label, value, trend }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-3xl font-bold text-slate-900">
        {value}
      </div>
      <div className="mt-1 text-xs text-emerald-600">
        {trend}
      </div>
    </div>
  );
}
