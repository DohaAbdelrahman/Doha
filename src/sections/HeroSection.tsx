"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { profile } from "@/data/portfolio";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({
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
        bg-[#3A2A23]
        text-[#F4F0E8]
      "
    >
      {/* Background details */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            right-[-120px]
            top-[18%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#A8AD8A]/[0.04]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-160px]
            left-[-100px]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#B5ADA0]/[0.025]
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            left-[8%]
            top-0
            h-full
            w-px
            bg-[#D6CEC1]/[0.06]
          "
        />

        <div
          className="
            absolute
            right-[8%]
            top-0
            h-full
            w-px
            bg-[#D6CEC1]/[0.06]
          "
        />
      </div>

      {/* Main Hero */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          pb-20
          pt-32
          sm:px-8
          lg:px-12
        "
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          {/* LEFT */}

          <div className="max-w-3xl">

            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                mb-8
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-12
                  bg-[#A8AD8A]
                "
              />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#A8AD8A]
                "
              >
                Data Scientist
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="
                max-w-4xl
                text-[58px]
                font-medium
                leading-[0.95]
                tracking-[-0.055em]
                text-[#F4F0E8]

                sm:text-[72px]
                md:text-[88px]
                lg:text-[96px]
              "
            >
              I turn complex
              <br />

              <span className="text-[#B5ADA0]">
                data
              </span>{" "}
              into
              <br />

              <span className="text-[#A8AD8A]">
                decisions.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                mt-8
                max-w-xl
                text-base
                leading-7
                text-[#D6CEC1]
                sm:text-lg
              "
            >
              {profile.description}
            </motion.p>

            {/* Expertise */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="
                mt-8
                flex
                flex-wrap
                gap-x-6
                gap-y-3
              "
            >
              {[
                "Data Analysis",
                "Machine Learning",
                "Predictive Modeling",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    uppercase
                    tracking-[0.12em]
                    text-[#B5ADA0]
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#A8AD8A]
                    "
                  />

                  {item}
                </span>
              ))}
            </motion.div>

            {/* Actions */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
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
                onClick={scrollToProjects}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  bg-[#A8AD8A]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-[#3A2A23]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#B5ADA0]
                "
              >
                Explore My Work

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </button>

              <a
                href="https://drive.google.com/file/d/1vlPN2HeH4bDd-tXfGg2ckXORN8nZMT-C/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  border-b
                  border-[#D6CEC1]/30
                  pb-1
                  text-sm
                  text-[#F4F0E8]
                  transition-colors
                  duration-300
                  hover:border-[#A8AD8A]
                  hover:text-[#A8AD8A]
                "
              >
                View CV

                <ArrowUpRight size={15} />
              </a>
            </motion.div>

            {/* Socials */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
              }}
              className="
                mt-10
                flex
                items-center
                gap-5
              "
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  text-[#B5ADA0]
                  transition-colors
                  duration-300
                  hover:text-[#A8AD8A]
                "
              >
                <Github size={18} strokeWidth={1.5} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  text-[#B5ADA0]
                  transition-colors
                  duration-300
                  hover:text-[#A8AD8A]
                "
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="
                  text-[#B5ADA0]
                  transition-colors
                  duration-300
                  hover:text-[#A8AD8A]
                "
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT — DATA VISUAL */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-md
              lg:ml-auto
            "
          >
            {/* Index */}

            <div
              className="
                mb-5
                flex
                items-center
                justify-between
                border-b
                border-[#D6CEC1]/10
                pb-3
              "
            >
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#B5ADA0]
                "
              >
                Selected Discipline
              </span>

              <span
                className="
                  text-[10px]
                  tracking-[0.2em]
                  text-[#A8AD8A]
                "
              >
                01 / 03
              </span>
            </div>

            {/* Visual */}

            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                border
                border-[#D6CEC1]/10
                bg-[#44352D]/45
              "
            >
              {/* Vertical labels */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  top-6
                  flex
                  flex-col
                  justify-between
                "
              >
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-[#B5ADA0]
                  "
                >
                  DATA
                </span>

                <span
                  className="
                    rotate-[-90deg]
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-[#B5ADA0]
                  "
                >
                  ANALYSIS
                </span>
              </div>

              {/* Chart */}

              <div
                className="
                  absolute
                  inset-x-12
                  top-1/2
                  h-40
                  -translate-y-1/2
                "
              >
                <div
                  className="
                    absolute
                    inset-x-0
                    top-1/2
                    h-px
                    bg-[#D6CEC1]/10
                  "
                />

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-full
                    bg-[linear-gradient(to_bottom,transparent_49.5%,rgba(214,206,193,0.07)_50%,transparent_50.5%)]
                  "
                />

                <svg
                  viewBox="0 0 400 160"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="
                      M0 132
                      C35 125 45 102 72 108
                      C100 114 110 80 138 88
                      C165 96 176 55 204 70
                      C232 85 244 45 270 52
                      C300 60 312 24 338 35
                      C362 45 378 20 400 8
                    "
                    stroke="#A8AD8A"
                    strokeWidth="2"
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
                      delay: 0.5,
                      ease: "easeOut",
                    }}
                  />

                  <motion.path
                    d="
                      M0 132
                      C35 125 45 102 72 108
                      C100 114 110 80 138 88
                      C165 96 176 55 204 70
                      C232 85 244 45 270 52
                      C300 60 312 24 338 35
                      C362 45 378 20 400 8
                      L400 160
                      L0 160
                      Z
                    "
                    fill="url(#chartFill)"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 1,
                    }}
                  />

                  <defs>
                    <linearGradient
                      id="chartFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#A8AD8A"
                        stopOpacity="0.12"
                      />

                      <stop
                        offset="100%"
                        stopColor="#A8AD8A"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Data points */}

                {[
                  ["left-[4%]", "top-[82%]"],
                  ["left-[35%]", "top-[55%]"],
                  ["left-[67%]", "top-[33%]"],
                  ["right-[1%]", "top-[4%]"],
                ].map(([x, y], index) => (
                  <motion.span
                    key={index}
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 1 + index * 0.15,
                    }}
                    className={`
                      absolute
                      ${x}
                      ${y}
                      h-2
                      w-2
                      rounded-full
                      bg-[#A8AD8A]
                      ring-4
                      ring-[#A8AD8A]/10
                    `}
                  />
                ))}
              </div>

              {/* Bottom information */}

              <div
                className="
                  absolute
                  bottom-6
                  left-12
                  right-8
                  border-t
                  border-[#D6CEC1]/10
                  pt-4
                "
              >
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-[#B5ADA0]
                      "
                    >
                      Focus
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-[#F4F0E8]
                      "
                    >
                      Analysis → Modeling → Insight
                    </p>
                  </div>

                  <ArrowDownRight
                    size={18}
                    className="text-[#A8AD8A]"
                  />
                </div>
              </div>
            </div>

            {/* Bottom label */}

            <div
              className="
                mt-5
                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#B5ADA0]
                "
              >
                Doha Abdelrahman
              </span>

              <span
                className="
                  text-[10px]
                  text-[#A8AD8A]
                "
              >
                DS.01
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-3
          md:flex
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-[#B5ADA0]
          "
        >
          Scroll to explore
        </span>

        <span
          className="
            h-px
            w-8
            bg-[#A8AD8A]/60
          "
        />
      </motion.div>
    </section>
  );
}