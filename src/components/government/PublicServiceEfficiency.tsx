import Card from "../ui/Card";

const services = [
  {
    service: "Road Repair",
    avgTime: "2.5 Days",
  },
  {
    service: "Water Supply",
    avgTime: "1.2 Days",
  },
  {
    service: "Waste Collection",
    avgTime: "8 Hours",
  },
  {
    service: "Street Lighting",
    avgTime: "15 Hours",
  },
];

export default function PublicServiceEfficiency() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-white">
        Public Service Efficiency
      </h2>

      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.service}
            className="rounded-xl border border-slate-700 p-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-white">
                {service.service}
              </span>

              <span className="font-semibold text-cyan-400">
                {service.avgTime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}