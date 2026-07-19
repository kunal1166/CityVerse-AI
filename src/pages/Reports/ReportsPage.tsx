import { Activity, BarChart3, FileText, Sparkles } from "lucide-react";
import { DashboardLayout } from "../../layouts";
import { PageHeader } from "../../components/ui";
import Card from "../../components/ui/Card";
import { useCity } from "../../context/CityContext";

export default function ReportsPage() {
  const { city } = useCity();

  const reportHighlights = [
    {
      title: "Mobility snapshot",
      value: `${city.kpis.traffic}% congestion`,
      detail: "Traffic conditions remain steady across the primary corridor.",
      icon: BarChart3,
    },
    {
      title: "Air quality",
      value: `AQI ${city.kpis.aqi}`,
      detail: "Cleaner air than the previous reporting window.",
      icon: Activity,
    },
    {
      title: "Water resilience",
      value: `${city.kpis.water}% storage`,
      detail: "Reservoirs and piping remain in stable operating range.",
      icon: FileText,
    },
  ];

  return (
    <DashboardLayout>
      <PageHeader
        title={`${city.metadata.name} Operations Reports`}
        subtitle={`Mock report summaries for ${city.metadata.name} generated from the current city context.`}
      />

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <Card className="overflow-hidden">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Executive summary</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Today&apos;s command report</h2>
              <p className="mt-2 text-sm text-slate-400">
                This is a frontend-only mock report view that reacts to the selected city in real time.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-cyan-300">
              <Sparkles size={22} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {reportHighlights.map(({ title, value, detail, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <Icon size={18} className="text-cyan-300" />
                </div>
                <p className="mt-4 text-2xl font-semibold text-cyan-200">{value}</p>
                <p className="mt-2 text-sm text-slate-400">{detail}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">Live context</p>
          <h2 className="mt-2 text-xl font-semibold text-white">City pulse</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between rounded-xl border border-slate-700/70 bg-slate-900/40 px-3 py-2">
              <span>Selected city</span>
              <span className="font-semibold text-white">{city.metadata.name}</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-700/70 bg-slate-900/40 px-3 py-2">
              <span>Active alerts</span>
              <span className="font-semibold text-white">{city.alerts.length}</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-700/70 bg-slate-900/40 px-3 py-2">
              <span>Weather</span>
              <span className="font-semibold text-white">{city.weather.condition}</span>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
