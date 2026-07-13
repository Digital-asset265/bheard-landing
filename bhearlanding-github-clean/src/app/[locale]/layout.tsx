export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
