import { createContext, useContext, useMemo, useState } from "react";
import { cities } from "../data/cities";
import type { CityKey } from "../data/cities";

type CityContextType = {
  selectedCity: CityKey;
  setSelectedCity: (city: CityKey) => void;
};

const CityContext = createContext<CityContextType | null>(null);

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [selectedCity, setSelectedCity] = useState<CityKey>("taipei");

  const value = useMemo(() => ({ selectedCity, setSelectedCity }), [selectedCity]);

  return (
    <CityContext.Provider value={value}>
      {children}
    </CityContext.Provider>
  );
}

// A hook is intentionally colocated with its provider to keep CityContext's public API cohesive.
// eslint-disable-next-line react-refresh/only-export-components
export function useCity() {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used inside CityProvider");
  }

  return {
    ...context,
    city: cities[context.selectedCity],
  };
}
