import Card from "../ui/Card";
import { useCity } from "../../context/CityContext";

const tones = { cyan: "text-cyan-400", green: "text-green-400", blue: "text-blue-400", red: "text-red-400", yellow: "text-yellow-400", orange: "text-orange-400", purple: "text-purple-400" };
export default function RiskAssessment() {
  const { risks } = useCity().city.ai;
  return <Card className="bg-slate-800/60"><h2 className="mb-5 text-lg font-semibold text-white">Risk Assessment</h2><div className="space-y-4">{risks.map((risk) => <div key={risk.label} className="flex items-center justify-between"><span className="text-slate-400">{risk.label}</span><span className={`font-semibold ${tones[risk.tone]}`}>{risk.value}</span></div>)}</div></Card>;
}
