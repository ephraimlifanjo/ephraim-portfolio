import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <article className="project-card group relative overflow-hidden rounded-[2rem] border border-base-content/10 bg-base-200/45 p-3" data-reveal>
      <Link href={`/projects/${project.slug}`} className="block rounded-[1.55rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <div className="relative aspect-[16/11] overflow-hidden rounded-[1.55rem] bg-base-300">
          <Image
            src={project.coverImage}
            alt={`${project.title} project cover`}
            fill
            priority={index < 2}
            className={`${project.coverFit === "contain" ? "object-contain p-8" : "object-cover"} transition duration-500 group-hover:scale-[1.025]`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-4">
            <span className="badge border-white/15 bg-black/55 text-white backdrop-blur-md">{project.year}</span>
            <span className="grid size-10 place-items-center rounded-full bg-white text-black shadow-lg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-base-content/45">
            <span>{project.category}</span><span aria-hidden="true">/</span><span>{project.status}</span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{project.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-base-content/60 sm:text-base">{project.shortDescription}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => <span className="badge badge-outline border-base-content/15 text-base-content/65" key={tech}>{tech}</span>)}
          </div>
        </div>
      </Link>
    </article>
  );
}
