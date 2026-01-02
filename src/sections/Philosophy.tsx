import RevealSection from "../components/RevealSection";
import SectionHeading from "../components/SectionHeading";

const pillars = [
  {
    title: "静けさの設計",
    body: "情報量を増やすのではなく、判断に必要な輪郭だけを残す。",
  },
  {
    title: "変化への滑走",
    body: "固定された計画ではなく、現実に合わせて滑らかに更新される導線。",
  },
  {
    title: "余白のある体験",
    body: "操作や学習の負荷を減らし、考える時間を取り戻す。",
  },
];

export default function Philosophy() {
  return (
    <RevealSection
      id="philosophy"
      ariaLabelledby="philosophy-title"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="philosophy-title"
          title="思想"
          subtitle="SYLVAは、ミニマルな設計で意思決定の速度と質を同時に高めます。"
          label="思想 / Philosophy"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-panel rounded-2xl p-6 transition-all duration-700 hover:border-white/30"
            >
              <h3 className="text-xl font-display tracking-[0.15em]">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm text-white/70">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

