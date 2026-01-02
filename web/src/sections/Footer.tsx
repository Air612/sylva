export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            SYLVAN
          </p>
          <p className="text-xs text-white/40">
            © 2026 SYLVAN. 無断転載を禁じます。
          </p>
        </div>
        <div className="flex items-center gap-4">
          {[
            { label: "X", href: "#" },
            { label: "Instagram", href: "#" },
            { label: "Note", href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xs uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:border-white/60 hover:text-white focus-ring"
              aria-label={`${item.label} (ダミーリンク)`}
            >
              <span className="group-hover:text-white">{item.label.slice(0, 1)}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
