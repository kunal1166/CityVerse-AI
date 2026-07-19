import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "../ui";

interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  trendDirection: "up" | "down";
  icon: LucideIcon;
  color: "cyan" | "green" | "blue" | "red";
}

const colorMap = {
  cyan: {
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  green: {
    text: "text-green-400",
    bg: "bg-green-500/10",
  },
  blue: {
    text: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  red: {
    text: "text-red-400",
    bg: "bg-red-500/10",
  },
};

function MetricCard({
  title,
  value,
  trend,
  trendDirection,
  icon: Icon,
  color,
}: MetricCardProps) {
  const theme = colorMap[color];

  return (
    <Card className="group relative overflow-hidden p-5 hover:-translate-y-1">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            {title}
          </p>

          <h2 className={`mt-3 text-3xl font-bold tabular-nums tracking-tight sm:text-4xl ${theme.text}`}>
            {value}
          </h2>
        </div>

        <div
          className={`rounded-2xl border border-white/5 p-3.5 shadow-inner ${theme.bg}`}
        >
          <Icon className={theme.text} size={28} />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-700/60 pt-4 text-sm">
        <div className="flex items-center gap-2">
        {trendDirection === "up" ? (
          <ArrowUpRight className="text-green-400" size={18} />
        ) : (
          <ArrowDownRight className="text-red-400" size={18} />
        )}

        <span
          className={
            trendDirection === "up"
              ? "text-green-400"
              : "text-red-400"
          }
        >
          {trend}
        </span>

        <span className="text-slate-500">
          vs yesterday
        </span>
        </div>
        <div aria-hidden="true" className={`flex h-6 items-end gap-0.5 ${theme.text}`}><span className="h-2 w-1 rounded-full bg-current opacity-40" /><span className="h-4 w-1 rounded-full bg-current opacity-60" /><span className="h-3 w-1 rounded-full bg-current opacity-50" /><span className="h-5 w-1 rounded-full bg-current opacity-80" /><span className="h-6 w-1 rounded-full bg-current" /></div>
      </div>
    </Card>
  );
}

export default MetricCard;
