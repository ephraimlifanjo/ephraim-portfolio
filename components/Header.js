import Link from "next/link";
import Container from "@/components/Container";
import ThemeToggle from "@/components/ThemeToggle";
import { getContent } from "@/lib/content";

export default function Header() {
  const content = getContent();
  return (
    <header className="sticky top-0 z-50 border-b border-base-content/8 bg-base-100/82 backdrop-blur-xl supports-[backdrop-filter]:bg-base-100/72">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group inline-flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" aria-label={`${content.site.name} home`}>
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-sm font-black text-primary-content shadow-sm transition-transform group-hover:-rotate-3">EL</span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">{content.site.name.replace(" Sewa", "")}</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {content.navigation.map((item) => (
            <Link key={`${item.href}-${item.label}`} href={item.href} className="btn btn-ghost btn-sm rounded-full font-medium">{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/#contact" className="btn btn-primary btn-sm rounded-full px-4">{content.copy.talkLabel}</Link>
        </div>
      </Container>
    </header>
  );
}
