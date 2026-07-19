import Card from "../ui/Card";
import { Bot } from "lucide-react";

import SystemStatus from "./SystemStatus";
import RiskAssessment from "./RiskAssessment";
import Recommendations from "./Recommendations";

export default function AIInsights() {
  return (
    <Card className="h-full overflow-hidden">
      {/* Header */}
      <div className="-mx-6 -mt-6 mb-6 flex items-center justify-between border-b border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent px-6 py-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">CityVerse intelligence</p><h2 className="mt-1 text-xl font-bold text-white">
            AI Command Center
          </h2>

          <p className="text-sm text-slate-400">
            Autonomous Decision Engine
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 shadow-lg shadow-cyan-950/30">
          <Bot
            className="text-cyan-400"
            size={28}
          />
        </div>
      </div>

      {/* Components */}
      <div className="space-y-5">
        <SystemStatus />

        <RiskAssessment />

        <Recommendations />
      </div>
    </Card>
  );
}
