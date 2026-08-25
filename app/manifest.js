export const dynamic = "force-static";

export default function manifest() {
  return {
    id: "/",
    name: "Ephraim Lifanjo — Software Engineer",
    short_name: "Ephraim",
    description: "Personal software engineering portfolio of Ephraim Lifanjo — web, mobile, desktop, architecture and AI integration.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f7f4ee",
    theme_color: "#11110f",
    categories: ["developer", "portfolio", "technology", "software"],
    lang: "en",
    dir: "ltr",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" }],
  };
}
