import WeightConverterClient from "./WeightConverterClient";
import FAQSchema from "@/app/components/FAQSchema";

export const metadata = {
  title: "Weight Converter – Kilograms to Pounds | QuickCalx",
  description:
    "Free online weight converter. Convert kilograms to pounds instantly with QuickCalx.",
};

export default function WeightConverterPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-3 text-gray-900">
            Weight Converter
          </h1>

          <p className="text-gray-700 mb-6">
            Use this free weight converter to convert kilograms to pounds instantly.
            Results update in real time.
          </p>

          <WeightConverterClient />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">How it works</h2>
            <p className="text-gray-700">
              We convert kilograms to pounds using the standard conversion factor:
              1 kilogram equals 2.20462 pounds.
            </p>
          </div>

          <FAQSchema
            items={[
              {
                question: "How many pounds are in a kilogram?",
                answer: "1 kilogram equals 2.20462 pounds.",
              },
              {
                question: "How do I convert kilograms to pounds?",
                answer:
                  "Multiply the kilogram value by 2.20462 to get pounds.",
              },
              {
                question: "Is this weight converter free?",
                answer:
                  "Yes. All QuickCalx calculators are free and work on any device.",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
