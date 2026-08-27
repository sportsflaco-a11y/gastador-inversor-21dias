import { motion } from "motion/react";
import { ShieldCheck, TrendingUp, Sparkles, ChevronRight, ArrowRight } from "lucide-react";
import { copywriting } from "../data/copywriting";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { trackInitiateCheckout } from "../lib/pixel";

export default function Hero() {
  const data = copywriting.hero;

  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-[#09090b]" id="hero">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[200px] h-[200px] rounded-full bg-brand/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col text-left space-y-6">
            
            {/* Tag/Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-start"
            >
              <Badge variant="brand">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                {data.badge}
              </Badge>
            </motion.div>
 
            {/* Main Punchy Big Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase"
            >
              <span className="text-white block mb-2">{data.title}</span>
              <span className="text-brand block sm:inline">{data.titleAccent}</span>{" "}
              <span className="text-brand block sm:inline">{data.titleSuffix}</span>
            </motion.h1>

            {/* Promesa */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl font-semibold text-zinc-100 max-w-xl leading-snug"
            >
              {data.promo}
            </motion.p>

            {/* Sub-Promesa */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed"
            >
              {data.subPromo}
            </motion.p>

            {/* High-Converting CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 pt-4"
            >
              <Button 
                href="https://pay.hotmart.com/L106244109G?checkoutMode=10" 
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta" 
                onClick={() => trackInitiateCheckout("vip")}
                className="shadow-[0_0_30px_rgba(203,250,5,0.25)] hover:shadow-[0_0_40px_rgba(203,250,5,0.45)]"
              >
                {data.ctaMain}
              </Button>
            </motion.div>

            {/* Badges of trust */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-6 pt-4 text-xs text-zinc-500 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand" />
                Garantía 100% Sin Riesgo
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-brand" />
                Acceso Inmediato
              </div>
            </motion.div>

          </div>

          {/* Right Visual Sandbox Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end"
          >
            {/* Elegant high-fidelity desktop browser mockup window */}
            <div className="relative w-full rounded-2xl bg-[#0d0d11] border border-zinc-800 shadow-[0_30px_70px_rgba(0,0,0,0.85)] group overflow-hidden">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-[#121217]">
                {/* Window control dots */}
                <div className="flex gap-1.5 shrink-0">
                  <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                  <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                </div>
                
                {/* Simulated URL input bar */}
                <div className="flex-1 max-w-[320px] mx-4">
                  <div className="bg-[#09090c] border border-zinc-800/80 rounded-lg py-1 px-3 flex items-center justify-center gap-1.5 text-[10px] font-mono text-zinc-400 select-none">
                    <span className="text-brand">🔒</span>
                    <span>arquitectofinanciero.app</span>
                  </div>
                </div>

                {/* Right side spacer */}
                <div className="w-[52px]" />
              </div>

              {/* Main Space for App Mockup (Full Bleed) */}
              <div className="relative bg-zinc-950/40 overflow-hidden flex items-center justify-center">
                <img 
                  src="https://lh3.googleusercontent.com/d/1GwzSDFqyBretP60hUNV2zQEdz9_QmB9E" 
                  alt="Vista previa de El Arquitecto Financiero"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                  referrerPolicy="no-referrer"
                />
                {/* Elegant overlay shadow for realism */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Glowing accent glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
