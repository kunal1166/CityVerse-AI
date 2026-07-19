import Card from "../ui/Card";
import { Trees } from "lucide-react";

const zones = [
  {
    area: "North Zone",
    coverage: 78,
    status: "Healthy",
    color: "bg-green-500",
  },
  {
    area: "Central City",
    coverage: 46,
    status: "Moderate",
    color: "bg-yellow-500",
  },
  {
    area: "Industrial Area",
    coverage: 21,
    status: "Low",
    color: "bg-red-500",
  },
];

export default function GreenCover() {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Green Cover
          </h2>

          <p className="text-sm text-slate-400">
            Urban Vegetation Monitoring
          </p>
        </div>

        <Trees
          className="text-green-400"
          size={28}
        />
      </div>

      <div className="space-y-5">
        {zones.map((zone) => (
          <div key={zone.area}>
            <div className="mb-2 flex justify-between">
              <span className="text-white">
                {zone.area}
              </span>

              <span className="font-semibold text-green-400">
                {zone.coverage}%
              </span>
            </div>

            <div className="h-3 rounded-full bg-slate-700">
              <div
                className={`h-3 rounded-full ${zone.color}`}
                style={{
                  width: `${zone.coverage}%`,
                }}
              />
            </div>

            <p className="mt-2 text-sm text-slate-400">
              {zone.status}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}