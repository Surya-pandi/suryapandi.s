import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore full stack projects by Surya Pandi S, built with Next.js, Supabase, modern UI/UX, and production deployment workflows.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const projectCount = String(projects.length).padStart(2, "0");

  return (
    <>
      <section className="page-hero projects-hero">
        <p className="section-kicker light"><span>(02)</span> Project archive - 2026</p>
        <h1>BUILT TO<br /><i>SOLVE THINGS.</i></h1>
        <div className="page-hero-bottom"><p>Recruitment, service, engineering, and portfolio websites built around practical requirements and clear user experiences.</p><span>{projectCount} LIVE PROJECTS</span></div>
      </section>
      <section className="projects-archive section-pad">
        <div className="archive-filter"><span>All projects</span><span>Next.js</span><span>Supabase</span><span>UI/UX</span><span>AI workflows</span></div>
        <div className="project-grid archive-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </section>
    </>
  );
}
