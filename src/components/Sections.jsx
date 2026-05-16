import {
  AlertTriangle,
  BarChart3,
  Bot,
  CheckSquare,
  ClipboardList,
  Clock,
  FileText,
  SearchCheck,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default function Sections() {
  return (
    <>
      <section id="problem" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader
          eyebrow="Problem"
          title="Maintenance Records Are Critical, But Often Hard to Review Fast"
          description="Aviation maintenance notes are often written in long, technical, and inconsistent formats. Important details such as aircraft registration, ATA chapter, corrective action, release status, and urgency can be missed during manual review."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<FileText />}
            title="Scattered Technical Notes"
            description="Maintenance findings may be written in different formats, making them harder to review quickly."
          />
          <FeatureCard
            icon={<AlertTriangle />}
            title="Missed Follow-Up Details"
            description="Critical information such as corrective action or release status may be incomplete or unclear."
          />
          <FeatureCard
            icon={<Clock />}
            title="Slow Prioritization"
            description="Teams need to quickly decide which cases require immediate attention before operation."
          />
        </div>
      </section>

      <section id="solution" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader
          eyebrow="Solution"
          title="One AI Workflow for Clearer Maintenance Decisions"
          description="AeroCheck AI transforms raw maintenance notes into structured insights that are easier to review, prioritize, and act on."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Bot />}
            title="AI Summary"
            description="Summarizes long maintenance notes into concise operational reports."
          />
          <FeatureCard
            icon={<ShieldCheck />}
            title="Risk Level Detection"
            description="Classifies cases into Low, Medium, or High risk levels."
          />
          <FeatureCard
            icon={<SearchCheck />}
            title="Missing Info Checker"
            description="Highlights missing details such as release status, corrective action, or inspection time."
          />
          <FeatureCard
            icon={<CheckSquare />}
            title="Action Checklist"
            description="Generates practical follow-up actions for maintenance teams."
          />
          <FeatureCard
            icon={<ClipboardList />}
            title="Suggested Status"
            description="Suggests whether a case is Open, In Progress, Closed, or Requires Follow-up."
          />
          <FeatureCard
            icon={<BarChart3 />}
            title="Dashboard Overview"
            description="Shows risk and status distribution from demo maintenance records."
          />
        </div>
      </section>
    </>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
        <Sparkles size={16} />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/40 transition hover:border-cyan-400/40 hover:bg-slate-900">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}