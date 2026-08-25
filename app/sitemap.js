export default function sitemap() {
  const base = "https://ephraimlifanjo.vercel.app";
  const lastModified = new Date("2026-08-25T00:00:00.000Z");

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${base}/ephraim.webp`],
    },
    {
      url: `${base}/toolkit/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
