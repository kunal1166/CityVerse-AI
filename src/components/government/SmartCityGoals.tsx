import Card from "../ui/Card";

const goals = [
  { goal: "Clean Energy", progress: 84 },
  { goal: "Smart Mobility", progress: 78 },
  { goal: "Water Sustainability", progress: 91 },
  { goal: "Carbon Reduction", progress: 73 },
  { goal: "Digital Governance", progress: 95 },
];

export default function SmartCityGoals() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-white">
        Smart City Goals
      </h2>

      <div className="space-y-5">
        {goals.map((goal) => (
          <div key={goal.goal}>
            <div className="mb-2 flex justify-between">
              <span className="text-white">{goal.goal}</span>
              <span className="text-cyan-400">{goal.progress}%</span>
            </div>

            <div className="h-2 rounded-full bg-slate-700">
              <div
                className="h-2 rounded-full bg-cyan-400"
                style={{ width: `${goal.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}