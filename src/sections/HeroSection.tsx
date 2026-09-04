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
        bg-[#081412]
        text-[#F5F1E8]
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
            bg-[#C7A86B]/[0.025]
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
            border-[#C7A86B]/25
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
            bg-[#C7A86B]
            shadow-[0_0_18px_rgba(199,168,107,0.65)]
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
            border-[#C7A86B]/15
            bg-[#C7A86B]/[0.012]
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
            border-[#C7A86B]/25
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
            bg-[#C7A86B]
            shadow-[0_0_20px_rgba(199,168,107,0.65)]
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
            border-[#C7A86B]/20
            bg-[#C7A86B]/[0.015]
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
            bg-[#C7A86B]/15
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
                bg-[#C7A86B]/30
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
                bg-[#C7A86B]/20
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
            bg-[#C7A86B]/55
            shadow-[0_0_12px_rgba(199,168,107,0.45)]
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
            bg-[#C7A86B]/55
            shadow-[0_0_12px_rgba(199,168,107,0.45)]
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
            bg-[#C7A86B]/35
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
                  bg-[#C7A86B]/80
                  shadow-[0_0_10px_rgba(199,168,107,0.3)]
                  sm:w-14
                "
              />

              <span
                className="
                  text-sm
                  font-medium
                  tracking-[0.12em]
                  text-[#C7A86B]
                "
              >
                Hello, I am
              </span>

              <span
                className="
                  h-px
                  w-10
                  bg-[#C7A86B]/80
                  shadow-[0_0_10px_rgba(199,168,107,0.3)]
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
                  bg-[#C7A86B]/35
                  sm:block
                  md:w-28
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  tracking-[0.38em]
                  text-[#C7A86B]
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
                  bg-[#C7A86B]/35
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
                text-[#F5F1E8]

                sm:text-[62px]
                md:text-[76px]
                lg:text-[88px]
              "
            >
              {profile.name}
              <span className="text-[#C7A86B]">.</span>
            </motion.h1>

            {/* SUPPORTING DESCRIPTION */}

            <motion.p
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
                max-w-xl
                px-4
                text-sm
                leading-relaxed
                text-[#9BA8A2]
                sm:text-base
              "
            >
              I support data analysis — turning raw numbers into clear, actionable insights.
            </motion.p>

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
                  border-[#C7A86B]/60
                  bg-[#C7A86B]/[0.08]
                  px-8
                  text-sm
                  font-medium
                  text-[#F5F1E8]
                  shadow-[inset_0_1px_0_rgba(245,241,232,0.05)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#D8BC82]
                  hover:bg-[#C7A86B]/[0.14]
                  hover:shadow-[0_0_28px_rgba(199,168,107,0.13)]
                "
              >
                View Projects

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="
                    text-[#C7A86B]
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
                  border-[#F5F1E8]/15
                  bg-[#F5F1E8]/[0.025]
                  px-8
                  text-sm
                  font-medium
                  text-[#F5F1E8]
                  shadow-[inset_0_1px_0_rgba(245,241,232,0.04)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#C7A86B]/60
                  hover:bg-[#F5F1E8]/[0.05]
                "
              >
                View CV

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="
                    text-[#65736D]
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[#C7A86B]
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
              {/* GitHub */}

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
                  border-[#F5F1E8]/15
                  bg-[#F5F1E8]/[0.025]
                  text-[#9BA8A2]
                  shadow-[inset_0_1px_0_rgba(245,241,232,0.04)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#C7A86B]/60
                  hover:bg-[#C7A86B]/[0.08]
                  hover:text-[#C7A86B]
                "
              >
                <Github size={18} strokeWidth={1.5} />
              </a>

              {/* LinkedIn */}

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
                  border-[#F5F1E8]/15
                  bg-[#F5F1E8]/[0.025]
                  text-[#9BA8A2]
                  shadow-[inset_0_1px_0_rgba(245,241,232,0.04)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#C7A86B]/60
                  hover:bg-[#C7A86B]/[0.08]
                  hover:text-[#C7A86B]
                "
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>

              {/* Email */}

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
                  border-[#F5F1E8]/15
                  bg-[#F5F1E8]/[0.025]
                  text-[#9BA8A2]
                  shadow-[inset_0_1px_0_rgba(245,241,232,0.04)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#C7A86B]/60
                  hover:bg-[#C7A86B]/[0.08]
                  hover:text-[#C7A86B]
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
              text-[#C7A86B]
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
              border-[#C7A86B]/60
              bg-[#C7A86B]/[0.035]
              text-[#C7A86B]
              shadow-[0_0_18px_rgba(199,168,107,0.07)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-[#C7A86B]/10
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