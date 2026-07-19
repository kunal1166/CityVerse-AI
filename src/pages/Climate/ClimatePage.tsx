import { DashboardLayout } from "../../layouts";
import { PageHeader } from "../../components/ui";
import { useCity } from "../../context/CityContext";

import {
  WeatherOverview,
  AQIMonitor,
  TemperatureTrend,
  RainfallAnalytics,
  WeatherAlerts,
  ClimatePrediction,
} from "../../components/climate";

export default function ClimatePage() {
  const { city } = useCity();
  return (
    <DashboardLayout>
    <PageHeader
      title={`${city.metadata.name} Climate Intelligence Center`}
      subtitle={`AI-powered weather & air-quality monitoring for ${city.metadata.name}`}
    />

    <div className="grid gap-6 lg:grid-cols-2">
      <WeatherOverview />
      <AQIMonitor />
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <TemperatureTrend />
      <RainfallAnalytics />
    </div>
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <ClimatePrediction />
      <WeatherAlerts />
    </div>
    </DashboardLayout>
  );
}
