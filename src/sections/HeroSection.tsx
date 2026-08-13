"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

import { profile } from "@/data/portfolio";

export default function HeroSection() {
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
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#06192A]
      "
    >

      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[650px]
          h-[650px]
          rounded-full
          bg-[#2D78C8]/10
          blur-[150px]
          pointer-events-none
        "
      />

      {/* =========================================================
          FLOATING ORBS & PARTICLES
      ========================================================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Large Orb 1 */}
        <motion.div
          className="
            absolute
            w-28
            h-28
            rounded-full
            border
            border-[#7FB2E5]/20
            bg-[#5B9FE3]/5
            backdrop-blur-sm
            shadow-[0_0_60px_rgba(91,159,227,0.10)]
          "
          style={{
            top: "8%",
            left: "8%",
          }}
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

        {/* Large Orb 2 */}
        <motion.div
          className="
            absolute
            w-20
            h-20
            rounded-full
            border
            border-[#6AA7E8]/20
            bg-[#6AA7E8]/5
            backdrop-blur-sm
            shadow-[0_0_50px_rgba(106,167,232,0.10)]
          "
          style={{
            top: "12%",
            right: "10%",
          }}
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

        {/* Medium Orb 1 */}
        <motion.div
          className="
            absolute
            w-16
            h-16
            rounded-full
            border
            border-[#7FB2E5]/20
            bg-[#7FB2E5]/5
            backdrop-blur-sm
          "
          style={{
            bottom: "18%",
            left: "12%",
          }}
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

        {/* Medium Orb 2 */}
        <motion.div
          className="
            absolute
            w-14
            h-14
            rounded-full
            border
            border-[#7FB2E5]/20
            bg-[#7FB2E5]/5
            backdrop-blur-sm
          "
          style={{
            bottom: "20%",
            right: "14%",
          }}
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

        {/* =====================================================
            MANY SMALL FLOATING PARTICLES
        ===================================================== */}

        {[
          [5, 25],
          [8, 55],
          [11, 78],
          [15, 38],
          [18, 88],
          [22, 12],
          [25, 70],
          [28, 92],
          [32, 22],
          [35, 82],
          [39, 8],
          [42, 95],
          [46, 18],
          [50, 87],
          [54, 6],
          [58, 94],
          [62, 30],
          [66, 76],
          [70, 14],
          [74, 91],
          [78, 40],
          [82, 82],
          [86, 10],
          [90, 68],
          [94, 30],
          [20, 50],
          [45, 52],
          [67, 52],
          [88, 50],
        ].map(([top, left], index) => {
          const size = 3 + (index % 3) * 2;

          return (
            <motion.span
              key={index}
              className="
                absolute
                rounded-full
                bg-[#6AA7E8]/45
                shadow-[0_0_10px_rgba(106,167,232,0.30)]
              "
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
              }}
              animate={{
                y: [0, -10, 7, -5, 0],
                x: [0, 5, -5, 4, 0],
                opacity: [0.25, 0.7, 0.35, 0.6, 0.25],
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
          GLASS CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          w-[90%]
          max-w-4xl
          mx-auto
          px-6
          sm:px-10
          lg:px-14
          py-12
          sm:py-14
          text-center

          rounded-[28px]

          bg-[#0A2237]/35
          backdrop-blur-2xl

          border
          border-[#7FB2E5]/12

          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
        "
      >

        {/* =========================================================
            EXPLORE ME
        ========================================================= */}

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
          }}
          className="
            flex
            items-center
            justify-center
            gap-4
            mb-10
          "
        >
          <span
            className="
              hidden
              sm:block
              w-16
              h-px
              bg-gradient-to-r
              from-transparent
              to-[#5B9FE3]/60
            "
          />

          <span
            className="
              text-[#6AA7E8]
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-medium
              tracking-[0.22em]
            "
          >
            EXPLORE ME
          </span>

          <span
            className="
              hidden
              sm:block
              w-16
              h-px
              bg-gradient-to-l
              from-transparent
              to-[#5B9FE3]/60
            "
          />
        </motion.div>

        {/* =========================================================
            NAME
        ========================================================= */}

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
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            tracking-tight
            text-white
            mb-7
          "
        >
          {profile.name}
        </motion.h1>

        {/* =========================================================
            SPECIALIZATION
        ========================================================= */}

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
            flex
            flex-wrap
            items-center
            justify-center
            gap-y-2
            text-base
            sm:text-lg
            md:text-xl
            font-medium
            tracking-wide
            text-[#AFC1D2]
            mb-14
          "
        >
          <span>Data Science</span>

          <span className="mx-3 text-[#5B9FE3]/70">
            |
          </span>

          <span>Machine Learning</span>

          <span className="mx-3 text-[#5B9FE3]/70">
            |
          </span>

          <span>Data Analysis</span>
        </motion.div>

        {/* =========================================================
            CTA BUTTONS
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-4
            mb-14
          "
        >

          {/* View Projects */}

          <button
            type="button"
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

              transition-all
              duration-300

              hover:bg-[#4F8FD8]/30
              hover:border-[#6AA7E8]
              hover:shadow-[0_0_30px_rgba(79,143,216,0.20)]
              hover:-translate-y-1
            "
          >
            View My Projects

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </button>

          {/* Download CV */}

          <a
            href={profile.resumeUrl}
            download
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
            Download CV

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-y-1
              "
            >
              ↓
            </span>
          </a>
        </motion.div>

        {/* =========================================================
            SOCIAL LINKS
        ========================================================= */}

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
            flex
            items-center
            justify-center
            gap-4
          "
        >

          {/* GitHub */}

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
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
            <Github size={19} />
          </a>

          {/* LinkedIn */}

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
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
            <Linkedin size={19} />
          </a>

          {/* Email */}

          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
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
            <Mail size={19} />
          </a>

        </motion.div>
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
          delay: 1.2,
        }}
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

            transition-all
            duration-300

            hover:border-[#6AA7E8]
            hover:shadow-[0_0_15px_rgba(106,167,232,0.25)]
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

        <motion.div
          animate={{
            y: [0, 4, 0],
          }}
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