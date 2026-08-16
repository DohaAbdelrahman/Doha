"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

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
        bg-[#080D18]
        text-[#F8FAFC]
      "
    >
      {/* =====================================================
          BACKGROUND ORBITS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Center subtle glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#38BDF8]/[0.025]
            blur-[130px]
          "
        />

        {/* Top Left Orbit */}
        <div
          className="
            absolute
            -left-[180px]
            -top-[180px]
            h-[460px]
            w-[460px]
            rounded-full
            border
            border-[#38BDF8]/25
          "
        />

        <div
          className="
            absolute
            left-[250px]
            top-[165px]
            h-3
            w-3
            rounded-full
            bg-[#38BDF8]
            shadow-[0_0_18px_rgba(56,189,248,0.8)]
          "
        />

        {/* Bottom Left Circle */}
        <div
          className="
            absolute
            -bottom-[180px]
            -left-[100px]
            h-[380px]
            w-[380px]
            rounded-full
            border
            border-[#38BDF8]/15
            bg-[#38BDF8]/[0.012]
          "
        />

        {/* Right Orbit */}
        <div
          className="
            absolute
            -bottom-[280px]
            -right-[170px]
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-[#38BDF8]/25
          "
        />

        <div
          className="
            absolute
            right-[235px]
            bottom-[185px]
            h-3
            w-3
            rounded-full
            bg-[#38BDF8]
            shadow-[0_0_20px_rgba(56,189,248,0.8)]
          "
        />

        {/* Right Floating Circle */}
        <div
          className="
            absolute
            -right-[35px]
            top-[46%]
            h-[175px]
            w-[175px]
            rounded-full
            border
            border-[#38BDF8]/20
            bg-[#38BDF8]/[0.015]
          "
        />

        {/* Right Orbit Connection */}
        <div
          className="
            absolute
            right-[-50px]
            top-[58%]
            h-px
            w-[430px]
            rotate-[-22deg]
            bg-[#38BDF8]/15
          "
        />

        {/* =================================================
            DOT GRID — TOP RIGHT
        ================================================= */}

        <div
          className="
            absolute
            right-[5%]
            top-[22%]
            grid
            grid-cols-5
            gap-5
          "
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              className="
                h-1
                w-1
                rounded-full
                bg-[#38BDF8]/30
              "
            />
          ))}
        </div>

        {/* =================================================
            DOT GRID — BOTTOM LEFT
        ================================================= */}

        <div
          className="
            absolute
            bottom-[23%]
            left-[4%]
            grid
            grid-cols-4
            gap-5
          "
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="
                h-1
                w-1
                rounded-full
                bg-[#38BDF8]/20
              "
            />
          ))}
        </div>

        {/* Small Floating Dots */}

        <span
          className="
            absolute
            left-[22%]
            top-[40%]
            h-2
            w-2
            rounded-full
            bg-[#38BDF8]/55
            shadow-[0_0_12px_rgba(56,189,248,0.5)]
          "
        />

        <span
          className="
            absolute
            right-[18%]
            bottom-[25%]
            h-2
            w-2
            rounded-full
            bg-[#38BDF8]/55
            shadow-[0_0_12px_rgba(56,189,248,0.5)]
          "
        />

        <span
          className="
            absolute
            left-[12%]
            top-[70%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#38BDF8]/35
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          px-6
          pb-12
          pt-28
          sm:px-10
          lg:px-14
        "
      >
        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div
          className="
            flex
            flex-1
            items-center
            justify-center
          "
        >
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              text-center
            "
          >
            {/* Hello I am */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
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
                  w-10
                  bg-[#38BDF8]/80
                  shadow-[0_0_10px_rgba(56,189,248,0.35)]
                  sm:w-14
                "
              />

              <span
                className="
                  text-sm
                  font-medium
                  tracking-[0.12em]
                  text-[#38BDF8]
                "
              >
                Hello, I am
              </span>

              <span
                className="
                  h-px
                  w-10
                  bg-[#38BDF8]/80
                  shadow-[0_0_10px_rgba(56,189,248,0.35)]
                  sm:w-14
                "
              />
            </motion.div>

            {/* DATA SCIENTIST */}

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.8,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="
                mb-5
                flex
                items-center
                gap-4
                sm:gap-6
              "
            >
              <span
                className="
                  hidden
                  h-px
                  w-20
                  bg-[#38BDF8]/35
                  sm:block
                  md:w-28
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  tracking-[0.38em]
                  text-[#38BDF8]
                  sm:text-sm
                "
              >
                DATA SCIENTIST
              </span>

              <span
                className="
                  hidden
                  h-px
                  w-20
                  bg-[#38BDF8]/35
                  sm:block
                  md:w-28
                "
              />
            </motion.div>

            {/* NAME */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.2,
              }}
              className="
                px-4
                text-[48px]
                font-medium
                leading-none
                tracking-[-0.055em]
                text-[#F8FAFC]

                sm:text-[62px]
                md:text-[76px]
                lg:text-[88px]
              "
            >
              {profile.name}
              <span className="text-[#38BDF8]">.</span>
            </motion.h1>

            {/* SKILLS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="
                mt-7
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-4
                gap-y-2
                text-sm
                sm:text-base
              "
            >
              {[
                "Data Science",
                "Data Analysis",
                "Machine Learning",
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <span
                    className="
                      text-[#CBD5E1]
                      transition-colors
                      duration-300
                      hover:text-[#F8FAFC]
                    "
                  >
                    {skill}
                  </span>

                  {index < 2 && (
                    <span className="text-[#38BDF8]/60">
                      ·
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* =================================================
                GLASS CTA BUTTONS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="
                mt-9
                flex
                flex-col
                items-center
                justify-center
                gap-4
                sm:flex-row
              "
            >
              {/* VIEW PROJECTS */}

              <button
                type="button"
                onClick={scrollToProjects}
                className="
                  group
                  flex
                  h-14
                  min-w-[225px]
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-[#38BDF8]/60
                  bg-[#38BDF8]/[0.08]
                  px-8
                  text-sm
                  font-medium
                  text-[#F8FAFC]
                  shadow-[inset_0_1px_0_rgba(248,250,252,0.05)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#38BDF8]
                  hover:bg-[#38BDF8]/[0.14]
                  hover:shadow-[0_0_28px_rgba(56,189,248,0.13)]
                "
              >
                View Projects

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="
                    text-[#38BDF8]
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </button>

              {/* VIEW CV */}

              <a
                href="https://drive.google.com/file/d/1vlPN2HeH4bDd-tXfGg2ckXORN8nZMT-C/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  h-14
                  min-w-[225px]
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-[#CBD5E1]/15
                  bg-[#F8FAFC]/[0.025]
                  px-8
                  text-sm
                  font-medium
                  text-[#F8FAFC]
                  shadow-[inset_0_1px_0_rgba(248,250,252,0.04)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#38BDF8]/60
                  hover:bg-[#F8FAFC]/[0.05]
                "
              >
                View CV

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="
                    text-[#94A3B8]
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[#38BDF8]
                  "
                />
              </a>
            </motion.div>

            {/* =================================================
                SOCIAL GLASS BUTTONS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="
                mt-7
                flex
                items-center
                gap-4
              "
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#CBD5E1]/15
                  bg-[#F8FAFC]/[0.025]
                  text-[#94A3B8]
                  shadow-[inset_0_1px_0_rgba(248,250,252,0.04)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#38BDF8]/60
                  hover:bg-[#38BDF8]/[0.08]
                  hover:text-[#38BDF8]
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
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#CBD5E1]/15
                  bg-[#F8FAFC]/[0.025]
                  text-[#94A3B8]
                  shadow-[inset_0_1px_0_rgba(248,250,252,0.04)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#38BDF8]/60
                  hover:bg-[#38BDF8]/[0.08]
                  hover:text-[#38BDF8]
                "
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#CBD5E1]/15
                  bg-[#F8FAFC]/[0.025]
                  text-[#94A3B8]
                  shadow-[inset_0_1px_0_rgba(248,250,252,0.04)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#38BDF8]/60
                  hover:bg-[#38BDF8]/[0.08]
                  hover:text-[#38BDF8]
                "
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            SCROLL
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-3
          "
        >
          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#38BDF8]
            "
          >
            Scroll to Explore
          </span>

          <motion.button
            type="button"
            onClick={scrollToProjects}
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-11
              w-7
              items-center
              justify-center
              rounded-full
              border
              border-[#38BDF8]/60
              bg-[#38BDF8]/[0.035]
              text-[#38BDF8]
              shadow-[0_0_18px_rgba(56,189,248,0.07)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-[#38BDF8]/10
            "
            aria-label="Scroll to projects"
          >
            <ChevronDown
              size={15}
              strokeWidth={1.5}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}