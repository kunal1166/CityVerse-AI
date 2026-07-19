import { Car, Droplets, Leaf, TriangleAlert } from "lucide-react";
import { DashboardLayout } from "../../layouts";
import { PageHeader } from "../../components/ui";
import MetricCard from "../../components/dashboard/MetricCard";
import { CityMap } from "../../components/map";
import { AIInsights } from "../../components/insights";
import { TrafficChart } from "../../components/charts";
import { LiveAlerts } from "../../components/alerts";
import { WeatherCard, WaterCard } from "../../components/cards";
import { AnalyticsSummary } from "../../components/analytics";
import { LiveOperationsCenter } from "../../components/operations";
import useCityData from "../../hooks/useCityData";
import { useCity } from "../../context/CityContext";

function DashboardPage() {
  const { city } = useCity();
  const metrics = useCityData();
  const { name, country } = city.metadata;

  return <DashboardLayout>
    <PageHeader title={`CityVerse AI — ${name}`} subtitle={`Unified Urban Digital Twin & Smart City Command Center — ${name}, ${country}`} />
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard title="Traffic" value={`${metrics.traffic}%`} trend="+12%" trendDirection="up" icon={Car} color="cyan" />
      <MetricCard title="AQI" value={`${metrics.aqi}`} trend="-6%" trendDirection="down" icon={Leaf} color="green" />
      <MetricCard title="Water" value={`${metrics.water}%`} trend="+3%" trendDirection="up" icon={Droplets} color="blue" />
      <MetricCard title="Emergency" value={`${metrics.emergency}`} trend="-1" trendDirection="down" icon={TriangleAlert} color="red" />
    </div>
    <div className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-3"><div className="xl:col-span-2"><CityMap /></div><div className="space-y-4"><AIInsights /></div></div>
    <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-3"><div className="xl:col-span-2"><TrafficChart /></div><div><LiveAlerts /></div></div>
    <div className="mt-6 grid gap-6 md:grid-cols-3">
      <WeatherCard />
      <WaterCard />
      <AnalyticsSummary />
    </div>
    <LiveOperationsCenter />
  </DashboardLayout>;
}

export default DashboardPage;
