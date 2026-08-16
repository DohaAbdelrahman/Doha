"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Github,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

import { projects, type Project } from "@/data/portfolio";

const COLORS = {
  bg: "#0F1714",
  cream: "#F5F3EC",
  olive: "#A7B68D",
  sage: "#6B7468",
  taupe: "#D6CEC1",
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
        bg-[#0F1714]/90
        p-4
        backdrop-blur-xl
      "
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="
          max-h-[90vh]
          w-full
          max-w-4xl
          overflow-y-auto
          rounded-3xl
          border
          border-[#D6CEC1]/15
          bg-[#111A16]/95
          shadow-[0_30px_100px_rgba(0,0,0,0.5)]
          backdrop-blur-2xl
        "
      >
        {/* Header */}

        <div
          className="
            sticky
            top-0
            z-10
            flex
            items-start
            justify-between
            border-b
            border-[#D6CEC1]/10
            bg-[#111A16]/90
            px-6
            py-6
            backdrop-blur-xl
            sm:px-8
          "
        >
          <div>
            <p
              className="
                mb-3
                text-[10px]
                uppercase
                tracking-[0.3em]
              "
              style={{ color: COLORS.olive }}
            >
              Case Study
            </p>

            <h3
              className="
                max-w-2xl
                text-2xl
                font-medium
                tracking-[-0.04em]
                sm:text-3xl
              "
              style={{ color: COLORS.cream }}
            >
              {project.title}
            </h3>

            <p
              className="mt-2 text-sm"
              style={{ color: COLORS.olive }}
            >
              {project.category}
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#D6CEC1]/15
              text-[#B5ADA0]
              transition-all
              hover:border-[#A7B68D]/50
              hover:text-[#A7B68D]
            "
            aria-label="Close case study"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}

        <div className="space-y-10 p-6 sm:p-8">
          {/* Overview */}

          <div>
            <p
              className="
                mb-3
                text-[10px]
                uppercase
                tracking-[0.25em]
              "
              style={{ color: COLORS.olive }}
            >
              Overview
            </p>

            <p
              className="max-w-3xl text-sm leading-7 sm:text-base"
              style={{ color: COLORS.taupe }}
            >
              {project.shortDescription}
            </p>
          </div>

          {/* Case Study Steps */}

          <div className="space-y-8">
            {steps.map(([label, content], index) => (
              <div
                key={label}
                className="
                  grid
                  gap-4
                  border-t
                  border-[#D6CEC1]/10
                  pt-6
                  sm:grid-cols-[150px_1fr]
                "
              >
                <div className="flex items-start gap-3">
                  <span
                    className="
                      text-xs
                      tracking-[0.2em]
                    "
                    style={{ color: COLORS.olive }}
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                    "
                    style={{ color: COLORS.cream }}
                  >
                    {label}
                  </span>
                </div>

                <p
                  className="
                    text-sm
                    leading-7
                  "
                  style={{ color: COLORS.taupe }}
                >
                  {content}
                </p>
              </div>
            ))}
          </div>

          {/* Technologies */}

          <div
            className="
              border-t
              border-[#D6CEC1]/10
              pt-6
            "
          >
            <p
              className="
                mb-4
                text-[10px]
                uppercase
                tracking-[0.25em]
              "
              style={{ color: COLORS.olive }}
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
                    border-[#D6CEC1]/15
                    bg-[#F5F3EC]/[0.025]
                    px-3
                    py-1.5
                    text-xs
                  "
                  style={{ color: COLORS.taupe }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}

          <div
            className="
              flex
              flex-wrap
              gap-3
              border-t
              border-[#D6CEC1]/10
              pt-6
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
                  border-[#D6CEC1]/15
                  bg-[#F5F3EC]/[0.025]
                  px-5
                  py-3
                  text-sm
                  transition-all
                  hover:border-[#A7B68D]/50
                  hover:bg-[#A7B68D]/[0.06]
                "
                style={{ color: COLORS.cream }}
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
                  bg-[#A7B68D]/[0.08]
                  px-5
                  py-3
                  text-sm
                  transition-all
                  hover:bg-[#A7B68D]/[0.14]
                "
                style={{ color: COLORS.cream }}
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
   SINGLE FULL SCREEN PROJECT
========================================================= */

function ProjectSlide({
  project,
  index,
  total,
  onOpen,
}: {
  project: Project;
  index: number;
  total: number;
  onOpen: () => void;
}) {
  const number = String(index + 1).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");

  return (
    <article
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        border-b
        border-[#D6CEC1]/10
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Huge number */}

        <span
          className="
            absolute
            -left-8
            top-1/2
            -translate-y-1/2
            select-none
            text-[240px]
            font-light
            leading-none
            tracking-[-0.08em]
            text-[#A7B68D]/[0.045]
            sm:text-[330px]
            lg:text-[430px]
          "
        >
          {number}
        </span>

        {/* Orbital circles */}

        <div
          className="
            absolute
            -right-40
            top-1/2
            h-[500px]
            w-[500px]
            -translate-y-1/2
            rounded-full
            border
            border-[#A7B68D]/15
            sm:h-[650px]
            sm:w-[650px]
          "
        />

        <div
          className="
            absolute
            -right-20
            top-1/2
            h-[360px]
            w-[360px]
            -translate-y-1/2
            rounded-full
            border
            border-[#A7B68D]/10
            sm:h-[480px]
            sm:w-[480px]
          "
        />

        {/* Glow */}

        <div
          className="
            absolute
            right-[12%]
            top-1/2
            h-[250px]
            w-[250px]
            -translate-y-1/2
            rounded-full
            bg-[#A7B68D]/[0.025]
            blur-[100px]
          "
        />

        {/* Dots */}

        <div
          className="
            absolute
            right-[8%]
            top-[25%]
            grid
            grid-cols-4
            gap-4
          "
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="
                h-1
                w-1
                rounded-full
                bg-[#A7B68D]/35
              "
            />
          ))}
        </div>

        {/* Small glowing point */}

        <span
          className="
            absolute
            right-[25%]
            top-[34%]
            h-2
            w-2
            rounded-full
            bg-[#A7B68D]
            shadow-[0_0_18px_rgba(167,182,141,0.8)]
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
          w-full
          max-w-7xl
          px-6
          py-28
          sm:px-10
          lg:px-14
        "
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT */}

          <div className="lg:col-span-8">
            {/* Counter */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                mb-8
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  text-sm
                  font-medium
                  tracking-[0.2em]
                "
                style={{ color: COLORS.olive }}
              >
                {number}
              </span>

              <span
                className="
                  h-px
                  w-10
                  bg-[#A7B68D]/40
                "
              />

              <span
                className="
                  text-xs
                  tracking-[0.2em]
                "
                style={{ color: COLORS.sage }}
              >
                / {totalNumber}
              </span>
            </motion.div>

            {/* Category */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.08,
              }}
              className="
                mb-5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
              "
              style={{ color: COLORS.olive }}
            >
              {project.category}
            </motion.p>

            {/* Title */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.12,
                duration: 0.7,
              }}
              className="
                max-w-4xl
                text-5xl
                font-medium
                uppercase
                leading-[0.95]
                tracking-[-0.055em]
                sm:text-6xl
                md:text-7xl
                lg:text-[92px]
              "
              style={{ color: COLORS.cream }}
            >
              {project.title}
              <span style={{ color: COLORS.olive }}>
                .
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
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
                delay: 0.22,
              }}
              className="
                mt-7
                max-w-2xl
                text-sm
                leading-7
                sm:text-base
              "
              style={{ color: COLORS.taupe }}
            >
              {project.shortDescription}
            </motion.p>

            {/* Technologies */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                mt-7
                flex
                max-w-2xl
                flex-wrap
                gap-x-4
                gap-y-2
              "
            >
              {project.technologies.map((tech, i) => (
                <div
                  key={tech}
                  className="flex items-center gap-4"
                >
                  <span
                    className="text-xs"
                    style={{ color: COLORS.sage }}
                  >
                    {tech}
                  </span>

                  {i <
                    project.technologies.length - 1 && (
                    <span
                      className="text-xs"
                      style={{
                        color: COLORS.olive,
                      }}
                    >
                      |
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.38,
              }}
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              <button
                type="button"
                onClick={onOpen}
                className="
                  group
                  inline-flex
                  h-14
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-[#A7B68D]/55
                  bg-[#A7B68D]/[0.06]
                  px-7
                  text-sm
                  font-medium
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#A7B68D]
                  hover:bg-[#A7B68D]/[0.12]
                  hover:shadow-[0_0_30px_rgba(167,182,141,0.1)]
                "
                style={{ color: COLORS.cream }}
              >
                View Case Study

                <ArrowUpRight
                  size={17}
                  className="
                    text-[#A7B68D]
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    h-14
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-[#D6CEC1]/15
                    bg-[#F5F3EC]/[0.02]
                    px-5
                    text-sm
                    transition-all
                    duration-300
                    hover:border-[#A7B68D]/40
                    hover:bg-[#F5F3EC]/[0.05]
                  "
                  style={{ color: COLORS.taupe }}
                >
                  <Github size={17} />

                  GitHub

                  <ArrowUpRight size={14} />
                </a>
              )}
            </motion.div>
          </div>

          {/* RIGHT */}

          <div className="hidden lg:col-span-4 lg:block">
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                relative
                ml-auto
                max-w-[330px]
              "
            >
              {/* Vertical line */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-px
                  bg-[#A7B68D]/20
                "
              />

              <div className="space-y-8 pl-8">
                <div>
                  <span
                    className="
                      mb-2
                      block
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                    "
                    style={{ color: COLORS.olive }}
                  >
                    Problem
                  </span>

                  <p
                    className="
                      text-sm
                      leading-6
                    "
                    style={{ color: COLORS.taupe }}
                  >
                    {project.problem}
                  </p>
                </div>

                <div>
                  <span
                    className="
                      mb-2
                      block
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                    "
                    style={{ color: COLORS.olive }}
                  >
                    Results
                  </span>

                  <p
                    className="
                      text-sm
                      leading-6
                    "
                    style={{ color: COLORS.taupe }}
                  >
                    {project.results}
                  </p>
                </div>

                <div
                  className="
                    border-t
                    border-[#D6CEC1]/10
                    pt-6
                  "
                >
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                    "
                    style={{ color: COLORS.sage }}
                  >
                    Explore
                  </span>

                  <div className="mt-3 flex items-center gap-3">
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#A7B68D]
                        shadow-[0_0_12px_rgba(167,182,141,0.7)]
                      "
                    />

                    <span
                      className="text-xs"
                      style={{ color: COLORS.taupe }}
                    >
                      Case Study {number} /{" "}
                      {totalNumber}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}

      {index < total - 1 && (
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-8
            left-1/2
            hidden
            -translate-x-1/2
            md:block
          "
        >
          <ChevronDown
            size={18}
            strokeWidth={1.3}
            style={{ color: COLORS.olive }}
          />
        </motion.div>
      )}
    </article>
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
          bg-[#0F1714]
        "
      >
        {/* Section intro */}

        <div
          className="
            relative
            flex
            min-h-[55vh]
            items-center
            justify-center
            overflow-hidden
            border-b
            border-[#D6CEC1]/10
            px-6
            py-24
          "
        >
          {/* Decorative orbit */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[350px]
              w-[350px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#A7B68D]/10
              sm:h-[500px]
              sm:w-[500px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[220px]
              w-[220px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#A7B68D]/[0.025]
              blur-[80px]
            "
          />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                mb-6
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
                  bg-[#A7B68D]/70
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                "
                style={{ color: COLORS.olive }}
              >
                Selected Work
              </span>

              <span
                className="
                  h-px
                  w-10
                  bg-[#A7B68D]/70
                "
              />
            </motion.div>

            <motion.h2
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
                delay: 0.1,
              }}
              className="
                text-6xl
                font-medium
                tracking-[-0.06em]
                sm:text-7xl
                md:text-8xl
              "
              style={{ color: COLORS.cream }}
            >
              Projects
              <span style={{ color: COLORS.olive }}>
                .
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
                mx-auto
                mt-5
                max-w-lg
                text-sm
                leading-7
              "
              style={{ color: COLORS.sage }}
            >
              Data-driven projects, analytical thinking,
              and practical machine learning.
            </motion.p>
          </div>
        </div>

        {/* Projects */}

        {projects.map((project, index) => (
          <ProjectSlide
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            onOpen={() =>
              setSelectedProject(project)
            }
          />
        ))}
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