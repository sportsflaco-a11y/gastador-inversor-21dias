import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShoppingBag } from "lucide-react";

interface NotificationItem {
  name: string;
  city: string;
  plan: string;
}

const mockPurchases: NotificationItem[] = [
  { name: "María", city: "Ciudad de México", plan: "PACK COMPLETO VIP" },
  { name: "Juan", city: "Bogotá", plan: "PACK PRO" },
  { name: "Carlos", city: "Lima", plan: "PACK COMPLETO VIP" },
  { name: "Sofía", city: "Santiago", plan: "PACK ELITE" },
  { name: "Alejandro", city: "Buenos Aires", plan: "PACK PRO" },
  { name: "Diana", city: "Guadalajara", plan: "PACK COMPLETO VIP" },
  { name: "Mateo", city: "Madrid", plan: "PACK ELITE" },
  { name: "Camila", city: "Medellín", plan: "PACK COMPLETO VIP" },
  { name: "Diego", city: "Monterrey", plan: "PACK PRO" },
  { name: "Valentina", city: "Quito", plan: "PACK COMPLETO VIP" }
];

export default function SocialProofNotifications() {
  const [activeNotification, setActiveNotification] = useState<NotificationItem | null>(null);
  const [hasReachedOffer, setHasReachedOffer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // IntersectionObserver to detect when user scrolls to the offer section
  useEffect(() => {
    const target = document.getElementById("oferta");
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasReachedOffer(true);
          observer.disconnect(); // Only trigger once to start the notifications flow
        }
      },
      {
        root: null,
        rootMargin: "100px", // Trigger slightly before it fully comes into view
        threshold: 0.1,
      }
    );

    observer.observe(target);

    // Fallback: in case Observer has issues, monitor scroll position
    const handleScroll = () => {
      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight + 200) {
        setHasReachedOffer(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle showing and cycles of notifications
  useEffect(() => {
    if (!hasReachedOffer) return;

    let showTimeout: NodeJS.Timeout;

    const showNotification = (index: number) => {
      const item = mockPurchases[index % mockPurchases.length];
      setActiveNotification(item);

      // Hide the notification after exactly 4 seconds
      showTimeout = setTimeout(() => {
        setActiveNotification(null);
      }, 4000);
    };

    // Trigger the first notification after 1 second
    const initialTimeout = setTimeout(() => {
      showNotification(0);
    }, 1000);

    // Schedule subsequent notifications exactly every 20 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        showNotification(nextIndex);
        return nextIndex;
      });
    }, 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(showTimeout);
      clearInterval(interval);
    };
  }, [hasReachedOffer]);

  return (
    <div 
      className="fixed bottom-4 left-4 z-50 pointer-events-none max-w-sm w-[calc(100%-2rem)] sm:w-80" 
      id="social-proof-container"
    >
      <AnimatePresence>
        {activeNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="pointer-events-auto bg-zinc-950/95 border border-[#c8ebd7]/30 text-white rounded-2xl p-4 shadow-2xl backdrop-blur-md flex items-start gap-3.5 select-none"
            id={`purchase-notification-${currentIndex}`}
          >
            {/* Visual Icon Badge */}
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-[#cbfa05]" id="notification-icon-badge">
              <ShoppingBag className="w-5 h-5" />
            </div>

            {/* Contents info */}
            <div className="flex-1 min-w-0" id="notification-content-details">
              <p className="text-xs font-semibold text-zinc-100 leading-tight">
                <span className="font-bold text-[#cbfa05]">{activeNotification.name}</span> de <span className="font-bold text-emerald-400">{activeNotification.city}</span>
              </p>
              <p className="text-[11px] text-zinc-300 mt-0.5 leading-snug">
                Acaba de comprar el <span className="font-bold text-white underline decoration-emerald-500 decoration-2 underline-offset-2">{activeNotification.plan}</span>
              </p>
              
              <div className="flex items-center gap-1.5 mt-2" id="notification-footer">
                <Sparkles className="w-3 h-3 text-[#cbfa05] animate-pulse" />
                <span className="text-[9px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  Venta verificada en vivo
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
