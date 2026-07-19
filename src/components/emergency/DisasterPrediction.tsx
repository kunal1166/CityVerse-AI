import Card from "../ui/Card";
import {
  CloudLightning,
  AlertTriangle,
} from "lucide-react";

const risks = [
  {
    event: "Flash Flood",
    probability: "84%",
    zone: "River Side",
    color: "text-red-400",
  },
  {
    event: "Heat Wave",
    probability: "73%",
    zone: "Central City",
    color: "text-orange-400",
  },
  {
    event: "Thunderstorm",
    probability: "52%",
    zone: "North Zone",
    color: "text-yellow-400",
  },
];

export default function DisasterPrediction() {
  return (
    <Card>

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-white">
            Disaster Prediction
          </h2>

          <p className="text-sm text-slate-400">
            AI Risk Assessment
          </p>

        </div>

        <CloudLightning
          className="text-purple-400"
          size={28}
        />

      </div>

      <div className="space-y-4">

        {risks.map((risk) => (

          <div
            key={risk.event}
            className="rounded-xl border border-slate-700 p-4"
          >

            <div className="flex items-center gap-3">

              <AlertTriangle
                className={risk.color}
                size={20}
              />

              <div className="flex-1">

                <h3 className="text-white">
                  {risk.event}
                </h3>

                <p className="text-sm text-slate-400">
                  {risk.zone}
                </p>

              </div>

              <span className={risk.color}>
                {risk.probability}
              </span>

            </div>

          </div>

        ))}

      </div>

    </Card>
  );
}