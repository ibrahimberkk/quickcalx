import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow text-center">
        <h1 className="text-3xl font-bold mb-3 text-gray-900">Page not found</h1>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist. Try one of the tools below.
        </p>
        <Link
          href="/converters"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:opacity-90"
        >
          Browse all calculators
        </Link>
      </div>
    </main>
  );
}
