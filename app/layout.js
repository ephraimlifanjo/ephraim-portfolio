import "./globals.css";
import { site, socials } from "@/data/site";

const title = "Ephraim Lifanjo — Software Engineer | Web, Mobile, Desktop & AI";
const description = "Ephraim Lifanjo is a Cameroon-based software engineer building full-stack web, mobile and desktop products, complex software architectures, APIs and practical AI integrations from scratch.";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#11110f" },
  ],
};

export const metadata = {
  metadataBase: new URL(site.url),
  applicationName: "Ephraim Lifanjo Portfolio",
  title: {
    default: title,
    template: "%s · Ephraim Lifanjo",
  },
  description,
  keywords: [
    "Ephraim Lifanjo",
    "Ephraim Lifanjo Sewa",
    "software engineer Cameroon",
    "Cameroon software engineer",
    "full stack developer Cameroon",
    "web developer Cameroon",
    "mobile app developer Cameroon",
    "desktop app developer Cameroon",
    "React developer Cameroon",
    "Next.js developer Cameroon",
    "Svelte developer",
    "React Native developer",
    "Expo developer",
    "Node.js developer",
    "Express.js developer",
    "JavaScript developer",
    "Python developer",
    "C++ developer",
    "PostgreSQL developer",
    "Firebase developer",
    "software architecture",
    "system architecture",
    "AI integration",
    "OpenAI integration",
    "ChatGPT integration",
    "OCR automation",
    "hackathon developer",
    "bootcamp collaborator",
    "Africa software engineer",
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  publisher: site.fullName,
  category: "technology",
  classification: "Software Engineering Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Ephraim Lifanjo",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "profile",
    url: site.url,
    title,
    description,
    siteName: "Ephraim Lifanjo",
    locale: "en_CM",
    images: [{
      url: "/ephraim.webp",
      width: 296,
      height: 402,
      alt: "Ephraim Lifanjo — Software Engineer",
      type: "image/webp",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@EphraimLifanjo",
    images: ["/ephraim.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "CM",
    "geo.placename": "Cameroon",
    "content-language": "en",
    rating: "general",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#11110f",
  },
};

const sameAs = socials
  .filter((item) => item.href.startsWith("http"))
  .map((item) => item.href);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.fullName,
      alternateName: site.name,
      url: site.url,
      image: {
        "@type": "ImageObject",
        url: `${site.url}/ephraim.webp`,
        width: 296,
        height: 402,
      },
      email: `mailto:${site.email}`,
      telephone: site.phone,
      jobTitle: "Software Engineer",
      address: { "@type": "PostalAddress", addressCountry: "CM" },
      sameAs,
      knowsAbout: [
        "Software Engineering",
        "Full-stack Development",
        "Web Development",
        "Mobile Application Development",
        "Desktop Application Development",
        "JavaScript",
        "Python",
        "C++",
        "React",
        "Next.js",
        "Svelte",
        "React Native",
        "Expo",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Firebase",
        "Software Architecture",
        "Artificial Intelligence Integration",
        "OCR",
        "Automation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "Ephraim Lifanjo — Software Engineer",
      description,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      name: title,
      description,
      mainEntity: { "@id": `${site.url}/#person` },
      isPartOf: { "@id": `${site.url}/#website` },
      inLanguage: "en",
    },
  ],
};

const themeBoot = `try{var t=localStorage.getItem('portfolio-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {sameAs.map((href) => <link key={href} rel="me" href={href} />)}
        <link rel="author" href={site.url} />
      </head>
      <body>{children}</body>
    </html>
  );
}
