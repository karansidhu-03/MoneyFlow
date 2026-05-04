import { useEffect, useRef } from "react";
import { useAds } from "@/context/ads-context";
import { cn } from "@/lib/utils";

interface AdUnitProps {
  className?: string;
  adKey: string;
  width: number;
  height: number;
}

const AdUnit = ({ className, adKey, width, height }: AdUnitProps) => {
  const { enabled } = useAds();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ❌ HARD BLOCK ON VERCEL
    if (!enabled) return;

    if (!ref.current) return;

    ref.current.innerHTML = "";

    const config = document.createElement("script");
    config.innerHTML = `
      atOptions = {
        key: '${adKey}',
        format: 'iframe',
        width: ${width},
        height: ${height},
        params: {}
      };
    `;

    const script = document.createElement("script");
    script.src = "https://fortunateambiguous.com/" + adKey + "/invoke.js";
    script.async = true;

    ref.current.appendChild(config);
    ref.current.appendChild(script);
  }, [enabled, adKey, width, height]);

  // ❌ NO ADS ON VERCEL
  if (!enabled) return null;

  return (
    <div
      className={cn("flex justify-center my-4 overflow-hidden", className)}
      style={{ minHeight: height }}
    >
      <div ref={ref} />
    </div>
  );
};

export default AdUnit;
