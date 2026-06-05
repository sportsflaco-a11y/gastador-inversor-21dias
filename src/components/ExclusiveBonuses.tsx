import { Trophy, FileSpreadsheet, Zap, CheckCircle } from "lucide-react";
import { copywriting } from "../data/copywriting";
import { SectionHeader } from "./ui/SectionHeader";

const iconMap = {
  Trophy,
  FileSpreadsheet,
  Zap,
};

// Match values in original component
const bonusValues = [
  "Valor real: $10.00",
  "Valor real: $12.00",
  "Valor real: $15.00"
];

export default function ExclusiveBonuses() {
  const bonuses = copywriting.bonuses;

  return (
    <section className="relative py-24 bg-[#09090b] overflow-hidden border-b border-zinc-900" id="bonos">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Central Section Header */}
        <SectionHeader 
          tag="AGREGANDO VALOR INSUPERABLE"
          title="BONOS EXCLUSIVOS"
          desc="Herramientas complementarias de alto impacto diseñadas específicamente para guiarte en tu ejecución y asegurar que no te rindas en el camino."
        />

        {/* Bonuses Cards Column */}
        <div className="space-y-12">
          {bonuses.map((bonus, idx) => {
            const Icon = iconMap[bonus.iconName] || Trophy;
            const bVal = bonusValues[idx] || "Valor real: $25.00";
            return (
              <div 
                key={bonus.num}
                className="group relative p-8 sm:p-12 rounded-3xl bg-[#121214] border border-zinc-800 hover:border-brand/35 transition-all duration-300"
              >
                {/* Visual Accent Number absolute top right */}
                <div className="absolute top-4 right-6 font-mono text-7xl font-extrabold text-zinc-900 select-none group-hover:text-zinc-850/50 transition-colors pointer-events-none">
                  0{idx + 1}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column: Visual Representation Box */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                    <div className="space-y-4">
                      {/* Badge and Num Header */}
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono tracking-widest text-[#CBFA05] uppercase bg-brand/15 border border-brand/25 px-2.5 py-0.5 rounded font-bold">
                          {bonus.badge}
                        </span>
                        <span className="text-zinc-500 font-mono text-xs font-semibold uppercase">{bonus.num}</span>
                      </div>
                      
                      {/* Product mockup box visual */}
                      {idx === 0 ? (
                        <div className="aspect-video w-3/4 mx-auto rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden relative shadow-2xl group-hover:border-brand/40 transition-all duration-300">
                          <img 
                            src="https://lh3.googleusercontent.com/d/1Jn3nX4A5AurmND0SzBbnLNKoKFKlhfTV" 
                            alt={bonus.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const img = e.currentTarget;
                              if (!img.src.includes("/sistema-radiografia.jpg")) {
                                img.src = "/sistema-radiografia.jpg";
                              }
                            }}
                          />
                        </div>
                      ) : idx === 1 ? (
                        <div className="aspect-video w-3/4 mx-auto rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden relative shadow-2xl group-hover:border-brand/40 transition-all duration-300">
                          <img 
                            src="https://lh3.googleusercontent.com/d/15hFqMtoRGHFyww0AEjRQy2DM3ZDhcDtr" 
                            alt={bonus.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const img = e.currentTarget;
                              if (!img.src.includes("/plantilla-automatizada.jpg")) {
                                img.src = "/plantilla-automatizada.jpg";
                              }
                            }}
                          />
                        </div>
                      ) : idx === 2 ? (
                        <div className="aspect-video w-3/4 mx-auto rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden relative shadow-2xl group-hover:border-brand/40 transition-all duration-300">
                          <img 
                            src="https://lh3.googleusercontent.com/d/1155zCdQsq8x4HDYlJXs16rIVt-TR4KVZ" 
                            alt={bonus.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const img = e.currentTarget;
                              if (!img.src.includes("/entrenamiento-emocional.jpg")) {
                                img.src = "/entrenamiento-emocional.jpg";
                              }
                            }}
                          />
                        </div>
                      ) : (
                        <div className="aspect-video w-full rounded-2xl bg-zinc-950 border border-zinc-850 p-6 flex flex-col justify-between relative overflow-hidden shadow-inner uppercase font-mono">
                          {/* Glow and background lines */}
                          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand/5 rounded-full blur-xl pointer-events-none" />
                          <div className="absolute top-2 right-2 text-zinc-800 text-[10px] tracking-widest">PROP.21D</div>
                          
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-brand/10 border border-brand/30 rounded-xl text-brand group-hover:bg-brand group-hover:text-black transition-all">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="block text-[8px] text-zinc-500 font-sans font-bold leading-tight">MÓDULO DE ACCIÓN</span>
                              <span className="block text-xs font-bold text-white tracking-wider">{bonus.visualLabel}</span>
                            </div>
                          </div>

                          <div className="flex items-end justify-between border-t border-zinc-800/60 pt-3">
                            <span className="text-[8px] text-zinc-500">FORMATO DIGITAL</span>
                            <span className="text-[10px] text-brand font-bold">INCLUIDO $0</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Value Badge */}
                    <div className="text-xs text-zinc-500 font-mono bg-zinc-950/60 px-4 py-2 rounded-xl border border-zinc-850/80 inline-flex items-center gap-2 self-start font-medium">
                      <CheckCircle className="w-4 h-4 text-brand" />
                      {bVal}
                    </div>
                  </div>

                  {/* Right Column: Exact text copy layout */}
                  <div className="lg:col-span-8 flex flex-col space-y-6 lg:pl-6">
                    <h3 className="font-display font-black text-2xl sm:text-3.5xl text-white tracking-tight uppercase leading-tight group-hover:text-[#CBFA05] transition-colors">
                      {bonus.title}
                    </h3>
                    
                    <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                      {bonus.paragraphs.map((p, pIdx) => {
                        const isMain = pIdx === 0;
                        return (
                          <p 
                            key={pIdx} 
                            className={isMain ? "text-zinc-100 font-semibold" : ""}
                          >
                            {p}
                          </p>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
