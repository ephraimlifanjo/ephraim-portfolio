import Link from "next/link";
import {
  FaArrowLeft,
  FaBrain,
  FaCloud,
  FaCode,
  FaCreditCard,
  FaDatabase,
  FaDesktop,
  FaMobileAlt,
  FaMoneyBillWave,
  FaPalette,
  FaPlug,
  FaServer,
} from "react-icons/fa";
import {
  SiArduino,
  SiCloudflare,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiElectron,
  SiExpress,
  SiExpo,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiVercel,
} from "react-icons/si";
import Brand from "@/components/Brand";
import CanvaMark from "@/components/CanvaMark";
import EducationSheet from "@/components/EducationSheet";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import OpenAIMark from "@/components/OpenAIMark";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "Engineering Toolkit",
  description: "Ephraim Lifanjo's engineering toolkit: JavaScript, TypeScript, Python, C++, React, Next.js, Svelte, React Native, Expo, Node.js, Express, NestJS, databases, payment APIs, Mobile Money, cloud, AI and software architecture.",
  alternates: { canonical: "/toolkit/" },
};

export const revalidate = false;

const groups = [
  {
    title: "Languages and foundations",
    emoji: "⌨️",
    icon: FaCode,
    items: [
      ["JavaScript", SiJavascript], ["TypeScript", SiTypescript], ["Python", SiPython], ["C++", SiCplusplus], ["HTML5", SiHtml5], ["CSS3", SiCss], ["Git", SiGit], ["GitHub", SiGithub],
    ],
  },
  {
    title: "Frontend and web",
    emoji: "🌐",
    icon: FaDesktop,
    items: [
      ["React", SiReact], ["Next.js", SiNextdotjs], ["Svelte and SvelteKit", SiSvelte], ["Tailwind CSS", SiTailwindcss], ["daisyUI", FaPalette], ["Responsive UI", FaDesktop],
    ],
  },
  {
    title: "Mobile and desktop",
    emoji: "📱",
    icon: FaMobileAlt,
    items: [
      ["React Native", SiReact], ["Expo", SiExpo], ["Electron", SiElectron], ["Flutter", SiFlutter], ["Kotlin", SiKotlin], ["Unity", SiUnity], ["Arduino and ESP32", SiArduino],
    ],
  },
  {
    title: "Backend and APIs",
    emoji: "⚙️",
    icon: FaServer,
    items: [
      ["Node.js", SiNodedotjs], ["Express", SiExpress], ["NestJS", SiNestjs], ["REST APIs", FaPlug], ["Webhooks", FaPlug], ["Prisma", SiPrisma], ["Auth integrations", FaServer],
    ],
  },
  {
    title: "Payments and Mobile Money",
    emoji: "💳",
    icon: FaCreditCard,
    items: [
      ["Payment APIs", FaCreditCard], ["Mobile Money integration", FaMoneyBillWave], ["MTN Mobile Money", FaMobileAlt], ["Orange Money", FaMobileAlt], ["Payment webhooks", FaPlug], ["Secure callbacks", FaServer],
    ],
  },
  {
    title: "Data and persistence",
    emoji: "🗄️",
    icon: FaDatabase,
    items: [
      ["PostgreSQL", SiPostgresql], ["MySQL", SiMysql], ["SQLite", SiSqlite], ["MongoDB", SiMongodb], ["Firebase", SiFirebase], ["Supabase", SiSupabase], ["Turso", FaDatabase],
    ],
  },
  {
    title: "Cloud, shipping and tooling",
    emoji: "☁️",
    icon: FaCloud,
    items: [
      ["Vercel", SiVercel], ["Cloudflare", SiCloudflare], ["Docker", SiDocker], ["GitHub Actions", SiGithubactions], ["CI and CD", FaCloud], ["Cloudinary", FaCloud],
    ],
  },
  {
    title: "AI and intelligent systems",
    emoji: "🧠",
    icon: FaBrain,
    items: [
      ["OpenAI and ChatGPT", OpenAIMark], ["AI integration", FaBrain], ["OCR", FaBrain], ["Local ML workflows", FaBrain], ["Automation", FaBrain], ["System architecture", FaServer],
    ],
  },
  {
    title: "Product, design and growth",
    emoji: "🎨",
    icon: FaPalette,
    items: [
      ["Figma", SiFigma], ["Canva", CanvaMark], ["UX thinking", FaPalette], ["Accessibility", FaDesktop], ["Technical SEO", FaCode], ["International SEO", FaCode],
    ],
  },
];

export default function ToolkitPage() {
  return (
    <main className="toolkit-page">
      <header className="site-header shell">
        <Brand />
        <div className="nav-links">
          <EducationSheet />
          <LanguageSwitcher currentLocale="en" />
          <ThemeToggle />
        </div>
      </header>

      <section className="toolkit-hero shell">
        <Link className="back-link" href="/"><FaArrowLeft aria-hidden="true" /> Back home</Link>
        <p className="kicker">🧰 Engineering toolkit</p>
        <h1>The tools I use to turn ideas into working systems.</h1>
        <p>
          My stack covers interfaces, mobile and desktop apps, backend APIs, data, payments, Mobile Money, deployment, intelligent features and architecture. I choose tools around the problem, not the other way around.
        </p>
        <div className="toolkit-actions">
          <EducationSheet />
          <a className="btn btn-primary" href="/#collaborate">Build something together ✨</a>
        </div>
      </section>

      <section className="toolkit-grid shell">
        {groups.map((group) => {
          const GroupIcon = group.icon;
          return (
            <article className="tool-card" key={group.title}>
              <div className="tool-card-head"><span>{group.emoji}</span><GroupIcon aria-hidden="true" /></div>
              <h2>{group.title}</h2>
              <div className="tool-items">
                {group.items.map(([name, Icon]) => (
                  <div className="tool-item" key={name}><Icon aria-hidden="true" /><span>{name}</span></div>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section className="toolkit-note shell content-auto">
        <p className="kicker">How I work 🚀</p>
        <h2>Architecture first. Clear interfaces. Practical infrastructure. Ship, learn, improve.</h2>
        <p>I am especially interested in systems that combine web, mobile, backend, offline data, payments, automation and AI without making the product unnecessarily complicated.</p>
      </section>

      <footer className="footer shell"><span>© 2026 Ephraim Lifanjo.</span><Link href="/#collaborate">Collaborate →</Link></footer>
    </main>
  );
}
