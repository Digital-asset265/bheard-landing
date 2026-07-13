"use client";

import { useMemo } from "react";
import { PrimaryButton, GhostButton, Pill } from "./ui";

type Props = {
  open: boolean;
  onClose: () => void;

  // Ex.: "Pack 1 — Site Premium"
  title: string;

  // Ex.: "No Pack 1, respondemos rápido..."
  subtitle: string;

  // Telefone em formato internacional SEM + e SEM espaços: "3519XXXXXXXX"
  whatsappPhone: string;

  // Ex.: "hello@bheard.ai"
  emailTo: string;

  // Ex.: "Pack 1 - Pedido"
  emailSubject: string;

  // Mensagem pré-escrita
  message: string;
};

export function ContactModal({
  open,
  onClose,
  title,
  subtitle,
  whatsappPhone,
  emailTo,
  emailSubject,
  message,
}: Props) {
  const waLink = useMemo(() => {
    const text = encodeURIComponent(message);
    return `https://wa.me/${whatsappPhone}?text=${text}`;
  }, [whatsappPhone, message]);

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(emailSubject);
    const body = encodeURIComponent(message);
    return `mailto:${emailTo}?subject=${subject}&body=${body}`;
  }, [emailTo, emailSubject, message]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-xl -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <Pill>{title}</Pill>

              <h3 className="text-xl font-semibold text-white">
                Preferes contactar-nos por WhatsApp ou Email?
              </h3>

              <p className="text-sm text-white/65">{subtitle}</p>
            </div>

            <GhostButton onClick={onClose} className="px-4 py-2">
              Fechar
            </GhostButton>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <PrimaryButton
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              WhatsApp
            </PrimaryButton>

            <GhostButton
              onClick={() => {
                // mailto mais fiável assim (evita alguns bloqueios)
                window.location.href = mailtoLink;
              }}
              className="w-full"
            >
              Email
            </GhostButton>
          </div>

          <p className="mt-4 text-xs text-white/45">
            A mensagem vai pré-preenchida para acelerar.
          </p>
        </div>
      </div>
    </div>
  );
}
