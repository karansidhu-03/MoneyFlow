import { createContext, useContext } from "react";
import { ADS_ENABLED } from "@/lib/ads";

const AdsContext = createContext({
  enabled: ADS_ENABLED,
});

export const useAds = () => useContext(AdsContext);

export const AdsProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AdsContext.Provider value={{ enabled: ADS_ENABLED }}>
      {children}
    </AdsContext.Provider>
  );
};
