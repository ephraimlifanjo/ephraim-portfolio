import { site } from "@/data/site";
import { supportedLocales, localePath } from "@/data/i18n";

export const dynamic = "force-static";

export default function sitemap() {
  const lastModified = new Date("2026-08-25T00:00:00.000Z");
  const languageMap = Object.fromEntries(
    supportedLocales.map((locale) => [locale.code, `${site.url}${localePath(locale.code)}`])
  );

  const pages = [
    {
      url: `${site.url}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${site.url}/ephraim.webp`, `${site.url}/card.png`],
      alternates: { languages: languageMap },
    },
    {
      url: `${site.url}/toolkit/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  for (const locale of supportedLocales) {
    if (locale.code === "en") continue;
    pages.push({
      url: `${site.url}${localePath(locale.code)}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: languageMap },
    });
  }

  return pages;
}
