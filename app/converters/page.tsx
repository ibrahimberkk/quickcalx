const calculators = [
  { name: "Age Calculator", path: "/age" },
  { name: "BMI Calculator", path: "/bmi" },
  { name: "Length Converter", path: "/length" },
  { name: "Weight Converter", path: "/weight" },
  { name: "Speed Converter", path: "/speed" },
  { name: "Temperature Converter", path: "/temperature" },
  { name: "Percentage Calculator", path: "/percentage" },
];

<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {calculators.map((c) => (
    <a
      key={c.path}
      href={c.path}
      className="block text-center bg-black text-white py-3 rounded-lg hover:opacity-90"
    >
      {c.name}
    </a>
  ))}
</div>
