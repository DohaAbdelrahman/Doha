"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

import { profile } from "@/data/portfolio";

export default function HeroSection() {
  const scrollToProjects = () =>
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#06192A]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Soft central glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#2D78C8]/10 blur-[150px] pointer-events-none" />

      {/* =========================================================
          FLOATING ORBS
      ========================================================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Large Orb - Top Left */}
        <motion.div
          className="absolute w-28 h-28 rounded-full border border-[#5B9FE3]/20 bg-[#5B9FE3]/5 backdrop-blur-sm shadow-[0_0_60px_rgba(91,159,227,0.12)]"
          style={{ top: "8%", left: "8%" }}
          animate={{
            x: [0, 25, -15, 15, 0],
            y: [0, -20, 15, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Large Orb - Top Right */}
        <motion.div
          className="absolute w-20 h-20 rounded-full border border-[#6AA7E8]/20 bg-[#6AA7E8]/5 backdrop-blur-sm shadow-[0_0_50px_rgba(106,167,232,0.12)]"
          style={{ top: "13%", right: "10%" }}
          animate={{
            x: [0, -20, 15, -10, 0],
            y: [0, 20, -15, 10, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Medium Orb - Bottom Left */}
        <motion.div
          className="absolute w-16 h-16 rounded-full border border-[#7FB2E5]/20 bg-[#7FB2E5]/5 backdrop-blur-sm"
          style={{ bottom: "18%", left: "14%" }}
          animate={{
            x: [0, 20, -10, 15, 0],
            y: [0, -15, 15, -8, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Medium Orb - Bottom Right */}
        <motion.div
          className="absolute w-14 h-14 rounded-full border border-[#7FB2E5]/20 bg-[#7FB2E5]/5 backdrop-blur-sm"
          style={{ bottom: "20%", right: "15%" }}
          animate={{
            x: [0, -15, 10, -10, 0],
            y: [0, 15, -15, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Many Small Floating Orbs */}
        {[
          [7, 28],
          [10, 65],
          [14, 42],
          [18, 82],
          [22, 16],
          [25, 91],
          [29, 35],
          [32, 72],
          [36, 8],
          [40, 94],
          [44, 18],
          [48, 84],
          [52, 6],
          [56, 93],
          [60, 27],
          [64, 78],
          [68, 11],
          [72, 90],
          [76, 34],
          [80, 68],
          [84, 8],
          [88, 86],
          [92, 25],
          [95, 73],
          [30, 55],
          [46, 52],
          [63, 48],
          [78, 52],
        ].map(([top, left], index) => {
          const size = 3 + (index % 4) * 2;

          return (
            <motion.span
              key={index}
              className="absolute rounded-full bg-[#6AA7E8]/50 shadow-[0_0_12px_rgba(106,167,232,0.35)]"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
              }}
              animate={{
                y: [0, -10, 7, -5, 0],
                x: [0, 5, -5, 4, 0],
                opacity: [0.25, 0.75, 0.35, 0.65, 0.25],
              }}
              transition={{
                duration: 4 + (index % 5),
                repeat: Infinity,
                delay: index * 0.12,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* =========================================================
          GLASS CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          w-[92%]
          max-w-5xl
          mx-auto
          px-6
          sm:px-10
          lg:px-16
          py-14
          sm:py-16
          text-center

          rounded-[32px]

          bg-[#0A2237]/45
          backdrop-blur-xl

          border
          border-[#7FB2E5]/15

          shadow-[0_25px_80px_rgba(0,0,0,0.25)]
        "
      >

        {/* =========================================================
            EXPLORE ME
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="hidden sm:block w-16 h-px bg-gradient-to-r from-transparent to-[#5B9FE3]/60" />

          <span
            className="
              text-[#6AA7E8]
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-semibold
              tracking-[0.18em]
            "
          >
            EXPLORE ME
          </span>

          <span className="hidden sm:block w-16 h-px bg-gradient-to-l from-transparent to-[#5B9FE3]/60" />
        </motion.div>

        {/* =========================================================
            NAME
        ========================================================= */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            tracking-tight
            text-white
            mb-8
          "
        >
          {profile.name}
        </motion.h1>

        {/* =========================================================
            SPECIALIZATION
        ========================================================= */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="
            text-base
            sm:text-lg
            md:text-xl
            font-medium
            tracking-wide
            text-[#B8C9D9]
            mb-12
          "
        >
          <span className="text-[#AFC7DC]">Data Science</span>

          <span className="mx-3 text-[#5B9FE3]">|</span>

          <span className="text-[#AFC7DC]">Machine Learning</span>

          <span className="mx-3 text-[#5B9FE3]">|</span>

          <span className="text-[#AFC7DC]">Data Analysis</span>
        </motion.p>

        {/* =========================================================
            BUTTONS
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >

          {/* View Projects */}
          <button
            onClick={scrollToProjects}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3

              w-full
              sm:w-auto

              min-w-[210px]

              px-7
              py-3.5

              rounded-xl

              bg-[#4F8FD8]/20
              backdrop-blur-md

              border
              border-[#5B9FE3]/50

              text-white
              font-semibold

              shadow-[0_0_25px_rgba(79,143,216,0.08)]

              transition-all
              duration-300

              hover:bg-[#4F8FD8]/30
              hover:border-[#6AA7E8]
              hover:shadow-[0_0_30px_rgba(79,143,216,0.20)]
              hover:-translate-y-1
            "
          >
            View My Projects

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          {/* Download Resume */}
          <a
            href={profile.resumeUrl}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3

              w-full
              sm:w-auto

              min-w-[210px]

              px-7
              py-3.5

              rounded-xl

              bg-white/[0.04]
              backdrop-blur-md

              border
              border-[#7FB2E5]/25

              text-[#E5EDF5]
              font-medium

              transition-all
              duration-300

              hover:bg-white/[0.08]
              hover:border-[#7FB2E5]/50
              hover:-translate-y-1
            "
          >
            Download Resume

            <span className="transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
        </motion.div>

        {/* =========================================================
            SOCIAL LINKS
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              href: profile.github,
              icon: <Github size={19} />,
              label: "GitHub",
            },
            {
              href: profile.linkedin,
              icon: <Linkedin size={19} />,
              label: "LinkedIn",
            },
            {
              href: `mailto:${profile.email}`,
              icon: <Mail size={19} />,
              label: "Email",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel={
                s.label !== "Email"
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={s.label}
              className="
                flex
                items-center
                justify-center

                w-11
                h-11

                rounded-full

                bg-white/[0.03]
                backdrop-blur-md

                border
                border-[#7FB2E5]/20

                text-[#A8B8C8]

                transition-all
                duration-300

                hover:text-white
                hover:border-[#5B9FE3]/60
                hover:bg-[#4F8FD8]/10
                hover:shadow-[0_0_20px_rgba(79,143,216,0.15)]
                hover:-translate-y-1
              "
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.button
        type="button"
        onClick={() => {
          const homeSection = document.querySelector("#home");

          if (homeSection?.nextElementSibling) {
            homeSection.nextElementSibling.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        aria-label="Scroll to next section"
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2

          flex
          flex-col
          items-center
          gap-2

          cursor-pointer
        "
      >
        <div
          className="
            w-6
            h-10
            rounded-full

            border
            border-[#7FB2E5]/50

            flex
            items-start
            justify-center

            p-1.5

            bg-white/[0.02]
            backdrop-blur-sm
          "
        >
          <motion.span
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.4, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="
              w-1.5
              h-1.5
              rounded-full

              bg-[#6AA7E8]

              shadow-[0_0_10px_rgba(106,167,232,0.8)]
            "
          />
        </div>

        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="
            w-2.5
            h-2.5
            border-r
            border-b
            border-[#7FB2E5]/70
            rotate-45
          "
        />
      </motion.button>
    </section>
  );
}