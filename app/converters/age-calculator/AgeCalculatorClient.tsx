"use client";

import { useState } from "react";

export default function AgeCalculatorClient() {
  const [birthYear, setBirthYear] = useState<number>(2000);

  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Birth year
      </label>

      <input
        type="number"
        value={birthYear}
        onChange={(e) => setBirthYear(Number(e.target.value))}
        className="w-full border p-3 rounded mb-4"
        placeholder="Enter birth year"
      />

      <p className="text-lg text-gray-900">
        You are approximately <strong>{age}</strong> years old.
      </p>
    </div>
  );
}
