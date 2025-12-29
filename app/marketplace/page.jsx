import Link from "next/link";
import { products } from "../../lib/data/marketplace";

export default function Marketplace() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Marketplace</h1>
      <ul>
        {products.map(p => (
          <li key={p.slug}>
            <Link href={`/marketplace/${p.slug}`}>
              {p.name} - {p.price}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
