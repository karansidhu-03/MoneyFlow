import { useEffect, useRef } from "react";

interface AdProps {
  id: string;
  height: number;
  width: number;
}

const AdUnit = ({ id, height, width }: AdProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This prevents the ad from loading twice
    if (adRef.current && !adRef.current.firstChild) {
      const configScript = document.createElement("script");
      const invokeScript = document.createElement("script");

      configScript.innerHTML = `
        atOptions = {
          'key' : '${id}',
          'format' : 'iframe',
          'height' : ${height},
          'width' : ${width},
          'params' : {}
        };
      `;

      invokeScript.src = `//fortunateambiguous.com/${id}/invoke.js`;
      invokeScript.async = true;

      adRef.current.appendChild(configScript);
      adRef.current.appendChild(invokeScript);
    }
  }, [id]);

  return (
    <div className="flex flex-col items-center my-10 overflow-hidden">
      <span className="text-[10px] text-slate-300 uppercase tracking-widest mb-2">Advertisement</span>
      <div ref={adRef} style={{ width: `${width}px`, height: `${height}px` }} className="bg-slate-50 border border-slate-100 rounded-lg shadow-sm" />
    </div>
  );
};

export default AdUnit;
