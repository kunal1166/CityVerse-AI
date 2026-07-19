import Card from "../ui/Card";
import { Brain } from "lucide-react";

const recommendations = [
  "Dispatch nearest ambulance to NH-16 accident.",
  "Redirect traffic around Industrial Fire.",
  "Reserve ICU beds at Metro Medical Center.",
  "Deploy additional police units to City Center.",
];

export default function AIEmergencyCoordinator() {
  return (
    <Card>

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-white">
            AI Emergency Coordinator
          </h2>

          <p className="text-sm text-slate-400">
            Intelligent Response Recommendations
          </p>

        </div>

        <Brain
          className="text-cyan-400"
          size={28}
        />

      </div>

      <div className="space-y-3">

        {recommendations.map((item) => (

          <div
            key={item}
            className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 p-4"
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