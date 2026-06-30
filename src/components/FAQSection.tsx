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
    <section className="relative pt-6 pb-8 bg-[#f4faf7] overflow-hidden border-t border-b border-[#d1ebd9]" id="faq">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-left">
        
        {/* Central Section Header */}
        <SectionHeader 
          tag="RESOLVIENDO TUS INQUIETUDES"
          title="PREGUNTAS FRECUENTES"
          desc="Respuestas rápidas para dar el paso con total seguridad."
          theme="light"
          className="!mb-5 sm:!mb-6 text-center"
        />

        {/* The accordions list - compact, minimalist design */}
        <div className="divide-y divide-[#bce4cc]/60 border-t border-b border-[#bce4cc]/60 max-w-2xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="transition-all duration-200"
              >
                {/* Trigger Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-3.5 sm:py-4 text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className="w-4 h-4 text-emerald-800 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-display font-bold text-xs sm:text-sm text-zinc-900 group-hover:text-emerald-900 transition-colors">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-800" : ""}`} />
                </button>

                {/* Body Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[200px] pb-3.5 sm:pb-4" : "max-h-0"
                  }`}
                >
                  <p className="pl-7 text-[11px] sm:text-xs text-zinc-700 leading-relaxed font-sans font-normal max-w-xl">
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
