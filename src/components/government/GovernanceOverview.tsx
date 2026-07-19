import { Building2, Users, ClipboardCheck, Clock3 } from "lucide-react";
import Card from "../ui/Card";
import { useCity } from "../../context/CityContext";

export default function GovernanceOverview() {
  const { city } = useCity();
  const { serviceCompletion, citizenSatisfaction } = city.government;
  const metrics = [{ title: "Departments", value: 18, icon: Building2, color: "text-cyan-400" }, { title: "Citizens Served", value: city.metadata.population, icon: Users, color: "text-green-400" }, { title: "Requests Closed", value: serviceCompletion, icon: ClipboardCheck, color: "text-yellow-400" }, { title: "Avg Response", value: "2.8 Days", icon: Clock3, color: "text-purple-400" }];
  return <Card><h2 className="mb-2 text-xl font-semibold text-white">City Governance</h2><p className="mb-4 text-sm text-slate-400">Citizen satisfaction: {citizenSatisfaction}</p><div className="grid grid-cols-2 gap-4">{metrics.map(({ title, value, icon: Icon, color }) => <div key={title} className="rounded-xl bg-slate-800 p-4"><Icon size={24} className={color} /><p className="mt-3 text-sm text-slate-400">{title}</p><h3 className="text-3xl font-bold text-white">{value}</h3></div>)}</div></Card>;
}
