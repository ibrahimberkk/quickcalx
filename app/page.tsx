import Link from "next/link";

export default function Home() {
  const cards = [
    { title: "Age Calculator", href: "/converters/age-calculator" },
    { title: "BMI Calculator", href: "/converters/bmi-calculator" },
    { title: "Length Converter", href: "/converters/length-converter" },
    { title: "Weight Converter", href: "/converters/weight-converter" },
    { title: "Speed Converter", href: "/converters/speed-converter" },
    { title: "Temperature Converter", href: "/converters/temperature-converter" },
    { title: "Percentage Calculator", href: "/converters/percentage-calculator" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">
          QuickCalx – Fast & Free Online Calculators
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Simple, fast and accurate online calculators for everyday use.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="block p-6 rounded-lg bg-white shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-gray-500 mt-2">Open</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
