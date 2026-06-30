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
    <section className="relative pt-6 pb-8 bg-[#09090b] overflow-hidden" id="desbloqueas">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-brand/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tokenized Header Block with tight margin bottom */}
        <SectionHeader 
          tag="LA TRANSFORMACIÓN EN ACCIÓN"
          title="¿QUÉ DESBLOQUEARÁS?"
          desc="Las 5 herramientas sistémicas que sustituyen la fuerza de voluntad destructiva por un motor automatizado estructurado de acumulación económica."
          className="!mb-6 sm:!mb-8"
        />

        {/* The Grid - Bento Inspired Layout with smaller gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {unlocks.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Layers;
            const isLast = idx === 4;
            
            return (
              <Card 
                key={item.num}
                id={`unlock-card-${item.num}`}
                className={`!p-4 sm:!p-5 text-left flex flex-col justify-between ${isLast ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="space-y-3">
                  {/* Top Row: Num & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-zinc-800/80 group-hover:text-brand/30 transition-colors duration-300">
                      {item.num}
                    </span>
                    <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-850 text-[#CBFA05] group-hover:bg-[#CBFA05] group-hover:text-[#09090b] transition-all duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Text Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-tight group-hover:text-[#CBFA05] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Micro Footer decoration */}
                <div className="mt-4 pt-2.5 border-t border-zinc-850/50 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                  <span>SISTEMA 21 DÍAS</span>
                  <span className="text-zinc-300 font-bold uppercase group-hover:text-[#CBFA05] transition-colors">
                    {item.highlight}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Interactive Bottom Accent Callout with tight spacing */}
        <div className="mt-8 text-center">
          <p className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest max-w-2xl mx-auto">
            "No se trata de ahorrar más. Se trata de retener inteligentemente lo que hoy se desvanece de tu cuenta bancaria."
          </p>
        </div>

      </div>
    </section>
  );
}
