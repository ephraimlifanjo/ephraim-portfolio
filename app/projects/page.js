import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { getContent } from "@/lib/content";

export const metadata = {
  title: "Projects",
  description: "Selected software engineering projects by Ephraim Lifanjo Sewa across web, mobile, business tools and desktop software.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const content = getContent();
  return (
    <section className="section-space min-h-[70svh]">
      <Container>
        <SectionHeading eyebrow={content.copy.projectsPageEyebrow} title={content.copy.projectsPageTitle} description={content.copy.projectsPageDescription} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {content.projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      </Container>
    </section>
  );
}
