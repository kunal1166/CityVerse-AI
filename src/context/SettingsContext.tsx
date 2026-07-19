import { createContext, useContext, useMemo, useState } from "react";
import { defaultSettings, settingsService } from "../services/settingsService";
import type { Settings } from "../types/settings";

interface SettingsContextValue {
  settings: Settings;
  updateSettings: (updater: (current: Settings) => Settings) => void;
  resetSettings: () => void;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const updateSettings = (updater: (current: Settings) => Settings) => {
    setSettings((current) => {
      const next = updater(current);
      void settingsService.updateSettings(next);
      return next;
    });
  };
  const resetSettings = () => setSettings(defaultSettings);
  const value = useMemo(() => ({ settings, updateSettings, resetSettings }), [settings]);
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used inside SettingsProvider");
  return context;
}
