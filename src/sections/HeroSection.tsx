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

export default function HeroSection() {
  const [activeSkill, setActiveSkill] = useState("Data Science");
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToNextSection = () => {
    const homeSection = document.querySelector("#home");
    const nextSection = homeSection?.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#06192A]
        flex
        items-center
      "
    >
      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#2D78C8]/10
          blur-[140px]
        "
      />

      {/* Subtle grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Decorative glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/4
          h-72
          w-72
          rounded-full
          bg-[#4F8FD8]/8
          blur-[100px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-1/4
          h-64
          w-64
          rounded-full
          bg-[#6AA7E8]/6
          blur-[100px]
        "
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
          px-6
          pb-20
          pt-32
          sm:px-8
          lg:px-12
        "
      >
        <div className="max-w-4xl">
          {/* Small intro */}

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
              gap-3
            "
          >
            <span
              className="
                h-px
                w-10
                bg-[#6AA7E8]
              "
            />

            <span
              className="
                text-sm
                font-medium
                uppercase
                tracking-[0.25em]
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
              text-5xl
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              text-white

              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            {profile.name}
            <span className="text-[#6AA7E8]">.</span>
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
              delay: 0.25,
            }}
            className="
              mt-7
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-4
              gap-y-3
              text-base
              font-medium
              sm:text-lg
              md:text-xl
            "
          >
            {["Data Science", "Machine Learning", "Data Analysis"].map(
              (skill, index) => (
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
                      transition-all
                      duration-300

                      ${
                        activeSkill === skill
                          ? `
                            text-white
                            drop-shadow-[0_0_12px_rgba(106,167,232,0.9)]
                          `
                          : `
                            text-[#8FA4B7]
                            hover:text-[#DCEBFA]
                          `
                      }
                    `}
                  >
                    {skill}

                    {activeSkill === skill && (
                      <motion.span
                        layoutId="skillGlow"
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
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>

                  {index < 2 && (
                    <span className="text-[#5B9FE3]/40">
                      |
                    </span>
                  )}
                </div>
              )
            )}
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
            {/* Projects */}

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
                shadow-[0_10px_30px_rgba(79,143,216,0.20)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#5B9FE3]
                hover:shadow-[0_15px_35px_rgba(79,143,216,0.30)]
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

            {/* CV */}

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
              Download CV
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
              mt-10
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
                text-[#8FA4B7]
                transition-all
                duration-300
                hover:border-[#6AA7E8]/40
                hover:bg-[#4F8FD8]/10
                hover:text-white
                hover:-translate-y-1
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
                text-[#8FA4B7]
                transition-all
                duration-300
                hover:border-[#6AA7E8]/40
                hover:bg-[#4F8FD8]/10
                hover:text-white
                hover:-translate-y-1
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
                text-[#8FA4B7]
                transition-all
                duration-300
                hover:border-[#6AA7E8]/40
                hover:bg-[#4F8FD8]/10
                hover:text-white
                hover:-translate-y-1
              "
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Bottom metadata */}

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
            absolute
            bottom-8
            left-6
            right-6
            flex
            items-center
            justify-between
            text-xs
            text-[#71879A]

            sm:left-8
            sm:right-8

            lg:left-12
            lg:right-12
          "
        >

          <button
            type="button"
            onClick={scrollToNextSection}
            className="
              hidden
              items-center
              gap-2
              transition-colors
              duration-300
              hover:text-white

              sm:flex
            "
          >
          
          </button>
        </motion.div>
      </div>
    </section>
  );
}