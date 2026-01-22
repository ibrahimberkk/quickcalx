export const metadata = {
  title: "Terms of Service | QuickCalx",
  description: "Terms of Service for using QuickCalx calculators and converters.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

        <p className="text-gray-700 mb-4">
          By accessing and using QuickCalx, you agree to these Terms of Service.
          If you do not agree, please do not use the website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Use of the Website</h2>
        <p className="text-gray-700 mb-4">
          QuickCalx provides calculators and converters for informational purposes only.
          While we aim for accuracy, we do not guarantee that results are error-free.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">No Professional Advice</h2>
        <p className="text-gray-700 mb-4">
          Results and content on this site are not professional advice. For financial,
          medical, or legal decisions, consult a qualified professional.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          QuickCalx is not liable for any damages arising from the use of this website
          or reliance on its results.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Changes</h2>
        <p className="text-gray-700 mb-4">
          We may update these terms at any time. Continued use of the website means
          you accept the updated terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="text-gray-700">
          Questions about these terms? Visit our Contact page.
        </p>
      </div>
    </main>
  );
}
