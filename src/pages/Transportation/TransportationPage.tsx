import { DashboardLayout } from "../../layouts";
import { PageHeader } from "../../components/ui";
import { useCity } from "../../context/CityContext";


import {
  TrafficHeatMap,
  SignalStatus,
  VehicleAnalytics,
  LiveIncidents,
  TrafficPrediction,
  SmartSignalControl,
} from "../../components/transportation";

export default function TransportationPage() {
  const { city } = useCity();
  return (
    <DashboardLayout>
      <PageHeader
      title={`${city.metadata.name} Transportation Command Center`}
      subtitle={`AI-powered traffic monitoring & smart signal management for ${city.metadata.name}`}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <TrafficHeatMap />
        <SignalStatus />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <VehicleAnalytics />
        <LiveIncidents />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <TrafficPrediction />
        <SmartSignalControl />
      </div>
    </DashboardLayout>
  );
}
