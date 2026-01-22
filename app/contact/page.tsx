export const metadata = {
  title: "Contact | QuickCalx",
  description: "Contact QuickCalx for feedback, suggestions, or support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>

        <p className="text-gray-700 mb-6">
          Have feedback or a calculator request? Reach out to us:
        </p>

        <div className="space-y-3 text-gray-800">
          <p>
            <strong>Email:</strong>{" "}
            <a className="text-blue-600 hover:underline" href="mailto:berkakgun0@gmail.com">
              berkakgun0@gmail.com
            </a>
          </p>

          {/*<p className="text-sm text-gray-600">
            (You can change this email later — for AdSense, having a contact method is important.)
          </p>*/}
        </div>
      </div>
    </main>
  );
}
