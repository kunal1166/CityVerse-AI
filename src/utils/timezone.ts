import type { CityId, CityMetadata } from "../types/city";

const cityTimeZoneMap: Record<CityId, string> = {
  taipei: "Asia/Taipei",
  singapore: "Asia/Singapore",
  kolkata: "Asia/Kolkata",
  bengaluru: "Asia/Kolkata",
};

export function resolveCityTimeZone(city: Pick<CityMetadata, "id" | "timezone">) {
  return cityTimeZoneMap[city.id] ?? city.timezone ?? "UTC";
}
