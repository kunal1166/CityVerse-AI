import Card from "../ui/Card";
import {
  Hospital,
  Bed,
  Users,
} from "lucide-react";

const hospitals = [
  {
    name: "City General Hospital",
    beds: "82%",
    patients: 148,
    status: "Busy",
    color: "text-yellow-400",
  },
  {
    name: "Metro Medical Center",
    beds: "56%",
    patients: 102,
    status: "Available",
    color: "text-green-400",
  },
  {
    name: "Emergency Trauma Center",
    beds: "95%",
    patients: 214,
    status: "Critical",
    color: "text-red-400",
  },
];

export default function HospitalCapacity() {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Hospital Capacity
          </h2>

          <p className="text-sm text-slate-400">
            Emergency Bed Availability
          </p>
        </div>

        <Hospital
          className="text-cyan-400"
          size={28}
        />
      </div>

      <div className="space-y-4">
        {hospitals.map((hospital) => (
          <div
            key={hospital.name}
            className="rounded-xl border border-slate-700 p-4"
          >
            <div className="flex justify-between">

              <div>
                <h3 className="font-medium text-white">
                  {hospital.name}
                </h3>

                <div className="mt-2 flex gap-4 text-sm text-slate-400">

                  <div className="flex items-center gap-1">
                    <Bed size={15} />
                    {hospital.beds}
                  </div>

                  <div className="flex items-center gap-1">
                    <Users size={15} />
                    {hospital.patients}
                  </div>

                </div>
              </div>

              <span className={hospital.color}>
                {hospital.status}
              </span>

            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}