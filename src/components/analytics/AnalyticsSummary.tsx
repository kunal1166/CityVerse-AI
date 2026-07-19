import Card from "../ui/Card";
import { useCity } from "../../context/CityContext";

const tones = { cyan: "text-cyan-400", green: "text-green-400", blue: "text-blue-400", red: "text-red-400", yellow: "text-yellow-400", orange: "text-orange-400", purple: "text-purple-400" };
export default function AnalyticsSummary() {
  const { dailySummary } = useCity().city.analytics;
  return <Card><h2 className="mb-5 text-lg font-semibold text-white">Daily Analytics</h2><div className="space-y-4">{dailySummary.map((metric) => <div key={metric.label} className="flex justify-between"><span className="text-slate-400">{metric.label}</span><span className={`font-semibold ${tones[metric.tone]}`}>{metric.value}</span></div>)}</div></Card>;
}
