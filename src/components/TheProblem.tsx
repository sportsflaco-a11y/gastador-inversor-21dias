import { AlertCircle, HelpCircle, AlertTriangle, ChevronRight } from "lucide-react";
import { copywriting } from "../data/copywriting";
import { Badge } from "./ui/Badge";

export default function TheProblem() {
  const data = copywriting.theProblem;

  return (
    <section className="relative py-20 bg-[#ecf7f2] border-t border-b border-[#c8ebd7] overflow-hidden" id="problema">
      
      {/* Decorative side accent lines */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-brand/20 via-transparent to-transparent hidden lg:block" />
      <div className="absolute top-0 left-10 w-[200px] h-[200px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main badge */}
        <div className="flex justify-center mb-8">
          <Badge variant="red">
            <AlertCircle className="w-3.5 h-3.5" />
            {data.badge}
          </Badge>
        </div>

        {/* Big Punchy Header */}
        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-center text-[#092615] leading-tight mb-16 uppercase">
          Tu problema no es que ganas poco. <br />
          Tu problema es que el dinero entra... <span className="text-red-700 underline decoration-red-500/50 decoration-wavy">y desaparece.</span>
        </h2>

        {/* Interactive Mindset Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#bce4cc] mb-10 relative overflow-hidden group shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ecf7f2]/60 rounded-full blur-xl pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#edf8f4] text-emerald-800">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-medium text-base text-emerald-800/80 uppercase tracking-wider">
                  {data.exerciseTitle}
                </h3>
                <p className="text-xl sm:text-2xl font-semibold text-zinc-900 italic">
                  "Piensa cuánto dinero has ganado durante los últimos 5 años.<br className="hidden sm:inline" /> 
                  Ahora pregúntate: <span className="text-emerald-800 font-bold">¿Dónde está?</span>"
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-[#d5edd9]">
              {data.exerciseStats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#f5faf7] border border-[#cbe8d5] text-center">
                  <span className="block text-[10px] font-mono text-emerald-800 uppercase">{stat.label}</span>
                  <span className={`text-xs font-bold ${stat.status.startsWith("$") ? "text-emerald-800" : "text-zinc-900"}`}>{stat.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Storytelling Block */}
        <div className="space-y-6 text-zinc-800 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          <p className="border-l-4 border-emerald-600 pl-4 font-display text-[#092615] font-bold italic text-lg sm:text-lg">
            {data.highlightQuote}
          </p>

          <div className="bg-red-50/70 border border-red-200/60 rounded-2xl p-6 space-y-4 my-6">
            <h4 className="text-[10px] font-mono font-bold text-red-800 tracking-widest uppercase text-center">
              {data.painStepsTitle}
            </h4>
            <div className="grid grid-cols-3 gap-3 text-center">
              {data.painSteps.map((step, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-white border border-red-100 shadow-sm">
                  <span className="text-xs font-bold text-zinc-900">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-xs sm:text-sm font-medium text-red-900 text-center italic">
              "{data.painRef}"
            </p>
          </div>

          {/* Hard truth - Styled as a high contrast Dark box in the middle of light layout */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-900 text-zinc-100 my-6 space-y-3 shadow-2xl">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-brand shrink-0" />
              <h4 className="font-display text-xs font-black tracking-wider uppercase text-brand">
                {data.absoluteTruthTitle}
              </h4>
            </div>
            <p className="text-lg sm:text-xl font-extrabold text-white leading-snug">
              {data.absoluteTruthBig}
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {data.absoluteTruthDesc}
            </p>
          </div>

          {/* Introdución De Gastador Compulsivo a Inversoren 21 días */}
          <div className="text-center pt-6 space-y-4">
            <p className="text-lg sm:text-xl font-bold font-display text-emerald-950 italic">
              {data.calloutTitle}
            </p>
            <p className="font-normal text-zinc-700 max-w-xl mx-auto text-xs sm:text-sm">
              {data.calloutDesc}
            </p>
          </div>

        </div>

        <div className="flex justify-center pt-8">
          <ChevronRight className="w-6 h-6 text-emerald-700 animate-bounce rotate-90" />
        </div>

      </div>
    </section>
  );
}
