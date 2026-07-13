import { NextRequest, NextResponse } from "next/server";

const SUPPORTED = ["pt", "en"] as const;
type Locale = (typeof SUPPORTED)[number];

function detectLocale(req: NextRequest): Locale {
  // Geo (Vercel/Edge quando disponível)
  const country = req.headers.get("x-vercel-ip-country");
  if (country === "PT") return "pt";

  // Fallback: Accept-Language
  const al = req.headers.get("accept-language") || "";
  if (al.toLowerCase().startsWith("pt")) return "pt";

  return "en";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignorar assets e rotas internas
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Se já tem locale, segue
  const first = pathname.split("/")[1];
  if (SUPPORTED.includes(first as Locale)) return NextResponse.next();

  // Redirecionar para locale
  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
