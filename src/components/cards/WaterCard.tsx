import { Droplets } from "lucide-react";
import Card from "../ui/Card";
import { useCity } from "../../context/CityContext";

export default function WaterCard() {
  const { water } = useCity().city;
  return <Card><div className="mb-5 flex items-center justify-between"><div><h2 className="text-lg font-semibold text-white">Reservoir</h2><p className="text-sm text-slate-400">Water storage</p></div><Droplets size={28} className="text-blue-400" /></div><div className="space-y-4"><div className="h-3 w-full rounded-full bg-slate-700"><div className="h-3 rounded-full bg-blue-500" style={{ width: `${water.storage}%` }} /></div><div className="flex justify-between"><span className="text-slate-400">Capacity</span><span className="font-semibold text-white">{water.storage}%</span></div></div></Card>;
}
