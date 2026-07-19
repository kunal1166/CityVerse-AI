import Card from "../ui/Card";
import {
  MessageSquareWarning,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const complaints = [
  {
    id: "CMP-1001",
    issue: "Road Damage",
    department: "Transportation",
    status: "In Progress",
    icon: Clock3,
    color: "text-yellow-400",
  },
  {
    id: "CMP-1002",
    issue: "Water Leakage",
    department: "Water",
    status: "Resolved",
    icon: CheckCircle2,
    color: "text-green-400",
  },
  {
    id: "CMP-1003",
    issue: "Illegal Dumping",
    department: "Environment",
    status: "Pending",
    icon: MessageSquareWarning,
    color: "text-red-400",
  },
];

export default function CitizenComplaints() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-white">
        Citizen Complaints
      </h2>

      <div className="space-y-4">
        {complaints.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="rounded-xl border border-slate-700 p-4"
            >
              <div className="flex items-center gap-3">

                <Icon
                  size={20}
                  className={item.color}
                />

                <div className="flex-1">

                  <h3 className="font-medium text-white">
                    {item.issue}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {item.department}
                  </p>

                </div>

                <span className={item.color}>
                  {item.status}
                </span>

              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}