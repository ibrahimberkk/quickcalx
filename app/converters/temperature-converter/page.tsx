import TemperatureConverterClient from "./TemperatureConverterClient";
import FAQSchema from "@/app/components/FAQSchema";

export const metadata = {
  title: "Temperature Converter – Celsius to Fahrenheit | QuickCalx",
  description:
    "Free online temperature converter. Convert Celsius to Fahrenheit instantly with QuickCalx.",
};

export default function TemperatureConverterPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-3 text-gray-900">
            Temperature Converter
          </h1>

          <p className="text-gray-700 mb-6">
            Convert Celsius to Fahrenheit instantly. Results update in real time
            as you type.
          </p>

          <TemperatureConverterClient />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">How it works</h2>
            <p className="text-gray-700">
              We convert Celsius to Fahrenheit using the standard formula:
              °F = (°C × 9/5) + 32.
            </p>
          </div>

          <FAQSchema
            items={[
              {
                question: "How do I convert Celsius to Fahrenheit?",
                answer: "Use the formula °F = (°C × 9/5) + 32.",
              },
              {
                question: "What is 0°C in Fahrenheit?",
                answer: "0°C equals 32°F.",
              },
              {
                question: "Is this temperature converter accurate?",
                answer:
                  "Yes. It uses standard temperature conversion formulas and updates instantly.",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
