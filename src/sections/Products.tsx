import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RevealSection from "../components/RevealSection";
import SectionHeading from "../components/SectionHeading";

type Product = {
  id: string;
  name: string;
  kana: string;
  tagline: string;
  description: string[];
  features: string[];
};

const products: Product[] = [
  {
    id: "routa",
    name: "ROUTA",
    kana: "ルータ",
    tagline: "学習の経路を、AIで設計・管理する。",
    description: [
      "ROUTAは、教材・目標・可処分時間をもとに、学習を“経路”として設計するAI学習管理システムです。",
      "進捗は自動で更新され、遅れや偏りを検知して、次の一手を再提案します。",
      "計画は固定ではなく、現実に合わせて滑らかに最適化され続けます。",
    ],
    features: [
      "教材の構造化（章・単元・優先度）",
      "期間から逆算した学習ルート生成",
      "進捗の可視化と遅延検知",
      "日次の次タスク提示（自走支援）",
      "学習ログの統合",
    ],
  },
  {
    id: "mito",
    name: "MITO",
    kana: "ミト",
    tagline: "支出を“見通す”。解約も、継続も、迷わない。",
    description: [
      "MITOは、複数のサブスクリプションを自動で整理し、支出の見通しを作る管理アプリです。",
      "月額の合計、利用頻度の偏り、値上げや重複を検知し、判断材料を提示します。",
      "“やめる導線”も設計し、必要なものだけが残る状態へ整えます。",
    ],
    features: [
      "サブスク検出・一覧化",
      "月額/年額の集計と予測",
      "重複・未使用アラート",
      "解約手順の整理（ダミー導線でOK）",
      "通知のカスタマイズ",
    ],
  },
];

export default function Products() {
  const prefersReducedMotion = useReducedMotion();
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!activeProduct) return;
    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProduct(null);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProduct]);

  return (
    <RevealSection
      id="products"
      ariaLabelledby="products-title"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="products-title"
          title="プロダクト"
          subtitle="SYLVAのプロダクトは、複雑さを削り、判断の速度を上げるために設計されています。"
          label="プロダクト / Products"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <motion.article
              key={product.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -6,
                      boxShadow: "0 0 40px rgba(255, 255, 255, 0.12)",
                    }
              }
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl border border-white/40" />
                <div className="absolute -inset-8 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)]" />
              </div>
              <div className="relative flex h-full flex-col gap-6">
                <div className="space-y-3">
                  <p className="section-label">{product.kana}</p>
                  <h3 className="text-3xl font-display tracking-[0.2em]">
                    {product.name}
                  </h3>
                  <p className="text-sm text-white/70">{product.tagline}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                    詳細
                  </span>
                  <button
                    type="button"
                    className="text-xs uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:text-white/70 focus-ring"
                    onClick={() => setActiveProduct(product)}
                    aria-haspopup="dialog"
                  >
                    開く
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProduct ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-6 py-12"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/80"
              onClick={() => setActiveProduct(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`modal-title-${activeProduct.id}`}
              className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/15 bg-black/85 p-8 text-left shadow-glow backdrop-blur-xl"
              initial={prefersReducedMotion ? undefined : { y: 30, opacity: 0 }}
              animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
              exit={prefersReducedMotion ? undefined : { y: 20, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-label">{activeProduct.kana}</p>
                  <h3
                    id={`modal-title-${activeProduct.id}`}
                    className="mt-2 text-3xl font-display tracking-[0.2em]"
                  >
                    {activeProduct.name}
                  </h3>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition-colors duration-300 hover:text-white focus-ring"
                  onClick={() => setActiveProduct(null)}
                >
                  閉じる
                </button>
              </div>
              <p className="mt-6 text-sm text-white/75">
                {activeProduct.tagline}
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/70">
                {activeProduct.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <ul className="mt-6 grid gap-2 text-xs text-white/60">
                {activeProduct.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </RevealSection>
  );
}

