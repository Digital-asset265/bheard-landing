import React from "react";

export function OfferCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        [
          // Força o card a poder esticar (quando o grid usar auto-rows-fr)
          "h-full",

          // Wrapper com borda animada (sheen branco em movimento)
          "rounded-[28px] p-[1px]",

          // “White a andar” na borda (não no interior)
          "bg-[linear-gradient(90deg,rgba(255,255,255,.28),rgba(255,255,255,.06),rgba(255,255,255,.28))]",
          "animate-bheardGlow",

          // sem sombra gigante
          "shadow-none",

          className,
        ].join(" ")
      }
    >
      {/* Interior FIXO (roxo), com hover “luz” no card todo */}
      <div
        className={[
          "group relative h-full overflow-hidden rounded-[27px]",
          "bg-[#A855F7]/60", // roxo fixo (ajusta se quiseres mais escuro/claro)
          "border border-white/10",

          // Transição e “luz” ao passar o rato
          "transition duration-300",
          "hover:bg-[#A855F7]/72",
          "hover:border-white/20",
        ].join(" ")}
      >
        {/* Glow interno (só aparece no hover) */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="absolute -inset-24 bg-[radial-gradient(circle,rgba(255,255,255,.22),transparent_60%)]" />
        </div>

        {/* Conteúdo */}
        <div className="relative p-6">{children}</div>
      </div>
    </div>
  );
}
