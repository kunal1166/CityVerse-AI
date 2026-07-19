import { useMemo } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Card from "../ui/Card";
import { useCity } from "../../context/CityContext";

interface TrafficTooltipProps { active?: boolean; payload?: Array<{ value?: number }>; label?: string; }
function TrafficTooltip({ active, payload, label }: TrafficTooltipProps) { if (!active || !payload?.[0]?.value) return null; return <div className="rounded-xl border border-slate-700 bg-slate-950/95 px-3 py-2 shadow-xl"><p className="text-xs text-slate-400">{label}</p><p className="mt-1 text-sm font-semibold text-cyan-200">{payload[0].value}% congestion</p></div>; }

export default function TrafficChart() {
  const { city } = useCity();
  const data = useMemo(() => city.transportation.trafficTrend.map((point) => ({ time: point.label, traffic: point.value })), [city.transportation.trafficTrend]);
  return <Card className="h-full overflow-hidden"><div className="mb-6 flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Mobility intelligence</p><h2 className="mt-1 text-xl font-semibold text-white">Traffic Analytics</h2><p className="mt-1 text-sm text-slate-400">Vehicle congestion in {city.metadata.name}</p></div><div className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-200">LIVE TREND</div></div><ResponsiveContainer width="100%" height={290}><AreaChart data={data} margin={{ top: 8, right: 8, left: -24, bottom: 0 }}><defs><linearGradient id="trafficGradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#22d3ee" stopOpacity={0.35} /><stop offset="100%" stopColor="#22d3ee" stopOpacity={0.01} /></linearGradient></defs><CartesianGrid vertical={false} stroke="#334155" strokeDasharray="3 5" /><XAxis dataKey="time" tickLine={false} axisLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} /><YAxis tickLine={false} axisLine={false} tick={{ fill: "#64748b", fontSize: 12 }} /><Tooltip cursor={false} content={<TrafficTooltip />} /><Area type="monotone" dataKey="traffic" stroke="#22d3ee" strokeWidth={3} fill="url(#trafficGradient)" /></AreaChart></ResponsiveContainer></Card>;
}
