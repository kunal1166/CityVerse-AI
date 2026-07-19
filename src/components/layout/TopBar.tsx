import { Bell, Search, UserCircle } from "lucide-react";
import { cities } from "../../data/cities";
import { useCity } from "../../context/CityContext";

function TopBar() {
  const { selectedCity, setSelectedCity, city } = useCity();
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        <input type="text" aria-label="Search city data" placeholder={`Search ${city.metadata.name} data...`} className="w-48 rounded-xl border border-slate-700 bg-slate-800 py-2 pl-10 pr-4 text-white outline-none focus:border-cyan-500 sm:w-80" />
      </div>
      <div className="flex items-center gap-3 sm:gap-6">
        <select value={selectedCity} onChange={(event) => setSelectedCity(event.target.value as typeof selectedCity)} aria-label="Select city" className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-white outline-none focus:border-cyan-500">
          {Object.entries(cities).map(([id, optionCity]) => <option key={id} value={id}>{optionCity.metadata.name}</option>)}
        </select>
        <button aria-label="Notifications" className="relative rounded-xl bg-slate-800 p-3 transition hover:bg-slate-700"><Bell size={20} /><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" /></button>
        <div className="hidden text-right md:block"><p className="font-semibold text-white">Administrator</p><p className="text-sm text-gray-400">{city.metadata.name} Smart City Control Center</p></div>
        <UserCircle size={42} className="hidden text-cyan-400 sm:block" />
      </div>
    </header>
  );
}

export default TopBar;
