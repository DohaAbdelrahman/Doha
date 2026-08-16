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
        bg-[#0F1714]
        text-[#F5F3EC]
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main subtle glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#A7B68D]/[0.025]
            blur-[140px]
          "
        />

        {/* Top-left orbital circle */}

        <div
          className="
            absolute
            -left-[180px]
            -top-[220px]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#A7B68D]/25
          "
        />

        <div
          className="
            absolute
            left-[235px]
            top-[150px]
            h-3
            w-3
            rounded-full
            bg-[#A7B68D]
            shadow-[0_0_18px_rgba(167,182,141,0.7)]
          "
        />

        {/* Bottom-left circle */}

        <div
          className="
            absolute
            -bottom-[190px]
            -left-[120px]
            h-[390px]
            w-[390px]
            rounded-full
            border
            border-[#A7B68D]/20
            bg-[#A7B68D]/[0.015]
            shadow-[inset_0_0_80px_rgba(167,182,141,0.04)]
          "
        />

        {/* Bottom-right orbital */}

        <div
          className="
            absolute
            -bottom-[300px]
            -right-[180px]
            h-[620px]
            w-[620px]
            rounded-full
            border
            border-[#A7B68D]/30
          "
        />

        <div
          className="
            absolute
            right-[235px]
            bottom-[180px]
            h-3
            w-3
            rounded-full
            bg-[#A7B68D]
            shadow-[0_0_20px_rgba(167,182,141,0.8)]
          "
        />

        {/* Right floating circle */}

        <div
          className="
            absolute
            -right-[45px]
            top-[45%]
            h-[170px]
            w-[170px]
            rounded-full
            border
            border-[#A7B68D]/25
            bg-[#A7B68D]/[0.025]
            shadow-[inset_0_0_50px_rgba(167,182,141,0.05)]
          "
        />

        {/* Top-right dot grid */}

        <div
          className="
            absolute
            right-[4%]
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
                bg-[#A7B68D]/35
              "
            />
          ))}
        </div>

        {/* Bottom-left dot grid */}

        <div
          className="
            absolute
            bottom-[22%]
            left-[3%]
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
                bg-[#A7B68D]/25
              "
            />
          ))}
        </div>

        {/* Floating dots */}

        <span
          className="
            absolute
            left-[21%]
            top-[65%]
            h-2
            w-2
            rounded-full
            bg-[#A7B68D]/60
            shadow-[0_0_12px_rgba(167,182,141,0.5)]
          "
        />

        <span
          className="
            absolute
            right-[18%]
            bottom-[23%]
            h-2
            w-2
            rounded-full
            bg-[#A7B68D]/50
            shadow-[0_0_12px_rgba(167,182,141,0.5)]
          "
        />
      </div>

      {/* =====================================================
          GLASS FRAME
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-3
          rounded-[22px]
          border
          border-[#D6CEC1]/10
          bg-[#F5F3EC]/[0.01]
          sm:inset-4
        "
      />

      {/* =====================================================
          CONTENT
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
          pb-20
          pt-28
          sm:px-10
          lg:px-14
        "
      >
        {/* =================================================
            GLASS NAVIGATION
        ================================================= */}

        <motion.nav
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            flex
            h-16
            items-center
            justify-between
            rounded-2xl
            border
            border-[#D6CEC1]/15
            bg-[#F5F3EC]/[0.025]
            px-6
            backdrop-blur-xl
            sm:px-8
          "
        >
          {/* Logo */}

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              flex
              items-baseline
              gap-0.5
              text-left
            "
          >
            <span
              className="
                text-lg
                font-semibold
                tracking-[-0.04em]
                text-[#F5F3EC]
              "
            >
              DOHA
            </span>

            <span
              className="
                text-xl
                text-[#A7B68D]
              "
            >
              .
            </span>
          </button>

          {/* Desktop Links */}

          <div
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >
            {[
              ["WORK", "#projects"],
              ["ABOUT", "#about"],
              ["JOURNEY", "#experience"],
              ["CONTACT", "#contact"],
            ].map(([label, href]) => (
              <button
                key={href}
                type="button"
                onClick={() =>
                  document
                    .querySelector(href)
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="
                  text-[11px]
                  font-medium
                  tracking-[0.2em]
                  text-[#B5ADA0]
                  transition-colors
                  duration-300
                  hover:text-[#F5F3EC]
                "
              >
                {label}
              </button>
            ))}
          </div>
        </motion.nav>

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
                duration: 0.7,
                delay: 0.15,
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
                  w-12
                  bg-[#A7B68D]/80
                  shadow-[0_0_10px_rgba(167,182,141,0.35)]
                "
              />

              <span
                className="
                  text-sm
                  font-medium
                  tracking-[0.12em]
                  text-[#A7B68D]
                "
              >
                Hello, I am
              </span>

              <span
                className="
                  h-px
                  w-12
                  bg-[#A7B68D]/80
                  shadow-[0_0_10px_rgba(167,182,141,0.35)]
                "
              />
            </motion.div>

            {/* Data Scientist */}

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
                delay: 0.25,
              }}
              className="
                mb-5
                flex
                items-center
                gap-5
              "
            >
              <span
                className="
                  hidden
                  h-px
                  w-28
                  bg-[#A7B68D]/50
                  sm:block
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  tracking-[0.38em]
                  text-[#A7B68D]
                  sm:text-sm
                "
              >
                DATA SCIENTIST
              </span>

              <span
                className="
                  hidden
                  h-px
                  w-28
                  bg-[#A7B68D]/50
                  sm:block
                "
              />
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
                duration: 0.9,
                delay: 0.35,
              }}
              className="
                px-4
                text-5xl
                font-medium
                leading-none
                tracking-[-0.055em]
                text-[#F5F3EC]
                sm:text-6xl
                md:text-7xl
                lg:text-[88px]
              "
            >
              {profile.name}
              <span className="text-[#A7B68D]">.</span>
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
                delay: 0.5,
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
                      text-[#D6CEC1]
                    "
                  >
                    {skill}
                  </span>

                  {index < 2 && (
                    <span
                      className="
                        text-[#A7B68D]/70
                      "
                    >
                      |
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* =================================================
                GLASS BUTTONS
            ================================================= */}

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
                delay: 0.65,
              }}
              className="
                mt-9
                flex
                flex-col
                items-center
                gap-4
                sm:flex-row
              "
            >
              {/* View Projects */}

              <button
                type="button"
                onClick={scrollToProjects}
                className="
                  group
                  flex
                  h-14
                  min-w-[230px]
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-[#A7B68D]/60
                  bg-[#A7B68D]/[0.08]
                  px-8
                  text-sm
                  font-medium
                  text-[#F5F3EC]
                  shadow-[0_0_25px_rgba(167,182,141,0.08)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#A7B68D]
                  hover:bg-[#A7B68D]/15
                  hover:shadow-[0_0_30px_rgba(167,182,141,0.16)]
                "
              >
                View Projects

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

              {/* View CV */}

              <a
                href="https://drive.google.com/file/d/1vlPN2HeH4bDd-tXfGg2ckXORN8nZMT-C/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  h-14
                  min-w-[230px]
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-[#D6CEC1]/20
                  bg-[#F5F3EC]/[0.025]
                  px-8
                  text-sm
                  font-medium
                  text-[#F5F3EC]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#A7B68D]/60
                  hover:bg-[#F5F3EC]/[0.06]
                "
              >
                View CV

                <ArrowUpRight
                  size={17}
                  className="
                    text-[#B5ADA0]
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[#A7B68D]
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
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.8,
              }}
              className="
                mt-7
                flex
                items-center
                gap-4
              "
            >
              {[
                {
                  href: profile.github,
                  label: "GitHub",
                  icon: <Github size={18} />,
                },
                {
                  href: profile.linkedin,
                  label: "LinkedIn",
                  icon: <Linkedin size={18} />,
                },
                {
                  href: `mailto:${profile.email}`,
                  label: "Email",
                  icon: <Mail size={18} />,
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.label === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    social.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.label}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#D6CEC1]/15
                    bg-[#F5F3EC]/[0.025]
                    text-[#B5ADA0]
                    shadow-[inset_0_1px_0_rgba(245,243,236,0.04)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#A7B68D]/60
                    hover:bg-[#A7B68D]/[0.08]
                    hover:text-[#A7B68D]
                  "
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* =================================================
            SCROLL INDICATOR
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
            delay: 1,
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
              text-[#A7B68D]
            "
          >
            Scroll to Explore
          </span>

          <motion.div
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
              border-[#A7B68D]/60
              bg-[#A7B68D]/[0.04]
              shadow-[0_0_20px_rgba(167,182,141,0.08)]
              backdrop-blur-md
            "
          >
            <ChevronDown
              size={15}
              className="text-[#A7B68D]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}