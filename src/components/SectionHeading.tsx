import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export default function SectionHeading({
  id,
  title,
  subtitle,
  label,
  align = "left",
  children,
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center" : "text-left";
  const stackAlign = align === "center" ? "items-center" : "items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClasses} ${stackAlign}`}>
      {label ? <span className="section-label">{label}</span> : null}
      <div className="space-y-3">
        <h2
          id={id}
          className="text-3xl md:text-4xl font-display tracking-[0.08em]"
        >
          {title}
        </h2>
        {subtitle ? (
          <p className="text-sm md:text-base text-white/70 max-w-2xl">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  );
}
