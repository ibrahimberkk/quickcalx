import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-16">
      <div className="max-w-6xl mx-auto p-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-sm text-gray-600">
        <p>© {new Date().getFullYear()} QuickCalx</p>

        <div className="flex gap-4">
          <Link className="hover:underline" href="/about">About</Link>
          <Link className="hover:underline" href="/privacy-policy">Privacy Policy</Link>
          <Link className="hover:underline" href="/contact">Contact</Link>
          <Link className="hover:underline" href="/terms">Terms</Link>

        </div>
      </div>
    </footer>
  );
}
