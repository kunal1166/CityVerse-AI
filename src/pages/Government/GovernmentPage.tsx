import { DashboardLayout } from "../../layouts";
import { PageHeader } from "../../components/ui";
import { useCity } from "../../context/CityContext";

import {
  GovernanceOverview,
  CitizenComplaints,
  MunicipalKPIs,
  DepartmentPerformance,
  BudgetAnalytics,
  PublicServiceEfficiency,
  AIPolicyAdvisor,
  SmartCityGoals,
  CitizenSentiment,
  GovernanceAlerts,
} from "../../components/government";

export default function GovernmentPage() {
  const { city } = useCity();
  return (
    <DashboardLayout>
      <PageHeader
      title={`${city.metadata.name} Government & Citizen Services`}
      subtitle={`Digital governance and citizen engagement for ${city.metadata.name}`}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <GovernanceOverview />
        <CitizenComplaints />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <MunicipalKPIs />
        <DepartmentPerformance />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <BudgetAnalytics />
        <PublicServiceEfficiency />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <AIPolicyAdvisor />
        <SmartCityGoals />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <CitizenSentiment />
        <GovernanceAlerts />
      </div>
    </DashboardLayout>
  );
}
