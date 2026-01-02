import { motion, useReducedMotion } from "framer-motion";
import { MagneticLink } from "../components/MagneticButton";

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center px-6 pb-20 pt-32"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={heroContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={prefersReducedMotion ? undefined : "show"}
          className="flex flex-col gap-8"
        >
          <motion.div variants={heroItem}>
            <p className="section-label">SYLVA / 公式</p>
          </motion.div>
          <motion.h1
            id="hero-title"
            variants={heroItem}
            className="text-5xl md:text-7xl font-display tracking-[0.25em]"
          >
            SYLVA
          </motion.h1>
          <motion.div variants={heroItem} className="space-y-4">
            <p className="text-xl md:text-2xl text-white/90">
              静けさの中で、意思決定を速くする。
            </p>
            <p className="max-w-2xl text-sm md:text-base text-white/65">
              AIが“整理”を肩代わりし、あなたは“選ぶ”に集中する。
            </p>
          </motion.div>
          <motion.div
            variants={heroItem}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticLink href="#products" variant="primary">
              製品を見る
            </MagneticLink>
            <MagneticLink href="#cta" variant="ghost">
              相談する
            </MagneticLink>
          </motion.div>
          <motion.div variants={heroItem} className="pt-10">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/50">
              <span>スクロール</span>
              <span className="relative h-[1px] w-24 overflow-hidden bg-white/20">
                <motion.span
                  className="absolute left-0 top-0 h-full w-12 bg-white/70"
                  animate={
                    prefersReducedMotion ? { x: 0 } : { x: ["-40%", "120%"] }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

