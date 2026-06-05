/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Hero from "./components/Hero";
import TheProblem from "./components/TheProblem";
import WhatYouUnlock from "./components/WhatYouUnlock";
import ImagineSection from "./components/ImagineSection";
import ForWhom from "./components/ForWhom";
import WhatYouAreBuying from "./components/WhatYouAreBuying";
import ExclusiveBonuses from "./components/ExclusiveBonuses";
import CountSection from "./components/CountSection";
import Testimonials from "./components/Testimonials";
import SummaryAndPurchase from "./components/SummaryAndPurchase";
import FAQSection from "./components/FAQSection";
import FinalSummary from "./components/FinalSummary";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-brand selection:text-black overflow-hidden selection:rounded-lg">
      {/* Animated scroll progress bar at the very top */}
      <ScrollProgressBar />

      {/* Structural Global ambient background lights */}
      <div className="fixed top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-brand/5 to-transparent pointer-events-none z-0" />
      
      {/* Sticky top professional Navbar */}
      <Navbar />

      {/* Main Structural Blocks mapping exact copywriting flow */}
      <main className="relative z-10 w-full">
        {/* HERO SECTION */}
        <Hero />

        {/* SECTION 1: THE PROBLEM "Tu problema no es que ganas poco..." */}
        <TheProblem />

        {/* SECTION 2: WHAT YOU UNLOCK "¿QUÉ DESBLOQUEARÁS?" */}
        <WhatYouUnlock />

        {/* SECTION 3: IMAGINE SECTION "IMAGINA CÓMO SE SENTIRÍA..." */}
        <ImagineSection />

        {/* SECTION 4: FOR WHOM? "¿PARA QUIÉN ES ESTO?" */}
        <ForWhom />

        {/* SECTION 5: WHAT YOU ARE BUYING "LO QUE REALMENTE ESTÁS COMPRANDO" */}
        <WhatYouAreBuying />

        {/* SECTION 6: EXCLUSIVE BONUSES "BONOS EXCLUSIVOS" */}
        <ExclusiveBonuses />

        {/* SECTION 7: COUNT SECTION & CALCULATOR "HAZ CUENTAS..." */}
        <CountSection />

        {/* SECTION 7.5: TESTIMONIALS "HISTORIAS DE TRANSFORMACIÓN..." */}
        <Testimonials />

        {/* SECTION 8: SUMMARY & PURCHASE "RESUMEN DE LO QUE TE LLEVAS" + $6 checkout */}
        <SummaryAndPurchase />

        {/* SECTION 9: FAQ "PREGUNTAS FRECUENTES (FAQ)" */}
        <FAQSection />
      </main>

      {/* SECTION 10 & FOOTER: FINAL SUMMARY "RESUMEN FINAL" */}
      <FinalSummary />
    </div>
  );
}
