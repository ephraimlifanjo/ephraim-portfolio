export default function manifest() {
  return {
    name: "Ephraim Lifanjo Sewa — Software Engineer",
    short_name: "Ephraim",
    description: "Software engineering portfolio of Ephraim Lifanjo Sewa.",
    start_url: "/",
    display: "standalone",
    background_color: "#090a0b",
    theme_color: "#c8ff42",
    orientation: "portrait-primary",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
    ]
  };
}
