import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, ShoppingBag } from "lucide-react";
import Container from "@/components/Container";
import { getContent, getProjectBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getContent().projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.metaTitle || project.title,
    description: project.metaDescription || project.shortDescription,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.metaTitle || `${project.title} — Ephraim Lifanjo Sewa`,
      description: project.metaDescription || project.shortDescription,
      type: "article",
      images: [{ url: project.socialImage || project.coverImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const videoEmbedUrl = youtubeEmbed(project.videoUrl);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    creator: { "@type": "Person", name: "Ephraim Lifanjo Sewa" },
    url: `${siteUrl}/projects/${project.slug}`,
    image: project.coverImage,
    keywords: project.technologies.join(", "),
  };

  return (
    <article className="pb-24 pt-10 sm:pt-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replaceAll("<", "\\u003c") }} />
      <Container>
        <Link href="/projects" className="btn btn-ghost btn-sm rounded-full -ml-3"><ArrowLeft size={16} /> Back to projects</Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="section-kicker">{project.category} · {project.year}</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-base-content/62">{project.shortDescription}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {project.liveUrl ? <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary rounded-full">Live demo <ExternalLink size={17} /></Link> : null}
            {project.githubUrl ? <Link href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline rounded-full border-base-content/20"><Github size={17} /> Source</Link> : null}
            {project.storeUrl ? <Link href={project.storeUrl} target="_blank" rel="noreferrer" className="btn btn-outline rounded-full border-base-content/20"><ShoppingBag size={17} /> Store</Link> : null}
          </div>
        </div>

        <div className="relative mt-10 aspect-[16/8.6] overflow-hidden rounded-[2.5rem] border border-base-content/10 bg-base-200" data-reveal>
          <Image src={project.coverImage} alt={`${project.title} cover`} fill priority className={project.coverFit === "contain" ? "object-contain p-10 sm:p-16" : "object-cover"} sizes="100vw" />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
          <Meta label="Status" value={project.status} />
          <Meta label="Year" value={project.year} />
          <Meta label="Category" value={project.category} />
          <Meta label="Role" value={project.role} />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <aside data-reveal>
            <p className="section-kicker">Technology</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => <span className="badge badge-outline border-base-content/15" key={tech}>{tech}</span>)}
            </div>
          </aside>
          <div className="space-y-10">
            <CaseSection title="Context" text={project.fullDescription} />
            <CaseSection title="Problem" text={project.problem} />
            <CaseSection title="Solution" text={project.solution} />
            <CaseSection title="My role" text={project.responsibilities} />
            <CaseSection title="Challenges" text={project.challenges} />
            <CaseSection title="Results & learning" text={project.results} />
          </div>
        </div>

        {videoEmbedUrl ? (
          <section className="mt-16" data-reveal>
            <p className="section-kicker">Demo video</p>
            <div className="mt-5 aspect-video overflow-hidden rounded-[2rem] border border-base-content/10 bg-black">
              <iframe
                src={videoEmbedUrl}
                title={`${project.title} demo video`}
                loading="lazy"
                className="h-full w-full"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>
        ) : null}

        {project.gallery?.length ? (
          <section className="mt-16">
            <p className="section-kicker">Visual proof</p>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div key={`${image}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-base-content/10 bg-base-200" data-reveal>
                  <Image src={image} alt={`${project.title} gallery image ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </article>
  );
}

function Meta({ label, value }) {
  return <div className="rounded-[1.5rem] border border-base-content/10 bg-base-200/35 p-5"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-base-content/40">{label}</p><p className="mt-2 text-sm font-semibold">{value}</p></div>;
}

function CaseSection({ title, text }) {
  return <section data-reveal><h2 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h2><p className="mt-4 text-base leading-8 text-base-content/62">{text}</p></section>;
}

function youtubeEmbed(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    const allowed = host === "youtu.be" || host === "youtube.com" || host === "www.youtube.com" || host === "youtube-nocookie.com" || host === "www.youtube-nocookie.com";
    if (!allowed) return null;
    const id = host === "youtu.be" ? parsed.pathname.slice(1) : parsed.searchParams.get("v") || parsed.pathname.split("/").filter(Boolean).pop();
    return id ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}` : null;
  } catch {
    return null;
  }
}
