export const GA_ID: string | undefined = import.meta.env
  .VITE_GOOGLE_ANALYTICS_ID;
export const gaEnabled = Boolean(GA_ID);
