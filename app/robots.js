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
];

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
