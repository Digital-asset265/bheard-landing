"use client";

import { useState } from "react";
import { ContactChoiceModal } from "./ContactChoiceModal";

type Locale = "pt" | "en";
type Pack = "pack1" | "pack2";

// ✅ mete aqui o teu número e email reais
const BHEARD_PHONE_E164_NO_PLUS = "351934882793"; // sem "+"
const BHEARD_EMAIL = "BHeard-AI@outlook.com";

export function ContactCTA({
  locale,
  pack,
  customLabel,
}: {
  locale: Locale;
  pack: Pack;
  customLabel?: string;
}) {
  const [open, setOpen] = useState(false);

  const defaultLabel =
    locale === "pt"
      ? pack === "pack1"
        ? "Marcar demo"
        : "Quero o Pack 2"
      : pack === "pack1"
      ? "Book a demo"
      : "Get Pack 2";

  const label = customLabel ?? defaultLabel;

  // botão estilo “Primary”
  const btnClass =
    "inline-flex cursor-pointer items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold text-white " +
    "transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 " +
    "hover:brightness-110 active:brightness-95";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={btnClass}
        style={{ background: "rgba(168,85,247,0.9)" }}
      >
        {label}
      </button>

      <ContactChoiceModal
        open={open}
        onClose={() => setOpen(false)}
        locale={locale}
        pack={pack}
        phoneE164NoPlus={BHEARD_PHONE_E164_NO_PLUS}
        email={BHEARD_EMAIL}
      />
    </>
  );
}