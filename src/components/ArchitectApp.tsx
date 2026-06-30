import { motion } from "motion/react";
import { Sparkles, ShieldCheck, Eye, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import WhatYouUnlock from "./WhatYouUnlock";

export default function ArchitectApp() {
  return (
    <>
      <section className="relative pt-8 pb-4 bg-[#09090b] text-white border-t border-zinc-900 overflow-hidden" id="la-aplicacion">
      {/* Background visual graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-brand/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-8 space-y-4">
          <span className="text-xs font-mono font-bold text-brand tracking-widest uppercase bg-brand/10 border border-brand/20 px-4 py-1.5 rounded-full">
            SOFTWARE REVOLUCIONARIO INCLUIDO
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            EL ARQUITECTO FINANCIERO
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            La herramienta web de control absoluto que sustituye la fuerza de voluntad destructiva por una estructura intuitiva y visual de acumulación de capital.
          </p>
        </div>

        {/* Dual Mockups Placeholders Row (Desktop + Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-10">
          
          {/* Left Column: Mockup frames */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              
              {/* Desktop Wireframe Mockup */}
              <div className="sm:col-span-8 relative rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden flex items-center justify-center shadow-inner group min-h-[240px] sm:min-h-[280px]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1OAaRM_eL4tKDO6ZQos4qZQMSK0Xzbd6V" 
                  alt="Vista Desktop El Arquitecto Financiero"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle vignette/gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Mobile Wireframe Mockup */}
              <div className="sm:col-span-4 relative rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden flex items-center justify-center shadow-inner group min-h-[240px] sm:min-h-[280px]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1RJCujziul-Bz20mw5GckN4zy9emZzByU" 
                  alt="Vista Móvil El Arquitecto Financiero"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                {/* Simulated mobile dynamic island/notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3 rounded-full bg-zinc-950/80 backdrop-blur-sm border border-zinc-800/40 select-none flex items-center justify-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-zinc-800" />
                </div>
                {/* Subtle vignette/gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>


          </div>

          {/* Right Column: Copywriting Pitch for the App */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-xs font-mono font-bold text-zinc-400 tracking-wider uppercase">
              REDISEÑANDO TUS FINANZAS DESDE EL CÓDIGO
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight uppercase">
              La Pieza Tecnológica Que Faltaba Para Tomar el Control de Tu Vida
            </h3>
            <p className="text-zinc-450 text-sm leading-relaxed font-medium">
              A diferencia de los libros de texto teóricos o las hojas de cálculo aburridas que abandonas al tercer día, <strong className="text-white font-bold">El Arquitecto Financiero</strong> está construido bajo principios de neuro-diseño y gamificación financiera. 
            </p>
            <p className="text-zinc-450 text-sm leading-relaxed">
              Es un software intuitivo y minimalista que te ayuda a automatizar tus decisiones monetarias y registrar cada centavo sin fricciones. No vendemos números aburridos; te entregamos el control para que el ahorro ocurra por diseño, no por fuerza de voluntad.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand" />
                Acceso de por Vida
              </div>
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-brand" />
                Sin Cuotas Mensuales
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* SECTION 2: WHAT YOU UNLOCK "¿QUÉ DESBLOQUEARÁS?" */}
      <WhatYouUnlock />
    </>
  );
}
