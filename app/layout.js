import "./globals.css";

export const metadata = {
  title: {
    default: "Ephraim Lifanjo — Software Engineer",
    template: "%s · Ephraim Lifanjo",
  },
  description: "Personal website of Ephraim Lifanjo Sewa, a software engineer and full-stack web and mobile developer based in Cameroon.",
  keywords: [
    "Ephraim Lifanjo",
    "Ephraim Lifanjo Sewa",
    "software engineer Cameroon",
    "full-stack developer Cameroon",
    "web developer Cameroon",
    "mobile developer Cameroon",
    "Next.js developer",
    "React Native developer",
  ],
  authors: [{ name: "Ephraim Lifanjo Sewa" }],
  creator: "Ephraim Lifanjo Sewa",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ephraim Lifanjo — Software Engineer",
    description: "Software engineer building useful web and mobile products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Ephraim Lifanjo — Software Engineer",
    description: "Software engineer building useful web and mobile products.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f5ef",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
