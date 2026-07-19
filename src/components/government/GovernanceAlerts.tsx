import { Bell } from "lucide-react";
import Card from "../ui/Card";
import { useCity } from "../../context/CityContext";

export default function GovernanceAlerts() {
  const { city } = useCity();
  return <Card><h2 className="mb-6 text-xl font-semibold text-white">Governance Alerts</h2><div className="space-y-4">{city.alerts.slice(0, 3).map((alert) => <div key={alert.id} className="rounded-xl border border-slate-700 p-4"><div className="flex items-start gap-3"><Bell className={alert.color} size={20} /><div className="flex-1"><h3 className="font-semibold text-white">{alert.title}</h3><p className="mt-1 text-sm text-slate-400">{alert.message}</p></div><span className={alert.color}>Open</span></div></div>)}</div></Card>;
}
