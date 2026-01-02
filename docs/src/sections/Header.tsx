import { motion, useReducedMotion } from "framer-motion";

const navItems = [
  { label: "製品", href: "#products" },
  { label: "思想", href: "#philosophy" },
  { label: "仕組み", href: "#showcase" },
  { label: "相談", href: "#cta" },
];

export default function Header() {
  const prefersReducedMotion = useReducedMotion();
  const logoSrc = `${import.meta.env.BASE_URL}sylva_symbol_black.png`;

  return (
    <motion.header
      className="fixed top-0 z-40 w-full border-b border-white/5 bg-black/70 backdrop-blur-md"
      initial={prefersReducedMotion ? false : { y: -16, opacity: 0 }}
      animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-white focus-ring"
          aria-label="SYLVA ホームへ"
        >
          <img
            src={logoSrc}
            alt="SYLVA ロゴ"
            className="h-6 w-6 object-contain invert"
            loading="lazy"
          />
          SYLVA
        </a>
        <nav aria-label="メインメニュー">
          <ul className="flex flex-wrap items-center justify-end gap-4 text-[10px] uppercase tracking-[0.3em] text-white/70 md:text-xs">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors duration-300 hover:text-white focus-ring"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
