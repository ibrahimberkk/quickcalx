"use client";

import { useState } from "react";

export default function LengthConverterClient() {
  const [meters, setMeters] = useState<number>(0);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Meters
      </label>

      <input
        type="number"
        value={meters}
        onChange={(e) => setMeters(Number(e.target.value))}
        className="w-full border p-3 rounded mb-4"
        placeholder="Enter meters"
      />

      <p className="text-lg text-gray-900">
        <strong>{meters}</strong> meters ={" "}
        <strong>{(meters / 1000).toFixed(6)}</strong> kilometers
      </p>
    </div>
  );
}
