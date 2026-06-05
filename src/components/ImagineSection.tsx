import { useState } from "react";
import { CircleSlash, Smile, ShieldAlert, CheckCircle2, RefreshCw, Eye } from "lucide-react";

export default function ImagineSection() {
  const [activeTab, setActiveTab] = useState<"sin_sistema" | "con_sistema">("con_sistema");

  return (
    <section className="relative py-24 bg-[#ecf7f2] border-t border-b border-[#c8ebd7] overflow-hidden" id="imagina">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-4">
          <span className="text-xs font-mono font-bold text-[#0f3d23] tracking-widest uppercase">
            UN CAMBIO DE PARADIGMA
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-[#092615] leading-tight uppercase">
            IMAGINA VER QUE EL DINERO SIGUE EN TU CUENTA BANCARIA
          </h2>
          <p className="text-zinc-700 text-sm max-w-xl mx-auto">
            No porque ganes más, sino porque aprendiste a dominar tu comportamiento y a automatizar tu acumulación.
          </p>
        </div>

        {/* Interactive Comparison Widget */}
        <div className="max-w-4xl mx-auto bg-white border border-[#bce4cc] rounded-3xl overflow-hidden shadow-xl">
          {/* Tabs header */}
          <div className="grid grid-cols-2 border-b border-[#d5edd9]">
            <button
              onClick={() => setActiveTab("sin_sistema")}
              className={`py-5 px-4 text-center font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "sin_sistema" 
                  ? "bg-[#fff5f5] text-red-700 border-b-2 border-red-500" 
                  : "text-zinc-500 hover:text-[#092615] bg-[#edf8f4]/10"
              }`}
            >
              <CircleSlash className="w-4 h-4 text-red-500 shrink-0" />
              SITUACIÓN ACTUAL
            </button>
            <button
              onClick={() => setActiveTab("con_sistema")}
              className={`py-5 px-4 text-center font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "con_sistema" 
                  ? "bg-[#edf8f4] text-[#092615] border-b-2 border-emerald-600" 
                  : "text-zinc-500 hover:text-zinc-855 bg-[#edf8f4]/10"
              }`}
            >
              <Smile className="w-4 h-4 text-emerald-650 shrink-0" />
              CON EL RETO 21 DÍAS
            </button>
          </div>

          {/* Tab content wrapper */}
          <div className="p-8 sm:p-10 min-h-[250px] flex flex-col justify-between">
            {activeTab === "sin_sistema" ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-rose-50/55 border border-rose-100">
                    <span className="block text-[10px] font-mono text-rose-700 mb-1 uppercase">Saldo fin de mes</span>
                    <span className="text-sm font-bold text-rose-800">Sin excedentes</span>
                  </div>
                  <div className="p-4 rounded-xl bg-rose-50/55 border border-rose-100">
                    <span className="block text-[10px] font-mono text-rose-700 mb-1 uppercase">Nivel de estrés</span>
                    <span className="text-sm font-bold text-rose-800">Alto y constante</span>
                  </div>
                  <div className="p-4 rounded-xl bg-rose-50/55 border border-rose-100">
                    <span className="block text-[10px] font-mono text-rose-700 mb-1 uppercase">Incertidumbre futura</span>
                    <span className="text-sm font-bold text-rose-800">Total</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-zinc-700 text-xs sm:text-sm">
                  <li className="flex items-center gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
                    El dinero disminuye sin saber con precisión en qué se gastó.
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
                    Compras compulsivas que satisfacen 5 minutos y generan culpa por semanas.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-emerald-50/55 border border-emerald-100">
                    <span className="block text-[10px] font-mono text-emerald-700 mb-1 uppercase">Saldo fin de mes</span>
                    <span className="text-sm font-bold text-emerald-900">+25% Excedentes reales</span>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/55 border border-emerald-100">
                    <span className="block text-[10px] font-mono text-emerald-700 mb-1 uppercase">Nivel de estrés</span>
                    <span className="text-sm font-bold text-emerald-950">Bajo y controlado</span>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/55 border border-emerald-100">
                    <span className="block text-[10px] font-mono text-emerald-700 mb-1 uppercase">Incertidumbre futura</span>
                    <span className="text-sm font-bold text-emerald-900">Paz absoluta</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-zinc-700 text-xs sm:text-sm">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Lego a final de mes y descubrir con asombro que te sobra dinero para invertir.
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Eliminar el remordimiento y la ansiedad de mirar el saldo de tu cuenta.
                  </li>
                </ul>
              </div>
            )}

            {/* Motivational copy bottom */}
            <div className="mt-6 pt-4 border-t border-zinc-200 text-[11px] text-zinc-650 italic">
              "La riqueza no procede de un gran golpe de suerte; procede de un cambio de hábitos automáticos ejecutados de forma diaria."
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
