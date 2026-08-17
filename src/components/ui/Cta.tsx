import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-amber-500 text-navy-950 hover:bg-amber-400 focus-visible:outline-amber-500 shadow-lg shadow-amber-500/20",
  secondary:
    "bg-white text-navy-900 hover:bg-slate-50 focus-visible:outline-navy-900 border border-navy-900/15 shadow-sm",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe5b] focus-visible:outline-[#25D366] shadow-lg shadow-[#25D366]/20",
  ghost:
    "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white border border-white/20 backdrop-blur",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-4 text-base",
};

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

/** Shared CTA button. Uses next/link for in-page/internal hrefs, plain anchor for tel:/wa.me/external. */
export function Cta({ href, children, variant = "primary", size = "md", icon, className = "", ...rest }: CtaProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const isExternalProtocol = /^(tel:|https?:)/.test(href) || href.startsWith("mailto:");

  if (isExternalProtocol) {
    const isHttp = href.startsWith("http");
    return (
      <a href={href} className={classes} {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {icon}
      {children}
    </Link>
  );
}
