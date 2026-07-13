import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BHeard — AI Voice Agent + Reservas",
  description:
    "AI voice agent + software para reservas e lista de espera. Automatiza chamadas, aplica regras e reduz no-shows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
