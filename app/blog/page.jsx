export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((post) => (
          <div key={post} className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Artículo #{post}</h3>
            <p className="text-gray-600">
              Novedades sobre comercio con IA y automatización.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
