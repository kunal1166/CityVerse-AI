import { AlertTriangle, Droplets, Leaf, Radio, Sparkles, Waves } from "lucide-react";
import { useMemo } from "react";
import { useCity } from "../../context/CityContext";
import type { CityOperationEvent } from "../../types/city";

const severityStyles = {
  Low: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  Medium: "border-amber-400/20 bg-amber-400/10 text-amber-200",
  High: "border-orange-400/20 bg-orange-400/10 text-orange-200",
  Critical: "border-rose-400/20 bg-rose-400/10 text-rose-200",
} as const;

const iconMap = {
  traffic: AlertTriangle,
  emergency: Radio,
  incident: Sparkles,
  rain: Waves,
  water: Droplets,
  sensor: Leaf,
  energy: Sparkles,
} as const;

export default function LiveEventStream() {
  const { city } = useCity();

  const events = useMemo(() => city.operations.events, [city.operations.events]);

  return (
    <div className="rounded-3xl border border-slate-700/70 bg-slate-900/55 p-5 shadow-[0_20px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">Live event stream</p>
          <h3 className="mt-1 text-lg font-semibold text-white">Real-time operations timeline</h3>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
          Live
        </div>
      </div>

      <div className="space-y-3">
        {events.map((event: CityOperationEvent) => {
          const Icon = iconMap[event.icon as keyof typeof iconMap] ?? Sparkles;

          return (
            <div key={event.id} className="group rounded-2xl border border-slate-800/80 bg-slate-950/50 p-3 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/40">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-200">
                  <Icon size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-white">{event.title}</p>
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${severityStyles[event.severity]}`}>
                      {event.severity}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span>{event.timestamp}</span>
                    <span>•</span>
                    <span>{event.district}</span>
                    <span>•</span>
                    <span>{event.module}</span>
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
