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
    color: "#2563eb",
    items: [
      ["JavaScript", SiJavascript, "#f0b90b"], ["TypeScript", SiTypescript, "#3178c6"], ["Python", SiPython, "#3776ab"], ["C++", SiCplusplus, "#00599c"], ["HTML5", SiHtml5, "#e34f26"], ["CSS3", SiCss, "#1572b6"], ["Git", SiGit, "#f05032"], ["GitHub", SiGithub, "#6e5494"],
    ],
  },
  {
    title: "Frontend and web",
    emoji: "🌐",
    icon: FaDesktop,
    color: "#06b6d4",
    items: [
      ["React", SiReact, "#149eca"], ["Next.js", SiNextdotjs, "#7c3aed"], ["Svelte and SvelteKit", SiSvelte, "#ff3e00"], ["Tailwind CSS", SiTailwindcss, "#06b6d4"], ["daisyUI", FaPalette, "#5a0ef8"], ["Responsive UI", FaDesktop, "#0ea5e9"],
    ],
  },
  {
    title: "Mobile and desktop",
    emoji: "📱",
    icon: FaMobileAlt,
    color: "#7c3aed",
    items: [
      ["React Native", SiReact, "#149eca"], ["Expo", SiExpo, "#8b5cf6"], ["Electron", SiElectron, "#47848f"], ["Flutter", SiFlutter, "#02569b"], ["Kotlin", SiKotlin, "#7f52ff"], ["Unity", SiUnity, "#8b5cf6"], ["Arduino and ESP32", SiArduino, "#00979d"],
    ],
  },
  {
    title: "Backend and APIs",
    emoji: "⚙️",
    icon: FaServer,
    color: "#10b981",
    items: [
      ["Node.js", SiNodedotjs, "#339933"], ["Express", SiExpress, "#64748b"], ["NestJS", SiNestjs, "#e0234e"], ["REST APIs", FaPlug, "#0ea5e9"], ["Webhooks", FaPlug, "#f97316"], ["Prisma", SiPrisma, "#5a67d8"], ["Auth integrations", FaServer, "#7c3aed"],
    ],
  },
  {
    title: "Payments and Mobile Money",
    emoji: "💳",
    icon: FaCreditCard,
    color: "#635bff",
    items: [
      ["Payment APIs", FaCreditCard, "#635bff"], ["Mobile Money integration", FaMoneyBillWave, "#10b981"], ["MTN Mobile Money", FaMobileAlt, "#eab308"], ["Orange Money", FaMobileAlt, "#ff7900"], ["Payment webhooks", FaPlug, "#f97316"], ["Secure callbacks", FaServer, "#2563eb"],
    ],
  },
  {
    title: "Data and persistence",
    emoji: "🗄️",
    icon: FaDatabase,
    color: "#4169e1",
    items: [
      ["PostgreSQL", SiPostgresql, "#4169e1"], ["MySQL", SiMysql, "#4479a1"], ["SQLite", SiSqlite, "#003b57"], ["MongoDB", SiMongodb, "#47a248"], ["Firebase", SiFirebase, "#f59e0b"], ["Supabase", SiSupabase, "#3ecf8e"], ["Turso", FaDatabase, "#16a34a"],
    ],
  },
  {
    title: "Cloud, shipping and tooling",
    emoji: "☁️",
    icon: FaCloud,
    color: "#0ea5e9",
    items: [
      ["Vercel", SiVercel, "#7c3aed"], ["Cloudflare", SiCloudflare, "#f38020"], ["Docker", SiDocker, "#2496ed"], ["GitHub Actions", SiGithubactions, "#2088ff"], ["CI and CD", FaCloud, "#0ea5e9"], ["Cloudinary", FaCloud, "#3448c5"],
    ],
  },
  {
    title: "AI and intelligent systems",
    emoji: "🧠",
    icon: FaBrain,
    color: "#8b5cf6",
    items: [
      ["OpenAI and ChatGPT", OpenAIMark, "#10a37f"], ["AI integration", FaBrain, "#8b5cf6"], ["OCR", FaBrain, "#f97316"], ["Local ML workflows", FaBrain, "#06b6d4"], ["Automation", FaBrain, "#eab308"], ["System architecture", FaServer, "#2563eb"],
    ],
  },
  {
    title: "Product, design and growth",
    emoji: "🎨",
    icon: FaPalette,
    color: "#ec4899",
    items: [
      ["Figma", SiFigma, "#f24e1e"], ["Canva", CanvaMark, "#7d2ae8"], ["UX thinking", FaPalette, "#ec4899"], ["Accessibility", FaDesktop, "#0ea5e9"], ["Technical SEO", FaCode, "#10b981"], ["International SEO", FaCode, "#2563eb"],
    ],
  },
];

export default function ToolkitPage() {
  return (
    <main className="toolkit-page">
      <header className="site-header shell">
        <Brand />
        <div className="nav-links">
          <LanguageSwitcher currentLocale="en" />
          <ThemeToggle />
        </div>
      </header>

      <section className="toolkit-hero shell">
        <Link className="back-link" href="/"><FaArrowLeft aria-hidden="true" style={{ color: "#2563eb" }} /> Back home</Link>
        <p className="kicker">🧰 Engineering toolkit</p>
        <h1>The tools I use to turn ideas into working systems.</h1>
        <p>
          My stack covers interfaces, mobile and desktop apps, backend APIs, data, payments, Mobile Money, deployment, intelligent features and architecture. I choose tools around the problem, not the other way around.
        </p>
        <div className="toolkit-actions">
          <a className="btn btn-primary" href="/#collaborate">Build something together ✨</a>
        </div>
      </section>

      <section className="toolkit-grid shell">
        {groups.map((group) => {
          const GroupIcon = group.icon;
          return (
            <article className="tool-card" key={group.title}>
              <div className="tool-card-head">
                <span aria-hidden="true">{group.emoji}</span>
                <GroupIcon aria-hidden="true" style={{ color: group.color }} />
              </div>
              <h2>{group.title}</h2>
              <div className="tool-items">
                {group.items.map(([name, Icon, color]) => (
                  <div className="tool-item" key={name}>
                    <Icon aria-hidden="true" style={{ color }} />
                    <span>{name}</span>
                  </div>
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
