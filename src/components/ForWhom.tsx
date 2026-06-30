import { Hammer, RotateCcw, TrendingUp, ShieldAlert, Check } from "lucide-react";
import { copywriting } from "../data/copywriting";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";

const iconMap = {
  Hammer,
  RotateCcw,
  TrendingUp,
  ShieldAlert,
};

export default function ForWhom() {
  const targets = copywriting.targets;

  return (
    <section className="relative pt-6 pb-8 bg-[#09090b] overflow-hidden border-b border-zinc-900" id="para-quien">
      {/* Decorative top circular graphic background */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tokenized Header Block with tight margin bottom */}
        <SectionHeader 
          tag="¿ES ESTO PARA TI?"
          title="¿PARA QUIÉN ES ESTO?"
          desc="Si te identificas con alguno de los siguientes perfiles, has llegado a la solución exacta que necesitas."
          className="!mb-6 sm:!mb-8"
        />

        {/* Audience Profiles List - Tight Bento Inspired Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {targets.map((target) => {
            const IconComp = iconMap[target.iconName] || Hammer;
            
            return (
              <Card 
                key={target.num}
                id={`target-card-${target.num}`}
                className="group relative !p-4 sm:!p-5 text-left flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Top Row: Profile badge and compact icon */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-950 border border-zinc-850 text-[9px] font-mono uppercase text-zinc-400 font-bold">
                      PERFIL {target.num} — {target.subtitle}
                    </span>
                    <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-850 text-brand group-hover:bg-[#CBFA05] group-hover:text-black transition-all">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-tight group-hover:text-[#CBFA05] transition-colors duration-200">
                      {target.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {target.description}
                    </p>
                  </div>
                </div>

                {/* Micro checklist icon check bottom */}
                <div className="mt-4 pt-2.5 border-t border-zinc-850/50 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                  <span className="text-brand flex items-center gap-1 font-bold">
                    <Check className="w-3.5 h-3.5 text-[#CBFA05]" /> SOLUCIÓN CONFIRMADA
                  </span>
                  <span>PREVENCIÓN DE AUTO-SABOTAJE</span>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
