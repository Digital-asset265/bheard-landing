import Link from "next/link";
import { ReactNode } from "react";

function cx(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

type BtnProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
};

export function PrimaryButton({
  href,
  onClick,
  children,
  className,
  target,
  rel,
  type = "button",
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold " +
    "bg-purple-500/90 text-white " +
    "transition duration-200 hover:bg-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70 " +
    "cursor-pointer select-none";

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a className={cx(base, className)} href={href} target={target} rel={rel}>
          {children}
        </a>
      );
    }
    return (
      <Link className={cx(base, className)} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cx(base, className)}>
      {children}
    </button>
  );
}

export function GhostButton({
  href,
  onClick,
  children,
  className,
  target,
  rel,
  type = "button",
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold " +
    "border border-white/15 bg-white/[0.03] text-white/85 " +
    "transition duration-200 hover:bg-white/[0.06] hover:text-white " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 " +
    "cursor-pointer select-none";

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a className={cx(base, className)} href={href} target={target} rel={rel}>
          {children}
        </a>
      );
    }
    return (
      <Link className={cx(base, className)} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cx(base, className)}>
      {children}
    </button>
  );
}
