import { copywriting } from "../data/copywriting";
import { Badge } from "./ui/Badge";
import { SectionHeader } from "./ui/SectionHeader";
import { Card } from "./ui/Card";

export default function WhatYouAreBuying() {
  const info = copywriting.whatYouAreBuying;

  return (
    <section className="relative pt-6 pb-8 bg-[#ecf7f2] border-t border-b border-[#c8ebd7] overflow-hidden" id="que-compras">
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Block 1: Lo que realmente estás comprando */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Card Left */}
          <div className="lg:col-span-12 xl:col-span-5 p-8 rounded-3xl bg-white border border-[#bce4cc] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ecf7f2]/40 rounded-full blur-xl pointer-events-none" />
            
            <Badge variant="zinc">EL ECOSISTEMA COMPLETO</Badge>
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#092615] uppercase mt-6 mb-4">
              EL SISTEMA CENIT PRIME
            </h3>
            
            <div className="space-y-4 text-zinc-700 text-sm leading-relaxed">
              <p className="text-zinc-900 font-semibold italic">
                "No es un libro teórico ni una plantilla estática de Excel. Es un sistema completo con tres piezas que trabajan juntas."
              </p>
              <p className="border-l-2 border-emerald-600 pl-3 text-emerald-950 font-medium font-display">
                Software de control "El Arquitecto Financiero" + el Reto de 21 días para reprogramar tus hábitos + los bonos de aceleración.
              </p>
              <p className="text-xs text-zinc-500">
                Elige abajo con cuál pieza empezar, o consigue el sistema completo de una vez con el Pack VIP.
              </p>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-left">
            <h3 className="text-lg sm:text-xl font-bold font-display text-[#092615] uppercase tracking-wider">
              TRES PILARES QUE FUNCIONAN EN SINTONÍA — DISTRIBUIDOS EN 3 PACKS:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#bce4cc] shadow-sm hover:shadow-md transition-shadow">
                <span className="block text-emerald-800 font-black text-sm mb-1 uppercase">1. EL SOFTWARE</span>
                <p className="text-xs text-zinc-700">Acceso ilimitado a <strong>El Arquitecto Financiero</strong> para registrar gastos y automatizar presupuestos.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#bce4cc] shadow-sm hover:shadow-md transition-shadow">
                <span className="block text-emerald-800 font-black text-sm mb-1 uppercase">2. EL RETO (EBOOK)</span>
                <p className="text-xs text-zinc-700">El desafío de 21 días y manual de hábitos de reprogramación diaria que reconfiguran tu mente de gastador a inversor.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#bce4cc] shadow-sm hover:shadow-md transition-shadow">
                <span className="block text-emerald-800 font-black text-sm mb-1 uppercase">3. LOS BONOS</span>
                <p className="text-xs text-zinc-700">Entrenamientos de reprogramación mental y recursos extra de alto impacto para acelerar tus resultados.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#bce4cc] shadow-sm space-y-2">
              <p className="text-zinc-800 font-medium italic text-xs">
                Crea una barrera impenetrable contra las compras compulsivas de forma inmediata.
              </p>
              <p className="text-emerald-950 font-display font-black text-base uppercase tracking-wide">
                TE ENTREGAMOS LAS REGLAS, EL CONOCIMIENTO Y EL SOFTWARE — TÚ ELIGES CON CUÁNTO EMPEZAR.
              </p>
              <p className="text-emerald-800 font-display font-bold text-xs uppercase tracking-wide pt-1">
                ↓ Compara los 3 packs justo abajo
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
