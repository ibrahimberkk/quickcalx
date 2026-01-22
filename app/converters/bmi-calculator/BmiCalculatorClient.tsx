"use client";

import { useState } from "react";

export default function BmiCalculatorClient() {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(170);

  const heightInMeters = height / 100;
  const bmi =
    heightInMeters > 0 ? weight / (heightInMeters * heightInMeters) : 0;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Weight (kg)
      </label>

      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
        className="w-full border p-3 rounded mb-4"
        placeholder="Enter weight"
      />

      <label className="block text-sm font-medium text-gray-700 mb-2">
        Height (cm)
      </label>

      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
        className="w-full border p-3 rounded mb-4"
        placeholder="Enter height"
      />

      <p className="text-lg text-gray-900">
        Your BMI is <strong>{bmi.toFixed(1)}</strong>
      </p>
    </div>
  );
}
