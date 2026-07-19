import Sidebar from "../components/sidebar/Sidebar";
import TopBar from "../components/topbar/TopBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-transparent text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <TopBar />

        <main className="flex-1 overflow-x-hidden p-4 sm:p-6 xl:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
