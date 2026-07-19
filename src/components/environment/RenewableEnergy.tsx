import Card from "../ui/Card";
import {
  Sun,
  Wind,
  Droplets,
} from "lucide-react";

const sources = [
  {
    source: "Solar",
    production: "48 MW",
    icon: Sun,
    color: "text-yellow-400",
  },
  {
    source: "Wind",
    production: "26 MW",
    icon: Wind,
    color: "text-cyan-400",
  },
  {
    source: "Hydro",
    production: "34 MW",
    icon: Droplets,
    color: "text-blue-400",
  },
];

export default function RenewableEnergy() {
  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Renewable Energy
        </h2>

        <p className="text-sm text-slate-400">
          Live Green Energy Production
        </p>
      </div>

      <div className="space-y-4">
        {sources.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.source}
              className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={22}
                  className={item.color}
                />

                <span className="text-white">
                  {item.source}
                </span>
              </div>

              <span className="font-semibold text-white">
                {item.production}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}