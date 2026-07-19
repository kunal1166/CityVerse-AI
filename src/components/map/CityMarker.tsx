import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
interface CityMarkerProps { position: [number, number]; title: string; status: string; color: string; }
export default function CityMarker({ position, title, status, color }: CityMarkerProps) {
  const icon = L.divIcon({ className: "city-marker", html: `<svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="9" fill="${color}" fill-opacity=".26"><animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" /></circle><circle cx="13" cy="13" r="5" fill="${color}" stroke="#fff" stroke-width="2" /></svg>`, iconSize: [26, 26], iconAnchor: [13, 13] });
  return <Marker position={position} icon={icon}><Popup><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">City signal</p><strong className="mt-1 block text-sm text-white">{title}</strong><span className="mt-1 block text-xs text-slate-400">{status}</span></div></Popup></Marker>;
}
