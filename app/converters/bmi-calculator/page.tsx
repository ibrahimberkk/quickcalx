import BmiCalculatorClient from "./BmiCalculatorClient";
import FAQSchema from "@/app/components/FAQSchema";

export const metadata = {
  title: "BMI Calculator | QuickCalx",
  description:
    "Free online BMI calculator. Calculate your Body Mass Index easily with QuickCalx.",
};

export default function BmiCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-3 text-gray-900">
            BMI Calculator
          </h1>

          <p className="text-gray-700 mb-6">
            Calculate your Body Mass Index (BMI) using your height and weight.
          </p>

          <BmiCalculatorClient />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">How it works</h2>
            <p className="text-gray-700">
              BMI is calculated by dividing your weight (kg) by the square of
              your height (m).
            </p>
          </div>

          <FAQSchema
            items={[
              {
                question: "What is a healthy BMI range?",
                answer:
                  "A BMI between 18.5 and 24.9 is generally considered healthy.",
              },
              {
                question: "Is BMI an accurate health measure?",
                answer:
                  "BMI is a general indicator and does not account for muscle mass or body composition.",
              },
              {
                question: "Is this BMI calculator free?",
                answer:
                  "Yes. All QuickCalx calculators are free to use.",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
