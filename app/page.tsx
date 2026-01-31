"use client";
// ...existing code...
export function RequestAccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // ...existing code...
  return (
    <div className={`modal ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
      {/* ...existing modal header / close button ... */}

      <form
        action="https://formspree.io/f/xvzrjqgg"
        method="POST"
        className="space-y-4"
      >
        <label className="block">
          <span className="text-sm font-medium">Your email</span>
          <input type="email" name="email" required className="mt-1 w-full" placeholder="you@domain.com" />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Your message</span>
          <textarea name="message" required className="mt-1 w-full" rows={4} placeholder="Tell us why you want access" />
        </label>

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-4 py-2">Cancel</button>
          <button type="submit" className="px-6 py-2 bg-black text-white">Send</button>
        </div>
      </form>

      {/* ...existing code... */}
    </div>
  );
}

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { LiquidBackground } from "@/components/LiquidBackground";
import { ProductShowcase } from "@/components/ProductShowcase";
import { RequestAccessModal } from "@/components/RequestAccessModal";
import { StarBackground } from "@/components/StarBackground";



// --- ASSETS ---
const ASSETS = {
  hero: "/assets/hero.png",
  problem: "/assets/problem.png",
  token: "/assets/token.png",
  whale: "/assets/whale.png",
  pattern: "/assets/pattern.png",
  risk: "/assets/risk.png",
};

// --- COMPONENTS ---

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`relative min-h-screen flex flex-col justify-center items-center overflow-hidden ${className}`}>
    {children}
  </section>
);

const FadeText = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (

    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- MAIN PAGE ---

export default function AlekryptLaunch() {
    const containerRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrollToCTA = () => {
      document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
    };

    return (

      <main ref={containerRef} className="text-[#ededed] font-sans selection:bg-white/20 overflow-x-hidden relative">
        <LiquidBackground />
        <RequestAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* 1. HERO SECTION - Solid Black to hide liquid background, stars visible */}
        <Section className="z-10 relative bg-black">
          <StarBackground />

          <div className="absolute inset-0 z-0 opacity-40">
            {/* Fallback pattern or gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          <div className="relative z-10 text-center mix-blend-difference px-6">
            <FadeText>
              {/* 3D Title Effect */}
              <h1 className="text-[15vw] md:text-[12rem] font-bold tracking-tighter leading-[0.8] mb-6 text-white mix-blend-overlay opacity-90">
                ALEKRYPT
              </h1>
            </FadeText>
            <FadeText delay={0.3}>
              <p className="text-xl md:text-3xl font-serif italic tracking-wide opacity-80 mb-12">
                Intelligence before the pump.
              </p>
            </FadeText>

            <FadeText delay={0.6} className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button
                onClick={scrollToCTA}
                className="group relative inline-flex items-center gap-4 px-10 py-4 bg-white text-black rounded-none font-bold text-lg tracking-[0.2em] uppercase hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Request Access
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white uppercase tracking-widest text-sm border-b border-transparent hover:border-white transition-colors"
              >
                Explore The System
              </button>
            </FadeText>
          </div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 animate-bounce"
          >
            <ChevronDown className="text-white/50" />
          </motion.div>
        </Section>

        {/* 2. THE PROBLEM (Impact statement) */}
        <Section className="z-20 bg-gradient-to-b from-black via-[#050505] to-[#0a0a0a]">
          <div className="max-w-5xl text-center px-6">
            <FadeText>
              <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tight leading-none mb-12">
                Every pump starts <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Quietly.</span>
              </h2>
            </FadeText>
            <div className="h-20" />
            <FadeText delay={0.3}>
              <p className="text-2xl md:text-4xl text-gray-400 font-serif leading-relaxed max-w-3xl mx-auto">
                "By the time you see the green candle, the smart money has already positioned."
              </p>
            </FadeText>
          </div>
        </Section>

        {/* 3. SHOWCASE (The Core) */}
        <div id="showcase">
          <ProductShowcase />
        </div>

        {/* 4. CAPABILITIES SUMMARY */}
        <Section className="z-30 min-h-[80vh] bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl px-6 w-full items-center">
            <FadeText>
              <h2 className="text-6xl md:text-8xl font-bold uppercase leading-none">
                Beyond <br /> <span className="text-blue-600">Price.</span>
              </h2>
            </FadeText>
            <div className="space-y-12">
              <FadeText delay={0.2}>
                <div className="border-l-2 border-white/20 pl-8">
                  <h3 className="text-2xl font-bold uppercase mb-2">Behavioral Analysis</h3>
                  <p className="text-xl text-gray-400 font-serif">We track the intention, not just the transaction. See who is buying and why.</p>
                </div>
              </FadeText>
              <FadeText delay={0.4}>
                <div className="border-l-2 border-white/20 pl-8">
                  <h3 className="text-2xl font-bold uppercase mb-2">Geometric Recognition</h3>
                  <p className="text-xl text-gray-400 font-serif">Identifying the accumulation structures that mathematically precede upside viability.</p>
                </div>
              </FadeText>
            </div>
          </div>
        </Section>

        {/* 5. TRUST / DATA */}
        <Section className="bg-[#050505] z-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center px-6">
            <FadeText>
              <div className="text-sm font-mono text-emerald-500 mb-4 uppercase tracking-widest">pump prediction bot Confidence</div>

              {/* Minimalistic Score Display with Liquid Effect */}
              <div className="relative inline-block my-12">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-[8rem] md:text-[12rem] leading-none font-light tracking-tighter mx-auto liquid-text"
                >
                  94%
                </motion.div>
              </div>
              <p className="text-2xl md:text-4xl font-serif text-gray-400 mt-2 relative z-10 font-light">
                Signal Accuracy on highly volatile markets and tokens.
              </p>
            </FadeText>
          </div>
        </Section>

        {/* 6. VISION */}
        <Section className="z-10">
          <div className="max-w-5xl mx-auto text-center px-6">
            <FadeText>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                The Only Tool<span className="text-white"> You will ever need</span>
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto font-serif">
                Alekrypt is not for the masses. It is for those who understand that in this market, information is the only asset that matters.
              </p>
            </FadeText>
          </div>
        </Section>

        {/* 7. CTA FINAL */}
        <Section id="cta-final" className="z-50 text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <FadeText>
              <h2 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-12">
                Join The <br /> Network
              </h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-4 px-16 py-6 bg-white text-black rounded-none font-bold text-xl tracking-[0.2em] uppercase hover:bg-gray-200 transition-all duration-300"
              >
                Request Access
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="mt-12 text-sm text-gray-400 font-mono uppercase tracking-widest flex flex-col gap-2 items-center">
                <div>Limited High-Frequency Slots Available</div>
                <div className="text-gray-400 normal-case tracking-normal hover:text-gray-300 underline cursor-pointer">
                  alekrypt@gmail.com
                </div>
                <div className="text-white mt-2">see you on the other side</div>
              </div>
            </FadeText>
          </div>
        </Section>
      </main>
    );
}
