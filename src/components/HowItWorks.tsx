// src/components/HowItWorks.tsx

const steps = [
  {
    number: "01",
    title: "Connect Your Clients",
    description:
      "Import your freelance clients and projects into one organized workspace.",
  },
  {
    number: "02",
    title: "Let AI Organize Everything",
    description:
      "FlowPilot automatically creates tasks, reminders, and proposal drafts.",
  },
  {
    number: "03",
    title: "Focus On Growing",
    description:
      "Spend less time managing admin work and more time landing clients.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold text-cyan-400">HOW IT WORKS</p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Simple Workflow. Powerful Results.
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-400">
            FlowPilot AI streamlines your freelance workflow in just a few
            simple steps.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 text-2xl font-bold">
                {step.number}
              </div>

              <h3 className="mt-8 text-2xl font-semibold">{step.title}</h3>

              <p className="mt-4 leading-relaxed text-slate-400">
                {step.description}
              </p>

              <div className="absolute top-8 right-8 h-24 w-24 rounded-full bg-cyan-400/5 blur-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
