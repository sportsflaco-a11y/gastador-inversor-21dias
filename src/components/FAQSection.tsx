import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { copywriting } from "../data/copywriting";
import { SectionHeader } from "./ui/SectionHeader";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = copywriting.faqs;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-[#ecf7f2] overflow-hidden border-t border-b border-[#c8ebd7]" id="faq">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-left">
        
        {/* Central Section Header */}
        <SectionHeader 
          tag="RESOLVIENDO TUS INQUIETUDES"
          title="PREGUNTAS FRECUENTES (FAQ)"
          desc="Todo lo que necesitas saber antes de tomar la decisión de recuperar las riendas de tu futuro financiero."
          theme="light"
        />

        {/* The accordions list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="group rounded-2xl bg-white border border-[#bce4cc] hover:border-emerald-600 shadow-sm transition-all duration-300"
              >
                {/* Trigger Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-emerald-850 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-display font-black text-sm sm:text-base text-zinc-900 uppercase tracking-wide group-hover:text-zinc-950">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-zinc-600 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-850" : ""}`} />
                </button>

                {/* Body Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] border-t border-[#edf8f4]" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-xs sm:text-sm text-zinc-800 leading-relaxed font-sans mr-4 font-normal">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
