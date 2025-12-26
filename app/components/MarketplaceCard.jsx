import Link from "next/link";

export default function MarketplaceCard({ item }) {
  return (
    <Link
      href={`/marketplace/${item.slug}`}
      className="border border-white/10 rounded-xl p-6 hover:border-white/30 transition block"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <span className="text-xs px-2 py-1 rounded-full border border-white/20 text-white/60">
          {item.tag}
        </span>
      </div>

      <p className="text-sm text-white/60 mb-4">
        {item.description}
      </p>

      <span className="text-sm font-semibold">
        {item.price}
      </span>
    </Link>
  );
}
