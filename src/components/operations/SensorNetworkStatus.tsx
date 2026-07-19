import { Activity, AlertCircle, CheckCircle2, Radio, WifiOff } from "lucide-react";
import { useCity } from "../../context/CityContext";

const statusStyles = {
  Online: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  Degraded: "border-amber-400/20 bg-amber-400/10 text-amber-200",
  Offline: "border-rose-400/20 bg-rose-400/10 text-rose-200",
} as const;

export default function SensorNetworkStatus() {
  const { city } = useCity();

  return (
    <div className="rounded-3xl border border-slate-700/70 bg-slate-900/55 p-5 shadow-[0_20px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">Sensor network status</p>
          <h3 className="mt-1 text-lg font-semibold text-white">Infrastructure health overview</h3>
        </div>
        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
          <span className="mr-2 inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
          Syncing
        </div>
      </div>

      <div className="space-y-3">
        {city.sensors.map((sensor) => (
          <div key={sensor.id} className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-3.5 transition duration-200 hover:border-cyan-400/40">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-2 text-cyan-200">
                  {sensor.status === "Online" ? <Activity size={16} /> : sensor.status === "Degraded" ? <Radio size={16} /> : <AlertCircle size={16} />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{sensor.name}</p>
                  <p className="text-xs text-slate-400">{sensor.onlineDevices} online • {sensor.offlineDevices} offline</p>
                </div>
              </div>
              <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${statusStyles[sensor.status]}`}>
                {sensor.status}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
              <div className="flex items-center gap-2">
                {sensor.health >= 95 ? <CheckCircle2 size={15} className="text-emerald-300" /> : <WifiOff size={15} className="text-amber-300" />}
                <span>Health {sensor.health}%</span>
              </div>
              <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500" style={{ width: `${sensor.health}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
