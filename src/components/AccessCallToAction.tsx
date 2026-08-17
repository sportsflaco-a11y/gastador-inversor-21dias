import { Check, X, ShieldCheck, Zap } from "lucide-react";
import { Button } from "./ui/Button";
import { SectionHeader } from "./ui/SectionHeader";
import { trackInitiateCheckout, type PackId } from "../lib/pixel";

export default function AccessCallToAction() {
  const packs = [
    {
      id: "pro",
      name: "PACK PRO",
      subtitle: "Mentalidad y Estrategia",
      price: "$5.99 USD",
      period: "Un solo pago",
      badge: "REPROGRAMACIÓN",
      description: "Incluye el Reto de 21 Días y los 3 bonos complementarios de alto impacto.",
      image: null,
      highlighted: false,
      buttonText: "COMPRAR PACK PRO",
      href: "https://pay.hotmart.com/U106559885I?off=el4s2frg&checkoutMode=10",
      features: [
        { text: "El Reto de 21 Días (Ebook)", included: true },
        { text: "Bono #1: Desafío de Reprogramación", included: true },
        { text: "Bono #2: Plan de Construcción", included: true },
        { text: "Bono #3: Manual del Inversor", included: true },
        { text: "Bono #4: El Cerebro del Comprador Compulsivo", included: false },
        { text: "El Arquitecto Financiero (App)", included: false },
        { text: "Soporte VIP Personalizado", included: false }
      ]
    },
    {
      id: "vip",
      name: "PACK COMPLETO VIP",
      subtitle: "La Solución Definitiva Absoluta",
      price: "$18.00 USD",
      period: "Un solo pago",
      badge: "EL MÁS RECOMENDADO",
      description: "Acceso de por vida a la aplicación El Arquitecto Financiero, el Reto completo de 21 Días, las 3 herramientas complementarias de aceleración, y el Bono #4 exclusivo sobre la psicología del gasto compulsivo.",
      image: "https://lh3.googleusercontent.com/d/182ZQi-p_dzMxskjRr3M-XPuQzoc2wV0b",
      highlighted: true,
      buttonText: "QUIERO EL PACK COMPLETO VIP",
      href: "https://pay.hotmart.com/L106244109G?checkoutMode=10",
      features: [
        { text: "El Arquitecto Financiero (App de por vida)", included: true },
        { text: "El Reto de 21 Días (Ebook)", included: true },
        { text: "Bono #1: Desafío de Reprogramación", included: true },
        { text: "Bono #2: Plan de Construcción", included: true },
        { text: "Bono #3: Manual del Inversor", included: true },
        { text: "Bono #4: El Cerebro del Comprador Compulsivo (Exclusivo VIP)", included: true },
        { text: "Soporte prioritario e inmediato", included: true },
        { text: "Actualizaciones de por vida gratis", included: true }
      ]
    },
    {
      id: "elite",
      name: "PACK ELITE",
      subtitle: "Software & Control",
      price: "$15.00 USD",
      period: "Un solo pago",
      badge: "SOFTWARE EXCLUSIVO",
      description: "Acceso de por vida e ilimitado únicamente a la aplicación inteligente El Arquitecto Financiero.",
      image: null,
      highlighted: false,
      buttonText: "COMPRAR PACK ELITE",
      href: "https://pay.hotmart.com/W106561212I?off=qik94f15&checkoutMode=10",
      features: [
        { text: "El Arquitecto Financiero (App de por vida)", included: true },
        { text: "Actualizaciones de por vida gratis", included: true },
        { text: "Soporte de la plataforma", included: true },
        { text: "El Reto de 21 Días (Ebook)", included: false },
        { text: "Los 3 bonos complementarios", included: false },
        { text: "Bono #4: El Cerebro del Comprador Compulsivo", included: false }
      ]
    }
  ];

  return (
    <section className="relative pt-8 pb-10 bg-[#09090b] text-white overflow-hidden border-t border-zinc-900" id="oferta">
      {/* Background Visual Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand/5 blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <SectionHeader 
          tag="OFERTA LIMITADA"
          title="ELIGE TU PUERTA DE ENTRADA"
          desc="Selecciona el plan que mejor se adapte a tu situación actual y comienza tu transformación financiera hoy mismo."
          className="!mb-6"
        />

        {/* Pricing Layout: 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch max-w-6xl mx-auto">
          {packs.map((pack) => (
            <div 
              key={pack.id}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 h-full border ${
                pack.highlighted 
                  ? "bg-[#111115] border-brand/80 shadow-[0_0_30px_rgba(203,250,5,0.15)] lg:-translate-y-4 lg:scale-[1.03]" 
                  : "bg-[#121214]/60 border-zinc-850 hover:border-zinc-700 hover:bg-[#121214] shadow-xl"
              }`}
              id={`pack-card-${pack.id}`}
            >
              {/* Highlight badge overlay */}
              {pack.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#CBFA05] text-zinc-950 font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-current" />
                  {pack.badge}
                </div>
              )}

              {/* Standard badge for non-highlighted cards */}
              {!pack.highlighted && (
                <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400 bg-zinc-950/60 border border-zinc-850/80 px-2.5 py-1 rounded self-start mb-4">
                  {pack.badge}
                </div>
              )}

              {/* Card Contents */}
              <div>
                {pack.highlighted && <div className="h-2" />}
                
                {/* Header */}
                <div className="mb-4">
                  <h4 className="font-display font-black text-lg sm:text-xl text-white tracking-tight uppercase">
                    {pack.name}
                  </h4>
                  <p className="text-zinc-400 text-xs mt-1">
                    {pack.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#CBFA05]">
                    {pack.price}
                  </span>
                  <span className="text-zinc-500 font-mono text-xs uppercase">
                    / {pack.period}
                  </span>
                </div>

                {/* Optional Mockup Image inside highlighted VIP Card */}
                {pack.image && (
                  <div className="aspect-[16/10] w-full rounded-2xl bg-zinc-950/90 border border-zinc-800 overflow-hidden relative shadow-inner mb-5 flex items-center justify-center p-2 group-hover:border-brand/40 transition-colors">
                    <img 
                      src={pack.image} 
                      alt={pack.name} 
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed mb-6 border-b border-zinc-850/60 pb-5">
                  {pack.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-3 mb-8">
                  {pack.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      {feat.included ? (
                        <Check className="w-4 h-4 text-[#CBFA05] shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                      )}
                      <span className={feat.included ? "text-zinc-200" : "text-zinc-500 line-through"}>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="pt-2">
                <Button 
                  href={pack.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackInitiateCheckout(pack.id as PackId)}
                  className={`w-full py-3.5 !text-xs font-black uppercase tracking-wider ${
                    pack.highlighted 
                      ? "shadow-[0_0_20px_rgba(203,250,5,0.25)] hover:shadow-[0_0_30px_rgba(203,250,5,0.45)]"
                      : "bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white"
                  }`}
                >
                  {pack.buttonText}
                </Button>
              </div>

            </div>
          ))}
        </div>

        {/* Security badges & guarantee trust row */}
        <div className="mt-12 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-xs text-zinc-500 font-mono text-center sm:text-left border-t border-zinc-900/80 pt-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#CBFA05]" />
            Garantía de satisfacción de 7 días
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#CBFA05]" />
            Acceso instantáneo e inmediato
          </div>
        </div>

      </div>
    </section>
  );
}
