import { AlertTriangle } from "lucide-react";
import Card from "../ui/Card";
import { useCity } from "../../context/CityContext";

export default function EnvironmentalAlerts() {
  const { city } = useCity();
  const alerts = city.alerts.filter((alert) => alert.type === "aqi" || alert.type === "water");
  return <Card><h2 className="mb-6 text-xl font-semibold text-white">Environmental Alerts</h2><div className="space-y-4">{alerts.map((alert) => <div key={alert.id} className="rounded-xl border border-slate-700 p-4"><div className="flex items-center gap-3"><AlertTriangle size={20} className={alert.color} /><div className="flex-1"><h3 className="font-medium text-white">{alert.title}</h3><p className="text-sm text-slate-400">{alert.message}</p></div><span className={alert.color}>{city.environment.airQuality}</span></div></div>)}</div></Card>;
}
