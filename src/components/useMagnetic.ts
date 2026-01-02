import { useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";

export function useMagnetic() {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 20, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 220, damping: 20, mass: 0.35 });

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    prefersReducedMotion,
    magneticStyles: prefersReducedMotion ? undefined : { x: springX, y: springY },
    handlePointerMove,
    handlePointerLeave,
  };
}
