import { DashboardLayout } from "../../layouts";
import { PageHeader } from "../../components/ui";
import { useCity } from "../../context/CityContext";

import {
  GreenCover,
  PollutionMonitor,
  WasteManagement,
  EnergyMonitoring,
  CarbonFootprint,
  RenewableEnergy,
  SustainabilityAdvisor,
  EnvironmentalAlerts,
} from "../../components/environment";

export default function EnvironmentPage() {
  const { city } = useCity();
  return (
    <DashboardLayout>
      <PageHeader
      title={`${city.metadata.name} Environment & Sustainability Center`}
      subtitle={`AI-powered environmental monitoring for ${city.metadata.name}`}
      />

    <div className="grid gap-6 lg:grid-cols-2">
      <GreenCover />
      <PollutionMonitor />
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <WasteManagement />
      <EnergyMonitoring />
    </div>
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <CarbonFootprint />
      <RenewableEnergy />
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <SustainabilityAdvisor />
      <EnvironmentalAlerts />
    </div>
    </DashboardLayout>
  );
}
