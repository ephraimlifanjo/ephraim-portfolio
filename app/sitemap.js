import { getContent } from "@/lib/content";

export default function sitemap() {
  const content = getContent();
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/events`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resume`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ...content.projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: now, changeFrequency: "monthly", priority: project.featured ? 0.85 : 0.7 })),
    ...content.events.map((event) => ({ url: `${base}/events/${event.slug}`, lastModified: new Date(`${event.date}T12:00:00`), changeFrequency: "yearly", priority: 0.6 })),
  ];
}
