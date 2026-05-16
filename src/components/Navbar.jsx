import { Plane, Radar } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
            <Plane size={20} />
          </div>

          <div>
            <p className="text-sm font-bold tracking-wide text-white">
              AeroCheck AI
            </p>
            <p className="text-xs text-slate-400">
              Maintenance Record Assistant
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#problem" className="transition hover:text-cyan-300">
            Problem
          </a>
          <a href="#solution" className="transition hover:text-cyan-300">
            Solution
          </a>
          <a href="#analyzer" className="transition hover:text-cyan-300">
            Analyzer
          </a>
          <a href="#dashboard" className="transition hover:text-cyan-300">
            Dashboard
          </a>
        </div>

        <a
          href="#analyzer"
          className="hidden items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20 md:flex"
        >
          <Radar size={16} />
          Try Analyzer
        </a>
      </nav>
    </header>
  );
}