// src/components/Testimonials.tsx

import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    review:
      "FlowPilot AI completely changed how I manage freelance clients. I save hours every week.",
  },
  {
    name: "David Miller",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    review:
      "The AI proposal generator alone helped me close more projects faster than ever.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Consultant",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
    review:
      "Everything feels organized now — invoices, follow-ups, tasks, all in one place.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold text-cyan-400">TESTIMONIALS</p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Loved By Freelancers Worldwide
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-400">
            Thousands of freelancers use FlowPilot AI to simplify their workflow
            and grow faster.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-8"
            >
              <p className="text-slate-300 leading-relaxed">
                “{testimonial.review}”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Image
                  width={56}
                  height={56}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>

                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
