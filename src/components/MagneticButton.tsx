import { motion } from "framer-motion";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { useMagnetic } from "./useMagnetic";

type Variant = "primary" | "ghost";

type MagneticButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

type MagneticLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm uppercase tracking-[0.3em] transition-all duration-500 focus-ring";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:bg-white/90 hover:shadow-glow border border-white/80",
  ghost:
    "border border-white/30 text-white hover:border-white/70 hover:text-white/90",
};

export function MagneticButton({
  variant = "primary",
  className = "",
  onPointerMove,
  onPointerLeave,
  type,
  ...props
}: MagneticButtonProps) {
  const { magneticStyles, handlePointerMove, handlePointerLeave } = useMagnetic();

  return (
    <motion.button
      type={type ?? "button"}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={magneticStyles}
      onPointerMove={(event) => {
        handlePointerMove(event);
        onPointerMove?.(event);
      }}
      onPointerLeave={(event) => {
        handlePointerLeave();
        onPointerLeave?.(event);
      }}
      {...props}
    />
  );
}

export function MagneticLink({
  variant = "ghost",
  className = "",
  onPointerMove,
  onPointerLeave,
  ...props
}: MagneticLinkProps) {
  const { magneticStyles, handlePointerMove, handlePointerLeave } = useMagnetic();

  return (
    <motion.a
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={magneticStyles}
      onPointerMove={(event) => {
        handlePointerMove(event);
        onPointerMove?.(event);
      }}
      onPointerLeave={(event) => {
        handlePointerLeave();
        onPointerLeave?.(event);
      }}
      {...props}
    />
  );
}
