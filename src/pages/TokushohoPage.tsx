import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const navItems = [
  { label: "製品", href: `${import.meta.env.BASE_URL}#products` },
  { label: "思想", href: `${import.meta.env.BASE_URL}#philosophy` },
  { label: "仕組み", href: `${import.meta.env.BASE_URL}#showcase` },
  { label: "相談", href: `${import.meta.env.BASE_URL}#cta` },
];

export default function TokushohoPage() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const patternShift = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const glowShift = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const baseUrl = import.meta.env.BASE_URL;

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
        <Header homeHref={baseUrl} navItems={navItems} />
        <main
          id="main"
          className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 pb-24 pt-32"
        >
          <header className="space-y-3">
            <p className="section-label">Legal</p>
            <h1 className="text-3xl font-display tracking-[0.08em] md:text-4xl">
              特定商取引法に基づく表記
            </h1>
            <p className="text-sm text-white/60">
              サブスクリプション型デジタルサービスに関する表記です。
            </p>
          </header>
          <section className="glass-panel rounded-3xl p-6 md:p-10">
            <div className="space-y-6 text-sm text-white/80 md:text-base">
              <div className="space-y-1">
                <p>販売事業者名：&lt;YOUR_BUSINESS_NAME&gt;</p>
                <p>運営責任者：&lt;YOUR_RESPONSIBLE_PERSON&gt;</p>
                <p>所在地：請求があった場合に遅滞なく開示します</p>
                <p>電話番号：請求があった場合に遅滞なく開示します</p>
                <p>メールアドレス：&lt;YOUR_CONTACT_EMAIL&gt;</p>
              </div>
              <div className="space-y-1">
                <p>販売価格：各サービスページに記載</p>
                <p>
                  商品代金以外の必要料金：インターネット接続料金等はお客様のご負担となります
                </p>
              </div>
              <div className="space-y-1">
                <p>支払方法：クレジットカード決済（Stripe）</p>
                <p>支払時期：申込み時に即時決済</p>
              </div>
              <div className="space-y-1">
                <p>商品の引き渡し時期：決済完了後、即時利用可能</p>
              </div>
              <div className="space-y-2">
                <p className="text-white">返品・キャンセルについて：</p>
                <p>
                  デジタルサービスの特性上、決済完了後の返金には原則対応しておりません。
                </p>
                <p>ただし、サービスに重大な不具合がある場合は個別に対応します。</p>
              </div>
              <div className="space-y-2">
                <p className="text-white">動作環境：</p>
                <p>
                  最新のGoogle Chrome / Safari / Edge の各ブラウザでの利用を推奨します。
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
