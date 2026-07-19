import Card from "../ui/Card";
import {
  TrendingUp,
  BadgeCheck,
  Wallet,
  Building2,
} from "lucide-react";

const kpis = [
  {
    title: "Service Completion",
    value: "96.4%",
    icon: BadgeCheck,
    color: "text-green-400",
  },
  {
    title: "Citizen Satisfaction",
    value: "91%",
    icon: TrendingUp,
    color: "text-cyan-400",
  },
  {
    title: "Revenue Collected",
    value: "₹12.8 Cr",
    icon: Wallet,
    color: "text-yellow-400",
  },
  {
    title: "Projects Running",
    value: "48",
    icon: Building2,
    color: "text-purple-400",
  },
];

export default function MunicipalKPIs() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-white">
        Municipal KPI Dashboard
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {kpis.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl bg-slate-800 p-4"
            >
              <Icon
                size={24}
                className={item.color}
              />

              <p className="mt-3 text-sm text-slate-400">
                {item.title}
              </p>

              <h3 className="text-2xl font-bold text-white">
                {item.value}
              </h3>
            </div>
          );
        })}
      </div>
    </Card>
  );
}