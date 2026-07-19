import Card from "../ui/Card";
import {
  Ambulance,
  Truck,
  Shield,
} from "lucide-react";

const resources = [
  {
    name: "Ambulances",
    available: 14,
    deployed: 12,
    icon: Ambulance,
    color: "text-cyan-400",
  },
  {
    name: "Fire Trucks",
    available: 8,
    deployed: 6,
    icon: Truck,
    color: "text-orange-400",
  },
  {
    name: "Police Units",
    available: 23,
    deployed: 19,
    icon: Shield,
    color: "text-blue-400",
  },
];

export default function ResourceTracking() {
  return (
    <Card>

      <h2 className="mb-6 text-xl font-semibold text-white">
        Emergency Resources
      </h2>

      <div className="space-y-5">

        {resources.map((resource) => {

          const Icon = resource.icon;

          return (
            <div
              key={resource.name}
              className="rounded-xl bg-slate-800 p-4"
            >

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                  <Icon
                    size={22}
                    className={resource.color}
                  />

                  <span className="text-white">
                    {resource.name}
                  </span>

                </div>

                <span className="text-slate-300">
                  {resource.available} / {resource.deployed}
                </span>

              </div>

            </div>
          );

        })}

      </div>

    </Card>
  );
}