import type { CityData, CityId, Coordinate } from "../../types/city";

interface CityProfile {
  id: CityId;
  name: string;
  country: string;
  population: string;
  timezone: string;
  center: Coordinate;
  locations: [string, string, string, string];
  traffic: number;
  aqi: number;
  water: number;
  emergency: number;
  temperature: number;
  wind: number;
  humidity: number;
  rainChance: number;
}

const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hours = ["6 AM", "8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const widget = (title: string, subtitle: string, items: CityData["transportation"]["widgets"]["heatMap"]["items"], chart?: CityData["transportation"]["trafficTrend"]) => ({ title, subtitle, items, chart });
const item = (id: string, title: string, detail: string, status: string, tone: CityData["alerts"][number]["color"] extends string ? "cyan" | "green" | "blue" | "red" | "yellow" | "orange" | "purple" : never, value?: number) => ({ id, title, detail, status, tone, value });

export function createCityData(profile: CityProfile): CityData {
  const [central, north, industrial, waterfront] = profile.locations;
  const { traffic, aqi, water, emergency, temperature } = profile;
  const trend = hours.map((label, index) => ({ label, value: Math.min(100, Math.max(15, traffic - 32 + index * 9 + (index % 2) * 11)) }));

  return {
    metadata: { id: profile.id, name: profile.name, country: profile.country, population: profile.population, timezone: profile.timezone },
    map: {
      center: profile.center,
      zoom: 12,
      markers: [
        { id: "traffic", title: "Traffic congestion", status: `${traffic}% congestion`, color: "#06B6D4", position: profile.center },
        { id: "water", title: "Water network", status: `${water}% storage`, color: "#3B82F6", position: [profile.center[0] - 0.025, profile.center[1] + 0.02] },
        { id: "aqi", title: "Air-quality sensor", status: `AQI ${aqi}`, color: "#22C55E", position: [profile.center[0] + 0.018, profile.center[1] - 0.025] },
        { id: "emergency", title: "Emergency response", status: `${emergency} active incidents`, color: "#EF4444", position: [profile.center[0] + 0.01, profile.center[1] + 0.015] },
      ],
    },
    alerts: [
      { id: "traffic", type: "traffic", title: "Traffic congestion", message: central, color: "text-yellow-400" },
      { id: "water", type: "water", title: "Water network", message: `${water}% storage at ${waterfront}`, color: "text-blue-400" },
      { id: "aqi", type: "aqi", title: "Air quality", message: `AQI ${aqi} near ${industrial}`, color: "text-green-400" },
      { id: "emergency", type: "emergency", title: "Emergency response", message: `Active response near ${north}`, color: "text-red-400" },
    ],
    weather: { temperature, feelsLike: temperature + 2, wind: profile.wind, humidity: profile.humidity, rainChance: profile.rainChance, uvIndex: 7, aqi, condition: aqi <= 50 ? "Good" : "Moderate", temperatureTrend: week.map((label, index) => ({ label, value: temperature - 2 + (index % 5) })), rainfall: months.map((label, index) => ({ label, value: 25 + index * 24 + profile.rainChance })), },
    transportation: { congestion: traffic, vehiclesProcessed: `${(traffic * 228).toLocaleString()}`, trafficTrend: trend, vehicleTrend: trend.map(({ label, value }) => ({ label, value: value * 6 + 120 })), widgets: {
      heatMap: widget("Traffic Heat Map", "Road congestion overview", [item("central", central, "Primary corridor", `${traffic}%`, "red", traffic), item("north", north, "Northbound route", `${traffic - 12}%`, "yellow", traffic - 12), item("industrial", industrial, "Freight corridor", `${traffic - 20}%`, "cyan", traffic - 20)]),
      signalStatus: widget("Smart Signal Status", "AI controlled junctions", [item("central", central, "AI controlled junction", traffic > 80 ? "Congested" : "Moderate", traffic > 80 ? "red" : "yellow"), item("north", north, "AI controlled junction", "Normal", "green"), item("waterfront", waterfront, "AI controlled junction", "Optimized", "cyan")]),
      vehicleAnalytics: widget("Vehicle Analytics", "Hourly vehicle count", [], trend.map(({ label, value }) => ({ label, value: value * 6 + 120 }))),
      incidents: widget("Live Incidents", "Active mobility operations", [item("incident-1", "Traffic incident", central, "High", "red"), item("incident-2", "Signal maintenance", north, "Medium", "yellow"), item("incident-3", "Traffic buildup", industrial, "Low", "cyan")]),
      prediction: widget("AI Traffic Prediction", "Next 30 minute forecast", [item("prediction-1", central, "Recommended diversion", traffic > 80 ? "Very High" : "Moderate", traffic > 80 ? "red" : "yellow"), item("prediction-2", north, "Signal timing adjustment", "Moderate", "yellow"), item("prediction-3", waterfront, "Normal operation", "Low", "green")]),
      signalControl: widget("Smart Signal Control", "AI signal optimization", [item("signal-1", central, "Green / red timing", "Optimized", "cyan", 55), item("signal-2", north, "Green / red timing", "Priority mode", "yellow", 70), item("signal-3", industrial, "Green / red timing", "Normal", "green", 45)]),
    } },
    climate: { widgets: {
      overview: widget("Weather Overview", "Live weather conditions", [item("temperature", "Temperature", `${temperature}°C`, "Current", "red", temperature), item("wind", "Wind", `${profile.wind} km/h`, "Current", "cyan", profile.wind), item("rain", "Rain chance", `${profile.rainChance}%`, "Forecast", "blue", profile.rainChance), item("uv", "UV index", "7", "Moderate", "yellow", 7)]),
      aqi: widget("AQI Monitor", "Air quality status", [item("aqi", "Air quality index", `${aqi}`, aqi <= 50 ? "Good" : "Moderate", aqi <= 50 ? "green" : "yellow", aqi)]),
      temperature: widget("Temperature Trend", "Last 7 days", [], week.map((label, index) => ({ label, value: temperature - 2 + (index % 5) }))),
      rainfall: widget("Rainfall Analytics", "Monthly rainfall (mm)", [], months.map((label, index) => ({ label, value: 25 + index * 24 + profile.rainChance }))),
      prediction: widget("AI Climate Prediction", "Next 24 hour forecast", [item("temp", "Temperature", `${temperature + 2}°C`, "98% confidence", "red"), item("rain", "Rainfall", `${profile.rainChance}%`, "95% confidence", "blue"), item("wind", "Wind speed", `${profile.wind + 4} km/h`, "92% confidence", "cyan")]),
      alerts: widget("Extreme Weather Alerts", "Active climate signals", [item("heat", "Heat advisory", central, "Medium", "orange"), item("rain-alert", "Rainfall watch", waterfront, "Moderate", "blue")]),
    } },
    water: { storage: water, consumption: `${(water / 25).toFixed(1)} ML`, quality: "Within target", widgets: {
      reservoirs: widget("Reservoir Status", "Live water storage levels", [item("reservoir", waterfront, "Primary reservoir", water >= 75 ? "Healthy" : "Moderate", water >= 75 ? "cyan" : "yellow", water)]),
      quality: widget("Water Quality", "Real-time quality monitoring", [item("ph", "pH level", "7.2", "Within target", "green"), item("tds", "TDS", "165 ppm", "Within target", "cyan"), item("turbidity", "Turbidity", "1.4 NTU", "Within target", "blue")]),
      consumption: widget("Water Consumption Analytics", "24 hour water usage", [], trend.map(({ label, value }) => ({ label, value: value * 5 }))),
      pipelines: widget("Pipeline Network", "Distribution infrastructure", [item("north", north, "Pressure 92 PSI", "Operational", "green"), item("central", central, "Pressure 74 PSI", "Maintenance", "yellow"), item("industrial", industrial, "Pressure 108 PSI", "High pressure", "red")]),
      leaks: widget("AI Leak Detection", "Predicted water leakage", [item("leak-1", north, "Estimated loss 520 L/hr", "Critical", "red"), item("leak-2", industrial, "Estimated loss 210 L/hr", "Moderate", "yellow")]),
      floodRisk: widget("Flood Risk Prediction", "Next 24 hour forecast", [item("flood-1", waterfront, "Flood probability", "High", "red", 84), item("flood-2", central, "Flood probability", "Medium", "yellow", 58)]),
      distribution: widget("Smart Water Distribution", "Zone-wise supply control", [item("distribution-1", north, "Valve open", "Active", "cyan", water), item("distribution-2", central, "Valve partial", "Watch", "yellow", water - 16)]),
      alerts: widget("Emergency Water Alerts", "Water network signals", [item("water-alert", "Water network", waterfront, "Active", "blue")]),
    } },
    emergency: { activeIncidents: emergency, calls: emergency * 6, widgets: {} as CityData["emergency"]["widgets"] },
    environment: { airQuality: aqi <= 50 ? "Good" : "Moderate", energyTrend: trend.map(({ label, value }) => ({ label, value: value * 7 })), carbonFootprint: `${Math.round(traffic * 1.7)} kt CO₂e`, widgets: {} as CityData["environment"]["widgets"] },
    government: { serviceCompletion: `${Math.max(82, 100 - emergency)}%`, citizenSatisfaction: `${Math.max(76, 100 - aqi / 4).toFixed(0)}%`, widgets: {} as CityData["government"]["widgets"] },
    analytics: { dailySummary: [{ label: "Vehicles Processed", value: `${(traffic * 228).toLocaleString()}`, tone: "cyan" }, { label: "Water Consumption", value: `${(water / 25).toFixed(1)} ML`, tone: "blue" }, { label: "Air Quality", value: aqi <= 50 ? "Good" : "Moderate", tone: "green" }, { label: "Emergency Calls", value: emergency * 6, tone: "red" }], widgets: {} as CityData["analytics"]["widgets"] },
    predictions: { widgets: {} as CityData["predictions"]["widgets"] },
    dashboard: { widgets: {} as CityData["dashboard"]["widgets"] },
    operations: {
      events: [
        { id: "traffic", title: "Traffic congestion detected", timestamp: "09:14", severity: "High", district: "CBD", module: "Transportation", icon: "traffic" },
        { id: "ambulance", title: "Ambulance dispatched", timestamp: "09:21", severity: "Medium", district: north, module: "Emergency", icon: "emergency" },
        { id: "incident", title: "Accident cleared", timestamp: "09:28", severity: "Low", district: central, module: "Transportation", icon: "incident" },
        { id: "rain", title: "Rainfall warning", timestamp: "09:35", severity: "Medium", district: waterfront, module: "Environment", icon: "rain" },
        { id: "water", title: "Water pressure anomaly", timestamp: "09:41", severity: "High", district: industrial, module: "Water", icon: "water" },
        { id: "aqi", title: "AQI sensor updated", timestamp: "09:47", severity: "Low", district: industrial, module: "Environment", icon: "sensor" },
        { id: "power", title: "Power fluctuation", timestamp: "09:53", severity: "Medium", district: "North District", module: "Energy", icon: "energy" },
      ],
      summary: {
        overallHealth: Number((98.6 - emergency * 0.4).toFixed(1)),
        status: traffic >= 80 ? "Moderate" : "Stable",
        situation: `Traffic normal across most districts. Minor congestion detected near ${central}. AQI remains ${aqi <= 50 ? "Good" : "Moderate"}. No critical emergency incidents.`,
        recommendations: [
          `Increase green light timing by ${Math.max(8, Math.round(traffic / 10))} seconds.`,
          "Dispatch traffic unit.",
          `Monitor reservoir level near ${waterfront}.`,
        ],
        confidence: Number((95 + water / 20).toFixed(1)),
      },
    },
    ai: { confidence: `${(99 - emergency / 10).toFixed(1)}%`, insights: [`Optimise signal timing around ${central}.`, `Monitor water distribution near ${waterfront}.`, `Review air-quality readings near ${industrial}.`], risks: [{ label: "Traffic", value: traffic >= 80 ? "High" : "Moderate", tone: traffic >= 80 ? "red" : "yellow" }, { label: "AQI", value: aqi <= 50 ? "Good" : "Moderate", tone: "green" }, { label: "Water", value: water >= 75 ? "Stable" : "Watch", tone: "blue" }, { label: "Emergency", value: emergency <= 2 ? "Low" : "Elevated", tone: "cyan" }] },
    sensors: [
      { id: "transportation", name: "Transportation", onlineDevices: 142, offlineDevices: 3, health: 97, status: "Online" },
      { id: "water", name: "Water", onlineDevices: 88, offlineDevices: 2, health: 95, status: "Online" },
      { id: "environment", name: "Environment", onlineDevices: 64, offlineDevices: 4, health: 92, status: "Online" },
      { id: "energy", name: "Energy", onlineDevices: 51, offlineDevices: 1, health: 94, status: "Degraded" },
      { id: "emergency", name: "Emergency", onlineDevices: 39, offlineDevices: 1, health: 98, status: "Online" },
      { id: "government", name: "Government", onlineDevices: 28, offlineDevices: 2, health: 90, status: "Online" },
    ],
    incidents: [
      { id: "accident", title: "Traffic Accident", location: "North District", severity: "High", time: "09:42", icon: "alert" },
      { id: "leakage", title: "Water Leakage", location: "Sector 4", severity: "Medium", time: "09:47", icon: "droplets" },
      { id: "fire", title: "Fire Alert", location: "Industrial Zone", severity: "Critical", time: "09:50", icon: "fire" },
    ],
    energy: { renewableGeneration: `${Math.round(traffic * 1.4)} MW`, widgets: { generation: widget("Renewable Energy", "Live green energy production", [item("solar", "Solar", `${Math.round(traffic)} MW`, "Active", "yellow"), item("wind", "Wind", `${Math.round(traffic / 2)} MW`, "Active", "cyan")]), consumption: widget("Energy Monitoring", "City energy consumption", [], trend.map(({ label, value }) => ({ label, value: value * 7 }))) } },
    kpis: { traffic, aqi, water, emergency },
  };
}
