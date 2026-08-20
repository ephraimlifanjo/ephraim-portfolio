import "./css/globals.scss";
import { LanguageProvider } from "./components/portfolio/LanguageProvider";

export const metadata = {
  title: "Ephraim Lifanjo Sewa — Full Stack Web & Mobile Developer",
  description: "Portfolio of Ephraim Lifanjo Sewa, a Cameroon-based full stack web and mobile developer, product engineer, co-founder and software consultant.",
  keywords: ["Ephraim Lifanjo", "software engineer Cameroon", "full stack developer", "React Native", "Next.js", "product engineer", "Nova Studio", "Clarvo"],
  openGraph: { title: "Ephraim Lifanjo Sewa — Portfolio", description: "Full Stack Web & Mobile Developer · Product Engineer", type: "website" },
};

export default function RootLayout({children}){
  return <html lang="en"><body><LanguageProvider>{children}</LanguageProvider></body></html>
}
