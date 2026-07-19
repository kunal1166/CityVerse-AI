import { useEffect, useMemo, useState } from "react";
import { Bell, CloudSun, MessageSquareText, Moon, Search, Sun, UserCircle } from "lucide-react";
import { cities } from "../../data/cities";
import { useCity } from "../../context/CityContext";
import { useSettings } from "../../context/SettingsContext";
import useTheme from "../../hooks/useTheme";
import { resolveCityTimeZone } from "../../utils/timezone";

function TopBar() {
  const { selectedCity, setSelectedCity, city } = useCity();
  const { settings } = useSettings();
  const { toggleTheme, resolvedTheme } = useTheme();
  const [time, setTime] = useState(() => new Date());
  useEffect(() => { const timer = window.setInterval(() => setTime(new Date()), 60_000); return () => window.clearInterval(timer); }, []);
  const timeZone = useMemo(() => resolveCityTimeZone(city.metadata), [city.metadata]);
  const displayTime = useMemo(() => new Intl.DateTimeFormat(settings.localization.language, { hour: "2-digit", minute: "2-digit", timeZone }).format(time), [settings.localization.language, time, timeZone]);

  return <header className="sticky top-0 z-40 flex min-h-20 items-center justify-between gap-4 border-b border-slate-700/70 bg-slate-950/65 px-4 py-3 backdrop-blur-xl sm:px-6">
    <div className="hidden min-w-0 xl:block"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Live operational view</p><p className="mt-1 truncate text-sm text-slate-400">{city.metadata.name} digital twin</p></div>
    <label className="relative hidden min-w-52 max-w-md flex-1 lg:block"><Search aria-hidden="true" size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" /><input aria-label="Global search" type="search" placeholder={`Search ${city.metadata.name} intelligence`} className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/70" /></label>
    <div className="ml-auto flex items-center gap-2 sm:gap-3">
      <select aria-label="Select city" value={selectedCity} onChange={(event) => setSelectedCity(event.target.value as typeof selectedCity)} className="max-w-30 rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2.5 text-sm font-medium text-slate-100 outline-none transition focus:border-cyan-400/70 sm:max-w-none">{Object.entries(cities).map(([id, option]) => <option key={id} value={id}>{option.metadata.name}</option>)}</select>
      <div className="hidden items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-900/60 px-3 py-2 sm:flex"><CloudSun size={18} className="text-amber-300" /><span className="text-sm font-semibold text-white">{city.weather.temperature}°</span><span className="text-xs text-slate-400">{city.weather.condition}</span></div>
      <time className="hidden text-right lg:block"><span className="block text-sm font-semibold text-white">{displayTime}</span><span className="text-xs text-slate-500">{city.metadata.timezone}</span></time>
      <button type="button" onClick={toggleTheme} aria-label="Toggle theme preference" className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-2.5 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-200">{resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}</button>
      <button type="button" aria-label="Messages" className="relative rounded-xl border border-slate-700/70 bg-slate-900/70 p-2.5 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-200"><MessageSquareText size={18} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400" /></button>
      <button type="button" aria-label="Notifications" className="relative rounded-xl border border-slate-700/70 bg-slate-900/70 p-2.5 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-200"><Bell size={18} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-rose-400" /></button>
      <div className="hidden items-center gap-2 border-l border-slate-700/70 pl-3 md:flex"><UserCircle size={31} className="text-cyan-300" /><div><p className="text-sm font-semibold text-white">{settings.profile.name}</p><p className="text-xs text-slate-500">Control operator</p></div></div>
    </div>
  </header>;
}

export default TopBar;
