import { Ambulance, ShieldAlert, Siren, Clock3 } from "lucide-react";
import Card from "../ui/Card";
import { useCity } from "../../context/CityContext";

export default function EmergencyOverview() {
  const { emergency } = useCity().city;
  const metrics = [{ title: "Active Emergencies", value: emergency.activeIncidents, icon: Siren, color: "text-red-400" }, { title: "Ambulances", value: emergency.activeIncidents * 8 + 10, icon: Ambulance, color: "text-cyan-400" }, { title: "Critical Alerts", value: emergency.activeIncidents, icon: ShieldAlert, color: "text-yellow-400" }, { title: "Avg Response", value: `${Math.max(4, 8 - emergency.activeIncidents)} min`, icon: Clock3, color: "text-green-400" }];
  return <Card><h2 className="mb-6 text-xl font-semibold text-white">Emergency Overview</h2><div className="grid grid-cols-2 gap-4">{metrics.map(({ title, value, icon: Icon, color }) => <div key={title} className="rounded-xl bg-slate-800 p-4"><Icon className={color} size={24} /><p className="mt-3 text-sm text-slate-400">{title}</p><h3 className="text-3xl font-bold text-white">{value}</h3></div>)}</div></Card>;
}
