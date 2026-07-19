export type CityId = "taipei" | "singapore" | "kolkata" | "bengaluru";
export type Coordinate = [latitude: number, longitude: number];

export interface CityMarker {
  id: string;
  title: string;
  status: string;
  color: string;
  position: Coordinate;
}

export type AlertType = "accident" | "traffic" | "water" | "aqi" | "weather" | "emergency";

export interface CityAlert {
  id: string;
  type: AlertType;
  title: string;
  message: string;
  color: string;
}

export interface ChartPoint {
  label: string;
  value: number;
}

export interface CityMetric {
  label: string;
  value: string | number;
  tone: "cyan" | "green" | "blue" | "red" | "yellow" | "orange" | "purple";
}

export interface CityOperationEvent {
  id: string;
  title: string;
  timestamp: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  district: string;
  module: "Transportation" | "Emergency" | "Water" | "Environment" | "Energy" | "Government";
  icon: string;
}

export interface CityOperationSummary {
  overallHealth: number;
  status: string;
  situation: string;
  recommendations: string[];
  confidence: number;
}

export interface CitySensorModule {
  id: string;
  name: string;
  onlineDevices: number;
  offlineDevices: number;
  health: number;
  status: "Online" | "Degraded" | "Offline";
}

export interface CityIncidentFeed {
  id: string;
  title: string;
  location: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  time: string;
  icon: string;
}

export interface WidgetItem {
  id: string;
  title: string;
  detail: string;
  status: string;
  tone: "cyan" | "green" | "blue" | "red" | "yellow" | "orange" | "purple";
  value?: number;
}

export interface WidgetData {
  title: string;
  subtitle: string;
  items: WidgetItem[];
  chart?: ChartPoint[];
}

export interface TransportationData {
  congestion: number;
  vehiclesProcessed: string;
  trafficTrend: ChartPoint[];
  vehicleTrend: ChartPoint[];
  widgets: Record<"heatMap" | "signalStatus" | "vehicleAnalytics" | "incidents" | "prediction" | "signalControl", WidgetData>;
}

export interface ClimateData {
  widgets: Record<"overview" | "aqi" | "temperature" | "rainfall" | "prediction" | "alerts", WidgetData>;
}

export interface WaterData {
  storage: number;
  consumption: string;
  quality: string;
  widgets: Record<"reservoirs" | "quality" | "consumption" | "pipelines" | "leaks" | "floodRisk" | "distribution" | "alerts", WidgetData>;
}

export interface EnvironmentData {
  airQuality: string;
  energyTrend: ChartPoint[];
  carbonFootprint: string;
  widgets: Record<"greenCover" | "pollution" | "waste" | "energy" | "carbon" | "renewables" | "advisor" | "alerts", WidgetData>;
}

export interface EmergencyData {
  activeIncidents: number;
  calls: number;
  widgets: Record<"overview" | "incidents" | "hospitals" | "fireRescue" | "police" | "resources" | "coordinator" | "prediction", WidgetData>;
}

export interface GovernmentData {
  serviceCompletion: string;
  citizenSatisfaction: string;
  widgets: Record<"overview" | "complaints" | "kpis" | "departments" | "budget" | "services" | "advisor" | "goals" | "sentiment" | "alerts", WidgetData>;
}

export interface AnalyticsData { dailySummary: CityMetric[]; widgets: Record<"summary" | "reports", WidgetData>; }
export interface PredictionData { widgets: Record<"city" | "traffic" | "climate" | "emergency", WidgetData>; }
export interface DashboardData { widgets: Record<"kpis" | "map" | "alerts" | "weather", WidgetData>; }

export interface CityMetadata {
  id: CityId;
  name: string;
  country: string;
  population: string;
  timezone: string;
}

export interface CityData {
  metadata: CityMetadata;
  map: { center: Coordinate; zoom: number; markers: CityMarker[] };
  alerts: CityAlert[];
  weather: { temperature: number; feelsLike: number; wind: number; humidity: number; rainChance: number; uvIndex: number; aqi: number; condition: string; temperatureTrend: ChartPoint[]; rainfall: ChartPoint[] };
  climate: ClimateData;
  transportation: TransportationData;
  water: WaterData;
  emergency: EmergencyData;
  environment: EnvironmentData;
  energy: { renewableGeneration: string; widgets: Record<"generation" | "consumption", WidgetData> };
  government: GovernmentData;
  analytics: AnalyticsData;
  predictions: PredictionData;
  dashboard: DashboardData;
  operations: { events: CityOperationEvent[]; summary: CityOperationSummary };
  ai: { confidence: string; insights: string[]; risks: CityMetric[] };
  sensors: CitySensorModule[];
  incidents: CityIncidentFeed[];
  kpis: { traffic: number; aqi: number; water: number; emergency: number };
}
