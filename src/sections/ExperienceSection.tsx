"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#07100D]
        py-28
        sm:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top right circles */}

        <div
          className="
            absolute
            -right-36
            -top-36
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#A7B68D]/[0.07]
          "
        />

        <div
          className="
            absolute
            -right-16
            -top-16
            h-[280px]
            w-[280px]
            rounded-full
            border
            border-[#A7B68D]/[0.05]
          "
        />

        {/* Bottom left circle */}

        <div
          className="
            absolute
            -bottom-52
            -left-40
            h-[450px]
            w-[450px]
            rounded-full
            border
            border-[#A7B68D]/[0.06]
          "
        />

        {/* Soft glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#A7B68D]/[0.018]
            blur-[140px]
          "
        />

        {/* Dots */}

        <div
          className="
            absolute
            left-[4%]
            top-[20%]
            grid
            grid-cols-4
            gap-4
            opacity-30
          "
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              className="
                h-1
                w-1
                rounded-full
                bg-[#A7B68D]/50
              "
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          px-6
          sm:px-10
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <ScrollReveal className="mb-20 text-center">
          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-12
                bg-[#A7B68D]/50
              "
            />

            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#A7B68D]
              "
            >
              Journey
            </p>

            <span
              className="
                h-px
                w-12
                bg-[#A7B68D]/50
              "
            />
          </div>

          <h2
            className="
              text-5xl
              font-medium
              tracking-[-0.06em]
              text-[#F5F3EC]
              sm:text-6xl
              md:text-7xl
            "
          >
            My Journey
            <span className="text-[#A7B68D]">
              .
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-[#8D9489]
              sm:text-base
            "
          >
            Programs, training, and experiences that
            shaped my path in data science and technology.
          </p>
        </ScrollReveal>

        {/* =================================================
            TIMELINE
        ================================================= */}

        <div className="relative">
          {/* Center line */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-0
              hidden
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-[#A7B68D]/30
              to-transparent
              md:block
            "
          />

          {/* Mobile line */}

          <div
            className="
              absolute
              bottom-0
              left-[10px]
              top-0
              w-px
              bg-gradient-to-b
              from-transparent
              via-[#A7B68D]/30
              to-transparent
              md:hidden
            "
          />

          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${exp.title}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="relative"
                >
                  {/* =================================================
                      DESKTOP LAYOUT
                  ================================================= */}

                  <div className="hidden md:grid md:grid-cols-2 md:gap-16">
                    {/* LEFT */}

                    <div
                      className={
                        isLeft
                          ? "flex justify-end"
                          : "invisible"
                      }
                    >
                      {isLeft && (
                        <ExperienceCard
                          exp={exp}
                          index={index}
                          align="right"
                        />
                      )}
                    </div>

                    {/* RIGHT */}

                    <div
                      className={
                        !isLeft
                          ? "flex justify-start"
                          : "invisible"
                      }
                    >
                      {!isLeft && (
                        <ExperienceCard
                          exp={exp}
                          index={index}
                          align="left"
                        />
                      )}
                    </div>
                  </div>

                  {/* =================================================
                      CENTER DOT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-8
                      z-20
                      hidden
                      -translate-x-1/2
                      md:block
                    "
                  >
                    <div
                      className="
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#A7B68D]/45
                        bg-[#07100D]
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#A7B68D]
                          shadow-[0_0_12px_rgba(167,182,141,0.8)]
                        "
                      />
                    </div>
                  </div>

                  {/* =================================================
                      MOBILE
                  ================================================= */}

                  <div className="pl-8 md:hidden">
                    <ExperienceCard
                      exp={exp}
                      index={index}
                      align="left"
                    />
                  </div>

                  {/* Mobile dot */}

                  <div
                    className="
                      absolute
                      left-[10px]
                      top-8
                      z-20
                      -translate-x-1/2
                      md:hidden
                    "
                  >
                    <div
                      className="
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#A7B68D]/45
                        bg-[#07100D]
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#A7B68D]
                        "
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.2}
          className="mt-16"
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-16
                bg-[#A7B68D]/15
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#A7B68D]/60
              "
            />

            <span
              className="
                h-px
                w-16
                bg-[#A7B68D]/15
              "
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* =============================================================
   EXPERIENCE CARD
============================================================= */

function ExperienceCard({
  exp,
  index,
  align,
}: {
  exp: {
    title: string;
    organization: string;
    date: string;
    description: string;
    tags?: string[];
    type?: string;
  };
  index: number;
  align: "left" | "right";
}) {
  return (
    <article
      className={`
        group
        relative
        w-full
        max-w-[510px]
        overflow-hidden
        rounded-2xl
        border
        border-[#A7B68D]/20
        bg-white/[0.018]
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#A7B68D]/50
        hover:bg-[#A7B68D]/[0.035]
        sm:p-7
        ${
          align === "right"
            ? "text-left md:text-right"
            : "text-left"
        }
      `}
    >
      {/* Glass highlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/[0.035]
          via-transparent
          to-transparent
        "
      />

      {/* Decorative circle */}

      <div
        className={`
          pointer-events-none
          absolute
          -top-12
          h-32
          w-32
          rounded-full
          border
          border-[#A7B68D]/10
          transition-transform
          duration-700
          group-hover:scale-125
          ${
            align === "right"
              ? "-left-12"
              : "-right-12"
          }
        `}
      />

      {/* Top */}

      <div
        className={`
          relative
          flex
          items-start
          justify-between
          gap-4
          ${
            align === "right"
              ? "md:flex-row-reverse"
              : ""
          }
        `}
      >
        <span
          className="
            text-4xl
            font-light
            leading-none
            tracking-[-0.08em]
            text-[#A7B68D]/20
            transition-colors
            duration-300
            group-hover:text-[#A7B68D]/60
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <ArrowUpRight
          size={18}
          strokeWidth={1.4}
          className="
            text-[#667068]
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-[#A7B68D]
          "
        />
      </div>

      {/* Organization */}

      <p
        className="
          relative
          mt-7
          text-[9px]
          font-medium
          uppercase
          tracking-[0.25em]
          text-[#A7B68D]
        "
      >
        {exp.organization}
      </p>

      {/* Title */}

      <h3
        className="
          relative
          mt-2
          text-xl
          font-medium
          leading-tight
          tracking-[-0.03em]
          text-[#F5F3EC]
          transition-colors
          duration-300
          group-hover:text-[#A7B68D]
          sm:text-2xl
        "
      >
        {exp.title}
      </h3>

      {/* Date */}

      <p
        className="
          relative
          mt-3
          text-[10px]
          uppercase
          tracking-[0.18em]
          text-[#667068]
        "
      >
        {exp.date}
      </p>

      {/* Description */}

      <p
        className="
          relative
          mt-4
          text-sm
          leading-6
          text-[#8D9489]
        "
      >
        {exp.description}
      </p>

      {/* Tags */}

      {exp.tags && exp.tags.length > 0 && (
        <div
          className={`
            relative
            mt-4
            flex
            flex-wrap
            gap-x-3
            gap-y-1.5
            ${
              align === "right"
                ? "md:justify-end"
                : ""
            }
          `}
        >
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="
                text-[9px]
                uppercase
                tracking-[0.1em]
                text-[#707A72]
              "
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Bottom line */}

      <span
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-0
          -translate-x-1/2
          bg-[#A7B68D]
          shadow-[0_0_12px_rgba(167,182,141,0.6)]
          transition-all
          duration-500
          group-hover:w-2/3
        "
      />
    </article>
  );
}