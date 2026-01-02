import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealSectionProps = {
  id?: string;
  className?: string;
  ariaLabelledby?: string;
  children: ReactNode;
};

export default function RevealSection({
  id,
  className = "",
  ariaLabelledby,
  children,
}: RevealSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      aria-labelledby={ariaLabelledby}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.section>
  );
}
