import Card from "../ui/Card";

const departments = [
  {
    name: "Transportation",
    score: 94,
  },
  {
    name: "Water",
    score: 91,
  },
  {
    name: "Environment",
    score: 96,
  },
  {
    name: "Emergency",
    score: 89,
  },
];

export default function DepartmentPerformance() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-white">
        Department Performance
      </h2>

      <div className="space-y-5">
        {departments.map((dept) => (
          <div key={dept.name}>
            <div className="mb-2 flex justify-between">
              <span className="text-white">
                {dept.name}
              </span>

              <span className="text-cyan-400">
                {dept.score}%
              </span>
            </div>

            <div className="h-2 rounded-full bg-slate-700">
              <div
                className="h-2 rounded-full bg-cyan-400"
                style={{
                  width: `${dept.score}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}