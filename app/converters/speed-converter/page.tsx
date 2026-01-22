import SpeedConverterClient from "./SpeedConverterClient";
import FAQSchema from "@/app/components/FAQSchema";

export const metadata = {
  title: "Speed Converter – km/h to mph | QuickCalx",
  description:
    "Free online speed converter. Convert kilometers per hour to miles per hour instantly with QuickCalx.",
};

export default function SpeedConverterPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-3 text-gray-900">
            Speed Converter
          </h1>

          <p className="text-gray-700 mb-6">
            Convert kilometers per hour (km/h) to miles per hour (mph) instantly.
          </p>

          <SpeedConverterClient />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">How it works</h2>
            <p className="text-gray-700">
              We convert km/h to mph using the standard conversion factor:
              1 km/h equals 0.621371 mph.
            </p>
          </div>

          <FAQSchema
            items={[
              {
                question: "How many mph is 1 km/h?",
                answer: "1 km/h equals 0.621371 mph.",
              },
              {
                question: "How do I convert km/h to mph?",
                answer:
                  "Multiply the km/h value by 0.621371 to get mph.",
              },
              {
                question: "Is this speed converter free to use?",
                answer:
                  "Yes. All QuickCalx tools are free and available on any device.",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
