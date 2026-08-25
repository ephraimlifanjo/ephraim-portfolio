import { notFound } from "next/navigation";
import PortfolioPage from "@/components/PortfolioPage";
import { site } from "@/data/site";
import { getDictionary, getLocaleInfo, languageAlternates, localeCodes, localePath, supportedLocales } from "@/data/i18n";

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return supportedLocales.filter((item) => item.code !== "en").map((item) => ({ lang: item.code }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!localeCodes.includes(lang) || lang === "en") return {};

  const t = getDictionary(lang);
  const info = getLocaleInfo(lang);
  const canonical = localePath(lang);

  return {
    title: `${site.name} | ${t.role}`,
    description: t.heroLead,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      type: "profile",
      url: `${site.url}${canonical}`,
      title: `${site.name} | ${t.role}`,
      description: t.heroLead,
      siteName: site.name,
      locale: lang,
      images: [{ url: "/card.png", width: 1200, height: 630, alt: `${site.name}, ${t.role}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} | ${t.role}`,
      description: t.heroLead,
      images: ["/card.png"],
    },
    robots: { index: true, follow: true },
    other: {
      "content-language": lang,
      direction: info.dir,
    },
  };
}

export default async function LocalizedHome({ params }) {
  const { lang } = await params;
  if (!localeCodes.includes(lang) || lang === "en") notFound();
  return <PortfolioPage locale={lang} dictionary={getDictionary(lang)} />;
}
