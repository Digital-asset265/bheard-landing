import clsx from "clsx";
import { ReactNode } from "react";

export function GlowCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative w-full h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]",
        // (se tiveres blur no teu design, podes manter)
        "backdrop-blur-xl",
        className
      )}
    >
      {/* glow suave */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.18),transparent_45%)]" />
      </div>

      <div className="relative h-full p-6">
        {children}
      </div>
    </div>
  );
}
