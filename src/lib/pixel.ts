// Utilidad para disparar eventos del Meta Pixel de forma centralizada.
// Se usa principalmente para el evento InitiateCheckout al hacer clic
// en cualquiera de los botones de compra que redirigen a Hotmart.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export type PackId = "pro" | "elite" | "vip";

const PACK_VALUES: Record<PackId, number> = {
  pro: 5.99,
  elite: 15.0,
  vip: 18.0,
};

export function trackInitiateCheckout(packId: PackId, valueOverride?: number) {
  if (typeof window === "undefined" || !window.fbq) return;

  window.fbq("track", "InitiateCheckout", {
    content_name: packId,
    content_category: "gastador-inversor-21dias",
    value: valueOverride ?? PACK_VALUES[packId],
    currency: "USD",
  });
}
