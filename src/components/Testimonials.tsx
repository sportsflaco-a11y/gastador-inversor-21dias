import { Star, Quote, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  highlight: string;
  tag: string;
}

export default function Testimonials() {
  const list: Testimonial[] = [
    {
      name: "Mateo R.",
      role: "Emprendedor — Bogotá",
      quote: "Me cambió la vida por completo. Antes creía que ganaba poco, pero con este reto me di cuenta de las enormes fugas que tenía en micro-gastos. Mi chip mental es totalmente otro.",
      rating: 5,
      highlight: "Cambio de vida por completo",
      tag: "Compra Verificada",
    },
    {
      name: "Camila S.",
      role: "Diseñadora UX — Santiago",
      quote: "¡Por fin me sobra dinero a final de mes! No he tenido que privarme de todo, simplemente automaticé el sistema y aprendí a dominar los impulsos.",
      rating: 5,
      highlight: "¡Por fin me sobra dinero!",
      tag: "Compra Verificada",
    },
    {
      name: "Diego G.",
      role: "Software — México DF",
      quote: "Excelente producto y directo al grano. El paso a paso es muy digerible. El reto anti-compras impulsivas es oro puro.",
      rating: 5,
      highlight: "Excelente y al grano",
      tag: "Compra Verificada",
    },
    {
      name: "Valeria M.",
      role: "Marketing — Lima",
      quote: "El enfoque práctico neuro-financiero del reto me hizo entender por qué compraba cosas de forma reactiva en momentos de estrés. Transforma tus hábitos.",
      rating: 5,
      highlight: "El mejor dinero invertido",
      tag: "Compra Verificada",
    },
  ];

  return (
    <section className="relative pt-6 pb-8 bg-[#09090b] overflow-hidden border-b border-zinc-900" id="testimonios">
      {/* Background radial effects */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#CBFA05]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          tag="RESULTADOS HISTÓRICOS"
          title={
            <>
              HISTORIAS DE <span className="text-[#CBFA05]">TRANSFORMACIÓN REAL</span>
            </>
          }
          desc="Descubre cómo personas reales rompieron el patrón de la escasez y automatizaron su tranquilidad financiera."
          variant="brand"
          theme="dark"
          className="!mb-6"
        />

        {/* Testimonials Grid layout (Compact cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {list.map((item, idx) => (
            <div 
              key={idx}
              id={`testimonial-card-${idx}`}
              className="flex flex-col justify-between p-5 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-brand/35 transition-all duration-300 relative group shadow-sm"
            >
              <div className="space-y-3.5">
                
                {/* Upper row: Star ratings & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#CBFA05] text-[#CBFA05]" />
                    ))}
                  </div>
                  
                  <span className="flex items-center gap-1 text-[8px] font-mono tracking-wider text-[#CBFA05] bg-brand/10 border border-brand/20 px-1.5 py-0.5 rounded font-bold uppercase">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    {item.tag}
                  </span>
                </div>

                {/* Main Quote */}
                <div className="space-y-1.5 relative">
                  <Quote className="absolute -top-2 -left-1 w-6 h-6 text-zinc-800/30 pointer-events-none group-hover:text-brand/5 transition-colors" />
                  
                  <h4 className="font-display font-black text-sm text-white leading-snug italic z-10 relative group-hover:text-[#CBFA05] transition-colors">
                    "{item.highlight}"
                  </h4>
                  
                  <p className="text-zinc-400 text-[11px] leading-relaxed z-10 relative font-normal line-clamp-4">
                    {item.quote}
                  </p>
                </div>

              </div>

              {/* Author Footer info box */}
              <div className="mt-4 pt-2.5 border-t border-zinc-850/60 flex flex-col">
                <span className="font-display font-black text-xs text-white tracking-wide uppercase">
                  {item.name}
                </span>
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">
                  {item.role}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Global summary count text block */}
        <div className="text-center mt-8 bg-zinc-950/40 border border-zinc-850/80 rounded-xl py-3 px-5 max-w-md mx-auto space-y-0.5">
          <p className="text-xs font-semibold text-zinc-100">
            Únete hoy a los <span className="text-[#CBFA05] font-black">más de 1,200 estudiantes</span> que dominan su dinero.
          </p>
          <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-wider">
            Garantía incondicional de satisfacción por 7 días
          </span>
        </div>

      </div>
    </section>
  );
}
