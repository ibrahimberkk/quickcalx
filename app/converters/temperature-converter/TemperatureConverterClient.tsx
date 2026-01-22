"use client";

import { useState } from "react";

export default function TemperatureConverterClient() {
  const [celsius, setCelsius] = useState<number>(0);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Celsius (°C)
      </label>

      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(Number(e.target.value))}
        className="w-full border p-3 rounded mb-4"
        placeholder="Enter Celsius"
      />

      <p className="text-lg text-gray-900">
        <strong>{celsius}</strong> °C ={" "}
        <strong>{(celsius * 9 / 5 + 32).toFixed(2)}</strong> °F
      </p>
    </div>
  );
}
