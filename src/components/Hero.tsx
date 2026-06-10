import { motion } from "motion/react";
import { ShieldCheck, TrendingUp, Sparkles, ChevronRight, ArrowRight } from "lucide-react";
import { copywriting } from "../data/copywriting";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

export default function Hero() {
  const data = copywriting.hero;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#09090b]" id="hero">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[200px] h-[200px] rounded-full bg-brand/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            
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
              className="font-display text-4xl sm:text-5xl lg:text-6.5xl font-black tracking-tight text-white leading-tight uppercase"
            >
              {data.title} <br className="hidden sm:inline" />
              a <span className="text-brand bg-gradient-to-r from-brand to-lime-300 bg-clip-text text-transparent">{data.titleAccent}</span> {data.titleSuffix}
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
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <Button 
                href="https://pay.hotmart.com/L106244109G?checkoutMode=10" 
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta" 
                className="shadow-[0_0_30px_rgba(203,250,5,0.25)] hover:shadow-[0_0_40px_rgba(203,250,5,0.45)]"
              >
                {data.ctaMain}
              </Button>
              <Button href="#problema" variant="secondary" showIcon={false}>
                <span className="flex items-center gap-2">
                  {data.ctaSec}
                  <ArrowRight className="w-4 h-4 text-zinc-500" />
                </span>
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
            className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end"
          >
            {/* Elegant glass card wrapper */}
            <div className="relative w-full max-w-[380px] rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 p-[1px] border border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="relative rounded-[23px] bg-zinc-950/90 p-5 space-y-6">
                
                {/* Header of Card Mini App */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800/60">
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/30 flex items-center justify-center font-bold text-brand text-xs">
                       $
                     </div>
                     <div>
                       <span className="block text-xs font-mono text-zinc-500">Plan actual</span>
                       <span className="block text-xs font-bold text-white uppercase">SISTEMA INVERSIONES 21D</span>
                     </div>
                   </div>
                   <div className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-brand uppercase font-mono tracking-wider">
                     DÍA 1 DE 21
                   </div>
                </div>

                {/* The 21-Day Progress Steps */}
                <div className="space-y-3">
                  <span className="block text-xs font-mono text-zinc-500 uppercase tracking-widest">Etapas del Sistema</span>
                  
                  {/* Step 1 */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-850">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-brand flex items-center justify-center text-black text-xs font-bold font-mono">
                        1
                      </div>
                      <span className="text-xs font-medium text-white">Derrumbar Hábitos Gastadores</span>
                    </div>
                    <span className="text-[10px] font-mono text-brand font-semibold">ACTIVO</span>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/20 border border-zinc-850/50 opacity-60">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-zinc-500 text-xs font-bold font-mono">
                        2
                      </div>
                      <span className="text-xs font-medium text-zinc-400">Canalizar Excedentes</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600">DÍA 8</span>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/20 border border-zinc-850/50 opacity-60">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-zinc-500 text-xs font-bold font-mono">
                        3
                      </div>
                      <span className="text-xs font-medium text-zinc-400">Automatizar Tu Inversión</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600">DÍA 15</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Glowing accent border bottom right */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand/8 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
