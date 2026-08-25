export default function manifest() {
  return {
    name: "Ephraim Lifanjo — Software Engineer",
    short_name: "Ephraim",
    description: "Personal developer portfolio of Ephraim Lifanjo.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ee",
    theme_color: "#11110f",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
