export const metadata = {
  title: "About | QuickCalx",
  description: "Learn more about QuickCalx and our free online calculators.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4">About QuickCalx</h1>

        <p className="text-gray-700 mb-4">
          QuickCalx is a free online calculator and converter website built to help you
          calculate and convert values quickly and accurately.
        </p>

        <p className="text-gray-700 mb-4">
          We focus on fast-loading tools, simple design, and clear results — so you can
          get what you need without distractions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">What we offer</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Unit converters (length, weight, speed, temperature, and more)</li>
          <li>Everyday calculators (BMI, age, percentage, and more)</li>
          <li>Mobile-friendly, fast and easy-to-use tools</li>
        </ul>
      </div>
    </main>
  );
}
