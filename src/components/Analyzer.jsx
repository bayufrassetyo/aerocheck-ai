import { useMemo, useState } from "react";
import {
  AlertCircle,
  Bot,
  CheckCircle2,
  Clipboard,
  ClipboardCheck,
  FileText,
  RotateCcw,
  ShieldAlert,
  Sparkles
} from "lucide-react";
import { maintenanceReports } from "../data/maintenanceReports";
import { demoAnalyses } from "../data/demoAnalyses";

const riskStyles = {
  Low: "border-green-400/30 bg-green-500/10 text-green-300",
  Medium: "border-amber-400/30 bg-amber-500/10 text-amber-300",
  High: "border-red-400/30 bg-red-500/10 text-red-300"
};

const statusStyles = {
  Open: "border-sky-400/30 bg-sky-500/10 text-sky-300",
  "In Progress": "border-amber-400/30 bg-amber-500/10 text-amber-300",
  Closed: "border-green-400/30 bg-green-500/10 text-green-300",
  "Requires Follow-up": "border-red-400/30 bg-red-500/10 text-red-300"
};

export default function Analyzer() {
  const [selectedCaseId, setSelectedCaseId] = useState("");
  const [maintenanceNote, setMaintenanceNote] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  const selectedCase = useMemo(() => {
    return maintenanceReports.find((report) => report.id === selectedCaseId);
  }, [selectedCaseId]);

  function handleSelectCase(event) {
    const caseId = event.target.value;
    const report = maintenanceReports.find((item) => item.id === caseId);

    setSelectedCaseId(caseId);
    setErrorMessage("");
    setCopyMessage("");
    setAnalysisResult(null);

    if (report) {
      setMaintenanceNote(report.rawNote);
    } else {
      setMaintenanceNote("");
    }
  }

  function handleAnalyze() {
    if (!maintenanceNote.trim()) {
      setErrorMessage("Please select a demo case or enter a maintenance note.");
      setAnalysisResult(null);
      return;
    }

    setErrorMessage("");
    setCopyMessage("");

    if (selectedCaseId && demoAnalyses[selectedCaseId]) {
      setAnalysisResult(demoAnalyses[selectedCaseId]);
      return;
    }

    setAnalysisResult({
      summary:
        "Demo mode is currently active. This custom note will be analyzed with Gemini in the next integration step.",
      riskLevel: "Medium",
      riskReason:
        "A default medium risk level is assigned because custom Gemini analysis is not connected yet.",
      keyFindings: [
        "A maintenance note was submitted manually.",
        "Custom AI analysis will be enabled during Gemini API integration.",
        "Manual review is recommended for now."
      ],
      missingInformation: [
        "Gemini API integration is not active yet.",
        "Structured custom analysis is not available in demo mode."
      ],
      recommendedActions: [
        "Use one of the demo cases for full structured analysis.",
        "Continue to the next development step to connect Gemini API.",
        "Review the custom note manually if needed."
      ],
      suggestedStatus: "Requires Follow-up",
      confidenceScore: 0,
      uiTags: ["Demo Mode", "Custom Input", "Gemini Pending"]
    });
  }

  function handleReset() {
    setSelectedCaseId("");
    setMaintenanceNote("");
    setAnalysisResult(null);
    setErrorMessage("");
    setCopyMessage("");
  }

  async function handleCopyResult() {
    if (!analysisResult) return;

    const textToCopy = formatAnalysisForCopy(analysisResult);

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyMessage("Analysis copied to clipboard.");
    } catch {
      setCopyMessage("Unable to copy analysis. Please copy manually.");
    }
  }

  return (
    <section id="analyzer" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
          <Bot size={16} />
          AI Analyzer Demo Mode
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Analyze Maintenance Notes with Structured AI Output
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-300">
          Select a fictional demo maintenance case or paste your own note.
          AeroCheck AI will display a structured summary, risk level, missing
          information, and recommended actions.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="font-bold text-white">Maintenance Input</h3>
              <p className="text-sm text-slate-400">
                Choose a demo case or write a maintenance note.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="case"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Select Demo Case
              </label>

              <select
                id="case"
                value={selectedCaseId}
                onChange={handleSelectCase}
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-cyan-400"
              >
                <option value="">Select a fictional maintenance case</option>
                {maintenanceReports.map((report) => (
                  <option key={report.id} value={report.id}>
                    {report.id} — {report.title}
                  </option>
                ))}
              </select>
            </div>

            {selectedCase && (
              <div className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm sm:grid-cols-2">
                <InfoItem label="Aircraft" value={selectedCase.aircraft} />
                <InfoItem label="ATA" value={selectedCase.ataChapter} />
                <InfoItem label="Category" value={selectedCase.category} />
                <InfoItem label="Priority" value={selectedCase.priority} />
              </div>
            )}

            <div>
              <label
                htmlFor="note"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Maintenance Note
              </label>

              <textarea
                id="note"
                rows="9"
                value={maintenanceNote}
                onChange={(event) => {
                  setMaintenanceNote(event.target.value);
                  setSelectedCaseId("");
                  setAnalysisResult(null);
                  setErrorMessage("");
                  setCopyMessage("");
                }}
                className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm leading-6 text-slate-300 outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                placeholder="Paste or write a maintenance note here..."
              />
            </div>

            {errorMessage && (
              <div className="flex items-start gap-2 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <p>{errorMessage}</p>
              </div>
            )}

            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <button
                onClick={handleAnalyze}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                <Sparkles size={18} />
                Analyze Demo Case
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-200"
              >
                <RotateCcw size={18} />
                Reset
              </button>
            </div>

            <p className="text-xs leading-5 text-slate-500">
              Demo records use fictional aircraft registrations and do not
              represent real operational data.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <ClipboardCheck size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white">AI Analysis Result</h3>
                <p className="text-sm text-slate-400">
                  Structured output optimized for dashboard UI.
                </p>
              </div>
            </div>

            {analysisResult && (
              <button
                onClick={handleCopyResult}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-200"
              >
                <Clipboard size={14} />
                Copy
              </button>
            )}
          </div>

          {!analysisResult ? (
            <EmptyResult />
          ) : (
            <ResultCards result={analysisResult} copyMessage={copyMessage} />
          )}
        </div>
      </div>
    </section>
  );
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-200">{value}</p>
    </div>
  );
}

function EmptyResult() {
  return (
    <div className="flex min-h-[520px] items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/70 p-8 text-center">
      <div>
        <Bot className="mx-auto mb-4 text-cyan-300" size={36} />
        <p className="font-semibold text-white">AI analysis will appear here</p>
        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
          Select a demo case or paste a maintenance note, then click Analyze.
        </p>
      </div>
    </div>
  );
}

function ResultCards({ result, copyMessage }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {result.uiTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <AnalysisCard title="Summary">
        <p className="text-sm leading-6 text-slate-300">{result.summary}</p>
      </AnalysisCard>

      <div className="grid gap-4 md:grid-cols-2">
        <AnalysisCard title="Risk Level">
          <div className="mb-3">
            <span
              className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
                riskStyles[result.riskLevel] || riskStyles.Medium
              }`}
            >
              {result.riskLevel}
            </span>
          </div>
          <p className="text-sm leading-6 text-slate-300">
            {result.riskReason}
          </p>
        </AnalysisCard>

        <AnalysisCard title="Suggested Status">
          <div className="mb-3">
            <span
              className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
                statusStyles[result.suggestedStatus] ||
                statusStyles["Requires Follow-up"]
              }`}
            >
              {result.suggestedStatus}
            </span>
          </div>
          <p className="text-sm text-slate-400">
            Confidence Score:{" "}
            <span className="font-semibold text-slate-100">
              {result.confidenceScore}%
            </span>
          </p>
        </AnalysisCard>
      </div>

      <ListCard title="Key Findings" items={result.keyFindings} />
      <ListCard
        title="Missing Information"
        items={result.missingInformation}
        variant="warning"
      />
      <ListCard
        title="Recommended Actions"
        items={result.recommendedActions}
        variant="success"
      />

      {copyMessage && (
        <div className="flex items-center gap-2 rounded-2xl border border-green-400/30 bg-green-500/10 p-4 text-sm text-green-200">
          <CheckCircle2 size={18} />
          <p>{copyMessage}</p>
        </div>
      )}
    </div>
  );
}

function AnalysisCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-400">
        {title}
      </h4>
      {children}
    </div>
  );
}

function ListCard({ title, items, variant = "default" }) {
  const iconClass =
    variant === "warning"
      ? "text-amber-300"
      : variant === "success"
        ? "text-green-300"
        : "text-cyan-300";

  return (
    <AnalysisCard title={title}>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
            <CheckCircle2 className={`mt-1 shrink-0 ${iconClass}`} size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </AnalysisCard>
  );
}

function formatAnalysisForCopy(result) {
  return `
AeroCheck AI Analysis

Summary:
${result.summary}

Risk Level:
${result.riskLevel}
Reason: ${result.riskReason}

Key Findings:
${result.keyFindings.map((item, index) => `${index + 1}. ${item}`).join("\n")}

Missing Information:
${result.missingInformation
  .map((item, index) => `${index + 1}. ${item}`)
  .join("\n")}

Recommended Actions:
${result.recommendedActions
  .map((item, index) => `${index + 1}. ${item}`)
  .join("\n")}

Suggested Status:
${result.suggestedStatus}

Confidence Score:
${result.confidenceScore}%

Tags:
${result.uiTags.join(", ")}
`.trim();
}