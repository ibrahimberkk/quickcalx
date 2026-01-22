"use client";

import { useState } from "react";

export default function WeightConverterClient() {
  const [kg, setKg] = useState<number>(0);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Kilograms
      </label>

      <input
        type="number"
        value={kg}
        onChange={(e) => setKg(Number(e.target.value))}
        className="w-full border p-3 rounded mb-4"
        placeholder="Enter kilograms"
      />

      <p className="text-lg text-gray-900">
        <strong>{kg}</strong> kg ={" "}
        <strong>{(kg * 2.20462).toFixed(2)}</strong> lb
      </p>
    </div>
  );
}
