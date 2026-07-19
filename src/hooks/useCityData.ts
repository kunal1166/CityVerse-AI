import { useCity } from "../context/CityContext";

export interface CityMetrics {
  traffic: number;
  aqi: number;
  water: number;
  emergency: number;
}

/** Returns the selected city's authoritative KPI snapshot without duplicate local state. */
export default function useCityData(): CityMetrics {
  return useCity().city.kpis;
}
