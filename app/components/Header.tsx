import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex gap-6 px-8 py-4 border-b">
      <Link href="/">QuickCalx</Link>

      <Link href="/converters/age-calculator">Age</Link>
      <Link href="/converters/bmi-calculator">BMI</Link>
      <Link href="/converters/length-converter">Length</Link>
      <Link href="/converters/weight-converter">Weight</Link>
      <Link href="/converters/speed-converter">Speed</Link>
      <Link href="/converters/temperature-converter">Temperature</Link>
      <Link href="/converters/percentage-calculator">Percentage</Link>
    </nav>
  );
}
