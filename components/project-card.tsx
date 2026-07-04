"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  return (
    <motion.article
      className={`project-card ${featured ? "featured" : ""}`}
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.08, 0.24) }}
    >
      <a
        className="project-media"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        style={{ background: project.color }}
        aria-label={`View ${project.title} live website`}
      >
        <Image src={project.image} alt={`${project.title} website preview`} fill sizes="(max-width: 800px) 100vw, 50vw" />
        <span className="project-number">0{index + 1}</span>
        <span className="project-arrow"><small>View live</small><ArrowUpRight /></span>
      </a>
      <div className="project-meta">
        <div>
          <p>{project.category}</p>
          <h3><a href={project.url} target="_blank" rel="noreferrer">{project.title}</a></h3>
        </div>
        <span>{project.year}</span>
      </div>
      <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      {!featured && (
        <div className="project-details">
          <p className="project-description">{project.description}</p>
          <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        </div>
      )}
    </motion.article>
  );
}
