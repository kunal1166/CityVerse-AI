import { Bot, Sparkles } from "lucide-react";
import { useCity } from "../../context/CityContext";

export default function AICitySummary() {
  const { city } = useCity();
  const summary = city.operations.summary;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 via-slate-900/80 to-slate-950/90 p-5 shadow-[0_20px_80px_rgba(34,211,238,0.16)] backdrop-blur-xl">
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cyan-400/10 to-transparent" />
      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">AI city summary</p>
            <h3 className="mt-1 text-lg font-semibold text-white">Operational intelligence</h3>
          </div>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2.5 text-cyan-200">
            <Bot size={20} />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm text-slate-400">Overall City Health</p>
              <p className="mt-2 text-4xl font-semibold text-white">{summary.overallHealth.toFixed(1)}%</p>
            </div>
            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
              {summary.status}
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <div>
              <p className="text-sm font-semibold text-slate-200">Current Situation</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">{summary.situation}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-200">Recommended Actions</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {summary.recommendations.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Sparkles size={14} className="mt-1 text-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
          <span>Confidence score</span>
          <span className="font-semibold text-cyan-200">{summary.confidence.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
}
