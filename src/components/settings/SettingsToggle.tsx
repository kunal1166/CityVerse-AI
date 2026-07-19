interface SettingsToggleProps {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function SettingsToggle({ id, label, description, checked, onChange }: SettingsToggleProps) {
  return <label htmlFor={id} className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-700 p-4 transition hover:border-slate-600"><span><span className="block font-medium text-white">{label}</span><span className="mt-1 block text-sm text-slate-400">{description}</span></span><input id={id} type="checkbox" role="switch" checked={checked} onChange={(event) => onChange(event.target.checked)} className="h-5 w-5 accent-cyan-500" /></label>;
}
