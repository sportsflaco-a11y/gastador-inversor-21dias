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
    <section className="relative pt-6 pb-8 bg-[#09090b] overflow-hidden border-b border-zinc-900" id="bonos">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Central Section Header */}
        <SectionHeader 
          tag="AGREGANDO VALOR INSUPERABLE"
          title="BONOS EXCLUSIVOS"
          desc="Herramientas complementarias de alto impacto diseñadas para asegurar tus resultados financieros."
          className="!mb-6 sm:!mb-8"
        />

        {/* Bonuses Cards in 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {bonuses.map((bonus, idx) => {
            const bVal = bonusValues[idx] || "Valor real: $15.00";
            
            // Define corresponding image for each bonus index
            const imgUrl = idx === 0 
              ? "https://lh3.googleusercontent.com/d/1Gyrju5sKr7RIFMt0OtQkgMqVegUIWgzg"
              : idx === 1 
                ? "https://lh3.googleusercontent.com/d/1DPr26OeG6kRiqpOunrJ352KgYrfm7khq"
                : "https://lh3.googleusercontent.com/d/1kBvUMdfn38F7W0Ilmf0s3_tWMfhpHyl-";

            const fallbackImg = idx === 0 
              ? "/desafio-reprogramacion.jpg"
              : idx === 1 
                ? "/plan-construccion.jpg"
                : "/manual-inversor.jpg";

            return (
              <div 
                key={bonus.num}
                className="group relative p-5 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-brand/35 transition-all duration-300 flex flex-col justify-between h-full shadow-lg"
              >
                {/* Visual Accent Number absolute top right */}
                <div className="absolute top-2.5 right-4 font-mono text-4xl sm:text-5xl font-extrabold text-zinc-900/60 select-none group-hover:text-zinc-850/40 transition-colors pointer-events-none">
                  0{idx + 1}
                </div>

                <div className="space-y-3 relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Badge and Num Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[9px] font-mono tracking-widest text-[#CBFA05] uppercase bg-brand/15 border border-brand/25 px-2 py-0.5 rounded font-bold">
                        {bonus.badge}
                      </span>
                      <span className="text-zinc-500 font-mono text-[10px] font-semibold uppercase">{bonus.num}</span>
                    </div>

                    {/* Product mockup box visual (more compact) */}
                    <div className="aspect-[16/10] w-full rounded-xl bg-zinc-950 border border-zinc-850 overflow-hidden relative shadow-md group-hover:border-brand/30 transition-all duration-300 mb-3 flex items-center justify-center">
                      <img 
                        src={imgUrl} 
                        alt={bonus.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const img = e.currentTarget;
                          if (!img.src.includes(fallbackImg)) {
                            img.src = fallbackImg;
                          }
                        }}
                      />
                    </div>

                    {/* Title & Description */}
                    <h4 className="font-display font-black text-xs sm:text-sm text-white tracking-tight uppercase leading-snug group-hover:text-brand transition-colors line-clamp-2">
                      {bonus.title}
                    </h4>
                    <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                      {bonus.paragraphs[0]}
                    </p>
                  </div>

                  {/* Footer metadata of each card */}
                  <div className="pt-3 border-t border-zinc-850/60 flex items-center justify-between mt-4">
                    <span className="text-[10px] text-zinc-500 font-mono font-medium">{bVal}</span>
                    <span className="text-[10px] text-brand font-mono font-bold uppercase tracking-wider">INCLUIDO $0</span>
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
