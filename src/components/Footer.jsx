import { Code2, ExternalLink, Plane, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                <Plane size={21} />
              </div>

              <div>
                <p className="text-lg font-bold text-white">AeroCheck AI</p>
                <p className="text-sm text-slate-400">
                  Smart Operations Assistant for Aviation Maintenance Records
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400">
              Built with Gemini, AI Studio, and Cloud Run for{" "}
              <span className="font-semibold text-cyan-300">
                #JuaraVibeCoding
              </span>
              . AeroCheck AI uses fictional maintenance records for demo
              purposes and does not represent real operational aircraft data.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <FooterBadge icon={<Sparkles size={14} />} label="Gemini AI" />
              <FooterBadge icon={<Code2 size={14} />} label="React + Vite" />
              <FooterBadge icon={<ExternalLink size={14} />} label="Cloud Run Ready" />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 md:text-right">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Created by
            </p>

            <p className="mt-2 text-lg font-bold text-white">
              Bayu Frassetyo Wibowo
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Technical Record & Production Planning Control
            </p>

            <div className="mt-5 flex flex-wrap gap-3 md:justify-end">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-200">
                Business Ops
              </span>

              <span className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300">
                Productivity
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 AeroCheck AI. Demo project for #JuaraVibeCoding.
          </p>

          <p>
            Fictional data only • AI-assisted analysis • Built for learning and demonstration
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterBadge({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-300">
      <span className="text-cyan-300">{icon}</span>
      {label}
    </span>
  );
}