// src/components/FAQ.tsx

const faqs = [
  {
    question: "Is FlowPilot AI free to use?",
    answer:
      "Yes. You can start with the free plan and upgrade whenever you need more AI proposals, automation, and analytics.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel your subscription anytime without hidden fees.",
  },
  {
    question: "Does it work for all freelancers?",
    answer:
      "Yes. FlowPilot AI is designed for designers, developers, writers, consultants, marketers, and agencies.",
  },
  {
    question: "Does FlowPilot AI send follow-ups automatically?",
    answer:
      "Yes. You can create smart reminders and automated follow-up messages for clients and leads.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="font-semibold text-cyan-400">FAQ</p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-slate-400">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>

              <p className="mt-3 leading-relaxed text-slate-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
