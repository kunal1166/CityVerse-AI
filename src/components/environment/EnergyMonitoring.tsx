import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";
import Card from "../ui/Card";
import { useCity } from "../../context/CityContext";

export default function EnergyMonitoring() {
  const { city } = useCity();
  const data = city.environment.energyTrend.map((point) => ({ hour: point.label, energy: point.value }));
  return <Card><div className="mb-5"><h2 className="text-xl font-semibold text-white">Energy Monitoring</h2><p className="text-sm text-slate-400">{city.metadata.name} energy consumption</p></div><ResponsiveContainer width="100%" height={300}><AreaChart data={data}><XAxis dataKey="hour" stroke="#94A3B8" /><Tooltip /><Area type="monotone" dataKey="energy" stroke="#FACC15" fill="#EAB308" /></AreaChart></ResponsiveContainer></Card>;
}
