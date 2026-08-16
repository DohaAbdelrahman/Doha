"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  X,
} from "lucide-react";

import { projects, type Project } from "@/data/portfolio";

const colors = {
  bg: "#07100D",
  card: "#0A130F",
  cream: "#F5F3EC",
  olive: "#A7B68D",
  muted: "#8D9489",
  line: "rgba(167, 182, 141, 0.16)",
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
    ["Problem", project.problem],
    ["Data", project.data],
    ["Process", project.process],
    ["Analysis", project.analysis],
    ["Modeling", project.modeling],
    ["Evaluation", project.evaluation],
    ["Results", project.results],
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-[#07100D]/90
        p-4
        backdrop-blur-xl
      "
      onClick={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.97,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        onClick={(event) =>
          event.stopPropagation()
        }
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-4xl
          overflow-y-auto
          rounded-2xl
          border
          border-[#A7B68D]/20
          bg-[#0C1511]/95
          shadow-[0_30px_100px_rgba(0,0,0,0.55)]
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
            border-[#A7B68D]/20
            text-[#8D9489]
            transition-all
            duration-300
            hover:border-[#A7B68D]/60
            hover:text-[#A7B68D]
          "
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {/* Header */}

        <div
          className="
            border-b
            border-[#A7B68D]/10
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

          <h2
            className="
              pr-12
              text-3xl
              font-medium
              leading-tight
              tracking-[-0.04em]
              sm:text-5xl
            "
            style={{
              color: colors.cream,
            }}
          >
            {project.title}
            <span style={{ color: colors.olive }}>
              .
            </span>
          </h2>

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

        <div className="px-6 py-8 sm:px-10">
          {/* Overview */}

          <div className="mb-10">
            <p
              className="
                mb-3
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
              "
              style={{
                color: colors.muted,
              }}
            >
              {project.shortDescription}
            </p>
          </div>

          {/* Sections */}

          <div>
            {sections.map(([label, value], index) => (
              <div
                key={label}
                className="
                  grid
                  gap-4
                  border-t
                  border-[#A7B68D]/10
                  py-6
                  sm:grid-cols-[170px_1fr]
                "
              >
                <div className="flex gap-3">
                  <span
                    className="text-[10px]"
                    style={{
                      color: colors.olive,
                    }}
                  >
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
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
                    {label}
                  </span>
                </div>

                <p
                  className="
                    text-sm
                    leading-7
                  "
                  style={{
                    color: colors.muted,
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Technologies */}

          <div
            className="
              mt-6
              border-t
              border-[#A7B68D]/10
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
              {project.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-[#A7B68D]/20
                      bg-[#A7B68D]/[0.03]
                      px-3
                      py-1.5
                      text-xs
                    "
                    style={{
                      color: colors.muted,
                    }}
                  >
                    {technology}
                  </span>
                )
              )}
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
              border-[#A7B68D]/10
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
                  border-[#A7B68D]/30
                  bg-[#A7B68D]/[0.025]
                  px-5
                  py-3
                  text-sm
                  transition-all
                  duration-300
                  hover:border-[#A7B68D]/70
                  hover:bg-[#A7B68D]/[0.08]
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
                  border-[#A7B68D]/60
                  bg-[#A7B68D]/[0.07]
                  px-5
                  py-3
                  text-sm
                  transition-all
                  duration-300
                  hover:bg-[#A7B68D]/[0.13]
                "
                style={{
                  color: colors.cream,
                }}
              >
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
   FEATURED PROJECT
========================================================= */

function FeaturedProject({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
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
        margin: "-80px",
      }}
      transition={{
        duration: 0.65,
        ease: "easeOut",
      }}
      className="
        relative
        overflow-hidden
        rounded-xl
        border
        border-[#A7B68D]/25
        bg-[#0A130F]/70
        backdrop-blur-xl
      "
    >
      {/* Background circles */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-28
          h-72
          w-72
          rounded-full
          border
          border-[#A7B68D]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-8
          -top-12
          h-48
          w-48
          rounded-full
          border
          border-[#A7B68D]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-20
          top-20
          h-1.5
          w-1.5
          rounded-full
          bg-[#A7B68D]/70
          shadow-[0_0_15px_rgba(167,182,141,0.7)]
        "
      />

      <div
        className="
          relative
          grid
          lg:grid-cols-[1.05fr_0.95fr]
        "
      >
        {/* =================================================
            LEFT
        ================================================= */}

        <div
          className="
            p-7
            sm:p-9
            lg:p-10
          "
        >
          {/* Label */}

          <div
            className="
              mb-5
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.3em]
              "
              style={{
                color: colors.olive,
              }}
            >
              Featured Project
            </span>

            <span
              className="
                h-px
                w-8
                bg-[#A7B68D]/40
              "
            />
          </div>

          {/* Number */}

          <div
            className="
              mb-3
              text-[82px]
              font-light
              leading-none
              tracking-[-0.08em]
            "
            style={{
              color: "rgba(167,182,141,0.13)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Title */}

          <h3
            className="
              max-w-xl
              text-4xl
              font-medium
              uppercase
              leading-[0.94]
              tracking-[-0.05em]
              sm:text-[46px]
            "
            style={{
              color: colors.cream,
            }}
          >
            {project.title}
          </h3>

          {/* Category */}

          <p
            className="
              mt-4
              text-xs
            "
            style={{
              color: colors.olive,
            }}
          >
            {project.category}
          </p>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-6
            "
            style={{
              color: colors.muted,
            }}
          >
            {project.shortDescription}
          </p>

          {/* Technologies */}

          <div className="mt-6">
            <p
              className="
                mb-3
                text-[9px]
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
              {project.technologies
                .slice(0, 6)
                .map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-[#A7B68D]/20
                      bg-[#A7B68D]/[0.02]
                      px-3
                      py-1.5
                      text-[9px]
                    "
                    style={{
                      color: colors.muted,
                    }}
                  >
                    {technology}
                  </span>
                ))}
            </div>
          </div>

          {/* Button */}

          <button
            type="button"
            onClick={onOpen}
            className="
              mt-7
              inline-flex
              items-center
              gap-4
              rounded-lg
              border
              border-[#A7B68D]/55
              bg-[#A7B68D]/[0.04]
              px-5
              py-3
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              transition-all
              duration-300
              hover:border-[#A7B68D]
              hover:bg-[#A7B68D]/[0.10]
            "
            style={{
              color: colors.cream,
            }}
          >
            View Case Study

            <ArrowUpRight
              size={15}
              style={{
                color: colors.olive,
              }}
            />
          </button>
        </div>

        {/* =================================================
            RIGHT
        ================================================= */}

        <div
          className="
            border-t
            border-[#A7B68D]/10
            p-7
            sm:p-9
            lg:border-l
            lg:border-t-0
            lg:p-10
          "
        >
          <div className="space-y-7">
            <FeaturedInfo
              label="Problem"
              value={project.problem}
            />

            <FeaturedInfo
              label="Approach"
              value={project.analysis}
            />

            <FeaturedInfo
              label="Result"
              value={project.results}
            />

            <FeaturedInfo
              label="Data"
              value={project.data}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   FEATURED INFO
========================================================= */

function FeaturedInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <div
        className="
          mt-0.5
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#A7B68D]/25
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#A7B68D]
          "
        />
      </div>

      <div>
        <p
          className="
            mb-2
            text-[9px]
            font-medium
            uppercase
            tracking-[0.25em]
          "
          style={{
            color: colors.olive,
          }}
        >
          {label}
        </p>

        <p
          className="
            max-w-xl
            text-sm
            leading-6
          "
          style={{
            color: colors.muted,
          }}
        >
          {value}
        </p>
      </div>
    </div>
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
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-40px",
      }}
      transition={{
        duration: 0.45,
      }}
      className="
        group
        grid
        grid-cols-[50px_1fr_auto]
        items-center
        gap-4
        border-t
        border-[#A7B68D]/10
        px-4
        py-6
        transition-all
        duration-300
        hover:bg-[#A7B68D]/[0.025]
        sm:grid-cols-[65px_1fr_auto]
        sm:px-6
        sm:py-7
      "
    >
      {/* Number */}

      <span
        className="
          text-xl
          font-light
          tracking-[-0.03em]
          transition-colors
          group-hover:text-[#A7B68D]
        "
        style={{
          color: colors.olive,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Content */}

      <button
        type="button"
        onClick={onOpen}
        className="
          min-w-0
          text-left
        "
      >
        <h3
          className="
            truncate
            text-base
            font-medium
            tracking-[-0.02em]
            transition-transform
            duration-300
            group-hover:translate-x-1
            sm:text-lg
          "
          style={{
            color: colors.cream,
          }}
        >
          {project.title}
        </h3>

        <div className="mt-1 flex items-center gap-3">
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.16em]
            "
            style={{
              color: colors.olive,
            }}
          >
            {project.category}
          </span>

          <span
            className="
              hidden
              h-px
              w-4
              bg-[#A7B68D]/20
              sm:block
            "
          />

          <span
            className="
              hidden
              text-[10px]
              sm:block
            "
            style={{
              color: colors.muted,
            }}
          >
            {project.technologies
              .slice(0, 3)
              .join(" · ")}
          </span>
        </div>
      </button>

      {/* View */}

      <button
        type="button"
        onClick={onOpen}
        className="
          flex
          items-center
          gap-3
          text-[9px]
          uppercase
          tracking-[0.15em]
        "
        style={{
          color: colors.olive,
        }}
      >
        <span className="hidden sm:block">
          View Project
        </span>

        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-[#A7B68D]/30
            transition-all
            duration-300
            group-hover:border-[#A7B68D]
            group-hover:bg-[#A7B68D]/[0.06]
          "
        >
          <ArrowUpRight
            size={14}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </span>
      </button>
    </motion.article>
  );
}

/* =========================================================
   MAIN PROJECTS SECTION
========================================================= */

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const featuredProject =
    projects.find((project) => project.featured) ??
    projects[0];

  const remainingProjects = projects.filter(
    (project) => project.id !== featuredProject?.id
  );

  return (
    <>
      <section
        id="projects"
        className="
          relative
          overflow-hidden
          bg-[#07100D]
          py-28
          sm:py-36
        "
      >
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">
          {/* Dot pattern */}

          <div
            className="
              absolute
              left-[4%]
              top-[8%]
              grid
              grid-cols-5
              gap-5
              opacity-35
            "
          >
            {Array.from({ length: 25 }).map(
              (_, index) => (
                <span
                  key={index}
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-[#A7B68D]/40
                  "
                />
              )
            )}
          </div>

          {/* Right circles */}

          <div
            className="
              absolute
              right-[-120px]
              top-[-100px]
              h-[360px]
              w-[360px]
              rounded-full
              border
              border-[#A7B68D]/10
            "
          />

          <div
            className="
              absolute
              right-[-55px]
              top-[-35px]
              h-[230px]
              w-[230px]
              rounded-full
              border
              border-[#A7B68D]/10
            "
          />

          {/* Center glow */}

          <div
            className="
              absolute
              left-1/2
              top-[45%]
              h-[500px]
              w-[500px]
              -translate-x-1/2
              rounded-full
              bg-[#A7B68D]/[0.015]
              blur-[140px]
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
            max-w-6xl
            px-6
            sm:px-10
          "
        >
          {/* Header */}

          <motion.header
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
              duration: 0.6,
            }}
            className="
              mb-14
              text-center
            "
          >
            <div
              className="
                mb-5
                flex
                items-center
                justify-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-10
                  bg-[#A7B68D]/60
                "
              />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                "
                style={{
                  color: colors.olive,
                }}
              >
                Selected Work
              </span>

              <span
                className="
                  h-px
                  w-10
                  bg-[#A7B68D]/60
                "
              />
            </div>

            <h2
              className="
                text-6xl
                font-medium
                tracking-[-0.07em]
                sm:text-7xl
                md:text-8xl
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
          </motion.header>

          {/* Featured */}

          {featuredProject && (
            <FeaturedProject
              project={featuredProject}
              index={0}
              onOpen={() =>
                setSelectedProject(
                  featuredProject
                )
              }
            />
          )}

          {/* Project list */}

          <div
            className="
              mt-4
              overflow-hidden
              rounded-xl
              border
              border-[#A7B68D]/15
              bg-[#08110E]/45
              backdrop-blur-md
            "
          >
            {remainingProjects.map(
              (project, index) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  index={index + 1}
                  onOpen={() =>
                    setSelectedProject(project)
                  }
                />
              )
            )}
          </div>

          {/* =================================================
              EXPLORE MORE ON GITHUB
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mt-8
              flex
              justify-center
            "
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-4
                rounded-lg
                border
                border-[#A7B68D]/50
                bg-[#A7B68D]/[0.025]
                px-7
                py-3.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#A7B68D]
                hover:bg-[#A7B68D]/[0.08]
                hover:shadow-[0_0_30px_rgba(167,182,141,0.08)]
              "
              style={{
                color: colors.cream,
              }}
            >
              <Github
                size={17}
                className="
                  text-[#A7B68D]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              Explore More on GitHub

              <ArrowUpRight
                size={15}
                className="
                  text-[#A7B68D]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </motion.div>

          {/* Bottom decoration */}

          <div
            className="
              mt-16
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-16
                bg-[#A7B68D]/15
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#A7B68D]/50
              "
            />

            <span
              className="
                h-px
                w-16
                bg-[#A7B68D]/15
              "
            />
          </div>
        </div>
      </section>

      {/* Modal */}

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