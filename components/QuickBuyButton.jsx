"use client";

export default function QuickBuyButton({ productId }) {
  const handleBuy = () => {
    alert(`Compra rápida iniciada para ${productId}`);
  };

  return (
    <button
      onClick={handleBuy}
      className="bg-green-600 text-white px-4 py-2 rounded-lg"
    >
      Comprar rápido
    </button>
  );
}
