export const ADS_ENABLED =
  typeof window !== "undefined" &&
  !window.location.hostname.includes("vercel.app");
