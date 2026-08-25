import Link from "next/link";
import {
  FaArrowLeft,
  FaBrain,
  FaCloud,
  FaCode,
  FaDatabase,
  FaDesktop,
  FaMobileAlt,
  FaPalette,
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
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSqlite,
  SiSvelte,
  SiTailwindcss,
  SiUnity,
  SiVercel,
} from "react-icons/si";
import EducationSheet from "@/components/EducationSheet";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "Engineering Toolkit",
  description: "The engineering toolkit of Ephraim Lifanjo: JavaScript, Python, C++, React, Next.js, Svelte, React Native, Expo, Node.js, Express, databases, cloud, AI and product engineering.",
  alternates: { canonical: "/toolkit" },
};

const groups = [
  {
    title: "Languages & foundations",
    emoji: "⌨️",
    icon: FaCode,
    items: [
      ["JavaScript", SiJavascript], ["Python", SiPython], ["C++", SiCplusplus], ["HTML5", SiHtml5], ["CSS3", SiCss], ["Git", SiGit], ["GitHub", SiGithub],
    ],
  },
  {
    title: "Frontend & web",
    emoji: "🌐",
    icon: FaDesktop,
    items: [
      ["React", SiReact], ["Next.js", SiNextdotjs], ["Svelte / SvelteKit", SiSvelte], ["Tailwind CSS", SiTailwindcss],
    ],
  },
  {
    title: "Mobile & desktop",
    emoji: "📱",
    icon: FaMobileAlt,
    items: [
      ["React Native", SiReact], ["Expo", SiExpo], ["Electron", SiElectron], ["Flutter", SiFlutter], ["Kotlin", SiKotlin], ["Unity", SiUnity], ["Arduino / ESP32", SiArduino],
    ],
  },
  {
    title: "Backend & APIs",
    emoji: "⚙️",
    icon: FaServer,
    items: [
      ["Node.js", SiNodedotjs], ["Express", SiExpress], ["REST APIs", FaServer], ["Prisma", SiPrisma],
    ],
  },
  {
    title: "Data & persistence",
    emoji: "🗄️",
    icon: FaDatabase,
    items: [
      ["PostgreSQL", SiPostgresql], ["MySQL", SiMysql], ["SQLite", SiSqlite], ["MongoDB", SiMongodb], ["Firebase", SiFirebase], ["Turso", FaDatabase],
    ],
  },
  {
    title: "Cloud, shipping & tooling",
    emoji: "☁️",
    icon: FaCloud,
    items: [
      ["Vercel", SiVercel], ["Cloudflare", SiCloudflare], ["Docker", SiDocker], ["CI/CD", FaCloud], ["Cloudinary", FaCloud],
    ],
  },
  {
    title: "AI & intelligent systems",
    emoji: "🧠",
    icon: FaBrain,
    items: [
      ["OpenAI / ChatGPT", FaBrain], ["AI integration", FaBrain], ["OCR & local ML workflows", FaBrain], ["Automation", FaBrain], ["System architecture", FaServer],
    ],
  },
  {
    title: "Product & design workflow",
    emoji: "🎨",
    icon: FaPalette,
    items: [
      ["Figma", SiFigma], ["Canva", FaPalette], ["UX thinking", FaPalette], ["Responsive design", FaDesktop], ["SEO", FaCode],
    ],
  },
];

export default function ToolkitPage() {
  return (
    <main className="toolkit-page">
      <header className="site-header shell">
        <Link href="/" className="brand"><span className="brand-mark">EP</span><span>Ephraim.</span></Link>
        <div className="nav-links">
          <EducationSheet />
          <ThemeToggle />
        </div>
      </header>

      <section className="toolkit-hero shell">
        <Link className="back-link" href="/"><FaArrowLeft /> Back home</Link>
        <p className="kicker">🧰 Engineering toolkit</p>
        <h1>The tools I use to turn ideas into working systems.</h1>
        <p>
          My stack spans product interfaces, mobile and desktop apps, backend APIs, data, deployment, intelligent features and architecture. I choose tools around the problem — not the other way around.
        </p>
        <div className="toolkit-actions">
          <EducationSheet />
          <a className="btn btn-primary" href="mailto:ephraimlifanjos@gmail.com?subject=Tech%20collaboration%20with%20Ephraim">Build something together ✨</a>
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

      <section className="toolkit-note shell">
        <p className="kicker">How I work 🚀</p>
        <h2>Architecture first. Clear interfaces. Practical infrastructure. Ship, learn, improve.</h2>
        <p>I’m especially interested in systems that combine web, mobile, backend, offline data, automation and AI without making the product unnecessarily complicated.</p>
      </section>

      <footer className="footer shell"><span>© 2026 Ephraim Lifanjo.</span><Link href="/#collaborate">Collaborate →</Link></footer>
    </main>
  );
}
