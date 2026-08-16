"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
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
        bg-[#0F1714]
        text-[#F5F3EC]
      "
    >
      {/* =========================================================
          HERO
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
          pb-20
          pt-28
          text-center
          sm:px-8
        "
      >
        <div className="flex w-full flex-col items-center">

          {/* Eyebrow */}

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
              duration: 0.6,
            }}
            className="
              mb-7
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-10
                bg-[#A7B68D]
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-[#A7B68D]
              "
            >
              Data Scientist
            </span>

            <span
              className="
                h-px
                w-10
                bg-[#A7B68D]
              "
            />
          </motion.div>

          {/* Name */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 22,
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
              font-medium
              leading-none
              tracking-[-0.05em]
              text-[#F5F3EC]

              sm:text-6xl
              md:text-7xl
              lg:text-[88px]
            "
          >
            {profile.name}
            <span className="text-[#A7B68D]">.</span>
          </motion.h1>

          {/* Specializations */}

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
              delay: 0.3,
            }}
            className="
              mt-7
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-3
            "
          >
            {[
              "Data Science",
              "Data Analysis",
              "Machine Learning",
            ].map((skill, index) => (
              <div
                key={skill}
                className="flex items-center gap-4"
              >
                <span
                  className="
                    text-sm
                    font-medium
                    text-[#B7BDB5]
                    transition-colors
                    duration-300
                    hover:text-[#F5F3EC]
                    sm:text-base
                  "
                >
                  {skill}
                </span>

                {index < 3 && (
                  <span
                    className="
                      text-[#A7B68D]/60
                      text-sm
                      font-light
                    "
                  >
                    |
                  </span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Actions */}

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
              delay: 0.45,
            }}
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-5

              sm:flex-row
            "
          >
            {/* Primary */}

            <button
              type="button"
              onClick={scrollToProjects}
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                bg-[#A7B68D]
                px-7
                py-3.5
                text-sm
                font-medium
                text-[#0F1714]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#B8C49F]
              "
            >
              View Projects

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </button>

            {/* Secondary */}

            <a
              href="https://drive.google.com/file/d/1vlPN2HeH4bDd-tXfGg2ckXORN8nZMT-C/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                border-b
                border-[#6B7468]
                pb-1
                text-sm
                font-medium
                text-[#F5F3EC]
                transition-all
                duration-300
                hover:border-[#A7B68D]
                hover:text-[#A7B68D]
              "
            >
              View CV

              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </motion.div>

          {/* Social Links */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="
              mt-9
              flex
              items-center
              gap-6
            "
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                text-[#6B7468]
                transition-colors
                duration-300
                hover:text-[#A7B68D]
              "
            >
              <Github
                size={18}
                strokeWidth={1.5}
              />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                text-[#6B7468]
                transition-colors
                duration-300
                hover:text-[#A7B68D]
              "
            >
              <Linkedin
                size={18}
                strokeWidth={1.5}
              />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="
                text-[#6B7468]
                transition-colors
                duration-300
                hover:text-[#A7B68D]
              "
            >
              <Mail
                size={18}
                strokeWidth={1.5}
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM LABEL
      ========================================================= */}

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
            text-[#6B7468]
          "
        >
          Scroll to explore
        </span>

        <span
          className="
            h-px
            w-8
            bg-[#A7B68D]/60
          "
        />
      </motion.div>
    </section>
  );
}