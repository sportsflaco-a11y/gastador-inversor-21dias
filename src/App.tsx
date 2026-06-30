/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Hero from "./components/Hero";
import TheProblem from "./components/TheProblem";
import ArchitectApp from "./components/ArchitectApp";
import ForWhom from "./components/ForWhom";
import WhatYouAreBuying from "./components/WhatYouAreBuying";
import AccessCallToAction from "./components/AccessCallToAction";
import ExclusiveBonuses from "./components/ExclusiveBonuses";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import FinalSummary from "./components/FinalSummary";
import SocialProofNotifications from "./components/SocialProofNotifications";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-brand selection:text-black overflow-hidden selection:rounded-lg">
      {/* Animated scroll progress bar at the very top */}
      <ScrollProgressBar />

      {/* Social proof live notifications displayed on reaching offer section */}
      <SocialProofNotifications />

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

        {/* SECTION 1.5: THE APPLICATION "EL ARQUITECTO FINANCIERO" */}
        <ArchitectApp />

        {/* SECTION 4: FOR WHOM? "¿PARA QUIÉN ES ESTO?" */}
        <ForWhom />

        {/* SECTION 5: WHAT YOU ARE BUYING "LO QUE REALMENTE ESTÁS COMPRANDO" */}
        <WhatYouAreBuying />

        {/* SECTION 5.5: IMMEDIATE ACCESS CALL TO ACTION */}
        <AccessCallToAction />

        {/* SECTION 6: EXCLUSIVE BONUSES "BONOS EXCLUSIVOS" */}
        <ExclusiveBonuses />

        {/* SECTION 7.5: TESTIMONIALS "HISTORIAS DE TRANSFORMACIÓN..." */}
        <Testimonials />

        {/* SECTION 9: FAQ "PREGUNTAS FRECUENTES (FAQ)" */}
        <FAQSection />
      </main>

      {/* SECTION 10 & FOOTER: FINAL SUMMARY "RESUMEN FINAL" */}
      <FinalSummary />
    </div>
  );
}
