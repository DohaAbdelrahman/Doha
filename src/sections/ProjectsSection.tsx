"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Github,
  ExternalLink,
} from "lucide-react";

import { projects, type Project } from "@/data/portfolio";

/* =========================================================
   COLORS
========================================================= */

const colors = {
  background: "#0F1714",
  cream: "#F5F3EC",
  olive: "#A7B68D",
  sage: "#6B7468",
  taupe: "#B5ADA0",
  line: "rgba(214, 206, 193, 0.12)",
  glass: "rgba(245, 243, 236, 0.018)",
  glassHover: "rgba(167, 182, 141, 0.045)",
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
  const sections = [
    {
      label: "Problem",
      value: project.problem,
    },
    {
      label: "Data",
      value: project.data,
    },
    {
      label: "Process",
      value: project.process,
    },
    {
      label: "Analysis",
      value: project.analysis,
    },
    {
      label: "Modeling",
      value: project.modeling,
    },
    {
      label: "Evaluation",
      value: project.evaluation,
    },
    {
      label: "Results",
      value: project.results,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-[#0F1714]/90
        p-4
        backdrop-blur-xl
      "
      onClick={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.98,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        onClick={(event) => event.stopPropagation()}
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-4xl
          overflow-y-auto
          rounded-2xl
          border
          border-[#D6CEC1]/15
          bg-[#111A16]/95
          shadow-[0_30px_100px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
        "
      >
        {/* Close */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="
            absolute
            right-5
            top-5
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[#D6CEC1]/10
            bg-[#F5F3EC]/[0.025]
            text-[#B5ADA0]
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#A7B68D]/50
            hover:text-[#A7B68D]
          "
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {/* Header */}

        <div
          className="
            border-b
            border-[#D6CEC1]/10
            px-6
            pb-8
            pt-8
            sm:px-10
            sm:pt-10
          "
        >
          <p
            className="
              mb-4
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
            "
            style={{
              color: colors.olive,
            }}
          >
            Case Study
          </p>

          <h3
            className="
              max-w-3xl
              pr-12
              text-3xl
              font-medium
              leading-tight
              tracking-[-0.04em]
              sm:text-4xl
            "
            style={{
              color: colors.cream,
            }}
          >
            {project.title}
            <span style={{ color: colors.olive }}>
              .
            </span>
          </h3>

          <p
            className="mt-3 text-sm"
            style={{
              color: colors.olive,
            }}
          >
            {project.category}
          </p>
        </div>

        {/* Body */}

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {/* Overview */}

          <div className="mb-12">
            <p
              className="
                mb-4
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
              "
              style={{
                color: colors.olive,
              }}
            >
              Overview
            </p>

            <p
              className="
                max-w-3xl
                text-sm
                leading-7
                sm:text-base
              "
              style={{
                color: colors.taupe,
              }}
            >
              {project.shortDescription}
            </p>
          </div>

          {/* Case Study Content */}

          <div>
            {sections.map((section, index) => (
              <div
                key={section.label}
                className="
                  grid
                  gap-4
                  border-t
                  border-[#D6CEC1]/10
                  py-6
                  sm:grid-cols-[170px_1fr]
                "
              >
                <div className="flex items-start gap-3">
                  <span
                    className="
                      text-[10px]
                      tracking-[0.2em]
                    "
                    style={{
                      color: colors.olive,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                    "
                    style={{
                      color: colors.cream,
                    }}
                  >
                    {section.label}
                  </span>
                </div>

                <p
                  className="
                    text-sm
                    leading-7
                  "
                  style={{
                    color: colors.taupe,
                  }}
                >
                  {section.value}
                </p>
              </div>
            ))}
          </div>

          {/* Technologies */}

          <div
            className="
              mt-4
              border-t
              border-[#D6CEC1]/10
              pt-7
            "
          >
            <p
              className="
                mb-4
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
              "
              style={{
                color: colors.olive,
              }}
            >
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-[#D6CEC1]/12
                    bg-[#F5F3EC]/[0.02]
                    px-3
                    py-1.5
                    text-xs
                  "
                  style={{
                    color: colors.taupe,
                  }}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-3
              border-t
              border-[#D6CEC1]/10
              pt-7
            "
          >
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#D6CEC1]/12
                  bg-[#F5F3EC]/[0.02]
                  px-5
                  py-3
                  text-sm
                  transition-all
                  duration-300
                  hover:border-[#A7B68D]/50
                  hover:bg-[#A7B68D]/[0.05]
                "
                style={{
                  color: colors.cream,
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
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#A7B68D]/50
                  bg-[#A7B68D]/[0.07]
                  px-5
                  py-3
                  text-sm
                  transition-all
                  duration-300
                  hover:bg-[#A7B68D]/[0.12]
                "
                style={{
                  color: colors.cream,
                }}
              >
                <ExternalLink size={16} />

                Live Demo

                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   PROJECT ROW
========================================================= */

function ProjectRow({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      className="
        group
        relative
        border-t
        border-[#D6CEC1]/10
        py-8
        transition-all
        duration-500
        sm:py-10
      "
    >
      {/* subtle glass hover layer */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          inset-y-2
          -z-10
          rounded-2xl
          border
          border-transparent
          bg-transparent
          opacity-0
          backdrop-blur-sm
          transition-all
          duration-500
          group-hover:border-[#A7B68D]/15
          group-hover:bg-[#A7B68D]/[0.025]
          group-hover:opacity-100
        "
      />

      <div
        className="
          grid
          items-center
          gap-6
          lg:grid-cols-[70px_minmax(0,1fr)_180px_150px]
          lg:gap-8
        "
      >
        {/* Number */}

        <div className="flex items-center gap-3">
          <span
            className="
              text-xs
              font-medium
              tracking-[0.2em]
              transition-colors
              duration-300
              group-hover:text-[#A7B68D]
            "
            style={{
              color: colors.sage,
            }}
          >
            {number}
          </span>

          <span
            className="
              hidden
              h-px
              w-5
              bg-[#A7B68D]/20
              transition-all
              duration-500
              group-hover:w-8
              group-hover:bg-[#A7B68D]/60
              lg:block
            "
          />
        </div>

        {/* Main Information */}

        <div className="min-w-0">
          <button
            type="button"
            onClick={onOpen}
            className="
              block
              text-left
            "
          >
            <h3
              className="
                text-2xl
                font-medium
                leading-tight
                tracking-[-0.035em]
                transition-all
                duration-400
                group-hover:translate-x-1
                sm:text-3xl
              "
              style={{
                color: colors.cream,
              }}
            >
              {project.title}
              <span
                className="
                  transition-colors
                  duration-300
                  group-hover:text-[#A7B68D]
                "
                style={{
                  color: colors.cream,
                }}
              >
                .
              </span>
            </h3>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
              "
              style={{
                color: colors.sage,
              }}
            >
              {project.shortDescription}
            </p>
          </button>
        </div>

        {/* Category */}

        <div>
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
            "
            style={{
              color: colors.olive,
            }}
          >
            {project.category}
          </span>

          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
            {project.technologies
              .slice(0, 3)
              .map((technology) => (
                <span
                  key={technology}
                  className="
                    text-[10px]
                  "
                  style={{
                    color: colors.sage,
                  }}
                >
                  {technology}
                </span>
              ))}
          </div>
        </div>

        {/* Action */}

        <div className="lg:text-right">
          <button
            type="button"
            onClick={onOpen}
            className="
              group/action
              inline-flex
              items-center
              gap-3
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
            "
            style={{
              color: colors.taupe,
            }}
          >
            <span
              className="
                border-b
                border-transparent
                pb-1
                transition-all
                duration-300
                group-hover/action:border-[#A7B68D]/60
                group-hover/action:text-[#F5F3EC]
              "
            >
              View Project
            </span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#D6CEC1]/12
                bg-[#F5F3EC]/[0.018]
                transition-all
                duration-300
                group-hover/action:border-[#A7B68D]/50
                group-hover/action:bg-[#A7B68D]/[0.07]
              "
            >
              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover/action:-translate-y-0.5
                  group-hover/action:translate-x-0.5
                "
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile technology line */}

      <div className="mt-6 flex flex-wrap gap-2 lg:hidden">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="
              rounded-full
              border
              border-[#D6CEC1]/10
              bg-[#F5F3EC]/[0.018]
              px-2.5
              py-1
              text-[9px]
            "
            style={{
              color: colors.sage,
            }}
          >
            {technology}
          </span>
        ))}
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
    <>
      <section
        id="projects"
        className="
          relative
          overflow-hidden
          bg-[#0F1714]
          py-28
          sm:py-36
        "
      >
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >
          {/* subtle center glow */}

          <div
            className="
              absolute
              left-1/2
              top-[35%]
              h-[550px]
              w-[550px]
              -translate-x-1/2
              rounded-full
              bg-[#A7B68D]/[0.018]
              blur-[140px]
            "
          />

          {/* Top right dots */}

          <div
            className="
              absolute
              right-[7%]
              top-[12%]
              grid
              grid-cols-5
              gap-4
              opacity-40
            "
          >
            {Array.from({ length: 20 }).map(
              (_, index) => (
                <span
                  key={index}
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-[#A7B68D]/35
                  "
                />
              )
            )}
          </div>

          {/* Bottom orbit */}

          <div
            className="
              absolute
              -bottom-[250px]
              -left-[180px]
              h-[500px]
              w-[500px]
              rounded-full
              border
              border-[#A7B68D]/[0.07]
            "
          />
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            sm:px-10
            lg:px-14
          "
        >
          {/* Header */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
            }}
            className="
              mb-16
              flex
              flex-col
              justify-between
              gap-8
              md:flex-row
              md:items-end
            "
          >
            <div>
              {/* Label */}

              <div
                className="
                  mb-6
                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  className="
                    h-px
                    w-12
                    bg-[#A7B68D]/70
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                  "
                  style={{
                    color: colors.olive,
                  }}
                >
                  Selected Work
                </span>
              </div>

              {/* Title */}

              <h2
                className="
                  text-5xl
                  font-medium
                  tracking-[-0.06em]
                  sm:text-6xl
                  md:text-7xl
                "
                style={{
                  color: colors.cream,
                }}
              >
                Projects
                <span
                  style={{
                    color: colors.olive,
                  }}
                >
                  .
                </span>
              </h2>
            </div>

            {/* Right side */}

            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-[#D6CEC1]/15
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                "
                style={{
                  color: colors.sage,
                }}
              >
                {String(projects.length).padStart(
                  2,
                  "0"
                )}{" "}
                Projects
              </span>
            </div>
          </motion.div>

          {/* =================================================
              PROJECT LIST
          ================================================= */}

          <div
            className="
              border-b
              border-[#D6CEC1]/10
            "
          >
            {projects.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={index}
                onOpen={() =>
                  setSelectedProject(project)
                }
              />
            ))}
          </div>

          {/* Bottom signature */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              mt-8
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
              "
              style={{
                color: colors.sage,
              }}
            >
              Data · Analysis · Machine Learning
            </span>

            <span
              className="
                hidden
                text-[9px]
                uppercase
                tracking-[0.25em]
                sm:block
              "
              style={{
                color: colors.sage,
              }}
            >
              2024 — 2026
            </span>
          </motion.div>
        </div>
      </section>

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
    </>
  );
}