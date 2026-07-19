import Card from "../ui/Card";
import { Brain } from "lucide-react";

const recommendations = [
  "Increase solar generation in Industrial Zone.",
  "Plant 2,000 trees in Central City.",
  "Optimize traffic signals to reduce CO₂ emissions.",
  "Increase waste recycling by 15% in North Zone.",
];

export default function SustainabilityAdvisor() {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            AI Sustainability Advisor
          </h2>

          <p className="text-sm text-slate-400">
            Recommended Environmental Actions
          </p>
        </div>

        <Brain
          size={28}
          className="text-cyan-400"
        />
      </div>

      <div className="space-y-3">
        {recommendations.map((item) => (
          <div
            key={item}
            className="rounded-lg bg-cyan-500/10 border border-cyan-500/20 p-4"
          >
            <p className="text-slate-300">
              💡 {item}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}