// src/components/Pricing.tsx

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for beginners starting freelancing.",
    features: [
      "3 AI proposals per month",
      "Basic task management",
      "Invoice tracking",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "Best for serious freelancers growing fast.",
    features: [
      "Unlimited AI proposals",
      "Advanced analytics",
      "Client CRM",
      "Priority support",
      "Auto follow-ups",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$49",
    description: "Built for freelance teams and agencies.",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Admin dashboard",
      "Custom integrations",
      "Dedicated support",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold text-cyan-400">PRICING</p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Simple Pricing For Every Freelancer
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-400">
            Choose the perfect plan to manage your freelance business smarter
            and faster.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 transition ${
                plan.highlighted
                  ? "border-cyan-400 bg-slate-900 scale-105"
                  : "border-slate-800 bg-slate-900/50"
              }`}
            >
              {plan.highlighted && (
                <div className="mb-6 inline-block rounded-full bg-cyan-400 px-4 py-1 text-sm font-semibold text-slate-950">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold">{plan.name}</h3>

              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-bold">{plan.price}</span>

                <span className="mb-1 text-slate-400">/month</span>
              </div>

              <p className="mt-6 text-slate-400">{plan.description}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />

                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-3 font-semibold transition ${
                  plan.highlighted
                    ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    : "bg-slate-800 text-white hover:bg-slate-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
