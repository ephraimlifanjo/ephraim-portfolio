import Link from "next/link";
import Container from "@/components/Container";
import { IconByName } from "@/lib/icons";

export default function Footer({ content }) {
  return (
    <footer className="border-t border-base-content/10 py-10 sm:py-14">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-base-content/45">{content.site.title}</p>
            <p className="mt-3 max-w-xl text-2xl font-semibold tracking-[-0.03em]">{content.copy.footerStatement}</p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {content.socials.slice(0, 7).map((social) => (
              <Link
                key={social.label}
                href={social.url}
                className="btn btn-ghost btn-circle btn-sm border border-base-content/10"
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                aria-label={social.label}
                title={social.label}
              >
                <IconByName name={social.icon} size={17} />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-base-content/8 pt-6 text-sm text-base-content/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {content.site.copyright}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/projects" className="link-hover">{content.copy.allProjectsLabel}</Link>
            <Link href="/events" className="link-hover">{content.copy.allEventsLabel}</Link>
            <Link href="/admin/login" className="link-hover">Admin</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
