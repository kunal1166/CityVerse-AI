import Card from "../ui/Card";
import {
  AlertTriangle,
  Car,
  Droplets,
  Leaf,
} from "lucide-react";

import { useCity } from "../../context/CityContext";

const icons = {
  accident: AlertTriangle,
  traffic: Car,
  water: Droplets,
  aqi: Leaf,
  weather: AlertTriangle,
  emergency: AlertTriangle,
};

export default function LiveAlerts() {
  const { city } = useCity();

  return (
    <Card className="h-full">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-300">Operations feed</p>
        <h2 className="mt-1 text-xl font-semibold text-white">
          Live Alerts
        </h2>

        <p className="text-sm text-slate-400">
          Real-time {city.metadata.name} Status
        </p>
      </div>

      <div className="space-y-3">
        {city.alerts.map((alert) => {
          const Icon =
            icons[alert.type as keyof typeof icons] ?? AlertTriangle;

          return (
            <div
              key={alert.id}
              className="group flex items-center gap-3 rounded-xl border border-slate-700/80 bg-slate-900/45 p-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-slate-800/80"
            >
              <div className={`rounded-lg bg-slate-800 p-2 ${alert.color}`}><Icon size={18} /></div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-white">
                  {alert.title}
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  {alert.message}
                </p>
              </div><span className={`rounded-full border border-current/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${alert.color}`}>{alert.type}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
