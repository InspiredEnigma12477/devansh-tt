type SectionHeadingProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ kicker, title, subtitle, align = "center", light = false }: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClasses}`}>
      {kicker ? (
        <p className={`text-sm font-semibold uppercase tracking-widest ${light ? "text-amber-400" : "text-amber-600"}`}>
          {kicker}
        </p>
      ) : null}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy-950"}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/80" : "text-slate-600"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
