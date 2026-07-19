import { useState } from "react";
import { Building2, Car, ChevronLeft, ChevronRight, CloudSun, Droplets, FileChartColumn, LayoutDashboard, Leaf, Settings, TriangleAlert } from "lucide-react";
import SidebarItem from "./SidebarItem";

const commandNavigation = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/transportation", label: "Transportation", icon: Car },
  { to: "/climate", label: "Climate", icon: CloudSun },
  { to: "/water", label: "Water", icon: Droplets },
  { to: "/environment", label: "Environment", icon: Leaf },
  { to: "/emergency", label: "Emergency", icon: TriangleAlert },
  { to: "/government", label: "Government", icon: Building2 },
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return <aside className={`${collapsed ? "w-20" : "w-72"} hidden shrink-0 border-r border-slate-700/70 bg-slate-950/70 px-3 py-5 backdrop-blur-xl transition-[width] duration-300 lg:flex lg:flex-col`}>
    <div className={`mb-8 flex items-center ${collapsed ? "justify-center" : "justify-between px-2"}`}>
      {!collapsed && <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Command center</p><h1 className="mt-1 text-2xl font-bold tracking-tight text-white">CityVerse <span className="text-cyan-300">AI</span></h1></div>}
      <button type="button" onClick={() => setCollapsed((value) => !value)} aria-label={collapsed ? "Expand navigation" : "Collapse navigation"} className="rounded-lg border border-slate-700 bg-slate-900/80 p-2 text-slate-300 transition hover:border-cyan-500/60 hover:text-cyan-300">{collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}</button>
    </div>
    {!collapsed && <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Operations</p>}
    <nav aria-label="Primary navigation" className="space-y-1">{commandNavigation.map((item) => <SidebarItem key={item.to} {...item} collapsed={collapsed} />)}</nav>
    <div className="mt-7 border-t border-slate-800 pt-5"><p className={`${collapsed ? "sr-only" : "mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500"}`}>Workspace</p><SidebarItem to="/reports" label="Reports" icon={FileChartColumn} collapsed={collapsed} /><SidebarItem to="/settings" label="Settings" icon={Settings} collapsed={collapsed} /></div>
    <div className={`mt-auto rounded-xl border border-cyan-500/15 bg-cyan-500/5 p-3 ${collapsed ? "hidden" : "block"}`}><p className="text-xs font-medium text-cyan-200">SYSTEMS ONLINE</p><p className="mt-1 text-xs text-slate-400">Digital twin telemetry synced</p></div>
  </aside>;
}

export default Sidebar;
