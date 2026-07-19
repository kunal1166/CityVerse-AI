import type { Settings } from "../types/settings";

export const defaultSettings: Settings = {
  general: { organizationName: "CityVerse AI", dataRetentionDays: 90 },
  profile: { name: "Administrator", email: "admin@cityverse.ai", role: "Platform Administrator" },
  notifications: { emergency: true, traffic: true, environment: true, emailDigest: false },
  localization: { language: "en", timezone: "Asia/Kolkata", dateFormat: "DD/MM/YYYY" },
  cityManagement: { defaultCity: "taipei", favoriteCities: ["taipei", "singapore"] },
  ai: { proactiveInsights: true, confidenceThreshold: 80, conciseResponses: false },
  map: { defaultZoom: 12, showTraffic: true, showAlerts: true, autoRecenter: true },
  dashboard: { refreshInterval: 60, compactCards: false, showWelcomeMessage: true },
  appearance: { theme: "dark", colorScheme: "cyan", reduceMotion: false },
  accessibility: { highContrast: false, largeText: false, keyboardShortcuts: true },
};

/** Mock repository boundary. Replace its implementation with FastAPI calls later. */
export const settingsService = {
  async getSettings(): Promise<Settings> {
    return defaultSettings;
  },
  async updateSettings(settings: Settings): Promise<Settings> {
    return settings;
  },
};
