export default function ModuleCard({ module, isActive }) {
  return (
    <div className="rounded-xl border p-5">
      <h3 className="font-semibold">{module.name}</h3>
      <p className="text-sm text-muted-foreground">{module.description}</p>

      {isActive ? (
        <span className="mt-4 inline-block rounded bg-green-100 px-3 py-1 text-sm">
          Activo
        </span>
      ) : (
        <a
          href="/checkout"
          className="mt-4 inline-block rounded bg-black px-4 py-2 text-sm text-white"
        >
          Activar
        </a>
      )}
    </div>
  );
}
