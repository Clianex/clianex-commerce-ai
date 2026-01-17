"use client";

export default function ShoppableImage({ image, hotspots = [] }) {
  return (
    <div className="relative inline-block">
      <img
        src={image}
        alt="Shoppable"
        className="rounded-xl shadow-lg w-full max-w-xl"
      />

      {hotspots.map((h, i) => (
        <button
          key={i}
          style={{ top: h.y, left: h.x }}
          className="absolute w-6 h-6 bg-blue-600 rounded-full animate-pulse"
          title={h.label}
        />
      ))}
    </div>
  );
}
