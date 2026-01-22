"use client";

import { useState } from "react";

export default function VolumeConverter() {
  const [liters, setLiters] = useState(1);

  return (
    <main className="min-h-screen p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Volume Converter</h1>

      <input
        type="number"
        value={liters}
        onChange={(e) => setLiters(Number(e.target.value))}
        className="border p-3 w-full mb-4"
        placeholder="Liters"
      />

      <p>Milliliters: {liters * 1000}</p>
      <p>Gallons: {(liters * 0.264172).toFixed(2)}</p>
    </main>
  );
}
