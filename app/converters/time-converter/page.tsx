"use client";

import { useState } from "react";

export default function TimeConverter() {
  const [hours, setHours] = useState(1);

  return (
    <main className="min-h-screen p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Time Converter</h1>

      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
        className="border p-3 w-full mb-4"
        placeholder="Hours"
      />

      <p>Minutes: {hours * 60}</p>
      <p>Seconds: {hours * 3600}</p>
    </main>
  );
}
