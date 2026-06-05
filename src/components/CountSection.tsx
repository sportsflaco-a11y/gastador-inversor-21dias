import { useState, useMemo } from "react";
import { AlertCircle, Calculator, TrendingUp, DollarSign, RefreshCw, Smartphone, TrendingDown } from "lucide-react";

export default function CountSection() {
  const [impulsiveMonthly, setImpulsiveMonthly] = useState<number>(150);

  // Calculate stats based on slider input
  const stats = useMemo(() => {
    const yearly = impulsiveMonthly * 12;
    const threeYearsRaw = yearly * 3;
    
    // Future wealth projection after 10 years at 8% compound annual return
    // Compounded monthly
    const rate = 0.08 / 12;
    const months = 10 * 12;
    let compoundedFuture = 0;
    for (let i = 0; i < months; i++) {
      compoundedFuture = (compoundedFuture + impulsiveMonthly) * (1 + rate);
    }
    
    // Net lost growth (compounded - raw savings over 10 years)
    const tenYearsRaw = yearly * 10;
    const interestLost = compoundedFuture - tenYearsRaw;

    return {
      monthly: impulsiveMonthly,
      yearly,
      threeYearsRaw,
      compoundedFuture: Math.round(compoundedFuture),
      interestLost: Math.round(interestLost),
    };
  }, [impulsiveMonthly]);

  return (
    <section className="relative py-20 bg-[#ecf7f2] border-t border-b border-[#c8ebd7] overflow-hidden text-left" id="calculadora">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title and Copy Intro */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <span className="text-xs font-mono font-bold text-[#0f3d23] tracking-widest uppercase bg-[#edf8f4] px-4 py-1.5 rounded-full border border-[#bce4cc]">
            EL COSTO DE LA INDECISIÓN
          </span>
          <h2 className="font-display text-3xl sm:text-4.5xl font-black text-[#092615] uppercase tracking-tight">
            HAZ TUS CUENTAS REALES
          </h2>
          <p className="text-zinc-705 text-sm max-w-lg mx-auto text-center">
            La mayoría nunca se detiene a sumar el impacto de sus micro-gastos. Ajusta el simulador abajo y descubre la fuga financiera.
          </p>
        </div>

        {/* Interactive Calculator Widget */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#bce4cc] shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left controller: Sliders & input */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-800" />
                  <span className="text-[10px] font-mono tracking-widest text-emerald-700 uppercase font-bold">TABLERO DE SIMULACIÓN</span>
                </div>
                <h3 className="text-xl font-black text-zinc-900 uppercase font-display">
                  ¿Cuánto gastas de manera impulsiva?
                </h3>
                <p className="text-xs text-emerald-800 font-medium leading-relaxed">
                  Arrastra el control para indicar tu gasto mensual estimado en antojos, caprichos momentáneos, salidas de último minuto o suscripciones que no usas.
                </p>
              </div>

              {/* Slider Input */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-700">Gasto mensual reactivo:</span>
                  <span className="text-xl font-black text-emerald-950 font-mono">${stats.monthly} <span className="text-xs text-zinc-500">USD</span></span>
                </div>
                
                <input 
                  type="range" 
                  min="20" 
                  max="1000" 
                  step="10"
                  value={impulsiveMonthly}
                  onChange={(e) => setImpulsiveMonthly(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-[#edf8f4] accent-emerald-600 cursor-pointer"
                  id="calc-slider"
                />
                
                <div className="flex items-center justify-between text-[9px] text-[#0f3d23] font-mono">
                  <span>MÍN: $20</span>
                  <span>MED: $500</span>
                  <span>MÁX: $1,000+</span>
                </div>
              </div>

              {/* Warning badge */}
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-[#bce4cc] text-[#092615] text-xs flex items-start gap-2.5 leading-relaxed shadow-sm font-medium">
                <AlertCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <p>
                  No estamos hablando de un número lejano. Es capital real que ganas con esfuerzo y desaparece de tus manos sin dejar un solo activo a cambio.
                </p>
              </div>
            </div>

            {/* Right Display: Painful Numbers - Styled as an intense Dark card inside Light block */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-900 space-y-5 relative shadow-2xl">
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand/5 rounded-full blur-lg pointer-events-none" />
              
              <h4 className="text-[10px] font-mono font-bold text-zinc-500 tracking-wider uppercase border-b border-zinc-900 pb-2.5">
                EL COSTO CLAVE DE SEGUIR ACTUANDO IGUAL
              </h4>

              {/* Stats group */}
              <div className="space-y-3.5">
                {/* Stat 1: Year */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase">PÉRDIDA EN 1 AÑO</span>
                    <span className="block text-xs text-zinc-400">Dinero evaporado</span>
                  </div>
                  <span className="text-lg font-black text-red-400 font-mono">-${stats.yearly.toLocaleString()} USD</span>
                </div>

                {/* Stat 2: 3 Years */}
                <div className="flex items-center justify-between border-t border-zinc-900 pt-3">
                  <div className="space-y-0.5">
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase">PÉRDIDA EN 3 AÑOS</span>
                    <span className="block text-xs text-zinc-400">Patrimonio no construido</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-red-500 font-mono">-${stats.threeYearsRaw.toLocaleString()} USD</span>
                </div>

                {/* Stat 3: 10 Years Compounded future at index fund */}
                <div className="flex flex-col gap-2 border-t border-zinc-900 pt-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="block text-[10px] font-mono text-zinc-500 uppercase">Fórmula de Inversión (10 años compounding)</span>
                      <span className="block text-[10px] text-zinc-400 leading-normal">
                        Si este excedente se invirtiera a una tasa promedio conservadora del 8% anual.
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-between">
                    <span className="text-brand font-mono text-xs font-bold uppercase">PATRIMONIO DESTRUIDO:</span>
                    <span className="text-lg font-mono text-brand font-black">${stats.compoundedFuture.toLocaleString()} USD</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
