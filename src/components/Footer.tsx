// src/components/Footer.tsx

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="font-semibold text-cyan-400">GET STARTED</p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Ready To Simplify Your
            <span className="text-cyan-400"> Freelance Workflow?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Join thousands of freelancers using FlowPilot AI to automate
            proposals, organize clients, and grow faster.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Start Free
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:bg-slate-900">
              Book Demo
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold">FlowPilot AI</h3>

            <p className="mt-2 text-slate-400">
              AI-powered workspace for modern freelancers.
            </p>
          </div>

          <div className="flex gap-6 text-slate-400">
            <a href="#" className="transition hover:text-cyan-400">
              <FaGithub />
            </a>

            <a href="#" className="transition hover:text-cyan-400">
              <FaTwitter />
            </a>

            <a href="#" className="transition hover:text-cyan-400">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} FlowPilot AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
