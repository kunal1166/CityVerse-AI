import Card from "../ui/Card";
import { Footprints, TrendingDown } from "lucide-react";

const sectors = [
  {
    sector: "Transportation",
    emission: "42%",
    trend: "-5%",
    color: "text-red-400",
  },
  {
    sector: "Industry",
    emission: "31%",
    trend: "-2%",
    color: "text-orange-400",
  },
  {
    sector: "Residential",
    emission: "18%",
    trend: "-7%",
    color: "text-green-400",
  },
  {
    sector: "Commercial",
    emission: "9%",
    trend: "-3%",
    color: "text-cyan-400",
  },
];

export default function CarbonFootprint() {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Carbon Footprint
          </h2>

          <p className="text-sm text-slate-400">
            CO₂ Emission Analysis
          </p>
        </div>

        <Footprints
          size={28}
          className="text-green-400"
        />
      </div>

      <div className="space-y-4">
        {sectors.map((item) => (
          <div
            key={item.sector}
            className="rounded-xl border border-slate-700 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">
                  {item.sector}
                </h3>

                <p className="text-sm text-slate-400">
                  Total Emission
                </p>
              </div>

              <div className="text-right">
                <p className={`font-bold ${item.color}`}>
                  {item.emission}
                </p>

                <div className="flex items-center justify-end gap-1 text-green-400">
                  <TrendingDown size={14} />
                  <span>{item.trend}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}