import { Layers, EyeOff, Zap, RefreshCw, BarChart } from "lucide-react";
import { copywriting } from "../data/copywriting";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";

const iconMap = {
  Layers,
  EyeOff,
  Zap,
  RefreshCw,
  BarChart,
};

// Deliverables mapping to fill the space inside each tool card with high value and rich detail
const deliverablesMap: Record<string, string[]> = {
  "01": [
    "Fórmula matemática de pre-ahorro directo",
    "Optimización inteligente de flujos mensuales"
  ],
  "02": [
    "Regla de las 72 horas anti-estímulo",
    "Desarmador de justificaciones de compra"
  ],
  "03": [
    "Configuración de reglas lógicas de desvío",
    "Capitalización invisible fuera de vista"
  ],
  "04": [
    "Micro-lecciones guiadas de 10 minutos",
    "Desconexión emocional del sueldo de paso"
  ],
  "05": [
    "Estructura óptima para fondos anti-crisis",
    "Semilla inicial para tus primeros activos"
  ]
};

export default function WhatYouUnlock() {
  const unlocks = copywriting.unlocks;

  return (
    <section className="relative py-24 bg-[#09090b] overflow-hidden" id="desbloqueas">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-brand/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tokenized Header Block */}
        <SectionHeader 
          tag="LA TRANSFORMACIÓN EN ACCIÓN"
          title="¿QUÉ DESBLOQUEARÁS?"
          desc="Las 5 herramientas sistémicas que sustituyen la fuerza de voluntad destructiva por un motor automatizado estructurado de acumulación económica."
        />

        {/* The Grid - Bento Inspired Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {unlocks.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Layers;
            const isLast = idx === 4;
            
            return (
              <Card 
                key={item.num}
                id={`unlock-card-${item.num}`}
                className={`!p-5 sm:!p-6.5 text-left flex flex-col justify-between ${isLast ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="space-y-4">
                  {/* Top Row: Num & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-zinc-800/80 group-hover:text-brand/30 transition-colors duration-300">
                      {item.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-850 text-[#CBFA05] group-hover:bg-[#CBFA05] group-hover:text-[#09090b] transition-all duration-300">
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Text Description */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-tight group-hover:text-[#CBFA05] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* High-density Deliverables Bullet Points */}
                  <div className="space-y-2 pt-3 border-t border-zinc-850/40">
                    <span className="text-[10px] font-mono text-[#CBFA05] uppercase tracking-wider block font-bold">
                      INCLUYE EN EL RETO:
                    </span>
                    <div className="space-y-1.5">
                      {deliverablesMap[item.num]?.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300/95">
                          <span className="text-[#CBFA05] font-bold shrink-0 mt-0.5 leading-none">✓</span>
                          <span className="leading-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Micro Footer decoration */}
                <div className="mt-6 pt-3 border-t border-zinc-850/50 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>SISTEMA 21 DÍAS</span>
                  <span className="text-zinc-300 font-bold uppercase group-hover:text-[#CBFA05] transition-colors">
                    {item.highlight}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Interactive Bottom Accent Callout */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm font-mono text-zinc-500 uppercase tracking-widest">
            "No se trata de ahorrar más. Se trata de retener inteligentemente lo que hoy se desvanece de tu cuenta bancaria."
          </p>
        </div>

      </div>
    </section>
  );
}
