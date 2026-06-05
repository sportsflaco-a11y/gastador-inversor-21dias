import { ArrowUp } from "lucide-react";

export default function FinalSummary() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-950 py-12 border-t border-zinc-900 overflow-hidden text-left" id="conclusión">
      {/* Background orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Dynamic Footer Meta Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
          
          {/* Copyright description */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center font-bold text-zinc-400 text-xs border border-zinc-800">
              $
            </div>
            <span>© 2026 INVERSOR21. Todos los derechos reservados.</span>
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
        <div className="mt-6 text-zinc-600 text-[10px] leading-relaxed max-w-3xl mx-auto text-center border-t border-zinc-900/30 pt-4 font-sans">
          Aviso Legal y Descargo de Responsabilidad: Los resultados presentados son individuales y pueden variar según la situación personal de cada usuario. Este programa proporciona un método basado en hábitos y educación financiera personal. No constituye una recomendación de inversión directa, asesoramiento bursátil profesional ni servicio de captación de recursos regulado. Todas las transacciones se realizan bajo los estándares más estrictos y protegidos de encriptación SSL.
        </div>

      </div>
    </footer>
  );
}
