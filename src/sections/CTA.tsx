import { FormEvent } from "react";
import { MagneticButton } from "../components/MagneticButton";
import RevealSection from "../components/RevealSection";
import SectionHeading from "../components/SectionHeading";

export default function CTA() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <RevealSection id="cta" ariaLabelledby="cta-title" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="cta-title"
          title="お問い合わせ"
          subtitle="デモや導入の相談は、ここから。送信はダミーです。"
          label="相談 / Contact"
        />
        <form
          className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8"
          onSubmit={handleSubmit}
          aria-describedby="cta-note"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-white/70" htmlFor="name">
              お名前
              <input
                id="name"
                name="name"
                type="text"
                placeholder="山田 太郎"
                className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus-ring"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-white/70" htmlFor="email">
              メールアドレス
              <input
                id="email"
                name="email"
                type="email"
                placeholder="hello@SYLVA.jp"
                className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus-ring"
                required
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-white/70" htmlFor="message">
            相談内容
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="検討中の課題や導入時期などをご記入ください。"
              className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus-ring"
            />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p id="cta-note" className="text-xs text-white/50">
              このフォームはデモ用です。送信処理は行われません。
            </p>
            <MagneticButton type="submit" variant="primary">
              相談を送る
            </MagneticButton>
          </div>
        </form>
      </div>
    </RevealSection>
  );
}

