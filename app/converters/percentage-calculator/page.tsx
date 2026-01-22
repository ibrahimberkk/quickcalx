import PercentageCalculatorClient from "./PercentageCalculatorClient";
import FAQSchema from "@/app/components/FAQSchema";

export const metadata = {
  title: "Percentage Calculator | QuickCalx",
  description:
    "Free online percentage calculator. Calculate percentages instantly with QuickCalx.",
};

export default function PercentageCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-3 text-gray-900">
            Percentage Calculator
          </h1>

          <p className="text-gray-700 mb-6">
            Calculate percentages quickly and easily. Enter a value and a
            percentage to see the result instantly.
          </p>

          <PercentageCalculatorClient />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">How it works</h2>
            <p className="text-gray-700">
              The calculator multiplies the given value by the percentage and
              divides the result by 100.
            </p>
          </div>

          <FAQSchema
            items={[
              {
                question: "How do I calculate a percentage?",
                answer:
                  "Multiply the value by the percentage and divide by 100.",
              },
              {
                question: "What is 20% of 50?",
                answer: "20% of 50 equals 10.",
              },
              {
                question: "Is this percentage calculator free?",
                answer:
                  "Yes. All QuickCalx calculators are completely free to use.",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
