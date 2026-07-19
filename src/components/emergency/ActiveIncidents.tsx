import Card from "../ui/Card";
import {
  AlertTriangle,
  Flame,
  Car,
} from "lucide-react";

const incidents = [
  {
    type: "Road Accident",
    location: "NH-16",
    priority: "High",
    icon: Car,
    color: "text-red-400",
  },
  {
    type: "Fire Alert",
    location: "Industrial Area",
    priority: "Critical",
    icon: Flame,
    color: "text-orange-400",
  },
  {
    type: "Medical Emergency",
    location: "City Center",
    priority: "Medium",
    icon: AlertTriangle,
    color: "text-yellow-400",
  },
];

export default function ActiveIncidents() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-white">
        Active Incidents
      </h2>

      <div className="space-y-4">
        {incidents.map((incident) => {
          const Icon = incident.icon;

          return (
            <div
              key={incident.type}
              className="rounded-xl border border-slate-700 p-4"
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={22}
                  className={incident.color}
                />

                <div className="flex-1">
                  <h3 className="font-medium text-white">
                    {incident.type}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {incident.location}
                  </p>
                </div>

                <span
                  className={`font-semibold ${incident.color}`}
                >
                  {incident.priority}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}