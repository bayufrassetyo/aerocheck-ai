import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  FileSearch,
  Gauge,
  Lightbulb,
  Plane,
  Rocket,
  Sparkles,
  Target,
  Workflow,
  Zap
} from "lucide-react";

export default function PolishSections() {
  return (
    <>
      <HowItWorks />
      <ImpactSection />
      <UniquenessSection />
      <FinalCTA />
    </>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: <FileSearch size={22} />,
      title: "Input Maintenance Note",
      description:
        "Paste a raw technical note or select one of the fictional demo records prepared for AeroCheck AI."
    },
    {
      icon: <BrainCircuit size={22} />,
      title: "Gemini Analyzes Context",
      description:
        "The AI identifies key findings, risk indicators, missing information, and operational context."
    },
    {
      icon: <ClipboardList size={22} />,
      title: "Get Structured Output",
      description:
        "Receive a clear summary, risk level, missing information list, and recommended follow-up actions."
    },
    {
      icon: <Rocket size={22} />,
      title: "Act Faster",
      description:
        "Use the result to support documentation review, maintenance planning, and follow-up decisions."
    }
  ];

  return (
    <section id="workflow" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeader
        eyebrow="Workflow"
        title="How AeroCheck AI Works"
        description="AeroCheck AI turns unstructured maintenance notes into structured operational insights through a simple four-step workflow."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/40"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                {step.icon}
              </div>

              <span className="text-4xl font-black text-slate-800">
                0{index + 1}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ImpactSection() {
  const beforeItems = [
    "Manual review of long technical notes",
    "Unclear follow-up priority",
    "Missing information may be overlooked",
    "Output format varies between users"
  ];

  const afterItems = [
    "Structured AI-generated summary",
    "Clear risk classification",
    "Missing information highlighted",
    "Consistent action checklist"
  ];

  return (
    <section id="impact" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeader
        eyebrow="Impact"
        title="Built to Improve Documentation Clarity and Follow-Up Speed"
        description="AeroCheck AI helps reduce documentation friction by turning unstructured maintenance notes into clear, review-ready operational insights."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <ComparisonCard
          label="Before AeroCheck AI"
          icon={<Gauge size={22} />}
          items={beforeItems}
          variant="before"
        />

        <ComparisonCard
          label="After AeroCheck AI"
          icon={<Zap size={22} />}
          items={afterItems}
          variant="after"
        />
      </div>

      <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
            <Target size={22} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              Measurable Value Proposition
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              AeroCheck AI helps technical record and maintenance planning teams
              review notes faster, identify unresolved risks, and convert raw
              operational text into consistent follow-up actions.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <MiniImpact label="Faster Review" value="AI Summary" />
              <MiniImpact label="Better Priority" value="Risk Level" />
              <MiniImpact label="Clearer Action" value="Checklist" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UniquenessSection() {
  const cards = [
    {
      icon: <Workflow size={22} />,
      title: "Industry-Specific Workflow",
      description:
        "Built for aviation maintenance documentation, not generic productivity tasks."
    },
    {
      icon: <Plane size={22} />,
      title: "Personal Domain Insight",
      description:
        "Inspired by real technical record and production planning control workflows."
    },
    {
      icon: <Bot size={22} />,
      title: "Action-Oriented AI",
      description:
        "The AI output is designed to support decisions, not just generate text."
    }
  ];

  return (
    <section id="uniqueness" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeader
        eyebrow="Uniqueness"
        title="Why AeroCheck AI Is Different"
        description="Unlike generic AI chatbots, AeroCheck AI is designed around a specific aviation maintenance documentation workflow."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/40 transition hover:border-cyan-400/40"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              {card.icon}
            </div>

            <h3 className="text-lg font-bold text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-amber-300">
            <Lightbulb size={22} />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-amber-300">
              Wow Factor
            </p>
            <h3 className="mt-2 text-xl font-bold text-white">
              From Raw Maintenance Note to Operational Decision Support
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The wow factor is not just that AI summarizes text. AeroCheck AI
              transforms raw maintenance notes into structured operational
              outputs: risk level, missing information, suggested status, and
              recommended follow-up actions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30 md:p-12">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <Sparkles size={16} />
              Built for #JuaraVibeCoding
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Smart Operations Assistant for Aviation Maintenance Records
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              AeroCheck AI is submitted under the Business Ops category with a
              strong Productivity angle. It helps teams convert complex
              maintenance notes into clear summaries, risk levels, missing
              information checks, and actionable follow-up tasks.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#analyzer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                Try AeroCheck AI
                <ArrowRight size={18} />
              </a>

              <a
                href="#impact"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-200"
              >
                View Impact
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
              Triple-Threat Vibe
            </p>

            <div className="mt-5 space-y-4">
              <CriteriaItem
                label="Problem"
                value="Real aviation documentation workflow"
              />
              <CriteriaItem
                label="Solution"
                value="Gemini-powered structured analysis"
              />
              <CriteriaItem
                label="Uniqueness"
                value="Domain-specific operational assistant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
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

function ComparisonCard({ label, icon, items, variant }) {
  const isAfter = variant === "after";

  return (
    <div
      className={`rounded-3xl border p-6 ${
        isAfter
          ? "border-cyan-400/30 bg-cyan-400/10"
          : "border-slate-800 bg-slate-900/70"
      }`}
    >
      <div className="mb-6 flex items-center gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
            isAfter
              ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
              : "border-slate-700 bg-slate-950 text-slate-300"
          }`}
        >
          {icon}
        </div>

        <h3 className="text-xl font-bold text-white">{label}</h3>
      </div>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
            <CheckCircle2
              size={17}
              className={`mt-1 shrink-0 ${
                isAfter ? "text-cyan-300" : "text-slate-500"
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniImpact({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 font-bold text-white">{value}</p>
    </div>
  );
}

function CriteriaItem({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
      <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-100">{value}</p>
    </div>
  );
}