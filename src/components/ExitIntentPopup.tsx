import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Clock } from "lucide-react";
import { Button } from "./ui/Button";

/**
 * Exit-intent downsell popup.
 * Links point to the real Hotmart downsell offers:
 * Elite $12 (off=qx6z4ozx) and VIP $15 (off=4d7mx16q).
 */
const DOWNSELL_LINKS = {
  elite: "https://pay.hotmart.com/W106561212I?off=qx6z4ozx",
  vip: "https://pay.hotmart.com/L106244109G?off=4d7mx16q",
};

const SESSION_KEY = "cenit_exit_popup_shown";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    // Don't show more than once per browser session
    if (sessionStorage.getItem(SESSION_KEY)) {
      hasTriggered.current = true;
      return;
    }

    const trigger = () => {
      if (hasTriggered.current) return;
      hasTriggered.current = true;
      sessionStorage.setItem(SESSION_KEY, "1");
      setIsVisible(true);
    };

    // Desktop: mouse leaves through the top of the viewport (toward the tab bar)
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) {
        trigger();
      }
    };

    // Mobile: user presses the browser/system back button.
    // We push a dummy history entry; if the user goes "back", we intercept it once.
    window.history.pushState({ cenitExitGuard: true }, "");
    const handlePopState = () => {
      trigger();
      // Restore the entry so the site doesn't feel broken afterward
      window.history.pushState({ cenitExitGuard: true }, "");
    };

    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const close = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          id="exit-intent-overlay"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative w-full max-w-lg bg-[#121214] border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            id="exit-intent-modal"
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
              aria-label="Cerrar"
              id="exit-intent-close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full">
                <Clock className="w-3 h-3" />
                Oferta única, no se repite
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase leading-tight mb-3">
              Espera — antes de irte, una última oportunidad
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Sabemos que $15 o $18 puede ser mucho para decidir ahora mismo. Te dejamos entrar con un precio especial, solo por esta vez.
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
                <div>
                  <p className="text-white font-bold text-sm">Pack Elite</p>
                  <p className="text-zinc-500 text-xs">Solo la app, de por vida</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-zinc-600 text-xs line-through">$15</span>
                  <span className="text-brand font-black text-lg">$12</span>
                  <Button href={DOWNSELL_LINKS.elite} variant="outline" showIcon={false} className="!px-4 !py-2 !text-xs">
                    Quiero esta
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-950 border border-brand/30">
                <div>
                  <p className="text-white font-bold text-sm">Pack Completo VIP</p>
                  <p className="text-zinc-500 text-xs">Todo, incluido el Bono #4</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-zinc-600 text-xs line-through">$18</span>
                  <span className="text-brand font-black text-lg">$15</span>
                  <Button href={DOWNSELL_LINKS.vip} variant="primary" showIcon={false} className="!px-4 !py-2 !text-xs">
                    Quiero esta
                  </Button>
                </div>
              </div>
            </div>

            <button
              onClick={close}
              className="w-full text-center text-zinc-600 hover:text-zinc-400 text-xs mt-5 transition-colors"
              id="exit-intent-decline"
            >
              No, gracias, prefiero seguir viendo
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
