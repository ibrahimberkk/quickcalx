"use client";

import { useState } from "react";

export default function PercentageCalculatorClient() {
  const [value, setValue] = useState<number>(0);
  const [percent, setPercent] = useState<number>(0);

  const result = (value * percent) / 100;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Value
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full border p-3 rounded mb-4"
        placeholder="Enter value"
      />

      <label className="block text-sm font-medium text-gray-700 mb-2">
        Percentage (%)
      </label>

      <input
        type="number"
        value={percent}
        onChange={(e) => setPercent(Number(e.target.value))}
        className="w-full border p-3 rounded mb-4"
        placeholder="Enter percentage"
      />

      <p className="text-lg text-gray-900">
        <strong>{percent}%</strong> of <strong>{value}</strong> ={" "}
        <strong>{result}</strong>
      </p>
    </div>
  );
}
