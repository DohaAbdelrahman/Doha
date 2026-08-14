"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#211C18] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">

        {/* Header */}
        <ScrollReveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#C96A4A]">
            Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#F4EFE7] sm:text-5xl">
            My Journey.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#B8AEA4] sm:text-base">
            Programs, training, and educational experiences that shaped
            my path in data science and technology.
          </p>
        </ScrollReveal>

        {/* Experience Cards */}
        <div className="space-y-5">

          {experiences.map((exp, index) => (
            <motion.article
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
                duration: 0.45,
                delay: index * 0.06,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.10]
                bg-[#2A2420]
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#C96A4A]/40
                sm:p-8
              "
            >

              {/* Accent line */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[2px]
                  bg-[#C96A4A]
                  opacity-50
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* Top Row */}
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                "
              >

                <div>
                  <h3 className="text-xl font-semibold leading-snug text-[#F4EFE7] sm:text-2xl">
                    {exp.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#C96A4A]">
                    {exp.organization}
                  </p>
                </div>

                {/* Date */}
                <span
                  className="
                    w-fit
                    shrink-0
                    rounded-full
                    border
                    border-[#C96A4A]/20
                    bg-[#C96A4A]/10
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-[#C96A4A]
                  "
                >
                  {exp.date}
                </span>

              </div>

              {/* Description */}
              <p className="mt-5 max-w-4xl text-sm leading-7 text-[#B8AEA4]">
                {exp.description}
              </p>

              {/* Tags */}
              {exp.tags && exp.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.04]
                        px-3
                        py-1.5
                        text-xs
                        text-[#B8AEA4]
                        transition-colors
                        duration-200
                        group-hover:border-[#C96A4A]/20
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Bottom */}
              <div
                className="
                  mt-7
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/[0.08]
                  pt-5
                "
              >
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#8E847B]
                  "
                >
                  {exp.type === "education"
                    ? "Education"
                    : "Professional Development"}
                </span>

                <ArrowUpRight
                  size={16}
                  className="
                    text-[#8E847B]
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[#C96A4A]
                  "
                />
              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}