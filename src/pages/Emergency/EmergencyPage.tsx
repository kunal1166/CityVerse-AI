import { DashboardLayout } from "../../layouts";
import { PageHeader } from "../../components/ui";
import { useCity } from "../../context/CityContext";

import {
  EmergencyOverview,
  ActiveIncidents,
  HospitalCapacity,
  FireRescue,
  PoliceDispatch,
  ResourceTracking,
  AIEmergencyCoordinator,
  DisasterPrediction,
} from "../../components/emergency";

export default function EmergencyPage() {
  const { city } = useCity();
  return (
    <DashboardLayout>
    <PageHeader
      title={`${city.metadata.name} Emergency Response Command Center`}
      subtitle={`AI-powered emergency monitoring & incident response for ${city.metadata.name}`}
    />

    <div className="grid gap-6 lg:grid-cols-2">
      <EmergencyOverview />
      <ActiveIncidents />
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <HospitalCapacity />
      <FireRescue />
    </div>
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <PoliceDispatch />
      <ResourceTracking />
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <AIEmergencyCoordinator />
      <DisasterPrediction />
    </div>
    </DashboardLayout>
  );
}
