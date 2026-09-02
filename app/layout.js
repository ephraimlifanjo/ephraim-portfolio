import "./globals.css";
import { site, socials } from "@/data/site";
import { languageAlternates, supportedLocales } from "@/data/i18n";

const title = "Ephraim Lifanjo | Product Engineer, Web, Mobile and AI";
const description = "Ephraim Lifanjo is a Cameroon-based Product Engineer who builds digital products from scratch — product thinking, UX, full-stack web, mobile, backend architecture, payments, deployment and practical AI systems.";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
    template: "%s | Ephraim Lifanjo",
  },
  description,
  keywords: [
    "Ephraim Lifanjo",
    "Ephraim Lifanjo Sewa",
    "product engineer Cameroon",
    "product engineering Cameroon",
    "software engineer Cameroon",
    "full stack developer Cameroon",
    "web developer Cameroon",
    "mobile app developer Cameroon",
    "React Native developer Cameroon",
    "Next.js developer Cameroon",
    "Expo developer Cameroon",
    "Node.js developer Cameroon",
    "product development from scratch",
    "startup product engineer",
    "software architecture",
    "payment API integration",
    "Mobile Money integration",
    "AI integration",
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  publisher: site.fullName,
  category: "technology",
  classification: "Product Engineering Portfolio",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: languageAlternates,
  },
  formatDetection: { email: false, address: false, telephone: false },
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
      url: "/card.png",
      width: 1200,
      height: 630,
      alt: "Ephraim Lifanjo, Product Engineer",
      type: "image/png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@EphraimLifanjo",
    images: ["/card.png"],
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

const sameAs = socials.filter((item) => item.href.startsWith("http")).map((item) => item.href);

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
      jobTitle: "Product Engineer",
      description: "Product Engineer and founder building useful software products from scratch across web, mobile, backend, payments, deployment and AI-enabled workflows.",
      address: { "@type": "PostalAddress", addressCountry: "CM" },
      sameAs,
      knowsAbout: [
        "Product Engineering",
        "Product Development",
        "Software Engineering",
        "Full Stack Development",
        "Product UX",
        "Web Development",
        "Mobile Application Development",
        "Desktop Application Development",
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Firebase",
        "Supabase",
        "Payment APIs",
        "Mobile Money Integration",
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
      name: "Ephraim Lifanjo | Product Engineer",
      description,
      inLanguage: supportedLocales.map((item) => item.code),
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
        <link rel="preload" href="/ephraim.webp" as="image" type="image/webp" />
        <link rel="dns-prefetch" href="https://formsubmit.co" />
      </head>
      <body>{children}</body>
    </html>
  );
}
