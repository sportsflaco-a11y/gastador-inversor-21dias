import { copywriting } from "../data/copywriting";
import { Badge } from "./ui/Badge";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";

export default function WhatYouAreBuying() {
  const info = copywriting.whatYouAreBuying;
  const expectations = info.expectations;

  return (
    <section className="relative py-20 bg-[#ecf7f2] border-t border-b border-[#c8ebd7] overflow-hidden" id="que-compras">
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Block 1: Lo que realmente estás comprando */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Card Left */}
          <div className="lg:col-span-12 xl:col-span-5 p-8 rounded-3xl bg-white border border-[#bce4cc] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ecf7f2]/40 rounded-full blur-xl pointer-events-none" />
            
            <Badge variant="zinc">{info.realBuying.tag}</Badge>
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#092615] uppercase mt-6 mb-4">
              {info.realBuying.title}
            </h3>
            
            <div className="space-y-4 text-zinc-700 text-sm leading-relaxed">
              <p className="text-zinc-900 font-semibold italic">
                "{info.realBuying.quote}"
              </p>
              <p className="border-l-2 border-emerald-600 pl-3 text-emerald-950 font-medium font-display">
                {info.realBuying.boldText}
              </p>
              <p className="text-xs text-zinc-500">
                {info.realBuying.tinyDesc}
              </p>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-left">
            <h3 className="text-lg sm:text-xl font-bold font-display text-[#092615] uppercase tracking-wider">
              ESTE PROGRAMA EXISTE PARA ROMPER ESE PATRÓN DE UNA VEZ POR TODAS.
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {info.features.map((f, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-[#bce4cc] shadow-sm hover:shadow-md transition-shadow">
                  <span className="block text-emerald-800 font-black text-sm mb-1 uppercase">{f.title}</span>
                  <p className="text-xs text-zinc-700">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#bce4cc] shadow-sm space-y-2">
              <p className="text-zinc-650 italic text-xs">
                {info.callout.italic}
              </p>
              <p className="text-emerald-950 font-display font-black text-base uppercase tracking-wide">
                {info.callout.bold}
              </p>
            </div>
          </div>

        </div>

        {/* Section Divider */}
        <hr className="border-[#c8ebd7] mb-20" />

        {/* Core Block 2: ¿Qué puedes esperar? */}
        <div className="space-y-12">
          
          <SectionHeader 
            tag="RESULTADOS VISIBLES"
            title="¿QUÉ PUEDES ESPERAR?"
            theme="light"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {expectations.map((exp) => (
              <div 
                key={exp.num}
                id={`expectation-card-${exp.num}`}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-[#bce4cc] shadow-sm hover:shadow-md transition-shadow group relative"
              >
                <div className="space-y-5">
                  {/* Number Badge */}
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-[#edf8f4] border border-[#bce4cc] flex items-center justify-center font-mono font-black text-emerald-800 group-hover:text-emerald-700 transition-colors text-sm">
                      {exp.num}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-[#0f3d23] uppercase">PROCESO</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-[#092615] group-hover:text-emerald-800 transition-colors leading-snug">
                    {exp.title}
                  </h3>

                  {/* Bullet points mapping exact copy */}
                  <div className="space-y-3 pt-4 border-t border-[#edf8f4]">
                    {exp.points.map((pt, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                        <p className="text-xs text-zinc-700 leading-relaxed">{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer block */}
                <div className="mt-6 pt-3 border-t border-[#edf8f4] flex items-center justify-between text-[9px] font-mono text-emerald-800">
                  <span>ORDEN COMPROBADO</span>
                  <span>RESULTADOS CONSTANTES</span>
                </div>
              </div>
            ))}
          </div>

          {/* Slogan */}
          <div className="text-center text-xs font-mono text-emerald-900 uppercase italic">
            "No trabajes únicamente para pagar cuentas temporales. Trabaja para construir tu tranquilidad."
          </div>
        </div>

      </div>
    </section>
  );
}
