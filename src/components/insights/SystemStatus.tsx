import { Wifi, ShieldCheck } from "lucide-react";
import { useCity } from "../../context/CityContext";

export default function SystemStatus() {
  const { confidence } = useCity().city.ai;
  const confidenceValue = Number.parseFloat(confidence);
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/50 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            AI Status
          </p>

          <h3 className="mt-1 text-xl font-bold text-green-400">
            ONLINE
          </h3>
        </div>

        <div className="grid h-14 w-14 place-items-center rounded-full border-4 border-cyan-400/20 bg-cyan-400/5"><span className="text-sm font-bold text-cyan-200">{Math.round(confidenceValue)}%</span></div>
      </div>

      <div className="mt-5 space-y-3 border-t border-slate-700/60 pt-4">

        <div className="flex justify-between">
          <span className="text-slate-400">
            Confidence
          </span>

          <span className="font-medium text-white">
            {confidence}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Connection
          </span>

          <Wifi className="text-green-400" size={18}/>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Security
          </span>

          <ShieldCheck className="text-green-400" size={18}/>
        </div>

      </div>
    </div>
  );
}
