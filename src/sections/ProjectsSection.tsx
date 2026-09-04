"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  X,
} from "lucide-react";

import {
  projects,
  profile,
  type Project,
} from "@/data/portfolio";

const colors = {
  bg: "#081412",
  card: "#0D1C19",
  cream: "#F5F1E8",
  gold: "#C7A86B",
  goldHover: "#D8BC82",
  muted: "#9BA8A2",
  subtle: "#65736D",
  line: "rgba(199, 168, 107, 0.14)",
};

/* =========================================================
   CASE STUDY MODAL
   Only used for the FIRST / FEATURED project
========================================================= */

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

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
        bg-[#081412]/90
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
        onClick={(event) => event.stopPropagation()}
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-4xl
          overflow-y-auto
          rounded-2xl
          border
          border-[#C7A86B]/20
          bg-[#0D1C19]/95
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
            border-[#C7A86B]/20
            text-[#9BA8A2]
            transition-all
            duration-300
            hover:border-[#C7A86B]/60
            hover:bg-[#C7A86B]/[0.05]
            hover:text-[#C7A86B]
          "
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {/* Header */}

        <div
          className="
            border-b
            border-[#C7A86B]/10
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
              text-[#C7A86B]
            "
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
              text-[#F5F1E8]
              sm:text-5xl
            "
          >
            {project.title}
            <span className="text-[#C7A86B]">.</span>
          </h2>

          <p className="mt-3 text-sm text-[#C7A86B]">
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
                text-[#C7A86B]
              "
            >
              Overview
            </p>

            <p
              className="
                max-w-3xl
                text-sm
                leading-7
                text-[#9BA8A2]
              "
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
                  border-[#C7A86B]/10
                  py-6
                  sm:grid-cols-[170px_1fr]
                "
              >
                <div className="flex gap-3">
                  <span
                    className="
                      text-[10px]
                      text-[#C7A86B]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-[#F5F1E8]
                    "
                  >
                    {label}
                  </span>
                </div>

                <p
                  className="
                    text-sm
                    leading-7
                    text-[#9BA8A2]
                  "
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
              border-[#C7A86B]/10
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
                text-[#C7A86B]
              "
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
                    border-[#C7A86B]/20
                    bg-[#C7A86B]/[0.03]
                    px-3
                    py-1.5
                    text-xs
                    text-[#9BA8A2]
                  "
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
              border-[#C7A86B]/10
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
                  border-[#C7A86B]/30
                  bg-[#C7A86B]/[0.025]
                  px-5
                  py-3
                  text-sm
                  text-[#F5F1E8]
                  transition-all
                  duration-300
                  hover:border-[#C7A86B]/70
                  hover:bg-[#C7A86B]/[0.08]
                "
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
                  border-[#C7A86B]/60
                  bg-[#C7A86B]/[0.07]
                  px-5
                  py-3
                  text-sm
                  text-[#F5F1E8]
                  transition-all
                  duration-300
                  hover:border-[#D8BC82]
                  hover:bg-[#C7A86B]/[0.13]
                "
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
   FIRST PROJECT STAYS AS CASE STUDY
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
        border-[#C7A86B]/25
        bg-[#0D1C19]/70
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
          border-[#C7A86B]/10
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
          border-[#C7A86B]/10
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
          bg-[#C7A86B]/70
          shadow-[0_0_15px_rgba(199,168,107,0.7)]
        "
      />

      <div
        className="
          relative
          grid
          lg:grid-cols-[1.05fr_0.95fr]
        "
      >
        {/* LEFT */}

        <div className="p-7 sm:p-9 lg:p-10">
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
                text-[#C7A86B]
              "
            >
              Featured Project
            </span>

            <span
              className="
                h-px
                w-8
                bg-[#C7A86B]/40
              "
            />
          </div>

          {/* Number */}

          <div
            className="
              mb-3
              text-[60px]
              font-light
              leading-none
              tracking-[-0.08em]
              text-[#C7A86B]/[0.13]
              sm:text-[68px]
            "
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
              text-[#F5F1E8]
              sm:text-[46px]
            "
          >
            {project.title}
          </h3>

          {/* Category */}

          <p className="mt-4 text-xs text-[#C7A86B]">
            {project.category}
          </p>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-[#9BA8A2]
            "
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
                text-[#C7A86B]
              "
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
                      border-[#C7A86B]/20
                      bg-[#C7A86B]/[0.02]
                      px-3
                      py-1.5
                      text-[9px]
                      text-[#9BA8A2]
                    "
                  >
                    {technology}
                  </span>
                ))}
            </div>
          </div>

          {/* Case Study Button */}

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
              border-[#C7A86B]/55
              bg-[#C7A86B]/[0.04]
              px-5
              py-3
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#F5F1E8]
              transition-all
              duration-300
              hover:border-[#C7A86B]
              hover:bg-[#C7A86B]/[0.10]
            "
          >
            View Case Study

            <ArrowUpRight
              size={15}
              className="text-[#C7A86B]"
            />
          </button>
        </div>

        {/* RIGHT */}

        <div
          className="
            border-t
            border-[#C7A86B]/10
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
          border-[#C7A86B]/25
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#C7A86B]
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
            text-[#C7A86B]
          "
        >
          {label}
        </p>

        <p
          className="
            max-w-xl
            text-sm
            leading-6
            text-[#9BA8A2]
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   NORMAL PROJECT
   SECOND PROJECT AND AFTER
========================================================= */

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
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
        border-t
        border-[#C7A86B]/10
        px-4
        py-7
        transition-all
        duration-300
        hover:bg-[#C7A86B]/[0.025]
        sm:px-6
        sm:py-8
      "
    >
      <div
        className="
          grid
          gap-5
          lg:grid-cols-[55px_1fr_auto]
          lg:items-start
        "
      >
        {/* Number */}

        <span
          className="
            text-xl
            font-light
            tracking-[-0.03em]
            text-[#C7A86B]
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Content */}

        <div className="min-w-0">
          {/* Title */}

          <h3
            className="
              text-lg
              font-medium
              tracking-[-0.02em]
              text-[#F5F1E8]
              transition-colors
              duration-300
              group-hover:text-[#C7A86B]
              sm:text-xl
            "
          >
            {project.title}
          </h3>

          {/* Category */}

          <div className="mt-1 flex items-center gap-3">
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.16em]
                text-[#C7A86B]
              "
            >
              {project.category}
            </span>

            <span
              className="
                hidden
                h-px
                w-4
                bg-[#C7A86B]/20
                sm:block
              "
            />
          </div>

          {/* Description */}

          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              leading-6
              text-[#9BA8A2]
            "
          >
            {project.shortDescription}
          </p>

          {/* Technologies */}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies
              .slice(0, 5)
              .map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-[#C7A86B]/10
                    bg-[#C7A86B]/[0.015]
                    px-2.5
                    py-1
                    text-[8px]
                    text-[#65736D]
                  "
                >
                  {technology}
                </span>
              ))}
          </div>

          {/* Buttons */}

          <div className="mt-5 flex flex-wrap gap-3">
            {/* GitHub */}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-lg
                  border
                  border-[#C7A86B]/30
                  bg-[#C7A86B]/[0.025]
                  px-4
                  py-2.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-[#F5F1E8]
                  transition-all
                  duration-300
                  hover:border-[#C7A86B]/70
                  hover:bg-[#C7A86B]/[0.08]
                "
              >
                <Github
                  size={15}
                  className="text-[#C7A86B]"
                />

                GitHub

                <ArrowUpRight
                  size={13}
                  className="text-[#C7A86B]"
                />
              </a>
            )}

            {/* Live Demo */}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-lg
                  border
                  border-[#C7A86B]/60
                  bg-[#C7A86B]/[0.07]
                  px-4
                  py-2.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-[#F5F1E8]
                  transition-all
                  duration-300
                  hover:border-[#D8BC82]
                  hover:bg-[#C7A86B]/[0.13]
                "
              >
                Live Demo

                <ArrowUpRight
                  size={13}
                  className="text-[#C7A86B]"
                />
              </a>
            )}
          </div>
        </div>

        {/* Arrow */}

        <div
          className="
            hidden
            items-center
            justify-end
            lg:flex
          "
        >
          <ArrowUpRight
            size={18}
            className="
              text-[#C7A86B]/40
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-[#C7A86B]
            "
          />
        </div>
      </div>
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
    projects.find(
      (project) => project.featured
    ) ?? projects[0];

  const remainingProjects = projects.filter(
    (project) =>
      project.id !== featuredProject?.id
  );

  return (
    <>
      <section
        id="projects"
        className="
          relative
          overflow-hidden
          bg-[#081412]
          py-28
          sm:py-36
        "
      >
        {/* Background */}

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
              opacity-25
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
                    bg-[#C7A86B]/40
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
              border-[#C7A86B]/10
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
              border-[#C7A86B]/10
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
              bg-[#C7A86B]/[0.015]
              blur-[140px]
            "
          />
        </div>

        {/* Content */}

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
            className="mb-14 text-center"
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
                  bg-[#C7A86B]/60
                "
              />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-[#C7A86B]
                "
              >
                Selected Work
              </span>

              <span
                className="
                  h-px
                  w-10
                  bg-[#C7A86B]/60
                "
              />
            </div>

            <h2
              className="
                text-5xl
                font-medium
                tracking-[-0.07em]
                text-[#F5F1E8]
                sm:text-6xl
                md:text-7xl
              "
            >
              Projects
              <span className="text-[#C7A86B]">
                .
              </span>
            </h2>
          </motion.header>

          {/* =================================================
              FIRST PROJECT — UNCHANGED CASE STUDY
          ================================================= */}

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

          {/* =================================================
              OTHER PROJECTS
          ================================================= */}

          <div
            className="
              mt-4
              overflow-hidden
              rounded-xl
              border
              border-[#C7A86B]/15
              bg-[#0D1C19]/45
              backdrop-blur-md
            "
          >
            {remainingProjects.map(
              (project, index) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  index={index + 1}
                />
              )
            )}
          </div>

          {/* Explore More */}

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
            className="mt-8 flex justify-center"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-4
                rounded-lg
                border
                border-[#C7A86B]/50
                bg-[#C7A86B]/[0.025]
                px-7
                py-3.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#F5F1E8]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#C7A86B]
                hover:bg-[#C7A86B]/[0.08]
                hover:shadow-[0_0_30px_rgba(199,168,107,0.08)]
              "
            >
              <Github
                size={17}
                className="
                  text-[#C7A86B]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              Explore More on GitHub

              <ArrowUpRight
                size={15}
                className="
                  text-[#C7A86B]
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
                bg-[#C7A86B]/15
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#C7A86B]/50
              "
            />

            <span
              className="
                h-px
                w-16
                bg-[#C7A86B]/15
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CASE STUDY MODAL
          Only opens for first project
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