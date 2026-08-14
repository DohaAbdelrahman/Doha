"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
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
        {/* Main glow */}

        <motion.div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#4F8FD8]/8
            blur-[130px]
          "
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Small data points */}

        <motion.span
          animate={{
            opacity: [0.15, 0.6, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            absolute
            left-[12%]
            top-[30%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#6AA7E8]
            shadow-[0_0_12px_rgba(106,167,232,0.8)]
          "
        />

        <motion.span
          animate={{
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1,
          }}
          className="
            absolute
            right-[15%]
            top-[25%]
            h-1
            w-1
            rounded-full
            bg-[#6AA7E8]
            shadow-[0_0_10px_rgba(106,167,232,0.8)]
          "
        />

        <motion.span
          animate={{
            opacity: [0.15, 0.55, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 2,
          }}
          className="
            absolute
            bottom-[22%]
            left-[18%]
            h-1
            w-1
            rounded-full
            bg-[#6AA7E8]
          "
        />

        <motion.span
          animate={{
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1.5,
          }}
          className="
            absolute
            bottom-[27%]
            right-[12%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#6AA7E8]
            shadow-[0_0_10px_rgba(106,167,232,0.8)]
          "
        />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-6xl
          items-center
          justify-center
          px-6
          pb-24
          pt-28
          text-center
          sm:px-8
        "
      >
        <div className="flex w-full flex-col items-center">

          {/* Hello */}

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
              duration: 0.6,
            }}
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-8 bg-[#6AA7E8]" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#6AA7E8]
              "
            >
              Hello, I'm
            </span>

            <span className="h-px w-8 bg-[#6AA7E8]" />
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
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              text-5xl
              font-bold
              leading-[0.98]
              tracking-[-0.045em]
              text-white

              sm:text-6xl
              md:text-7xl
              lg:text-[92px]
            "
          >
            {profile.name}
            <span
              className="
                text-[#6AA7E8]
                drop-shadow-[0_0_20px_rgba(106,167,232,0.45)]
              "
            >
              .
            </span>
          </motion.h1>

          {/* Specializations */}

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
              justify-center
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
                      cursor-pointer
                      pb-2
                      text-base
                      font-medium
                      transition-all
                      duration-300

                      sm:text-lg
                      md:text-xl

                      ${
                        active
                          ? `
                            text-white
                            drop-shadow-[0_0_14px_rgba(106,167,232,0.9)]
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
                          shadow-[0_0_14px_rgba(106,167,232,0.95)]
                        "
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>

                  {index < skills.length - 1 && (
                    <span
                      className="
                        text-[#5B9FE3]/35
                      "
                    >
                      |
                    </span>
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* Buttons */}

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
              items-center
              justify-center
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
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_12px_35px_rgba(79,143,216,0.22)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#5B9FE3]
                hover:shadow-[0_18px_45px_rgba(79,143,216,0.3)]
              "
            >
              Explore My Work

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
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
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-7
                py-3.5
                text-sm
                font-medium
                text-[#E5EDF5]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#6AA7E8]/40
                hover:bg-[#4F8FD8]/10
              "
            >
              View CV
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Social links */}

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
              delay: 0.6,
            }}
            className="
              mt-9
              flex
              items-center
              justify-center
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
      </div>

      {/* =========================================================
          SCROLL INDICATOR
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
          delay: 1,
        }}
        aria-label="Scroll to About section"
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          -translate-x-1/2
          text-[#71879A]
          transition-colors
          duration-300
          hover:text-[#6AA7E8]
        "
      >
        <div className="flex flex-col items-center gap-2">
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

          <motion.span
            animate={{
              y: [0, 5, 0],
              opacity: [0.4, 1, 0.4],
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