import Link from "next/link";
import { Download } from "lucide-react";
import Container from "@/components/Container";
import { getContent } from "@/lib/content";

export const metadata = {
  title: "Resume",
  description: "Resume of software engineer Ephraim Lifanjo Sewa.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  const content = getContent();
  return (
    <section className="section-space">
      <Container className="max-w-5xl">
        <div className="flex flex-col gap-6 border-b border-base-content/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="section-kicker">{content.copy.resumePageEyebrow}</p><h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">{content.site.name}</h1><p className="mt-2 text-base-content/60">{content.site.title} · {content.site.location}</p></div>
          <Link href={content.site.resumeUrl} target="_blank" className="btn btn-primary rounded-full"><Download size={17} /> {content.copy.resumeDownloadLabel}</Link>
        </div>
        <div className="mt-10 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <aside><h2 className="section-kicker">Core skills</h2><div className="mt-4 space-y-5">{content.skills.map((group) => <div key={group.category}><h3 className="text-sm font-semibold">{group.category}</h3><p className="mt-1 text-sm leading-6 text-base-content/55">{group.items.join(" · ")}</p></div>)}</div></aside>
          <div className="space-y-12">
            <section><h2 className="text-2xl font-semibold">Experience</h2><div className="mt-5 space-y-6">{content.experience.map((item) => <article key={`${item.organization}-${item.period}`}><div className="flex flex-wrap justify-between gap-2"><h3 className="font-semibold">{item.role} — {item.organization}</h3><span className="font-mono text-xs text-base-content/45">{item.period}</span></div><p className="mt-2 text-sm leading-6 text-base-content/58">{item.description}</p></article>)}</div></section>
            <section><h2 className="text-2xl font-semibold">Education</h2><div className="mt-5 space-y-6">{content.education.map((item) => <article key={item.program}><h3 className="font-semibold">{item.program}</h3><p className="mt-1 text-sm text-base-content/60">{item.school} · {item.period}</p><p className="mt-2 text-sm leading-6 text-base-content/55">{item.description}</p></article>)}</div></section>
          </div>
        </div>
      </Container>
    </section>
  );
}
