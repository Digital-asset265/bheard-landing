"use client";

import Link from "next/link";

type Locale = "pt" | "en";

export function Navbar({
  t,
  locale,
  variant = "floating",
  appUrl,
}: {
  t: any;
  locale: Locale;
  variant?: "floating" | "static";
  appUrl: string;
}) {
  const home = `/${locale}`;

  const nav = [
    { href: `${home}#ofertas`, label: t?.nav?.offers ?? (locale === "pt" ? "Ofertas" : "Offers") },
    { href: `${home}#switcher`, label: t?.nav?.product ?? (locale === "pt" ? "Produto" : "Product") },
    { href: `${home}#como`, label: t?.nav?.how ?? (locale === "pt" ? "Como funciona" : "How it works") },
    { href: `${home}#social`, label: t?.nav?.social ?? (locale === "pt" ? "Provas sociais" : "Social proof") },
    { href: `${home}#faq`, label: t?.nav?.faq ?? "FAQ" },
  ];

  const shell =
    variant === "floating"
      ? "fixed top-4 left-0 right-0 z-50"
      : "sticky top-0 z-50";

  return (
    <header className={shell}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            {/* Brand => volta SEMPRE à landing */}
            <Link
              href={home}
              className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              BHeard
            </Link>

            {/* Nav links => SEMPRE /{locale}#secção */}
            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="rounded-2xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  {it.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* Locale switch */}
              <Link
                href={locale === "pt" ? "/en" : "/pt"}
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-white/80 transition hover:bg-white/[0.09] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                {locale === "pt" ? "EN" : "PT"}
              </Link>

              {/* CTA: agora vai para domínio externo */}
              <a
                href="https://bheard.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center justify-center rounded-2xl bg-purple-500/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                {t?.nav?.cta ?? (locale === "pt" ? "Aceder à app" : "Open app")}
              </a>
            </div>
          </div>

          {/* Mobile nav */}
          <div className="border-t border-white/10 px-2 py-2 md:hidden">
            <div className="flex flex-wrap gap-2">
              {nav.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/75 transition hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}