import Card from "../ui/Card";
import {
  Shield,
  Car,
} from "lucide-react";

const units = [
  {
    unit: "Patrol Alpha",
    location: "City Center",
    status: "Available",
    color: "text-green-400",
  },
  {
    unit: "Patrol Bravo",
    location: "NH-16",
    status: "Responding",
    color: "text-yellow-400",
  },
  {
    unit: "SWAT Unit",
    location: "Industrial Zone",
    status: "Deployed",
    color: "text-red-400",
  },
];

export default function PoliceDispatch() {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-semibold text-white">
            Police Dispatch
          </h2>

          <p className="text-sm text-slate-400">
            Live Patrol Status
          </p>
        </div>

        <Shield
          className="text-blue-400"
          size={28}
        />

      </div>

      <div className="space-y-4">
        {units.map((unit) => (
          <div
            key={unit.unit}
            className="rounded-xl border border-slate-700 p-4"
          >
            <div className="flex items-center gap-3">

              <Car
                className={unit.color}
                size={20}
              />

              <div className="flex-1">

                <h3 className="font-medium text-white">
                  {unit.unit}
                </h3>

                <p className="text-sm text-slate-400">
                  {unit.location}
                </p>

              </div>

              <span className={unit.color}>
                {unit.status}
              </span>

            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}