import { BarChart3, Plane, ShieldAlert, Wrench } from "lucide-react";
import { maintenanceReports } from "../data/maintenanceReports";

function getDashboardStats(reports) {
  return {
    totalReports: reports.length,
    highRiskCases: reports.filter((item) => item.priority === "High").length,
    openCases: reports.filter((item) => item.status === "Open").length,
    inProgressCases: reports.filter((item) => item.status === "In Progress")
      .length,
    closedCases: reports.filter((item) => item.status === "Closed").length
  };
}

const riskBadgeStyles = {
  Low: "border-green-400/30 bg-green-500/10 text-green-300",
  Medium: "border-amber-400/30 bg-amber-500/10 text-amber-300",
  High: "border-red-400/30 bg-red-500/10 text-red-300"
};

const statusBadgeStyles = {
  Open: "border-sky-400/30 bg-sky-500/10 text-sky-300",
  "In Progress": "border-amber-400/30 bg-amber-500/10 text-amber-300",
  Closed: "border-green-400/30 bg-green-500/10 text-green-300"
};

export default function Dashboard() {
  const stats = getDashboardStats(maintenanceReports);

  const statCards = [
    {
      label: "Total Reports",
      value: stats.totalReports,
      icon: <Plane size={20} />,
      helper: "Demo maintenance records"
    },
    {
      label: "High Risk Cases",
      value: stats.highRiskCases,
      icon: <ShieldAlert size={20} />,
      helper: "Need close attention"
    },
    {
      label: "Open Cases",
      value: stats.openCases,
      icon: <Wrench size={20} />,
      helper: "Awaiting follow-up"
    },
    {
      label: "Closed Cases",
      value: stats.closedCases,
      icon: <BarChart3 size={20} />,
      helper: "Completed actions"
    }
  ];

  const recentReports = maintenanceReports.slice(0, 6);

  return (
    <section id="dashboard" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
          <BarChart3 size={16} />
          Operational Overview
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Mini Dashboard for Maintenance Records
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-300">
          A quick snapshot of demo maintenance records to help teams monitor
          risk and follow-up status.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              {item.icon}
            </div>
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="mt-2 text-4xl font-bold text-white">{item.value}</p>
            <p className="mt-2 text-xs text-slate-500">{item.helper}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="text-lg font-bold text-white">Risk Distribution</h3>
          <p className="mt-2 text-sm text-slate-400">
            Based on fictional demo maintenance records.
          </p>

          <div className="mt-6 space-y-4">
            <DistributionBar
              label="High"
              value={stats.highRiskCases}
              total={stats.totalReports}
              className="bg-red-400"
            />
            <DistributionBar
              label="Medium"
              value={
                maintenanceReports.filter((item) => item.priority === "Medium")
                  .length
              }
              total={stats.totalReports}
              className="bg-amber-400"
            />
            <DistributionBar
              label="Low"
              value={
                maintenanceReports.filter((item) => item.priority === "Low")
                  .length
              }
              total={stats.totalReports}
              className="bg-green-400"
            />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-400">
            <p>
              <span className="font-semibold text-slate-200">
                Follow-up needed:
              </span>{" "}
              {stats.openCases + stats.inProgressCases} cases are still open or
              in progress.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70">
          <div className="border-b border-slate-800 p-6">
            <h3 className="text-lg font-bold text-white">Recent Demo Cases</h3>
            <p className="mt-2 text-sm text-slate-400">
              Fictional records prepared for AeroCheck AI demo mode.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-950/70 text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Aircraft</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Risk</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800">
                {recentReports.map((report) => (
                  <tr key={report.id} className="text-slate-300">
                    <td className="px-6 py-4 font-semibold text-white">
                      {report.id}
                    </td>
                    <td className="px-6 py-4">{report.aircraft}</td>
                    <td className="px-6 py-4">{report.category}</td>
                    <td className="px-6 py-4">
                      <Badge
                        label={report.priority}
                        className={
                          riskBadgeStyles[report.priority] ||
                          riskBadgeStyles.Medium
                        }
                      />
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        label={report.status}
                        className={
                          statusBadgeStyles[report.status] ||
                          statusBadgeStyles.Open
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function DistributionBar({ label, value, total, className }) {
  const percentage = Math.round((value / total) * 100);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-300">{label}</span>
        <span className="text-slate-500">
          {value} cases / {percentage}%
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        <div
          className={`h-full rounded-full ${className}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function Badge({ label, className }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${className}`}
    >
      {label}
    </span>
  );
}