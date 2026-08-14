"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  ArrowUpRight,
  FileText,
  Database,
  BarChart3,
  BrainCircuit,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { projects, type Project } from "@/data/portfolio";

const COLORS = {
  background: "#211C18",
  surface: "#2A2420",
  surfaceHover: "#302923",
  text: "#F4EFE7",
  secondary: "#B8AEA4",
  muted: "#8E847B",
  accent: "#C96A4A",
  accentHover: "#D77B5B",
  border: "rgba(244,239,231,0.12)",
};

/* =========================================================
   CASE STUDY MODAL
========================================================= */

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const steps = [
    {
      icon: <FileText size={16} />,
      label: "Problem",
      key: "problem" as const,
    },
    {
      icon: <Database size={16} />,
      label: "Data",
      key: "data" as const,
    },
    {
      icon: <BarChart3 size={16} />,
      label: "Analysis",
      key: "analysis" as const,
    },
    {
      icon: <BrainCircuit size={16} />,
      label: "Modeling",
      key: "modeling" as const,
    },
    {
      icon: <FlaskConical size={16} />,
      label: "Evaluation",
      key: "evaluation" as const,
    },
    {
      icon: <CheckCircle2 size={16} />,
      label: "Results",
      key: "results" as const,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#211C18]/90 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border bg-[#2A2420] shadow-2xl"
        style={{ borderColor: COLORS.border }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div
          className="sticky top-0 z-10 flex items-start justify-between border-b bg-[#2A2420]/95 px-6 py-5 backdrop-blur-md"
          style={{ borderColor: COLORS.border }}
        >
          <div>
            <p
              className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: COLORS.accent }}
            >
              Case Study
            </p>

            <h3
              className="text-xl font-bold sm:text-2xl"
              style={{ color: COLORS.text }}
            >
              {project.title}
            </h3>

            <p
              className="mt-2 text-xs"
              style={{ color: COLORS.secondary }}
            >
              {project.category}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition-colors hover:bg-white/5"
            style={{ color: COLORS.secondary }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}

        <div className="space-y-8 p-6 sm:p-8">

          <div>
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: COLORS.accent }}
            >
              Process
            </p>

            <p
              className="text-sm leading-7"
              style={{ color: COLORS.secondary }}
            >
              {project.process}
            </p>
          </div>

          <div className="space-y-7">
            {steps.map((step) => (
              <div key={step.key} className="flex gap-4">
                <div
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: `${COLORS.accent}15`,
                    color: COLORS.accent,
                  }}
                >
                  {step.icon}
                </div>

                <div>
                  <h4
                    className="mb-1.5 text-sm font-semibold"
                    style={{ color: COLORS.text }}
                  >
                    {step.label}
                  </h4>

                  <p
                    className="text-sm leading-7"
                    style={{ color: COLORS.secondary }}
                  >
                    {project[step.key]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}

          <div>
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: COLORS.accent }}
            >
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border px-3 py-1.5 text-xs"
                  style={{
                    borderColor: COLORS.border,
                    color: COLORS.secondary,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}

          <div
            className="flex flex-wrap gap-3 border-t pt-6"
            style={{ borderColor: COLORS.border }}
          >
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
                style={{
                  borderColor: COLORS.border,
                  color: COLORS.text,
                }}
              >
                <Github size={16} />
                GitHub
                <ArrowUpRight size={14} />
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold"
                style={{
                  backgroundColor: COLORS.accent,
                  color: COLORS.text,
                }}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
  side,
  onOpen,
}: {
  project: Project;
  index: number;
  side: "left" | "right";
  onOpen: () => void;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: side === "left" ? -40 : 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      className={`
        relative
        w-full
        md:w-[calc(50%-48px)]
        ${side === "left" ? "md:mr-auto" : "md:ml-auto"}
      `}
    >
      {/* Connector to center line */}

      <div
        className={`
          hidden
          md:block
          absolute
          top-1/2
          w-12
          h-px
          ${side === "left" ? "right-[-48px]" : "left-[-48px]"}
        `}
        style={{
          backgroundColor: COLORS.accent,
          opacity: 0.45,
        }}
      />

      {/* Center Dot */}

      <div
        className={`
          hidden
          md:block
          absolute
          top-1/2
          -translate-y-1/2
          w-3
          h-3
          rounded-full
          border-2
          border-[#211C18]
          z-20
          ${side === "left" ? "right-[-54px]" : "left-[-54px]"}
        `}
        style={{
          backgroundColor: COLORS.accent,
          boxShadow: `0 0 0 4px ${COLORS.accent}18`,
        }}
      />

      {/* Card */}

      <div
        className="
          group
          rounded-2xl
          border
          p-6
          sm:p-7
          transition-all
          duration-300
        "
        style={{
          backgroundColor: COLORS.surface,
          borderColor: COLORS.border,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor =
            COLORS.surfaceHover;

          e.currentTarget.style.borderColor =
            `${COLORS.accent}45`;

          e.currentTarget.style.transform =
            "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor =
            COLORS.surface;

          e.currentTarget.style.borderColor =
            COLORS.border;

          e.currentTarget.style.transform =
            "translateY(0)";
        }}
      >
        {/* Top */}

        <div className="flex items-center justify-between gap-4">
          <span
            className="text-3xl font-light tracking-tight"
            style={{
              color: `${COLORS.text}25`,
            }}
          >
            {number}
          </span>

          <div className="flex items-center gap-2">
            {project.featured && (
              <span
                className="rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider"
                style={{
                  borderColor: `${COLORS.accent}45`,
                  color: COLORS.accent,
                }}
              >
                Featured
              </span>
            )}

            <span
              className="rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider"
              style={{
                backgroundColor: `${COLORS.accent}12`,
                color: COLORS.accent,
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}

        <button
          type="button"
          onClick={onOpen}
          className="mt-7 block w-full text-left"
        >
          <h3
            className="text-xl font-semibold tracking-tight sm:text-2xl"
            style={{ color: COLORS.text }}
          >
            {project.title}
          </h3>

          <p
            className="mt-3 text-sm leading-7"
            style={{ color: COLORS.secondary }}
          >
            {project.shortDescription}
          </p>
        </button>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md border px-2.5 py-1 text-[10px] font-medium"
              style={{
                borderColor: COLORS.border,
                color: COLORS.muted,
              }}
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span
              className="px-1 py-1 text-[10px]"
              style={{
                color: COLORS.muted,
              }}
            >
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Divider */}

        <div
          className="my-6 h-px"
          style={{
            backgroundColor: COLORS.border,
          }}
        />

        {/* Buttons */}

        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{
              color: COLORS.accent,
            }}
          >
            View Case Study
            <ArrowUpRight size={15} />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: COLORS.border,
                color: COLORS.secondary,
              }}
            >
              <Github size={15} />
              GitHub
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PROJECTS SECTION
========================================================= */

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#211C18]
        py-24
        sm:py-32
      "
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* Header */}

        <ScrollReveal className="mb-20 text-center">
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{
              color: COLORS.accent,
            }}
          >
            Selected Work
          </p>

          <h2
            className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl md:text-6xl"
            style={{
              color: COLORS.text,
            }}
          >
            Projects.
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base"
            style={{
              color: COLORS.secondary,
            }}
          >
            A selection of data science and machine learning
            projects built around real problems and practical analysis.
          </p>
        </ScrollReveal>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div className="relative">

          {/* Center Rope */}

          <div
            className="
              hidden
              md:block
              absolute
              left-1/2
              top-0
              bottom-0
              w-px
              -translate-x-1/2
            "
            style={{
              backgroundColor: COLORS.accent,
              opacity: 0.25,
            }}
          />

          {/* Projects */}

          <div className="space-y-10 md:space-y-16">
            {projects.map((project, index) => {
              const side =
                index % 2 === 0
                  ? "left"
                  : "right";

              return (
                <div
                  key={project.id}
                  className="
                    relative
                    flex
                    w-full
                  "
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    side={side}
                    onOpen={() =>
                      setSelectedProject(project)
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom */}

        <ScrollReveal className="mt-16 text-center">
          <div
            className="mx-auto mb-5 h-px max-w-2xl"
            style={{
              backgroundColor: COLORS.border,
            }}
          />

          <span
            className="text-xs"
            style={{
              color: COLORS.muted,
            }}
          >
            {projects.length} Projects
          </span>
        </ScrollReveal>
      </div>

      {/* =====================================================
          MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() =>
              setSelectedProject(null)
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
}