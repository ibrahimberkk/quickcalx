import Link from "next/link";

export const metadata = {
  title: "All Calculators | QuickCalx",
  description:
    "Browse all free online calculators and converters available on QuickCalx.",
};

export default function ConvertersPage() {
  const calculators = [
    { name: "Age Calculator", href: "/converters/age-calculator" },
    { name: "BMI Calculator", href: "/converters/bmi-calculator" },
    { name: "Length Converter", href: "/converters/length-converter" },
    { name: "Weight Converter", href: "/converters/weight-converter" },
    { name: "Speed Converter", href: "/converters/speed-converter" },
    { name: "Temperature Converter", href: "/converters/temperature-converter" },
    { name: "Percentage Calculator", href: "/converters/percentage-calculator" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          All Calculators
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {calculators.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
