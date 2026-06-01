/* eslint-disable @typescript-eslint/no-explicit-any */

interface WindowWithGA extends Window {
  dataLayer?: any[];
  gtag?: (...args: any[]) => void;
}

function getGtag() {
  const w = window as WindowWithGA;
  if (w.gtag) return w.gtag;
  // Fallback: push to dataLayer if gtag not yet loaded
  return (...args: any[]) => {
    (w.dataLayer = w.dataLayer || []).push(args);
  };
}

export function trackPageView(path: string, title?: string) {
  const gtag = getGtag();
  gtag("config", "G-F2E1KMCEQ7", {
    page_path: path,
    page_title: title || document.title,
  });
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  const gtag = getGtag();
  gtag("event", eventName, params || {});
}

export function trackFormSubmit(service?: string) {
  trackEvent("form_submit", {
    event_category: "contact",
    event_label: service || "Geral",
    value: 1,
  });
}

export function trackOutboundLink(url: string, label?: string) {
  trackEvent("click", {
    event_category: "outbound",
    event_label: label || url,
    transport_type: "beacon",
  });
}
