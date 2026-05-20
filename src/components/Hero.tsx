// src/components/Hero.tsx

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            AI workspace for freelancers
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Stop Managing{" "}
            <span className="text-cyan-400">Freelance Chaos.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            FlowPilot AI helps freelancers write proposals, track tasks, follow
            up with clients, and manage invoices from one smart dashboard.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition">
              Start Free
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl">
          <div className="rounded-2xl bg-slate-950 p-6">
            <div className="mb-6 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm text-slate-400">Today’s AI Summary</p>
                <h3 className="mt-2 text-xl font-semibold">
                  3 proposals ready to send
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Tasks</p>
                  <p className="mt-2 text-3xl font-bold text-cyan-400">12</p>
                </div>

                <div className="rounded-xl bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Invoices</p>
                  <p className="mt-2 text-3xl font-bold text-cyan-400">$4.2k</p>
                </div>
              </div>

              <div className="rounded-xl bg-slate-900 p-4">
                <p className="text-sm text-slate-400">Next Follow-up</p>
                <p className="mt-2 font-medium">
                  Send proposal reminder to Acme Studio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
