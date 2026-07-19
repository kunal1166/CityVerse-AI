import type { CityId } from "./city";

export type ThemePreference = "light" | "dark" | "system";
export type ColorScheme = "cyan" | "blue" | "violet";
export type Language = "en" | "zh-TW" | "hi";

export interface UserProfileSettings {
  name: string;
  email: string;
  role: string;
}

export interface GeneralSettings {
  organizationName: string;
  dataRetentionDays: 30 | 90 | 365;
}

export interface NotificationSettings {
  emergency: boolean;
  traffic: boolean;
  environment: boolean;
  emailDigest: boolean;
}

export interface LocalizationSettings {
  language: Language;
  timezone: string;
  dateFormat: "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
}

export interface CityManagementSettings {
  defaultCity: CityId;
  favoriteCities: CityId[];
}

export interface AIAssistantSettings {
  proactiveInsights: boolean;
  confidenceThreshold: number;
  conciseResponses: boolean;
}

export interface MapSettings {
  defaultZoom: number;
  showTraffic: boolean;
  showAlerts: boolean;
  autoRecenter: boolean;
}

export interface DashboardSettings {
  refreshInterval: 30 | 60 | 300;
  compactCards: boolean;
  showWelcomeMessage: boolean;
}

export interface AppearanceSettings {
  theme: ThemePreference;
  colorScheme: ColorScheme;
  reduceMotion: boolean;
}

export interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  keyboardShortcuts: boolean;
}

export interface Settings {
  general: GeneralSettings;
  profile: UserProfileSettings;
  notifications: NotificationSettings;
  localization: LocalizationSettings;
  cityManagement: CityManagementSettings;
  ai: AIAssistantSettings;
  map: MapSettings;
  dashboard: DashboardSettings;
  appearance: AppearanceSettings;
  accessibility: AccessibilitySettings;
}
