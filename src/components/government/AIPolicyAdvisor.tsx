import Card from "../ui/Card";
import { Brain } from "lucide-react";

const recommendations = [
  {
    title: "Transportation",
    description: "Increase public bus frequency by 12% during peak hours.",
  },
  {
    title: "Water",
    description: "Deploy leak detection sensors in Zone 4.",
  },
  {
    title: "Environment",
    description: "Expand urban green cover by 8% this quarter.",
  },
  {
    title: "Emergency",
    description: "Reposition one ambulance near NH-16 during evenings.",
  },
];

export default function AIPolicyAdvisor() {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            AI Policy Advisor
          </h2>

          <p className="text-sm text-slate-400">
            AI-generated governance recommendations
          </p>
        </div>

        <Brain className="text-cyan-400" size={28} />
      </div>

      <div className="space-y-4">
        {recommendations.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4"
          >
            <h3 className="font-semibold text-white">{item.title}</h3>

            <p className="mt-2 text-sm text-slate-300">
              💡 {item.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}