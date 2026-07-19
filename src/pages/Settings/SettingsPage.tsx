import { RotateCcw, Save } from "lucide-react";
import { DashboardLayout } from "../../layouts";
import { Button, PageHeader } from "../../components/ui";
import { SettingsSection, SettingsToggle } from "../../components/settings";
import { cities } from "../../data/cities";
import { useCity } from "../../context/CityContext";
import { useSettings } from "../../context/SettingsContext";
import type { CityId, } from "../../types/city";
import type { ColorScheme, Language, ThemePreference } from "../../types/settings";

const inputClass = "mt-1 w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none focus:border-cyan-500";
const labelClass = "block text-sm font-medium text-slate-300";

export default function SettingsPage() {
  const { settings, updateSettings, resetSettings } = useSettings();
  const { selectedCity, setSelectedCity } = useCity();
  const updateCityDefault = (defaultCity: CityId) => {
    updateSettings((current) => ({ ...current, cityManagement: { ...current.cityManagement, defaultCity } }));
    setSelectedCity(defaultCity);
  };
  const toggleFavorite = (cityId: CityId) => updateSettings((current) => {
    const favorites = current.cityManagement.favoriteCities.includes(cityId)
      ? current.cityManagement.favoriteCities.filter((id) => id !== cityId)
      : [...current.cityManagement.favoriteCities, cityId];
    return { ...current, cityManagement: { ...current.cityManagement, favoriteCities: favorites } };
  });

  return <DashboardLayout>
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <PageHeader title="Settings" subtitle="Configure your CityVerse AI workspace and personal preferences." />
      <div className="flex gap-3"><button type="button" onClick={resetSettings} className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 font-medium text-slate-300 transition hover:border-slate-500"><RotateCcw size={18} />Reset</button><Button onClick={() => undefined}><span className="inline-flex items-center gap-2"><Save size={18} />Saved locally</span></Button></div>
    </div>

    <div className="grid gap-6 xl:grid-cols-2">
      <SettingsSection title="General Settings" description="Workspace defaults for this browser session.">
        <label className={labelClass}>Organization name<input value={settings.general.organizationName} onChange={(event) => updateSettings((current) => ({ ...current, general: { ...current.general, organizationName: event.target.value } }))} className={inputClass} /></label>
        <label className={labelClass}>Data retention<select value={settings.general.dataRetentionDays} onChange={(event) => updateSettings((current) => ({ ...current, general: { ...current.general, dataRetentionDays: Number(event.target.value) as 30 | 90 | 365 } }))} className={inputClass}><option value={30}>30 days</option><option value={90}>90 days</option><option value={365}>1 year</option></select></label>
      </SettingsSection>

      <SettingsSection title="User Profile" description="Personal information used in the control center.">
        <label className={labelClass}>Display name<input value={settings.profile.name} onChange={(event) => updateSettings((current) => ({ ...current, profile: { ...current.profile, name: event.target.value } }))} className={inputClass} /></label>
        <label className={labelClass}>Email address<input type="email" value={settings.profile.email} onChange={(event) => updateSettings((current) => ({ ...current, profile: { ...current.profile, email: event.target.value } }))} className={inputClass} /></label>
        <div><p className={labelClass}>Role</p><p className="mt-1 rounded-xl bg-slate-800 px-3 py-2 text-slate-300">{settings.profile.role}</p></div>
      </SettingsSection>

      <SettingsSection title="Notification Preferences" description="Choose which operational signals need your attention.">
        <SettingsToggle id="emergency-notifications" label="Emergency alerts" description="Critical incidents and response changes." checked={settings.notifications.emergency} onChange={(emergency) => updateSettings((current) => ({ ...current, notifications: { ...current.notifications, emergency } }))} />
        <SettingsToggle id="traffic-notifications" label="Traffic alerts" description="Congestion and signal-control updates." checked={settings.notifications.traffic} onChange={(traffic) => updateSettings((current) => ({ ...current, notifications: { ...current.notifications, traffic } }))} />
        <SettingsToggle id="environment-notifications" label="Environmental alerts" description="AQI, water, and sustainability signals." checked={settings.notifications.environment} onChange={(environment) => updateSettings((current) => ({ ...current, notifications: { ...current.notifications, environment } }))} />
        <SettingsToggle id="digest-notifications" label="Daily email digest" description="A summary ready for future delivery integration." checked={settings.notifications.emailDigest} onChange={(emailDigest) => updateSettings((current) => ({ ...current, notifications: { ...current.notifications, emailDigest } }))} />
      </SettingsSection>

      <SettingsSection title="Theme & Appearance" description="Adapt CityVerse AI to your working environment.">
        <fieldset><legend className={labelClass}>Theme</legend><div className="mt-2 grid grid-cols-3 gap-2">{(["light", "dark", "system"] as ThemePreference[]).map((theme) => <label key={theme} className="cursor-pointer rounded-xl border border-slate-700 p-3 text-center capitalize text-slate-300 has-[:checked]:border-cyan-500 has-[:checked]:bg-cyan-500/10"><input className="sr-only" type="radio" name="theme" checked={settings.appearance.theme === theme} onChange={() => updateSettings((current) => ({ ...current, appearance: { ...current.appearance, theme } }))} />{theme}</label>)}</div></fieldset>
        <label className={labelClass}>Accent color<select value={settings.appearance.colorScheme} onChange={(event) => updateSettings((current) => ({ ...current, appearance: { ...current.appearance, colorScheme: event.target.value as ColorScheme } }))} className={inputClass}><option value="cyan">Cyan</option><option value="blue">Blue</option><option value="violet">Violet</option></select></label>
        <SettingsToggle id="reduce-motion" label="Reduce motion" description="Limit non-essential animation in dashboards and maps." checked={settings.appearance.reduceMotion} onChange={(reduceMotion) => updateSettings((current) => ({ ...current, appearance: { ...current.appearance, reduceMotion } }))} />
      </SettingsSection>

      <SettingsSection title="Language & Localization" description="Regional display preferences for dates and time.">
        <label className={labelClass}>Language<select value={settings.localization.language} onChange={(event) => updateSettings((current) => ({ ...current, localization: { ...current.localization, language: event.target.value as Language } }))} className={inputClass}><option value="en">English</option><option value="zh-TW">Traditional Chinese</option><option value="hi">Hindi</option></select></label>
        <label className={labelClass}>Timezone<select value={settings.localization.timezone} onChange={(event) => updateSettings((current) => ({ ...current, localization: { ...current.localization, timezone: event.target.value } }))} className={inputClass}><option value="Asia/Kolkata">Asia/Kolkata</option><option value="Asia/Singapore">Asia/Singapore</option><option value="Asia/Taipei">Asia/Taipei</option></select></label>
        <label className={labelClass}>Date format<select value={settings.localization.dateFormat} onChange={(event) => updateSettings((current) => ({ ...current, localization: { ...current.localization, dateFormat: event.target.value as typeof current.localization.dateFormat } }))} className={inputClass}><option value="DD/MM/YYYY">DD/MM/YYYY</option><option value="MM/DD/YYYY">MM/DD/YYYY</option><option value="YYYY-MM-DD">YYYY-MM-DD</option></select></label>
      </SettingsSection>

      <SettingsSection title="City Management" description="Frontend-only city defaults and shortcuts.">
        <label className={labelClass}>Default city<select value={settings.cityManagement.defaultCity} onChange={(event) => updateCityDefault(event.target.value as CityId)} className={inputClass}>{Object.entries(cities).map(([id, city]) => <option key={id} value={id}>{city.metadata.name}</option>)}</select></label>
        <div><p className={labelClass}>Favorite cities</p><div className="mt-2 grid gap-2 sm:grid-cols-2">{Object.entries(cities).map(([id, city]) => { const cityId = id as CityId; return <label key={id} className="flex items-center gap-3 rounded-xl border border-slate-700 p-3 text-slate-300"><input type="checkbox" checked={settings.cityManagement.favoriteCities.includes(cityId)} onChange={() => toggleFavorite(cityId)} className="h-4 w-4 accent-cyan-500" />{city.metadata.name}</label>; })}</div></div>
        <p className="text-sm text-slate-400">Currently viewing: {cities[selectedCity].metadata.name}</p>
      </SettingsSection>

      <SettingsSection title="AI Assistant Settings" description="Control how CityVerse AI surfaces operational guidance.">
        <SettingsToggle id="proactive-insights" label="Proactive insights" description="Show relevant recommendations before you request them." checked={settings.ai.proactiveInsights} onChange={(proactiveInsights) => updateSettings((current) => ({ ...current, ai: { ...current.ai, proactiveInsights } }))} />
        <SettingsToggle id="concise-ai" label="Concise responses" description="Prioritize brief, action-oriented AI summaries." checked={settings.ai.conciseResponses} onChange={(conciseResponses) => updateSettings((current) => ({ ...current, ai: { ...current.ai, conciseResponses } }))} />
        <label className={labelClass}>Minimum confidence: {settings.ai.confidenceThreshold}%<input aria-label="Minimum AI confidence" type="range" min="50" max="100" value={settings.ai.confidenceThreshold} onChange={(event) => updateSettings((current) => ({ ...current, ai: { ...current.ai, confidenceThreshold: Number(event.target.value) } }))} className="mt-2 w-full accent-cyan-500" /></label>
      </SettingsSection>

      <SettingsSection title="Map Preferences" description="Set default map behavior for the digital twin.">
        <label className={labelClass}>Default zoom<select value={settings.map.defaultZoom} onChange={(event) => updateSettings((current) => ({ ...current, map: { ...current.map, defaultZoom: Number(event.target.value) } }))} className={inputClass}><option value={10}>Regional</option><option value={12}>City</option><option value={14}>District</option></select></label>
        <SettingsToggle id="map-traffic" label="Show traffic layer" description="Display traffic signals and congestion markers." checked={settings.map.showTraffic} onChange={(showTraffic) => updateSettings((current) => ({ ...current, map: { ...current.map, showTraffic } }))} />
        <SettingsToggle id="map-alerts" label="Show alerts" description="Display active incidents as map markers." checked={settings.map.showAlerts} onChange={(showAlerts) => updateSettings((current) => ({ ...current, map: { ...current.map, showAlerts } }))} />
        <SettingsToggle id="map-recenter" label="Auto recenter" description="Recenter when the selected city changes." checked={settings.map.autoRecenter} onChange={(autoRecenter) => updateSettings((current) => ({ ...current, map: { ...current.map, autoRecenter } }))} />
      </SettingsSection>

      <SettingsSection title="Dashboard Preferences" description="Control the density and update cadence of your overview.">
        <label className={labelClass}>Refresh interval<select value={settings.dashboard.refreshInterval} onChange={(event) => updateSettings((current) => ({ ...current, dashboard: { ...current.dashboard, refreshInterval: Number(event.target.value) as 30 | 60 | 300 } }))} className={inputClass}><option value={30}>30 seconds</option><option value={60}>1 minute</option><option value={300}>5 minutes</option></select></label>
        <SettingsToggle id="compact-cards" label="Compact cards" description="Reduce padding in dashboard cards." checked={settings.dashboard.compactCards} onChange={(compactCards) => updateSettings((current) => ({ ...current, dashboard: { ...current.dashboard, compactCards } }))} />
        <SettingsToggle id="welcome-message" label="Welcome message" description="Show a contextual greeting on the dashboard." checked={settings.dashboard.showWelcomeMessage} onChange={(showWelcomeMessage) => updateSettings((current) => ({ ...current, dashboard: { ...current.dashboard, showWelcomeMessage } }))} />
      </SettingsSection>

      <SettingsSection title="Accessibility" description="Make the control center more comfortable to use.">
        <SettingsToggle id="high-contrast" label="High contrast" description="Increase contrast between interface elements." checked={settings.accessibility.highContrast} onChange={(highContrast) => updateSettings((current) => ({ ...current, accessibility: { ...current.accessibility, highContrast } }))} />
        <SettingsToggle id="large-text" label="Large text" description="Increase text size in future theme integration." checked={settings.accessibility.largeText} onChange={(largeText) => updateSettings((current) => ({ ...current, accessibility: { ...current.accessibility, largeText } }))} />
        <SettingsToggle id="keyboard-shortcuts" label="Keyboard shortcuts" description="Enable navigation shortcuts when available." checked={settings.accessibility.keyboardShortcuts} onChange={(keyboardShortcuts) => updateSettings((current) => ({ ...current, accessibility: { ...current.accessibility, keyboardShortcuts } }))} />
      </SettingsSection>

      <SettingsSection title="About CityVerse AI" description="Smart City Digital Twin platform.">
        <dl className="grid gap-3 text-sm sm:grid-cols-2"><div><dt className="text-slate-400">Version</dt><dd className="font-medium text-white">0.0.0</dd></div><div><dt className="text-slate-400">Data mode</dt><dd className="font-medium text-white">Frontend mock data</dd></div><div><dt className="text-slate-400">Selected city</dt><dd className="font-medium text-white">{cities[selectedCity].metadata.name}</dd></div><div><dt className="text-slate-400">Integration</dt><dd className="font-medium text-white">Backend-ready settings contract</dd></div></dl>
      </SettingsSection>
    </div>
  </DashboardLayout>;
}
