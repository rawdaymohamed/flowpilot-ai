// src/components/Features.tsx

import {
  FileText,
  Receipt,
  Users,
  BellRing,
  Timer,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Proposal Generator",
    description: "Generate winning freelance proposals in seconds using AI.",
  },
  {
    icon: Receipt,
    title: "Invoice Tracking",
    description: "Track paid, pending, and overdue invoices effortlessly.",
  },
  {
    icon: Users,
    title: "Client CRM",
    description: "Manage all your freelance clients from one dashboard.",
  },
  {
    icon: BellRing,
    title: "Auto Follow-Ups",
    description: "Never forget to follow up with potential clients again.",
  },
  {
    icon: Timer,
    title: "Time Tracking",
    description: "Track working hours and improve your productivity.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Visualize your freelance growth with smart analytics.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-cyan-400 font-semibold">FEATURES</p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Everything You Need To Run Your Freelance Business
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            FlowPilot AI combines automation, organization, and AI-powered tools
            into one modern workspace.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8 hover:border-cyan-400/40 transition"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10">
                <feature.icon className="h-7 w-7 text-cyan-400" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">{feature.title}</h3>

              <p className="mt-4 text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
