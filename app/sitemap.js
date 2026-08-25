export default function sitemap() {
  const base = "https://ephraimlifanjo.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/toolkit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
