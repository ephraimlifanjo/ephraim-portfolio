import "./globals.css";
import { site, socials } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ephraim Lifanjo — Software Engineer",
    template: "%s · Ephraim Lifanjo",
  },
  description: "Ephraim Lifanjo is a Cameroon-based software engineer and full-stack web, mobile and desktop developer who builds products from scratch, designs complex architectures and integrates AI into systems.",
  keywords: [
    "Ephraim Lifanjo",
    "Ephraim Lifanjo Sewa",
    "software engineer Cameroon",
    "full stack developer Cameroon",
    "web developer Cameroon",
    "mobile app developer Cameroon",
    "desktop app developer",
    "React developer",
    "Next.js developer",
    "React Native developer",
    "Node.js developer",
    "AI integration",
    "software architecture",
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  publisher: site.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: site.url,
    title: "Ephraim Lifanjo — Software Engineer",
    description: "Full-stack web, mobile & desktop developer · Complex architectures · AI integration.",
    siteName: "Ephraim Lifanjo",
    images: [{ url: "/ephraim.jpg", width: 260, height: 353, alt: "Ephraim Lifanjo" }],
  },
  twitter: {
    card: "summary",
    title: "Ephraim Lifanjo — Software Engineer",
    description: "Full-stack web, mobile & desktop developer · Complex architectures · AI integration.",
    images: ["/ephraim.jpg"],
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  url: site.url,
  image: `${site.url}/ephraim.jpg`,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  jobTitle: "Software Engineer",
  address: { "@type": "PostalAddress", addressCountry: "CM" },
  sameAs: socials.filter((item) => item.href.startsWith("http")).map((item) => item.href),
  knowsAbout: [
    "Software Engineering", "JavaScript", "Python", "C++", "React", "Next.js", "Svelte", "React Native", "Expo", "Node.js", "Express.js", "PostgreSQL", "Firebase", "Mobile Development", "Desktop Development", "Software Architecture", "Artificial Intelligence integration"
  ],
};

const themeBoot = `try{var t=localStorage.getItem('portfolio-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
