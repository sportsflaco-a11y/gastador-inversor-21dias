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
      quote: "Me cambió la vida por completo. Antes creía que ganaba poco, pero con este reto me di cuenta de las enormes fugas que tenía en micro-gastos. En solo 21 días, mi chip mental es totalmente otro.",
      rating: 5,
      highlight: "Me cambió la vida por completo",
      tag: "Compra Verificada",
    },
    {
      name: "Camila S.",
      role: "Diseñadora UX — Santiago",
      quote: "¡Por fin me sobra dinero a final de mes! No he tenido que privarme de todo, simplemente automaticé el sistema y aprendí a dominar los impulsos. Este reto vale 10 veces su precio.",
      rating: 5,
      highlight: "¡Por fin me sobra dinero!",
      tag: "Compra Verificada",
    },
    {
      name: "Diego G.",
      role: "Ingeniero de Software — México DF",
      quote: "Excelente producto y directo al grano. El paso a paso es muy digerible. Las plantillas y el reto anti-compras impulsivas son oro puro para cualquiera cansado de no saber a dónde va su dinero.",
      rating: 5,
      highlight: "Excelente producto y al grano",
      tag: "Compra Verificada",
    },
    {
      name: "Valeria M.",
      role: "Consultora de Marketing — Lima",
      quote: "El mejor dinero que he invertido este año. El enfoque práctico neuro-financiero del reto me hizo entender por qué compraba cosas de forma reactiva en momentos de estrés. Transforma hábitos.",
      rating: 5,
      highlight: "El mejor dinero invertido",
      tag: "Compra Verificada",
    },
  ];

  return (
    <section className="relative py-28 bg-[#09090b] overflow-hidden border-b border-zinc-900" id="testimonios">
      {/* Background radial effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#CBFA05]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          tag="RESULTADOS HISTÓRICOS"
          title={
            <>
              HISTORIAS DE <span className="text-[#CBFA05]">TRANSFORMACIÓN REAL</span>
            </>
          }
          desc="Descubre cómo personas como tú rompieron el patrón de la escasez, automatizaron su tranquilidad y hoy disfrutan ver su capital crecer día a día."
          variant="brand"
          theme="dark"
        />

        {/* Trustpilot Trust Seal Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 max-w-2xl mx-auto backdrop-blur-sm shadow-xl relative overflow-hidden">
          {/* Subtle star pattern in the background */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00b67a]/5 rounded-full blur-xl pointer-events-none" />
          
          <div className="flex items-center gap-3">
            {/* Signature Trustpilot Star Logo */}
            <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#00b67a] text-white shadow-md shadow-[#00b67a]/20">
              <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
                <path d="M49.9 2.4L63.5 35l34.8.7-27.1 21.8 9.5 33.6-30.8-19.8-30.8 19.8 9.5-33.6L1.5 35.8l34.8-.7L49.9 2.4z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block font-display font-black text-xl text-white leading-none tracking-tight">Trustpilot</span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold block mt-0.5">Certificado Oficial</span>
            </div>
          </div>

          <div className="hidden sm:block h-10 w-[1px] bg-zinc-800" />

          <div className="flex flex-col sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-2xl font-black text-white font-mono">4.8</span>
              <span className="text-sm text-zinc-400 font-medium font-mono">/ 5</span>
              <div className="flex gap-0.5 ml-2">
                {[1, 2, 3, 4, 5].map((starIdx) => {
                  if (starIdx === 5) {
                    // Make the 5th star partially filled (for 4.8 representation) or solid
                    return (
                      <div key={starIdx} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-[3px]">
                        <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-white">
                          <path d="M49.9 2.4L63.5 35l34.8.7-27.1 21.8 9.5 33.6-30.8-19.8-30.8 19.8 9.5-33.6L1.5 35.8l34.8-.7L49.9 2.4z" />
                        </svg>
                      </div>
                    );
                  }
                  return (
                    <div key={starIdx} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-[3px]">
                      <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-white">
                        <path d="M49.9 2.4L63.5 35l34.8.7-27.1 21.8 9.5 33.6-30.8-19.8-30.8 19.8 9.5-33.6L1.5 35.8l34.8-.7L49.9 2.4z" />
                      </svg>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
              Calificación de <strong className="text-[#00b67a] font-black">Excelente</strong> basada en la experiencia verificada de nuestros alumnos.
            </p>
          </div>
        </div>

        {/* Testimonials Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {list.map((item, idx) => (
            <div 
              key={idx}
              id={`testimonial-card-${idx}`}
              className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#121214] border border-zinc-800 hover:border-brand/30 transition-all duration-300 relative group shadow-sm"
            >
              <div className="space-y-6">
                
                {/* Upper row: Star ratings & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#CBFA05] text-[#CBFA05]" />
                    ))}
                  </div>
                  
                  <span className="flex items-center gap-1 text-[9px] font-mono tracking-widest text-[#CBFA05] bg-brand/10 border border-brand/20 px-2 py-0.5 rounded font-bold uppercase">
                    <CheckCircle2 className="w-3 h-3" />
                    {item.tag}
                  </span>
                </div>

                {/* Main Quote & highlighted header snippet */}
                <div className="space-y-3 relative">
                  <Quote className="absolute -top-3 -left-2 w-8 h-8 text-zinc-800/40 pointer-events-none group-hover:text-brand/10 transition-colors" />
                  
                  <h4 className="font-display font-black text-lg text-white leading-tight italic z-10 relative">
                    "{item.highlight}"
                  </h4>
                  
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed z-10 relative font-normal">
                    {item.quote}
                  </p>
                </div>

              </div>

              {/* Author Footer info box */}
              <div className="mt-8 pt-4 border-t border-zinc-855/50 flex flex-col">
                <span className="font-display font-black text-sm text-white tracking-wide uppercase">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">
                  {item.role}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Global summary count text block */}
        <div className="text-center mt-14 bg-zinc-950/40 border border-zinc-850/80 rounded-2xl py-4 sm:py-5 px-6 max-w-xl mx-auto space-y-1">
          <p className="text-xs sm:text-sm font-semibold text-zinc-100">
            Únete hoy a los <span className="text-[#CBFA05] font-black">más de 1,200 estudiantes</span> que ya dominan su dinero.
          </p>
          <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
            Garantía incondicional de satisfacción por 7 días
          </span>
        </div>

      </div>
    </section>
  );
}
