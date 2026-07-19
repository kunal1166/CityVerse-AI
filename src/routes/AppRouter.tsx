import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/Dashboard/DashboardPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

const TransportationPage = lazy(() => import("../pages/Transportation/TransportationPage"));
const ClimatePage = lazy(() => import("../pages/Climate/ClimatePage"));
const WaterPage = lazy(() => import("../pages/Water/WaterPage"));
const EnvironmentPage = lazy(() => import("../pages/Environment/EnvironmentPage"));
const EmergencyPage = lazy(() => import("../pages/Emergency/EmergencyPage"));
const GovernmentPage = lazy(() => import("../pages/Government/GovernmentPage"));
const ReportsPage = lazy(() => import("../pages/Reports/ReportsPage"));
const SettingsPage = lazy(() => import("../pages/Settings/SettingsPage"));

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-sm text-slate-400">
      Loading section...
    </div>
  );
}

export default function AppRouter() {
  return (
    <HashRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/transportation" element={<TransportationPage />} />
          <Route path="/climate" element={<ClimatePage />} />
          <Route path="/water" element={<WaterPage />} />
          <Route path="/environment" element={<EnvironmentPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/government" element={<GovernmentPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}