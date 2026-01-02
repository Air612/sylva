import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Philosophy from "./sections/Philosophy";
import Showcase from "./sections/Showcase";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const patternShift = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const glowShift = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus-ring"
      >
        本文へスキップ
      </a>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:120px_120px]"
        style={prefersReducedMotion ? undefined : { y: patternShift }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25),rgba(0,0,0,0))] opacity-70 blur-3xl"
        style={prefersReducedMotion ? undefined : { y: glowShift }}
      />
      <div className="relative z-10">
        <Header />
        <main id="main" className="flex flex-col">
          <Hero />
          <Products />
          <Philosophy />
          <Showcase />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
