import { CheckCircle2 } from "lucide-react";
import Card from "../ui/Card";
import { useCity } from "../../context/CityContext";

export default function Recommendations() {
  const { insights } = useCity().city.ai;
  return <Card className="bg-slate-800/60"><h2 className="mb-5 text-lg font-semibold text-white">AI Recommendations</h2><div className="space-y-4">{insights.map((insight) => <div key={insight} className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-green-400" size={18} /><p className="text-sm text-slate-300">{insight}</p></div>)}</div></Card>;
}
