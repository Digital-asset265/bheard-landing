import { Aurora } from "./components/Aurora";
import { Navbar } from "./components/Navbar";
import { GlowCard } from "./components/GlowCard";
import { OfferCard } from "./components/OfferCard";
import { FeatureSwitcher } from "./components/FeatureSwitcher";
import { GhostButton, Pill, PrimaryButton } from "./components/ui";
import { copy } from "./content";
import { ContactCTA } from "./components/ContactCTA";

type Locale = "pt" | "en";
function getLocale(raw: string | undefined): Locale {
  return raw === "pt" ? "pt" : "en";
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = getLocale(rawLocale);
  const t = copy[locale];

  const appUrl = "https://bheard.online";

  const switcherItems =
    locale === "pt"
      ? [
          {
            key: "pack1",
            title: "AI Voice Receptionist",
            subtitle: "Atende chamadas, responde e capta leads 24/7.",
            bullets: [
              "Atendimento automático de chamadas em segundos, sem deixar o cliente à espera.",
              "Fala com tom natural e profissional, em inglês americano.",
              "Capta nome, telefone, morada e motivo do contacto.",
              "Responde às perguntas básicas do negócio com base na informação da empresa.",
              "Funciona fora de horas, fins de semana e em momentos de pico.",
              "Reduz chamadas perdidas e melhora a primeira impressão da empresa.",
            ],
          },
          {
            key: "pack2",
            title: "Lead Capture System",
            subtitle: "Atende, qualifica e envia tudo para o teu sistema.",
            bullets: [
              "A IA atende e qualifica o cliente antes da equipa entrar em contacto.",
              "Criação automática de lead com dados completos do potencial cliente.",
              "Classificação por urgência, gravidade e tipo de problema.",
              "Notificações em tempo real para o staff quando entra nova lead.",
              "Dashboard simples para acompanhar pedidos e estado dos contactos.",
              "Ideal para empresas onde perder chamadas significa perder dinheiro.",
            ],
          },
          {
            key: "whatsapp",
            title: "Lead Alerts",
            subtitle: "Recebe novos contactos no momento em que entram.",
            bullets: [
              "Notificação imediata quando a IA cria uma nova lead.",
              "A equipa consegue agir rápido enquanto o cliente ainda está quente.",
              "Menos tempo perdido a verificar chamadas não atendidas.",
              "Informação organizada e pronta para follow-up.",
              "Melhor controlo do fluxo de novos pedidos.",
              "Perfeito para equipas comerciais e operacionais.",
            ],
          },
          {
            key: "chatbot",
            title: "Call Qualification",
            subtitle: "Não se limita a atender: filtra e organiza.",
            bullets: [
              "Pergunta o essencial antes de passar a lead à equipa.",
              "Ajuda a distinguir contactos sérios de chamadas pouco relevantes.",
              "Identifica urgência e prioridade logo na chamada.",
              "Reduz tempo desperdiçado pelo staff em contactos mal qualificados.",
              "Melhora a organização do pipeline logo na origem.",
              "Transforma chamadas em informação útil para vender melhor.",
            ],
          },
        ]
      : [
          {
            key: "pack1",
            title: "AI Voice Receptionist",
            subtitle: "Answers calls, responds naturally and captures leads 24/7.",
            bullets: [
              "Answers incoming calls within seconds, without leaving prospects waiting.",
              "Speaks with a natural, professional American-English voice.",
              "Captures name, phone number, address and reason for the call.",
              "Answers basic business questions using the company’s information.",
              "Works after hours, on weekends and during peak periods.",
              "Reduces missed calls and improves the first impression of your company.",
            ],
          },
          {
            key: "pack2",
            title: "Lead Capture System",
            subtitle: "Answers, qualifies and sends everything into your system.",
            bullets: [
              "AI answers and qualifies the caller before your team steps in.",
              "Automatic lead creation with the caller’s key details.",
              "Classifies leads by urgency, severity and problem type.",
              "Real-time notifications when a new lead comes in.",
              "Simple dashboard to track incoming requests and statuses.",
              "Ideal for businesses where missed calls mean lost revenue.",
            ],
          },
          {
            key: "whatsapp",
            title: "Lead Alerts",
            subtitle: "Get notified the moment a new lead comes in.",
            bullets: [
              "Instant alert when the AI creates a new lead.",
              "Your team can act while the prospect is still hot.",
              "Less time wasted checking unanswered calls manually.",
              "Organized information ready for follow-up.",
              "Better control over your incoming lead flow.",
              "Perfect for sales and operations teams.",
            ],
          },
          {
            key: "chatbot",
            title: "Call Qualification",
            subtitle: "It does more than answer — it filters and organizes.",
            bullets: [
              "Collects the key details before handing the lead to your team.",
              "Helps separate serious prospects from lower-value calls.",
              "Identifies urgency and priority during the call itself.",
              "Reduces time wasted on poorly qualified contacts.",
              "Improves pipeline organization from the very first interaction.",
              "Turns phone calls into structured sales-ready data.",
            ],
          },
        ];

  return (
    <main>
      <Aurora />
      <Navbar t={t} locale={locale} variant="floating" appUrl={appUrl} />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-28 pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4">
              <Pill>{t.hero.badge}</Pill>
            </div>

            <h1 className="whitespace-pre-line text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {t.hero.h1}
            </h1>

            <p className="mt-5 text-base text-white/75 md:text-lg">{t.hero.p}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ContactCTA
                locale={locale}
                pack="pack1"
                customLabel={t.hero.ctaPrimary}
              />
              <GhostButton href="#ofertas">{t.hero.ctaSecondary}</GhostButton>
            </div>

            <p className="mt-4 text-sm text-white/60">{t.hero.note}</p>
          </div>

          <div className="grid gap-4">
            <GlowCard>
              <div className="text-xs text-white/60">AI Voice</div>
              <div className="mt-1 text-sm font-semibold">
                {locale === "pt" ? "Atende chamadas por ti" : "Answers calls for you"}
              </div>
              <div className="mt-2 text-xs text-white/60">
                {locale === "pt"
                  ? "Nunca mais deixes chamadas importantes por atender."
                  : "Stop missing high-value calls."}
              </div>
            </GlowCard>

            <GlowCard>
              <div className="text-xs text-white/60">Lead Capture</div>
              <div className="mt-1 text-sm font-semibold">
                {locale === "pt" ? "Criação automática de leads" : "Automatic lead creation"}
              </div>
              <div className="mt-2 text-xs text-white/60">
                {locale === "pt"
                  ? "A chamada transforma-se logo em oportunidade."
                  : "Turn every call into a real opportunity."}
              </div>
            </GlowCard>

            <GlowCard>
              <div className="text-xs text-white/60">24/7</div>
              <div className="mt-1 text-sm font-semibold">
                {locale === "pt" ? "Disponível a qualquer hora" : "Available anytime"}
              </div>
              <div className="mt-2 text-xs text-white/60">
                {locale === "pt"
                  ? "Mesmo fora de horas, a tua empresa continua a atender."
                  : "Your business keeps answering, even after hours."}
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="ofertas" className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {locale === "pt" ? "Oferta principal" : "Primary offer"}
            </h2>
            <p className="mt-2 text-sm text-white/65">
              {locale === "pt"
                ? "Uma solução clara: atender chamadas, qualificar contactos e transformar chamadas em leads."
                : "One clear solution: answer calls, qualify prospects and turn calls into leads."}
            </p>
          </div>
          <Pill>{locale === "pt" ? "1 Serviço • 1 Decisão • 1 CTA" : "1 Service • 1 Decision • 1 CTA"}</Pill>
        </div>

        <div className="mt-6">
          <OfferCard>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="text-sm font-semibold">
                    {locale === "pt" ? "BHeard — AI Voice Receptionist" : "BHeard — AI Voice Receptionist"}
                  </div>
                  <Pill>{locale === "pt" ? "Demo" : "Demo"}</Pill>
                </div>

                <div className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  {locale === "pt"
                    ? "Nunca mais percas uma chamada importante."
                    : "Never miss another important call."}
                </div>

                <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
                  {locale === "pt"
                    ? "A BHeard atende chamadas automaticamente, fala com voz natural, recolhe os dados certos, qualifica o contacto e envia tudo pronto para a tua equipa agir. Ideal para negócios onde cada chamada perdida pode significar dinheiro perdido."
                    : "BHeard answers calls automatically, speaks with a natural voice, captures the right details, qualifies the prospect and sends everything ready for your team to act on. Ideal for businesses where every missed call can mean lost revenue."}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <ContactCTA locale={locale} pack="pack1" />
                  <GhostButton href={`/${locale}#switcher`}>
                    {locale === "pt" ? "Explorar módulos" : "Explore modules"}
                  </GhostButton>
                </div>

                <p className="mt-4 text-xs text-white/55">
                  {locale === "pt"
                    ? "A demo serve para perceber o teu fluxo, mostrar o sistema e ver se faz sentido para o teu negócio."
                    : "The demo is used to understand your workflow, show the system and see whether it fits your business."}
                </p>
              </div>

              <div className="w-full max-w-xl">
                <div className="grid gap-3">
                  {[
                    locale === "pt"
                      ? "Atendimento automático em segundos"
                      : "Automatic call answering within seconds",
                    locale === "pt"
                      ? "Voz natural em inglês americano"
                      : "Natural American-English voice",
                    locale === "pt"
                      ? "Captação de nome, telefone, morada e motivo do contacto"
                      : "Captures name, phone number, address and reason for the call",
                    locale === "pt"
                      ? "Qualificação por urgência, gravidade e tipo de problema"
                      : "Qualification by urgency, severity and problem type",
                    locale === "pt"
                      ? "Criação automática de leads"
                      : "Automatic lead creation",
                    locale === "pt"
                      ? "Disponível 24/7, incluindo fora de horas"
                      : "Available 24/7, including after hours",
                  ].map((x) => (
                    <div
                      key={x}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-sm text-white/80"
                    >
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </OfferCard>
        </div>
      </section>

      {/* SWITCHER */}
      <section id="switcher" className="mx-auto max-w-7xl px-4 pb-12">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {locale === "pt" ? "Explora por módulos" : "Explore modules"}
        </h2>
        <p className="mt-2 text-sm text-white/65">
          {locale === "pt"
            ? "Clica nos cards para ver o detalhe do sistema por partes."
            : "Click the cards to explore the system by module."}
        </p>

        <div className="mt-6">
          <FeatureSwitcher items={switcherItems} initialKey="pack1" />
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t.how.title}</h2>
            <p className="mt-2 text-sm text-white/65">
              {locale === "pt"
                ? "Processo simples: compramos e configuramos o número → ligamos ao sistema → a IA atende → entram leads."
                : "Simple process: we buy and configure the number → connect it to the system → AI answers → leads come in."}
            </p>
          </div>
          <Pill>{locale === "pt" ? "Fast Setup" : "Fast Setup"}</Pill>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {t.how.steps.map((s: any, i: number) => (
            <GlowCard key={s.t}>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/20 text-sm font-semibold text-purple-200">
                  {i + 1}
                </span>
                <div className="text-sm font-semibold">{s.t}</div>
              </div>
              <p className="mt-2 text-sm text-white/70">{s.d}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* SOCIAL */}
      <section id="social" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t.social.title}</h2>
            <p className="mt-2 text-sm text-white/65">{t.social.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {t.social.pills.map((p: string) => (
              <Pill key={p}>{p}</Pill>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3 items-stretch">
          {t.social.cards.map((c: any) => (
            <GlowCard key={c.quote} className="h-full">
              <div className="flex h-full flex-col justify-between">
                <p className="text-sm text-white/80">“{c.quote}”</p>
                <p className="mt-3 text-xs text-white/55">— {c.who}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t.faq.title}</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {t.faq.items.map((f: any) => (
            <GlowCard key={f.q}>
              <div className="text-sm font-semibold">{f.q}</div>
              <p className="mt-2 text-sm text-white/70">{f.a}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} BHeard. {t.footer.rights}
          </div>

          <div className="flex items-center gap-3 text-sm">
            <a className="text-white/70 hover:text-white" href="mailto:hello@bheard.ai">
              {t.footer.contact}
            </a>
            <a className="text-white/70 hover:text-white" href={appUrl}>
              {t.nav.cta}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}