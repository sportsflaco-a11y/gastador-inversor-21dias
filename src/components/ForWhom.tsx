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
    <section className="relative py-24 bg-[#09090b] overflow-hidden border-b border-zinc-900" id="para-quien">
      {/* Decorative top circular graphic background */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tokenized Header Block */}
        <SectionHeader 
          tag="¿ES ESTO PARA TI?"
          title="¿PARA QUIÉN ES ESTO?"
          desc="Si te identificas con alguno de los siguientes perfiles, has llegado a la solución exacta que necesitas."
        />

        {/* Audience Profiles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targets.map((target) => {
            const IconComp = iconMap[target.iconName] || Hammer;
            
            return (
              <Card 
                key={target.num}
                id={`target-card-${target.num}`}
                className="group relative"
              >
                <div className="space-y-6">
                  {/* Top bar indicators */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-950 border border-zinc-850 text-[10px] font-mono uppercase text-zinc-400">
                      PERFIL {target.num} — {target.subtitle}
                    </span>
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-850 text-brand group-hover:bg-brand group-hover:text-black transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                      {target.title}
                    </h3>
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                      {target.description}
                    </p>
                  </div>
                </div>

                {/* Micro checklist icon check bottom */}
                <div className="mt-8 pt-4 border-t border-zinc-850 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span className="text-brand flex items-center gap-1 text-[11px] font-semibold">
                    <Check className="w-3.5 h-3.5" /> SOLUCIÓN CONFIRMADA
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
