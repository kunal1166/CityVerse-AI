import { CloudSun, Wind, Thermometer, Droplets } from "lucide-react";
import Card from "../ui/Card";
import { useCity } from "../../context/CityContext";

export default function WeatherCard() {
  const { weather } = useCity().city;
  return <Card><div className="mb-5 flex items-center justify-between"><div><h2 className="text-lg font-semibold text-white">Weather</h2><p className="text-sm text-slate-400">Current conditions</p></div><CloudSun className="text-yellow-400" size={28} /></div><div className="space-y-5"><div className="text-5xl font-bold text-white">{weather.temperature}°</div><div className="grid grid-cols-3 gap-4 text-center"><div><Wind className="mx-auto mb-2 text-cyan-400" /><p className="text-xs text-slate-400">Wind</p><p className="font-medium text-white">{weather.wind} km/h</p></div><div><Droplets className="mx-auto mb-2 text-blue-400" /><p className="text-xs text-slate-400">Humidity</p><p className="font-medium text-white">{weather.humidity}%</p></div><div><Thermometer className="mx-auto mb-2 text-red-400" /><p className="text-xs text-slate-400">Feels like</p><p className="font-medium text-white">{weather.feelsLike}°</p></div></div></div></Card>;
}
