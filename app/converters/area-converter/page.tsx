"use client";

import { useState } from "react";

export default function AreaConverter() {
  const [sqm, setSqm] = useState(10);

  return (
    <main className="min-h-screen p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Area Converter</h1>

      <input
        type="number"
        value={sqm}
        onChange={(e) => setSqm(Number(e.target.value))}
        className="border p-3 w-full mb-4"
        placeholder="Square meters"
      />

      <p>Square feet: {(sqm * 10.7639).toFixed(2)}</p>
    </main>
  );
}
