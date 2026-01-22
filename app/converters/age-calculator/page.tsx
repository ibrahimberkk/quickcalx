import AgeCalculatorClient from "./AgeCalculatorClient";
import FAQSchema from "@/app/components/FAQSchema";

export const metadata = {
  title: "Age Calculator | QuickCalx",
  description:
    "Free online age calculator. Calculate your age instantly based on your birth year.",
};

export default function AgeCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-3 text-gray-900">
            Age Calculator
          </h1>

          <p className="text-gray-700 mb-6">
            Enter your birth year to calculate your age instantly.
          </p>

          <AgeCalculatorClient />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">How it works</h2>
            <p className="text-gray-700">
              The calculator subtracts your birth year from the current year
              to estimate your age.
            </p>
          </div>

          <FAQSchema
            items={[
              {
                question: "How accurate is this age calculator?",
                answer:
                  "It provides an approximate age based on the current year and your birth year.",
              },
              {
                question: "Can I calculate my exact age?",
                answer:
                  "For exact age including months and days, you would need to enter your full birth date.",
              },
              {
                question: "Is this age calculator free?",
                answer:
                  "Yes. All QuickCalx tools are free to use.",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
