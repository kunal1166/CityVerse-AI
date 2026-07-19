import { ArrowRight, Radar } from "lucide-react";
import { AICitySummary } from "./index";
import { LiveEventStream } from "./index";
import { SensorNetworkStatus } from "./index";
import { LiveIncidentMapFeed } from "./index";

export default function LiveOperationsCenter() {
  return (
    <section className="mt-8 rounded-[2rem] border border-slate-700/70 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80 p-6 shadow-[0_30px_120px_rgba(2,6,23,0.45)] backdrop-blur-xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300">Live operations center</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">LIVE OPERATIONS CENTER</h2>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200">
          <Radar size={16} className="animate-pulse" />
          Mission control
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <LiveEventStream />
          <AICitySummary />
        </div>

        <div className="space-y-6">
          <SensorNetworkStatus />
          <LiveIncidentMapFeed />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-2 text-sm text-slate-400">
        <span>Prepared for future FastAPI WebSocket integration</span>
        <ArrowRight size={16} className="text-cyan-300" />
      </div>
    </section>
  );
}
