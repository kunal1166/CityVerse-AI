import Card from "../ui/Card";
import {
  Wind,
  Factory,
} from "lucide-react";

const pollutants = [
  {
    name: "PM2.5",
    value: "32 µg/m³",
    status: "Moderate",
    color: "text-yellow-400",
  },
  {
    name: "PM10",
    value: "51 µg/m³",
    status: "Good",
    color: "text-green-400",
  },
  {
    name: "CO₂",
    value: "405 ppm",
    status: "Normal",
    color: "text-cyan-400",
  },
  {
    name: "NO₂",
    value: "18 ppb",
    status: "Good",
    color: "text-green-400",
  },
];

export default function PollutionMonitor() {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Pollution Monitor
          </h2>

          <p className="text-sm text-slate-400">
            Air Quality Components
          </p>
        </div>

        <Factory
          className="text-orange-400"
          size={28}
        />
      </div>

      <div className="space-y-4">
        {pollutants.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
          >
            <div className="flex items-center gap-3">
              <Wind
                className={item.color}
                size={18}
              />

              <span className="text-slate-300">
                {item.name}
              </span>
            </div>

            <div className="text-right">
              <p className="font-semibold text-white">
                {item.value}
              </p>

              <p className={`text-sm ${item.color}`}>
                {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}