const allowedBots = [
  "Googlebot",
  "GoogleOther",
  "Bingbot",
  "DuckDuckBot",
  "Applebot",
  "YandexBot",
  "Baiduspider",
  "Bravebot",
  "Qwantify",
  "Slurp",
  "PetalBot",
  "Sogou web spider",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "YouBot",
  "facebookexternalhit",
  "Twitterbot",
  "LinkedInBot",
  "Discordbot",
  "Slackbot",
  "WhatsApp",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "meta-externalagent",
];

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...allowedBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://ephraimlifanjo.vercel.app/sitemap.xml",
    host: "ephraimlifanjo.vercel.app",
  };
}
