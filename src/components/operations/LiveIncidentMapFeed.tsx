import { AlertTriangle, Droplets, Flame, MapPinned } from "lucide-react";
import { useCity } from "../../context/CityContext";

const severityStyles = {
  Low: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  Medium: "border-amber-400/20 bg-amber-400/10 text-amber-200",
  High: "border-orange-400/20 bg-orange-400/10 text-orange-200",
  Critical: "border-rose-400/20 bg-rose-400/10 text-rose-200",
} as const;

const iconMap = {
  alert: AlertTriangle,
  droplets: Droplets,
  fire: Flame,
};

export default function LiveIncidentMapFeed() {
  const { city } = useCity();

  return (
    <div className="rounded-3xl border border-slate-700/70 bg-slate-900/55 p-5 shadow-[0_20px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">Live incident map feed</p>
          <h3 className="mt-1 text-lg font-semibold text-white">Latest incidents</h3>
        </div>
        <div className="rounded-full border border-rose-400/20 bg-rose-400/10 px-3 py-1 text-sm text-rose-200">
          <span className="mr-2 inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-rose-400" />
          Active
        </div>
      </div>

      <div className="space-y-3">
        {city.incidents.map((incident) => {
          const Icon = iconMap[incident.icon as keyof typeof iconMap] ?? AlertTriangle;

          return (
            <div key={incident.id} className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/40">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-200">
                  <Icon size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-white">{incident.title}</p>
                    <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${severityStyles[incident.severity]}`}>
                      {incident.severity}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1"><MapPinned size={12} /> {incident.location}</span>
                    <span>•</span>
                    <span>{incident.time}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
