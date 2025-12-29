import { products } from "../../../lib/data/marketplace";

export default function Product({ params }) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) return <p>Producto no encontrado</p>;
  return (
    <main style={{ padding: 40 }}>
      <h1>{product.name}</h1>
      <p>Precio: {product.price}</p>
    </main>
  );
}
