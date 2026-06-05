import { copywriting } from "../data/copywriting";
import { Badge } from "./ui/Badge";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";

export default function WhatYouAreBuying() {
  const info = copywriting.whatYouAreBuying;

  return (
    <section className="relative py-20 bg-[#ecf7f2] border-t border-b border-[#c8ebd7] overflow-hidden" id="que-compras">
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Block 1: Lo que realmente estás comprando */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
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

      </div>
    </section>
  );
}
