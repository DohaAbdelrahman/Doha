"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ArrowDown,
} from "lucide-react";

import { profile } from "@/data/portfolio";

const skills = [
  "Data Science",
  "Machine Learning",
  "Data Analysis",
];

export default function HeroSection() {
  const [activeSkill, setActiveSkill] = useState("Data Science");

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToNextSection = () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#06192A]
        text-white
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[10%]
            top-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#2D78C8]/8
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[5%]
            right-[5%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#5B9FE3]/6
            blur-[130px]
          "
        />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          items-center
          px-6
          pb-24
          pt-28
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-16

            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
          "
        >
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <div>
            {/* Intro */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                mb-6
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px w-10 bg-[#6AA7E8]" />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#6AA7E8]
                "
              >
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                max-w-3xl
                text-5xl
                font-bold
                leading-[0.98]
                tracking-[-0.05em]

                sm:text-6xl
                md:text-7xl
                lg:text-[88px]
              "
            >
              Doha
              <br />
              Abdelrahman
              <span className="text-[#6AA7E8]">.</span>
            </motion.h1>

            {/* Skills */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-3
              "
            >
              {skills.map((skill, index) => {
                const active = activeSkill === skill;

                return (
                  <div
                    key={skill}
                    className="flex items-center gap-4"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveSkill(skill)}
                      className={`
                        relative
                        pb-2
                        text-sm
                        font-medium
                        transition-all
                        duration-300

                        sm:text-base
                        md:text-lg

                        ${
                          active
                            ? `
                              text-white
                              drop-shadow-[0_0_14px_rgba(106,167,232,0.8)]
                            `
                            : `
                              text-[#8297AA]
                              hover:text-[#DCEBFA]
                            `
                        }
                      `}
                    >
                      {skill}

                      {active && (
                        <motion.span
                          layoutId="activeSkill"
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-[2px]
                            w-full
                            rounded-full
                            bg-[#6AA7E8]
                            shadow-[0_0_12px_rgba(106,167,232,0.9)]
                          "
                        />
                      )}
                    </button>

                    {index < skills.length - 1 && (
                      <span className="text-[#5B9FE3]/30">
                        |
                      </span>
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="
                mt-10
                flex
                flex-col
                gap-3

                sm:flex-row
              "
            >
              <button
                type="button"
                onClick={scrollToProjects}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#4F8FD8]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_12px_35px_rgba(79,143,216,0.22)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#5B9FE3]
                  hover:shadow-[0_18px_45px_rgba(79,143,216,0.32)]
                "
              >
                Explore My Work

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </button>

              <a
                href={profile.resumeUrl}
                download
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-[#E5EDF5]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#6AA7E8]/40
                  hover:bg-white/[0.06]
                "
              >
                View CV
              </a>
            </motion.div>

            {/* Social */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.6,
              }}
              className="
                mt-9
                flex
                items-center
                gap-3
              "
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.02]
                  text-[#8297AA]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#6AA7E8]/40
                  hover:bg-[#4F8FD8]/10
                  hover:text-white
                "
              >
                <Github size={18} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.02]
                  text-[#8297AA]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#6AA7E8]/40
                  hover:bg-[#4F8FD8]/10
                  hover:text-white
                "
              >
                <Linkedin size={18} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.02]
                  text-[#8297AA]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#6AA7E8]/40
                  hover:bg-[#4F8FD8]/10
                  hover:text-white
                "
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT SIDE — DATA VISUAL
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[520px]
            "
          >
            {/* Main visual */}

            <div
              className="
                relative
                aspect-square
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-[#0A2237]/45
                backdrop-blur-xl
                shadow-[0_30px_80px_rgba(0,0,0,0.25)]
              "
            >
              {/* inner glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-64
                  w-64
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#4F8FD8]/10
                  blur-[90px]
                "
              />

              {/* Header */}

              <div
                className="
                  absolute
                  left-6
                  right-6
                  top-6
                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#6AA7E8]
                    "
                  >
                    Data Visualization
                  </p>

                  <p className="mt-1 text-sm text-[#8297AA]">
                    Turning data into insight
                  </p>
                </div>

                <motion.span
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#6AA7E8]
                    shadow-[0_0_12px_rgba(106,167,232,0.9)]
                  "
                />
              </div>

              {/* Chart */}

              <div
                className="
                  absolute
                  left-8
                  right-8
                  top-28
                  bottom-28
                "
              >
                {/* grid */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-30
                  "
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(127,178,229,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(127,178,229,0.12) 1px, transparent 1px)",
                    backgroundSize: "25% 25%",
                  }}
                />

                {/* horizontal baseline */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-px
                    bg-white/10
                  "
                />

                {/* animated line */}

                <svg
                  viewBox="0 0 500 240"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    overflow-visible
                  "
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="dataGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#4F8FD8"
                        stopOpacity="0.15"
                      />

                      <stop
                        offset="50%"
                        stopColor="#6AA7E8"
                        stopOpacity="1"
                      />

                      <stop
                        offset="100%"
                        stopColor="#7FB2E5"
                        stopOpacity="0.45"
                      />
                    </linearGradient>
                  </defs>

                  <motion.path
                    d="
                      M 0 190
                      C 45 175, 60 155, 95 165
                      S 145 205, 175 145
                      S 230 85, 260 120
                      S 315 175, 345 110
                      S 400 45, 430 75
                      S 475 55, 500 25
                    "
                    fill="none"
                    stroke="url(#dataGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    animate={{
                      pathLength: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.7,
                      ease: "easeOut",
                    }}
                  />
                </svg>

                {/* Data points */}

                {[
                  { left: "19%", top: "69%" },
                  { left: "35%", top: "39%" },
                  { left: "52%", top: "50%" },
                  { left: "69%", top: "28%" },
                  { left: "86%", top: "14%" },
                ].map((point, index) => (
                  <motion.span
                    key={index}
                    className="
                      absolute
                      h-2.5
                      w-2.5
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      border
                      border-[#B8D7F2]
                      bg-[#6AA7E8]
                      shadow-[0_0_16px_rgba(106,167,232,0.8)]
                    "
                    style={{
                      left: point.left,
                      top: point.top,
                    }}
                    animate={{
                      scale: [1, 1.35, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.25,
                    }}
                  />
                ))}
              </div>

              {/* Bottom skills */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  grid
                  grid-cols-4
                  gap-2
                "
              >
                {["Python", "SQL", "Pandas", "Power BI"].map(
                  (tool) => (
                    <div
                      key={tool}
                      className="
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-2
                        py-2
                        text-center
                        text-[10px]
                        font-medium
                        text-[#9FB2C4]
                      "
                    >
                      {tool}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Floating label */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-5
                -left-5
                rounded-xl
                border
                border-[#6AA7E8]/20
                bg-[#06192A]/90
                px-4
                py-3
                shadow-[0_15px_40px_rgba(0,0,0,0.3)]
                backdrop-blur-xl
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-[#71879A]
                "
              >
                Focus
              </p>

              <p className="mt-1 text-xs font-medium text-white">
                Data-driven solutions
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL
      ========================================================= */}

      <motion.button
        type="button"
        onClick={scrollToNextSection}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
        }}
        aria-label="Scroll to About section"
        className="
          absolute
          bottom-6
          left-1/2
          z-20
          -translate-x-1/2
          transition-colors
          duration-300
          hover:text-[#6AA7E8]
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            gap-2
            text-[#71879A]
          "
        >
          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
            "
          >
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 5, 0],
              opacity: [0.45, 1, 0.45],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-7
              w-px
              bg-gradient-to-b
              from-[#6AA7E8]
              to-transparent
            "
          />
        </div>
      </motion.button>
    </section>
  );
}