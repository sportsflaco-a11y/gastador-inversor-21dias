import { ArrowUp, PlaySquare, Check, Landmark, ShieldCheck, HeartPulse } from "lucide-react";

export default function FinalSummary() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const decisions = [
    "La decisión de dejar de gastar sin pensar.",
    "La decisión de dejar de posponer tu estabilidad financiera.",
    "La decisión de dejar de esperar el momento perfecto."
  ];

  const enoughPoints = [
    "Suficiente de llegar justo a final de mes.",
    "Suficiente de preguntarte angustiado dónde desaparece tu dinero.",
    "Suficiente de ver pasar los años sin construir nada de riqueza sólida."
  ];

  return (
    <footer className="relative bg-zinc-950 pt-24 pb-12 border-t border-zinc-900 overflow-hidden text-left" id="conclusión">
      {/* Background orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Core Content */}
        <div className="space-y-12 max-w-3xl mx-auto">
          
          {/* Header layout */}
          <div className="space-y-4">
            <h3 className="font-display font-black text-3xl sm:text-4.5xl text-white uppercase text-center leading-tight">
              UN COMPROMISO CONTIGO MISMO
            </h3>
          </div>

          {/* Strong Editorial Storytelling */}
          <div className="space-y-5 text-zinc-350 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              Quizás hoy no tengas una gran cartera de inversiones o patrimonio construido... Pero eso hoy no importa. Lo único valioso es dar el paso para recuperar las riendas de tus decisiones financieras personales.
            </p>
            <p className="border-l-4 border-brand pl-4 font-bold text-white text-base sm:text-lg italic">
              Cualquier persona que hoy disfrute de paz financiera comenzó exactamente desde el mismo punto de partida: con una firme decisión.
            </p>
            <p className="font-semibold text-white text-xs sm:text-sm">
              Empieza hoy mismo a trazar ese camino:
            </p>

            {/* List of decisions */}
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {decisions.map((dec, i) => (
                <li key={i} className="p-4 rounded-xl bg-zinc-900 border border-zinc-850 text-xs text-zinc-200">
                  <span className="block text-brand font-mono font-black mb-1">DECISIÓN 0{i+1}</span>
                  {dec}
                </li>
              ))}
            </ul>

            <p className="pt-2 text-xs sm:text-sm">
              El momento perfecto no existe. Existe el momento preciso en el que pones un límite y decides que ya es suficiente:
            </p>

            {/* List of enough points */}
            <ul className="space-y-1.5 pt-1">
              {enoughPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <p className="text-white font-bold my-3 text-xs sm:text-sm">
              "No es comprar contenido teórico superfluo. Es asegurar la tranquilidad de tu futuro:"
            </p>

            <div className="grid grid-cols-3 gap-3 pt-1 text-center text-[10px] font-mono uppercase tracking-wider font-black text-white">
              <div className="p-2.5 bg-zinc-900 rounded-lg border border-zinc-850 text-brand">Tranquilidad</div>
              <div className="p-2.5 bg-zinc-900 rounded-lg border border-zinc-850 text-brand">Opciones</div>
              <div className="p-2.5 bg-zinc-900 rounded-lg border border-zinc-850 text-brand">Tu Futuro</div>
            </div>

            <p className="pt-2 text-center text-xs sm:text-sm">
              No tienes que cambiarlo todo de la noche a la mañana. <span className="text-brand font-semibold">Solo tienes que dar el siguiente paso hoy.</span>
            </p>
          </div>

          <hr className="border-zinc-900 pt-6" />

          {/* Dynamic final call to action to start transformation */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-850 text-center space-y-8 shadow-2xl">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">¿ESTÁS LISTO?</span>
              <h4 className="font-display font-black text-xl sm:text-3xl text-white uppercase tracking-tight">
                La próxima versión de tu vida financiera empieza con una sola decisión hoy.
              </h4>
              <p className="text-zinc-500 text-xs sm:text-sm">
                Haz clic abajo e inicia tu reprogramación financiera de 21 días ahora mismo.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <a 
                href="#oferta"
                className="w-full sm:w-auto relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand font-display font-bold text-center text-black text-sm sm:text-base tracking-wider uppercase hover:bg-brand-hover active:scale-95 transition-all shadow-[0_0_30px_rgba(203,250,5,0.25)] hover:shadow-[0_0_40px_rgba(203,250,5,0.45)] cursor-pointer"
                id="final-cta"
              >
                <HeartPulse className="w-5 h-5 animate-pulse" />
                EMPEZAR MI TRANSFORMACIÓN AHORA
              </a>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">Asegura tu precio de lanzamiento de $5.99 USD de por vida</span>
            </div>
          </div>

        </div>

        {/* Dynamic Footer Meta Links */}
        <div className="mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
          
          {/* Copyright description */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center font-bold text-zinc-400 text-xs border border-zinc-800">
              $
            </div>
            <span>© {new Date().getFullYear()} INVERSOR21. Todos los derechos reservados.</span>
          </div>

          {/* Back to top dynamic button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all font-mono text-xs cursor-pointer"
            id="back-to-top"
          >
            Volver Arriba
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Disclaimer notes of secure conversions */}
        <div className="mt-6 text-zinc-650 text-[10px] leading-relaxed max-w-3xl mx-auto text-zinc-600 text-center border-t border-zinc-900/30 pt-4 font-sans">
          Aviso Legal y Descargo de Responsabilidad: Los resultados presentados son individuales y pueden variar según la situación personal de cada usuario. Este programa proporciona un método basado en hábitos y educación financiera personal. No constituye una recomendación de inversión directa, asesoramiento bursátil profesional ni servicio de captación de recursos regulado. Todas las transacciones se realizan bajo los estándares más estrictos y protegidos de encriptación SSL.
        </div>

      </div>
    </footer>
  );
}
