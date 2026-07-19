import type { ReactNode } from "react";
import Card from "../ui/Card";

interface SettingsSectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function SettingsSection({ title, description, children }: SettingsSectionProps) {
  return <Card><div className="mb-5"><h2 className="text-xl font-semibold text-white">{title}</h2><p className="mt-1 text-sm text-slate-400">{description}</p></div><div className="space-y-4">{children}</div></Card>;
}
