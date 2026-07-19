import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  to: string;
  label: string;
  icon: LucideIcon;
  collapsed?: boolean;
}

function SidebarItem({
  to,
  label,
  icon: Icon,
  collapsed = false,
}: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative flex items-center ${collapsed ? "justify-center px-3" : "gap-3 px-3"} rounded-xl py-3 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-100 shadow-lg shadow-cyan-950/30"
            : "border border-transparent text-slate-400 hover:border-slate-700 hover:bg-slate-800/70 hover:text-slate-100"
        }`
      }
    >
      <Icon size={19} className="shrink-0 transition group-hover:scale-105" />
      <span className={collapsed ? "sr-only" : "truncate"}>{label}</span>
      {collapsed && <span role="tooltip" className="pointer-events-none absolute left-14 z-50 hidden whitespace-nowrap rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-white shadow-xl group-hover:block">{label}</span>}
    </NavLink>
  );
}

export default SidebarItem;
