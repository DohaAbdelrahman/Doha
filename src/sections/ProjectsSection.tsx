"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  X,
} from "lucide-react";

import { projects, type Project } from "@/data/portfolio";

const PROJECTS_PER_PAGE = 6;

const colors = {
  bg: "#07100D",
  cream: "#F5F3EC",
  olive: "#A7B68D",
  muted: "#8D9489",
  border: "rgba(167, 182, 141, 0.20)",
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
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
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
          shadow-[0_30px_100px_rgba(0,0,0,.55)]
          backdrop-blur-2xl
        "
      >
        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[#A7B68D]/20
            text-[#8D9489]
            transition
            hover:border-[#A7B68D]/60
            hover:text-[#A7B68D]
          "
        >
          <X size={18} />
        </button>

        <div
          className="
            border-b
            border-[#A7B68D]/10
            px-6
            py-8
            sm:px-10
          "
        >
          <p
            className="
              mb-4
              text-[10px]
              uppercase
              tracking-[0.3em]
            "
            style={{ color: colors.olive }}
          >
            Case Study
          </p>

          <h2
            className="
              pr-12
              text-3xl
              font-medium
              tracking-[-0.04em]
              sm:text-5xl
            "
            style={{ color: colors.cream }}
          >
            {project.title}
            <span style={{ color: colors.olive }}>
              .
            </span>
          </h2>

          <p
            className="mt-3 text-sm"
            style={{ color: colors.olive }}
          >
            {project.category}
          </p>
        </div>

        <div className="px-6 py-8 sm:px-10">
          <div className="mb-10">
            <p
              className="
                mb-3
                text-[10px]
                uppercase
                tracking-[0.25em]
              "
              style={{ color: colors.olive }}
            >
              Overview
            </p>

            <p
              className="
                max-w-3xl
                text-sm
                leading-7
              "
              style={{ color: colors.muted }}
            >
              {project.shortDescription}
            </p>
          </div>

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
                    style={{ color: colors.olive }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                    "
                    style={{ color: colors.cream }}
                  >
                    {label}
                  </span>
                </div>

                <p
                  className="
                    text-sm
                    leading-7
                  "
                  style={{ color: colors.muted }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-[#A7B68D]/10 pt-7">
            <p
              className="
                mb-4
                text-[10px]
                uppercase
                tracking-[0.25em]
              "
              style={{ color: colors.olive }}
            >
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-[#A7B68D]/20
                    bg-[#A7B68D]/[0.03]
                    px-3
                    py-1.5
                    text-xs
                  "
                  style={{ color: colors.muted }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
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
                  border-[#A7B68D]/25
                  px-5
                  py-3
                  text-sm
                  transition
                  hover:border-[#A7B68D]/70
                  hover:bg-[#A7B68D]/[0.05]
                "
                style={{ color: colors.cream }}
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
                  transition
                  hover:bg-[#A7B68D]/[0.13]
                "
                style={{ color: colors.cream }}
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
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        relative
        overflow-hidden
        rounded-xl
        border
        border-[#A7B68D]/35
        bg-[#0A130F]/60
        backdrop-blur-xl
      "
    >
      {/* Decorative glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-[-120px]
          h-[350px]
          w-[350px]
          rounded-full
          border
          border-[#A7B68D]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-30px]
          top-[-50px]
          h-[220px]
          w-[220px]
          rounded-full
          border
          border-[#A7B68D]/10
        "
      />

      <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}

        <div className="p-7 sm:p-10 lg:p-12">
          <div className="mb-7 flex items-center gap-4">
            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
              "
              style={{ color: colors.olive }}
            >
              Featured Project
            </span>

            <span className="h-px w-8 bg-[#A7B68D]/40" />
          </div>

          <div
            className="
              mb-5
              text-[100px]
              font-light
              leading-none
              tracking-[-0.08em]
            "
            style={{
              color: "rgba(167,182,141,.15)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          <h3
            className="
              max-w-xl
              text-4xl
              font-medium
              uppercase
              leading-[0.95]
              tracking-[-0.045em]
              sm:text-5xl
            "
            style={{ color: colors.cream }}
          >
            {project.title}
          </h3>

          <p
            className="mt-5 text-sm"
            style={{ color: colors.olive }}
          >
            {project.category}
          </p>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
            "
            style={{ color: colors.muted }}
          >
            {project.shortDescription}
          </p>

          <div className="mt-7">
            <p
              className="
                mb-3
                text-[10px]
                uppercase
                tracking-[0.25em]
              "
              style={{ color: colors.olive }}
            >
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies
                .slice(0, 6)
                .map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-[#A7B68D]/25
                      px-3
                      py-1.5
                      text-[10px]
                    "
                    style={{ color: colors.muted }}
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>

          <button
            onClick={onOpen}
            className="
              mt-8
              inline-flex
              items-center
              gap-4
              rounded-lg
              border
              border-[#A7B68D]/60
              bg-[#A7B68D]/[0.05]
              px-6
              py-3.5
              text-xs
              uppercase
              tracking-[0.15em]
              transition-all
              hover:bg-[#A7B68D]/[0.12]
            "
            style={{ color: colors.cream }}
          >
            View Case Study

            <ArrowUpRight
              size={17}
              style={{ color: colors.olive }}
            />
          </button>
        </div>

        {/* Right */}

        <div
          className="
            border-t
            border-[#A7B68D]/10
            p-7
            sm:p-10
            lg:border-l
            lg:border-t-0
            lg:p-12
          "
        >
          <div className="space-y-8">
            <InfoItem
              label="PROBLEM"
              value={project.problem}
            />

            <InfoItem
              label="APPROACH"
              value={project.analysis}
            />

            <InfoItem
              label="RESULT"
              value={project.results}
            />

            <InfoItem
              label="DATA"
              value={project.data}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({
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
          mt-1
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#A7B68D]/30
          text-[#A7B68D]
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#A7B68D]" />
      </div>

      <div>
        <p
          className="
            mb-2
            text-[10px]
            uppercase
            tracking-[0.2em]
          "
          style={{ color: colors.olive }}
        >
          {label}
        </p>

        <p
          className="
            text-sm
            leading-6
          "
          style={{ color: colors.muted }}
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
        group
        grid
        grid-cols-[60px_1fr_auto]
        items-center
        gap-4
        border-t
        border-[#A7B68D]/10
        px-4
        py-7
        transition-all
        duration-300
        hover:bg-[#A7B68D]/[0.025]
        sm:grid-cols-[80px_1fr_auto]
        sm:px-8
      "
    >
      {/* Number */}

      <span
        className="
          text-2xl
          font-light
          tracking-[-0.04em]
          transition-colors
          group-hover:text-[#A7B68D]
        "
        style={{ color: colors.olive }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Content */}

      <button
        onClick={onOpen}
        className="min-w-0 text-left"
      >
        <h3
          className="
            text-lg
            font-medium
            tracking-[-0.025em]
            transition
            group-hover:translate-x-1
            sm:text-xl
          "
          style={{ color: colors.cream }}
        >
          {project.title}
        </h3>

        <p
          className="
            mt-1
            text-xs
          "
          style={{ color: colors.olive }}
        >
          {project.category}
        </p>

        <p
          className="
            mt-2
            hidden
            max-w-xl
            text-xs
            leading-5
            sm:block
          "
          style={{ color: colors.muted }}
        >
          {project.shortDescription}
        </p>
      </button>

      {/* Technologies */}

      <div
        className="
          hidden
          items-center
          gap-2
          lg:flex
        "
      >
        {project.technologies
          .slice(0, 4)
          .map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-[#A7B68D]/20
                px-2.5
                py-1
                text-[9px]
              "
              style={{ color: colors.muted }}
            >
              {tech}
            </span>
          ))}
      </div>

      {/* View */}

      <button
        onClick={onOpen}
        className="
          flex
          items-center
          gap-3
          text-[10px]
          uppercase
          tracking-[0.15em]
        "
        style={{ color: colors.olive }}
      >
        <span className="hidden sm:block">
          View
        </span>

        <span
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[#A7B68D]/40
            transition-all
            group-hover:border-[#A7B68D]
            group-hover:bg-[#A7B68D]/[0.07]
          "
        >
          <ArrowUpRight
            size={15}
            className="
              transition-transform
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </span>
      </button>
    </motion.div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const totalPages = Math.max(
    1,
    Math.ceil(projects.length / PROJECTS_PER_PAGE)
  );

  const startIndex =
    (currentPage - 1) * PROJECTS_PER_PAGE;

  const currentProjects = projects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  const featuredProject = currentProjects[0];

  const remainingProjects =
    currentProjects.slice(1);

  const goPrevious = () => {
    setCurrentPage((page) =>
      page > 1 ? page - 1 : totalPages
    );
  };

  const goNext = () => {
    setCurrentPage((page) =>
      page < totalPages ? page + 1 : 1
    );
  };

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
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">
          {/* Dot grid */}

          <div
            className="
              absolute
              left-[3%]
              top-[8%]
              grid
              grid-cols-5
              gap-5
              opacity-40
            "
          >
            {Array.from({ length: 25 }).map(
              (_, i) => (
                <span
                  key={i}
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

          {/* Orbital circles */}

          <div
            className="
              absolute
              right-[-130px]
              top-[80px]
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
              right-[-70px]
              top-[140px]
              h-[240px]
              w-[240px]
              rounded-full
              border
              border-[#A7B68D]/10
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-[35%]
              h-[500px]
              w-[500px]
              -translate-x-1/2
              rounded-full
              bg-[#A7B68D]/[0.018]
              blur-[140px]
            "
          />
        </div>

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
          {/* =================================================
              HEADER
          ================================================= */}

          <motion.header
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div
              className="
                mb-5
                flex
                items-center
                justify-center
                gap-5
              "
            >
              <span className="h-px w-12 bg-[#A7B68D]/60" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                "
                style={{ color: colors.olive }}
              >
                Selected Work
              </span>

              <span className="h-px w-12 bg-[#A7B68D]/60" />
            </div>

            <h2
              className="
                text-6xl
                font-medium
                tracking-[-0.07em]
                sm:text-7xl
                md:text-8xl
              "
              style={{ color: colors.cream }}
            >
              Projects
              <span style={{ color: colors.olive }}>
                .
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-7
              "
              style={{ color: colors.muted }}
            >
              A collection of data-driven projects
              solving real-world problems with
              analytics, machine learning and insight.
            </p>
          </motion.header>

          {/* =================================================
              FEATURED
          ================================================= */}

          {featuredProject && (
            <FeaturedProject
              project={featuredProject}
              index={startIndex}
              onOpen={() =>
                setSelectedProject(featuredProject)
              }
            />
          )}

          {/* =================================================
              PROJECT LIST
          ================================================= */}

          {remainingProjects.length > 0 && (
            <div
              className="
                mt-4
                overflow-hidden
                rounded-xl
                border
                border-[#A7B68D]/15
                bg-[#08110E]/50
                backdrop-blur-md
              "
            >
              {remainingProjects.map(
                (project, index) => (
                  <ProjectRow
                    key={project.id}
                    project={project}
                    index={startIndex + index + 1}
                    onOpen={() =>
                      setSelectedProject(project)
                    }
                  />
                )
              )}
            </div>
          )}

          {/* =================================================
              PAGINATION
          ================================================= */}

          <div className="mt-8 flex justify-center">
            <div
              className="
                flex
                items-center
                overflow-hidden
                rounded-xl
                border
                border-[#A7B68D]/35
                bg-[#A7B68D]/[0.025]
                backdrop-blur-xl
              "
            >
              <button
                onClick={goPrevious}
                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  transition
                  hover:bg-[#A7B68D]/[0.07]
                "
                style={{ color: colors.olive }}
              >
                <ArrowLeft size={14} />

                <span>Less Than</span>
              </button>

              <span
                className="
                  h-6
                  w-px
                  bg-[#A7B68D]/20
                "
              />

              <span
                className="
                  px-5
                  text-xs
                  tracking-[0.15em]
                "
                style={{ color: colors.cream }}
              >
                {currentPage} / {totalPages}
              </span>

              <span
                className="
                  h-6
                  w-px
                  bg-[#A7B68D]/20
                "
              />

              <button
                onClick={goNext}
                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  transition
                  hover:bg-[#A7B68D]/[0.07]
                "
                style={{ color: colors.olive }}
              >
                <span>More</span>

                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* =================================================
              GITHUB
          ================================================= */}

          <div className="mt-5 flex justify-center">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-[#A7B68D]/45
                bg-[#A7B68D]/[0.025]
                px-6
                py-3.5
                text-[10px]
                uppercase
                tracking-[0.2em]
                transition-all
                duration-300
                hover:border-[#A7B68D]
                hover:bg-[#A7B68D]/[0.08]
              "
              style={{ color: colors.olive }}
            >
              Explore More on GitHub

              <Github size={17} />
            </a>
          </div>

          {/* Bottom decoration */}

          <div
            className="
              mt-20
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-20 bg-[#A7B68D]/15" />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#A7B68D]/50
              "
            />

            <span className="h-px w-20 bg-[#A7B68D]/15" />
          </div>
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