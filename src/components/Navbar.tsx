import { useState } from "react";
import { Menu, X, Landmark, Compass, HelpCircle, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "El Problema", href: "#problema", icon: Compass },
    { name: "¿Qué Desbloquearás?", href: "#desbloqueas", icon: Landmark },
    { name: "¿Para Quién?", href: "#para-quien", icon: HelpCircle },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/60" id="navbar">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="h-24 flex items-center">
          
          {/* Desktop balanced layout: elements distributed perfectly and equidistantly */}
          <div className="hidden md:flex items-center justify-between w-full gap-4">
            {/* Logo */}
            <div className="flex items-center cursor-pointer shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="https://lh3.googleusercontent.com/d/18Jqa9iUV5tV2Pnkl7RTA9tDwCsQd3hVR" 
                alt="Inversor 21" 
                className="h-16 sm:h-18 md:h-20 w-auto object-contain rounded-xl bg-white p-1 hover:scale-105 transition-transform duration-200 border border-zinc-200 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Nav links directly listed as siblings for uniform distribution */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}

            {/* CTA Button */}
            <div className="shrink-0">
              <Button 
                href="#oferta"
                className="py-2.5 px-5 !text-sm"
                showIcon={true}
              >
                Empezar Ahora
              </Button>
            </div>
          </div>

          {/* Mobile responsive view */}
          <div className="flex md:hidden items-center justify-between w-full relative">
            {/* Logo */}
            <div className="flex items-center cursor-pointer shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="https://lh3.googleusercontent.com/d/18Jqa9iUV5tV2Pnkl7RTA9tDwCsQd3hVR" 
                alt="Inversor 21" 
                className="h-12 w-auto object-contain rounded-xl bg-white p-1 border border-zinc-200 shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Centered CTA button for mobile */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <a 
                href="#oferta"
                className="inline-flex items-center justify-center py-2 px-3.5 bg-brand hover:bg-[#CBFA05] text-[#09090b] text-[10px] sm:text-xs font-display font-extrabold tracking-wider uppercase rounded-full shadow-[0_0_12px_rgba(203,250,5,0.25)] hover:shadow-[0_0_20px_rgba(203,250,5,0.45)] transition-all duration-350 active:scale-95 text-center whitespace-nowrap"
              >
                Empezar Ahora
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors shrink-0"
              aria-label="Toggle menu"
              id="menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#09090b]/95 border-b border-zinc-800 px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.replace("#", ""));
                }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/40 transition-all font-medium"
              >
                <link.icon className="w-5 h-5 text-brand" />
                {link.name}
              </a>
            ))}
            <hr className="border-zinc-800/80 my-2" />
            <Button 
              href="#oferta"
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 px-4 shadow-[0_0_15px_rgba(203,250,5,0.2)]"
            >
              QUIERO EL PROGRAMA por $6
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
