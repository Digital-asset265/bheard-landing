import { Aurora } from "../components/Aurora";
import { Navbar } from "../components/Navbar";
import { Pill, PrimaryButton, GhostButton } from "../components/ui";
import { copy } from "../content";

type Locale = "pt" | "en";
function getLocale(raw: string | undefined): Locale {
  return raw === "en" ? "en" : "pt";
}

export default async function AppPlaceholderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = getLocale(rawLocale);
  const t = copy[locale];

  // ✅ CTA da navbar aponta para ESTA página
  const appUrl = `/${locale}/app`;
  const home = `/${locale}`;

  const title =
    locale === "pt"
      ? "Estamos a desenvolver algo diferente."
      : "We’re building something different.";

  const subtitle =
    locale === "pt"
      ? "Neste momento estamos a desenvolver uma solução com Agentes IA. Aguarda — vem aí o melhor."
      : "We’re currently building an AI Agents solution. Stay tuned — the best is coming.";

  return (
    <main>
      <Aurora />
      <Navbar t={t} locale={locale} variant="floating" appUrl={appUrl} />

      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-4 pt-28 pb-16">
        <div className="w-full">
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-center">
            <div className="mb-4 flex justify-center">
              <Pill>{locale === "pt" ? "App em desenvolvimento" : "App in development"}</Pill>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {title}
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 md:text-base">
              {subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton href={`${home}#ofertas`}>
                {locale === "pt" ? "Ver ofertas" : "See offers"}
              </PrimaryButton>

              <GhostButton href={home}>
                {locale === "pt" ? "Voltar à página principal" : "Back to home"}
              </GhostButton>
            </div>

            <p className="mt-5 text-xs text-white/55">
              {locale === "pt"
                ? "Se carregares em BHeard ou em qualquer item do menu, voltas automaticamente à landing."
                : "Click BHeard or any menu item to automatically return to the landing page."}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
