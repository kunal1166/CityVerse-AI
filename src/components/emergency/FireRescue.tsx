import Card from "../ui/Card";
import {
  Flame,
  Truck,
} from "lucide-react";

const stations = [
  {
    station: "Central Station",
    trucks: 8,
    active: 2,
    status: "Operational",
    color: "text-green-400",
  },
  {
    station: "North Station",
    trucks: 5,
    active: 4,
    status: "Busy",
    color: "text-yellow-400",
  },
  {
    station: "Industrial Station",
    trucks: 7,
    active: 6,
    status: "Critical",
    color: "text-red-400",
  },
];

export default function FireRescue() {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-semibold text-white">
            Fire & Rescue
          </h2>

          <p className="text-sm text-slate-400">
            Station Readiness
          </p>
        </div>

        <Flame
          className="text-orange-400"
          size={28}
        />

      </div>

      <div className="space-y-4">

        {stations.map((station) => (
          <div
            key={station.station}
            className="rounded-xl border border-slate-700 p-4"
          >
            <div className="flex justify-between">

              <div>
                <h3 className="text-white font-medium">
                  {station.station}
                </h3>

                <div className="mt-2 flex gap-4 text-sm text-slate-400">

                  <div className="flex items-center gap-1">
                    <Truck size={15} />
                    {station.trucks} Trucks
                  </div>

                  <div>
                    Active: {station.active}
                  </div>

                </div>
              </div>

              <span className={station.color}>
                {station.status}
              </span>

            </div>
          </div>
        ))}

      </div>
    </Card>
  );
}