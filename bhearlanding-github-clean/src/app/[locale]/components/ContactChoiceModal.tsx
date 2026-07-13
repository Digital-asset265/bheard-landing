"use client";

import { useEffect, useMemo } from "react";

type Locale = "pt" | "en";
type Pack = "pack1" | "pack2";

export function ContactChoiceModal({
  open,
  onClose,
  locale,
  pack,
  phoneE164NoPlus,
  email,
}: {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  pack: Pack;
  phoneE164NoPlus: string; // ex: "3519XXXXXXXX" (SEM +)
  email: string; // ex: "hello@bheard.ai"
}) {
  const text = useMemo(() => {
    const isPt = locale === "pt";

    const opener = isPt
      ? `Olá! Gostava de marcar uma demo.`
      : `Hi! I'd like to book a demo.`;

    const bulletsPt =
      "Podem entrar em contacto comigo para vermos como funciona?";

    const bulletsEn =
      "Could you reach out so I can see how it works?";

    return `${opener}\n${isPt ? bulletsPt : bulletsEn}`;
  }, [locale]);

  const waUrl = useMemo(() => {
    const msg = encodeURIComponent(text);
    return `https://wa.me/${phoneE164NoPlus}?text=${msg}`;
  }, [phoneE164NoPlus, text]);

  // Gmail compose
  const gmailUrl = useMemo(() => {
    const isPt = locale === "pt";

    const subject = isPt
      ? "Pedido de Demo — BHeard"
      : "Demo Request — BHeard";

    const body = text;

    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: email,
      su: subject,
      body,
    });

    return `https://mail.google.com/mail/?${params.toString()}`;
  }, [email, locale, text]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const isPt = locale === "pt";

  const title =
    pack === "pack1"
      ? isPt
        ? "Preferes contactar-nos por WhatsApp ou Email?"
        : "Do you prefer WhatsApp or Email?"
      : isPt
      ? "Preferes WhatsApp ou Email para avançar?"
      : "WhatsApp or Email to move forward?";

  const subtitle =
    pack === "pack1"
      ? isPt
        ? "Marca uma demo, entraremos em contacto o mais rápido possível."
        : "Book a demo, we'll be in touch as soon as we can."
      : isPt
      ? "Alinhamos contigo todos os detalhes necessários."
      : "We’ll align everything needed with you.";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* overlay */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/55 backdrop-blur-sm"
      />

      {/* modal */}
      <div className="relative mx-4 w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-none">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/70">
              {isPt ? "Demo — BHeard" : "BHeard Demo"}
            </div>

            <div className="mt-3 text-xl font-semibold text-white">{title}</div>
            <div className="mt-2 text-sm text-white/70">{subtitle}</div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/80 transition hover:bg-white/[0.09] focus:outline-none"
          >
            {isPt ? "Fechar" : "Close"}
          </button>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            style={{ background: "rgba(168,85,247,0.9)" }}
          >
            WhatsApp
          </a>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/[0.09] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}