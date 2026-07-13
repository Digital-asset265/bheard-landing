"use client";

import { useMemo, useState } from "react";
import { GlowCard } from "./GlowCard";

type Item = {
  key: string;
  title: string;
  subtitle: string;
  bullets: string[];
};

export function FeatureSwitcher({
  items,
  initialKey,
}: {
  items: Item[];
  initialKey?: string;
}) {
  const firstKey = initialKey ?? items[0]?.key;
  const [active, setActive] = useState<string>(firstKey);

  const current = useMemo(
    () => items.find((i) => i.key === active) ?? items[0],
    [active, items]
  );

  return (
    <div className="grid gap-6">
      {/* Tabs */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {items.map((it) => {
          const isActive = it.key === active;

          const wrapBtn =
            "text-left transition-transform duration-300 hover:scale-[1.01] h-full w-full focus:outline-none focus-visible:outline-none";
          const cardClass = isActive
            ? "h-full ring-1 ring-white/15"
            : "h-full opacity-95 hover:opacity-100";

          return (
            <button
              key={it.key}
              type="button"
              onClick={() => setActive(it.key)}
              className={wrapBtn}
            >
              <GlowCard className={cardClass + " min-h-[112px] flex flex-col justify-between"}>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold leading-snug">
                    {it.title}
                  </div>
                  <span
                    className={
                      "h-2.5 w-2.5 shrink-0 rounded-full " +
                      (isActive ? "bg-purple-300/80" : "bg-white/25")
                    }
                  />
                </div>

                <div className="mt-2 text-xs text-white/65 line-clamp-2">
                  {it.subtitle}
                </div>
              </GlowCard>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <GlowCard className="p-0">
        <div className="p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs text-white/60">Detalhe</div>
              <div className="mt-1 text-2xl font-semibold">{current.title}</div>
              <div className="mt-2 text-sm text-white/70">{current.subtitle}</div>
            </div>
            <div className="text-xs text-white/55">
              Clique nos cards acima para alternar
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {current.bullets.map((b) => (
              <div
                key={b}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/80 transition duration-300 hover:bg-white/[0.07]"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </GlowCard>
    </div>
  );
}