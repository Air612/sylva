import { motion, useReducedMotion } from "framer-motion";
import RevealSection from "../components/RevealSection";
import SectionHeading from "../components/SectionHeading";

const steps = [
  {
    title: "検出",
    body: "入力やログから状況の変化を検出し、判断に必要な情報だけを抽出。",
  },
  {
    title: "整理",
    body: "優先度と制約を可視化し、選択肢を最小の形に整える。",
  },
  {
    title: "判断",
    body: "比較しやすい構図に並べ、意思決定の時間を短縮する。",
  },
  {
    title: "更新",
    body: "進捗やズレを受け止めながら、次の一手へ滑らかに再構成。",
  },
];

export default function Showcase() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <RevealSection
      id="showcase"
      ariaLabelledby="showcase-title"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="showcase-title"
          title="仕組み"
          subtitle="SYLVAの動きは、検出から判断までを一つの流れとしてつなぎます。"
          label="プロセス / Process"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.08,
              }}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-xs uppercase tracking-[0.2em] text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-display tracking-[0.15em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">{step.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

