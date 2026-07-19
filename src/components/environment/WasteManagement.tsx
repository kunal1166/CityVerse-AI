import Card from "../ui/Card";
import {
  Trash2,
  Recycle,
  AlertTriangle,
} from "lucide-react";

const bins = [
  {
    zone: "North Zone",
    collected: "92%",
    recycled: "71%",
    status: "Healthy",
    color: "text-green-400",
    icon: Recycle,
  },
  {
    zone: "Central City",
    collected: "81%",
    recycled: "54%",
    status: "Attention",
    color: "text-yellow-400",
    icon: AlertTriangle,
  },
  {
    zone: "Industrial Area",
    collected: "68%",
    recycled: "38%",
    status: "Critical",
    color: "text-red-400",
    icon: AlertTriangle,
  },
];

export default function WasteManagement() {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Waste Management
          </h2>

          <p className="text-sm text-slate-400">
            Collection & Recycling Status
          </p>
        </div>

        <Trash2
          size={28}
          className="text-cyan-400"
        />
      </div>

      <div className="space-y-4">
        {bins.map((bin) => {
          const Icon = bin.icon;

          return (
            <div
              key={bin.zone}
              className="rounded-xl border border-slate-700 p-4"
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">
                  <Icon
                    size={20}
                    className={bin.color}
                  />

                  <div>
                    <h3 className="font-medium text-white">
                      {bin.zone}
                    </h3>

                    <p className="text-sm text-slate-400">
                      Collected: {bin.collected}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-white">
                    Recycled: {bin.recycled}
                  </p>

                  <p className={bin.color}>
                    {bin.status}
                  </p>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}