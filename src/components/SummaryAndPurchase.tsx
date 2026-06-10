import { useState, useEffect } from "react";
import { Check, ShieldCheck, Sparkles, ShoppingBag, Clock } from "lucide-react";

// Use static path served from public root
const courseMockup = "/course_mockup_new.png";

export default function SummaryAndPurchase() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [spotsLeft, setSpotsLeft] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedMs = Date.now() - startTime;
      let currentSpots = 7;
      if (elapsedMs >= 110000) {
        currentSpots = 2;
      } else if (elapsedMs >= 80000) {
        currentSpots = 3;
      } else if (elapsedMs >= 50000) {
        currentSpots = 4;
      } else if (elapsedMs >= 30000) {
        currentSpots = 5;
      } else if (elapsedMs >= 10000) {
        currentSpots = 6;
      }
      setSpotsLeft(currentSpots);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const courseInclusions = [
    "Sistema completo para dejar de llegar sin dinero a final de mes",
    "Método neuro-financiero para eliminar compras impulsivas",
    "Protocolo de reprogramación financiera diaria de 21 Días",
    "Plan maestro de acumulación de capital progresivo para principiantes",
  ];

  const bonusInclusions = [
    { name: "Bono #1: EL DESAFÍO DE REPROGRAMACIÓN FINANCIERA DE 21 DÍAS", value: "$10 USD" },
    { name: "Bono #2: EL PLAN DE CONSTRUCCIÓN DE CAPITAL DE LOS PRIMEROS $1.000", value: "$12 USD" },
    { name: "Bono #3: EL MANUAL DEL NUEVO INVERSOR", value: "$15 USD" },
  ];

  return (
    <section className="relative py-28 bg-[#ecf7f2] border-t border-b border-[#c8ebd7] overflow-hidden" id="oferta">
      {/* Decorative top circular graphic background */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-emerald-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Header Block */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-[#0f3d23] tracking-widest uppercase bg-[#edf8f4] px-4 py-1.5 rounded-full border border-[#bce4cc]">
            LA DECISIÓN DE HOY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#092615] uppercase tracking-tight">
            RESUMEN DE LO QUE TE LLEVAS
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base max-w-xl mx-auto">
            Acceso instantáneo de por vida al program completo con todos sus entrenamientos prácticos y bonos exclusivos listos para ejecutar.
          </p>
        </div>

        {/* Pricing/Checkout Core Card */}
        <div className="relative rounded-3xl bg-white border border-[#bce4cc] p-8 sm:p-12 shadow-2xl">
          
          {/* Top highlight ribbon */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white font-display font-black text-xs px-6 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-md">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            OFERTA DE ACCESO INMEDIATO
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Visual Mockup of the digital course cover pack */}
            <div className="lg:col-span-4 flex flex-col items-center select-none group">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] mx-auto rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-2 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-[#CBFA05]/40 group-hover:shadow-[0_0_40px_rgba(203,250,5,0.15)]">
                {/* Glossy overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10" />
                
                <img 
                  src={courseMockup} 
                  alt="De Gastador Compulsivo a Inversor - Reto de 21 Días" 
                  className="w-full h-auto rounded-xl object-contain bg-zinc-950 border border-zinc-850"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    // Fall back to dark course cover if mockup fails
                    if (!img.src.includes("/course_cover_dark.png")) {
                      img.src = "/course_cover_dark.png";
                    }
                  }}
                />
                
                {/* Accent glow corner */}
                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-emerald-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              
              <div className="mt-3 text-center">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-medium">PRODUCTO DIGITAL ENTREGABLE</span>
                <span className="text-xs font-bold text-emerald-800 mt-1 block">Reto Completo de 21 Días + 3 Bonos</span>
              </div>
            </div>

            {/* Middle lists of values */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Part 1: Core program */}
              <div className="space-y-3.5">
                <h4 className="font-display font-extrabold text-base text-[#092615] border-b border-[#edf8f4] pb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full shrink-0" />
                  El Reto de 21 Días
                </h4>
                <ul className="space-y-2.5">
                  {courseInclusions.map((inc, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <div className="p-0.5 rounded bg-[#edf8f4] border border-[#bce4cc] mt-0.5 shrink-0">
                        <Check className="w-3 text-emerald-700" />
                      </div>
                      <span className="text-xs text-zinc-700 leading-snug font-medium">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Part 2: Bonuses values */}
              <div className="space-y-3.5">
                <h4 className="font-display font-extrabold text-base text-[#092615] border-b border-[#edf8f4] pb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full shrink-0" />
                  Bonos Complementarios
                </h4>
                <ul className="space-y-2.5">
                  {bonusInclusions.map((bonus, index) => (
                    <li key={index} className="flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-start gap-2">
                        <div className="p-0.5 rounded bg-[#edf8f4] border border-[#bce4cc] mt-0.5 shrink-0">
                          <Check className="w-3 text-emerald-700" />
                        </div>
                        <span className="text-zinc-700 leading-snug font-medium">{bonus.name}</span>
                      </div>
                      <span className="text-[10px] text-zinc-400 font-mono line-through shrink-0 font-bold">{bonus.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right checkout form elements */}
            <div className="lg:col-span-4 flex flex-col justify-between p-5 rounded-2xl bg-[#092615] border border-emerald-950 relative shadow-inner">
              <div className="space-y-6 text-center">
                
                {/* Price block */}
                <div className="space-y-2">
                  <span className="block text-[10px] font-mono text-emerald-300/80 uppercase tracking-widest font-bold">PAGO ÚNICO</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm font-bold text-emerald-200/90 font-mono">USD</span>
                    <span className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tight">$5</span>
                    <span className="text-xs text-emerald-300 font-mono">.99</span>
                  </div>
                </div>

                {/* Scarcity Countdown Timer */}
                <div className="bg-emerald-950/65 border border-emerald-900/65 rounded-xl py-2 px-3 mx-auto max-w-xs flex items-center justify-center gap-2.5 shadow-inner select-none">
                  <Clock className="w-3.5 h-3.5 text-[#CBFA05] animate-pulse shrink-0" />
                  <span className="text-[10px] font-mono text-zinc-300 font-bold uppercase tracking-wider">
                    LA OFERTA EXPIRA EN:
                  </span>
                  <span className="text-xs font-mono font-black text-[#CBFA05] tracking-widest">
                    {formatTime(timeLeft)}
                  </span>
                </div>

                <p className="text-xs text-zinc-100/90 leading-semibold leading-relaxed">
                  Menos de lo que muchas personas gastan de forma impulsiva en un fin de semana. Menos de lo que cuesta seguir atrapado en el mismo patrón doloroso otro año más.
                </p>

              </div>

              {/* Action and Checkout State simulator */}
              <div className="space-y-4 mt-6 text-white">
                
                <div className="space-y-3">
                  <a 
                    href="https://pay.hotmart.com/L106244109G?checkoutMode=10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full relative py-4 px-5 rounded-xl bg-white hover:bg-[#edf8f4] text-[#092615] font-display font-black text-center text-xs tracking-wider uppercase active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer inline-flex"
                    id="checkout-cta"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    QUIERO RECUPERAR EL CONTROL
                  </a>
                  
                  {/* Live scarcity indicator */}
                  <div className="flex items-center justify-center gap-2 bg-emerald-950/60 border border-emerald-900/40 rounded-xl py-2 px-3 shadow-inner select-none">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono font-black text-rose-400 tracking-wider">
                      SOLO {spotsLeft} CUPOS DISPONIBLES
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium whitespace-nowrap">
                      — Se agotan rápido
                    </span>
                  </div>
                </div>

                {/* 7-Day Money Back Guarantee Section */}
                <div id="guarantee-section" className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-950/45 border border-emerald-900/40 text-left select-none">
                  <ShieldCheck className="w-5 h-5 text-[#CBFA05] mt-0.5 shrink-0 animate-pulse" />
                  <div className="space-y-0.5">
                    <span className="block text-[10px] font-mono font-black text-[#CBFA05] uppercase tracking-wider">
                      GARANTÍA DE DEVOLUCIÓN DE 7 DÍAS
                    </span>
                    <p className="text-[10px] text-zinc-300 leading-relaxed font-sans">
                      Pruébalo libre de riesgos. Si en 7 días sientes que el reto no vale al menos 10 veces su valor, te devolvemos el 100% de tu inversión de inmediato y sin preguntas.
                    </p>
                  </div>
                </div>

                {/* Micro badges of trust */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono text-emerald-300/70 uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00f58c] shrink-0" />
                    Pago encriptado SSL de 256 bits
                  </div>
                  <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-emerald-300/80 justify-center font-bold">
                    <span>💳 Tarjeta</span>
                    <span>📱 Apple/Google Pay</span>
                    <span>🌐 PayPal</span>
                  </div>
                </div>

              </div>
              
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
