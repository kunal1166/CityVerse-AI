import { DashboardLayout } from "../../layouts";
import { PageHeader } from "../../components/ui";
import { useCity } from "../../context/CityContext";

import {
  ReservoirStatus,
  WaterQuality,
  ConsumptionAnalytics,
  PipelineNetwork,
  LeakDetection,
  FloodRiskPrediction,
  WaterDistribution,
  WaterAlerts,
} from "../../components/water";

export default function WaterPage() {
  const { city } = useCity();
  return (
    <DashboardLayout>
    <PageHeader
      title={`${city.metadata.name} Water Resource Management Center`}
      subtitle={`AI-powered water monitoring & distribution for ${city.metadata.name}`}
    />

    <div className="grid gap-6 lg:grid-cols-2">
      <ReservoirStatus />
      <WaterQuality />
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <ConsumptionAnalytics />
      <PipelineNetwork />
    </div>
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <LeakDetection />
      <FloodRiskPrediction />
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <WaterDistribution />
      <WaterAlerts />
    </div>
    </DashboardLayout>
  );
}
