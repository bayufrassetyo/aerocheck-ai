import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  ShieldAlert,
  Sparkles
} from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-7xl px-6 pb-20 pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <Sparkles size={16} />
            AI-Powered Aviation Maintenance Assistant
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Turn Complex Maintenance Notes Into Clear Operational Actions
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            AeroCheck AI helps technical record and maintenance planning teams
            analyze maintenance notes, detect risk levels, identify missing
            information, and generate follow-up checklists using Gemini AI.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#analyzer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              Analyze Maintenance Note
              <ArrowRight size={18} />
            </a>

            <a
              href="#dashboard"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-200"
            >
              View Demo Dashboard
            </a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-4">
            {["Risk Detection", "Missing Info", "Checklist", "Gemini Ready"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-300" />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />

          <div className="relative rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Maintenance Analysis Preview
                </p>
                <p className="text-xs text-slate-400">
                  Demo Case: MNT-001
                </p>
              </div>

              <div className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-300">
                HIGH RISK
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <InfoCard label="Aircraft" value="PK-AXA" />
                <InfoCard label="ATA Chapter" value="29 - Hydraulic" />
              </div>

              <PreviewBlock
                icon={<FileSearch size={18} />}
                title="Summary"
                text="Intermittent hydraulic pressure drop reported during pre-flight inspection. No external leakage found, but further troubleshooting is required."
              />

              <PreviewBlock
                icon={<ShieldAlert size={18} />}
                title="Recommended Action"
                text="Perform hydraulic pressure system test, inspect related components, and escalate before next scheduled operation."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-100">{value}</p>
    </div>
  );
}

function PreviewBlock({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <div className="mb-2 flex items-center gap-2 text-cyan-300">
        {icon}
        <p className="font-semibold text-slate-100">{title}</p>
      </div>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}