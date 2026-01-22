import LengthConverterClient from "./LengthConverterClient";
import FAQSchema from "@/app/components/FAQSchema";

export const metadata = {
  title: "Length Converter – Meters to Kilometers | QuickCalx",
  description:
    "Free online length converter. Convert meters to kilometers instantly with QuickCalx.",
};

export default function LengthConverterPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-3 text-gray-900">Length Converter</h1>
          <p className="text-gray-700 mb-6">
            Use this free length converter to convert meters to kilometers instantly.
            Results update in real time.
          </p>

          <LengthConverterClient />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">How it works</h2>
            <p className="text-gray-700">
              We convert your input value using standard unit conversion factors.
              Enter a number in meters to see the equivalent in kilometers.
            </p>
          </div>

          <FAQSchema
            items={[
              {
                question: "How many kilometers are in a meter?",
                answer: "1 meter equals 0.001 kilometers.",
              },
              {
                question: "How do I convert meters to kilometers?",
                answer: "Divide the meter value by 1000 to get kilometers.",
              },
              {
                question: "Is this length converter free to use?",
                answer: "Yes. QuickCalx tools are free and work on mobile and desktop.",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
