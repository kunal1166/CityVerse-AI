import Card from "../ui/Card";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Infrastructure", value: 40 },
  { name: "Healthcare", value: 20 },
  { name: "Education", value: 18 },
  { name: "Environment", value: 12 },
  { name: "Emergency", value: 10 },
];

const colors = [
  "#06b6d4",
  "#22c55e",
  "#eab308",
  "#a855f7",
  "#ef4444",
];

export default function BudgetAnalytics() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-white">
        Budget Allocation
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={90}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={colors[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}