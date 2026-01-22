"use client";

import { useState } from "react";

export default function SpeedConverterClient() {
  const [kmh, setKmh] = useState<number>(0);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Kilometers per hour (km/h)
      </label>

      <input
        type="number"
        value={kmh}
        onChange={(e) => setKmh(Number(e.target.value))}
        className="w-full border p-3 rounded mb-4"
        placeholder="Enter km/h"
      />

      <p className="text-lg text-gray-900">
        <strong>{kmh}</strong> km/h ={" "}
        <strong>{(kmh * 0.621371).toFixed(2)}</strong> mph
      </p>
    </div>
  );
}
