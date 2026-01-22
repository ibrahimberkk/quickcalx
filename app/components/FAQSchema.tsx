type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQSchema({
  title = "Frequently Asked Questions",
  items,
}: {
  title?: string;
  items: FAQItem[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  };

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="space-y-4">
        {items.map((it, idx) => (
          <details key={idx} className="border rounded-lg p-4 bg-white">
            <summary className="cursor-pointer font-medium">
              {it.question}
            </summary>
            <p className="mt-2 text-gray-700">{it.answer}</p>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
