"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#211C18] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* Header */}
        <ScrollReveal className="mb-20 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#C96A4A]">
            Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#F4EFE7] sm:text-5xl">
            My Journey.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#B8AEA4] sm:text-base">
            Key milestones, programs, and learning experiences that shaped
            my journey in data science.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div
            className="
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              bg-white/[0.10]
              md:block
            "
          />

          <div className="space-y-10 md:space-y-0">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${exp.title}-${index}`}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -30 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`
                    relative
                    md:grid
                    md:grid-cols-2
                    md:min-h-[250px]
                    ${
                      index !== experiences.length - 1
                        ? "md:pb-10"
                        : ""
                    }
                  `}
                >

                  {/* LEFT */}
                  <div
                    className={`
                      ${
                        isLeft
                          ? "md:pr-14"
                          : "md:col-start-2 md:pl-14"
                      }
                    `}
                  >
                    <div
                      className="
                        group
                        relative
                        rounded-2xl
                        border
                        border-white/[0.10]
                        bg-[#2A2420]
                        p-7
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#C96A4A]/40
                      "
                    >

                      {/* Accent */}
                      <div
                        className="
                          absolute
                          left-0
                          top-6
                          h-10
                          w-[2px]
                          rounded-r-full
                          bg-[#C96A4A]
                          opacity-70
                          transition-opacity
                          group-hover:opacity-100
                        "
                      />

                      {/* Date */}
                      <span
                        className="
                          inline-flex
                          rounded-full
                          border
                          border-[#C96A4A]/20
                          bg-[#C96A4A]/10
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-[#C96A4A]
                        "
                      >
                        {exp.date}
                      </span>

                      {/* Title */}
                      <h3
                        className="
                          mt-5
                          text-xl
                          font-semibold
                          leading-snug
                          text-[#F4EFE7]
                        "
                      >
                        {exp.title}
                      </h3>

                      {/* Organization */}
                      <p className="mt-2 text-sm font-medium text-[#C96A4A]">
                        {exp.organization}
                      </p>

                      {/* Description */}
                      <p className="mt-4 text-sm leading-7 text-[#B8AEA4]">
                        {exp.description}
                      </p>

                      {/* Tags */}
                      {exp.tags && exp.tags.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="
                                rounded-full
                                border
                                border-white/[0.08]
                                bg-white/[0.04]
                                px-3
                                py-1
                                text-xs
                                text-[#B8AEA4]
                              "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CENTER DOT */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-8
                      hidden
                      -translate-x-1/2
                      md:flex
                    "
                  >
                    <div
                      className="
                        h-3
                        w-3
                        rounded-full
                        border-2
                        border-[#211C18]
                        bg-[#C96A4A]
                        shadow-[0_0_0_5px_rgba(201,106,74,0.10)]
                      "
                    />
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}