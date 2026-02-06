import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | 99 Real Estate Group",
  description:
    "Frequently asked questions about construction, packages, pricing, timelines, and process at 99 Real Estate Group.",
};

const faqs = [
  {
    question: "What services does 99 Real Estate Group provide?",
    answer:
      "We offer residential construction, commercial development, renovation & remodeling, turnkey projects, and complete project management services.",
  },
  {
    question: "Do you provide construction packages?",
    answer:
      "Yes. We offer transparent construction packages based on material quality, design scope, and budget. You can view details on our Packages page or contact us for a custom quote.",
  },
  {
    question: "How long does a typical construction project take?",
    answer:
      "Project timelines depend on size and complexity. On average, residential projects take 6–10 months. We provide a detailed timeline before starting any project.",
  },
  {
    question: "Do you handle approvals and documentation?",
    answer:
      "Yes. We assist with drawings, approvals, coordination with architects, and documentation required for smooth execution.",
  },
  {
    question: "Can I customize my design and materials?",
    answer:
      "Absolutely. All designs, layouts, and materials can be customized to match your preferences and budget.",
  },
  {
    question: "Do you provide post-construction support?",
    answer:
      "Yes. We provide handover support, maintenance guidance, and warranty assistance after project completion.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-black py-32 text-center text-white">
        <p className="text-xs tracking-[0.35em] text-zinc-400 uppercase">
          Help Center
        </p>
        <h1 className="mt-6 text-5xl font-extrabold uppercase md:text-6xl">
          Frequently Asked <span className="text-yellow-400">Questions</span>
        </h1>
        <div className="mx-auto mt-6 h-1 w-20 bg-yellow-400" />
      </section>

      {/* ================= FAQ LIST ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-zinc-200 p-6 transition hover:shadow-lg"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold">
                  {faq.question}
                  <span className="ml-4 text-yellow-400 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-zinc-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-zinc-100 py-20 text-center">
        <h2 className="text-3xl font-extrabold uppercase">
          Still Have Questions?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600">
          Talk to our experts for personalized guidance on your construction
          requirements.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-block rounded-md bg-black px-8 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-yellow-400 hover:text-black"
        >
          CONTACT US
        </a>
      </section>
    </main>
  );
}