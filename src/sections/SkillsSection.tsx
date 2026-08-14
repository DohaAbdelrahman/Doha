"use client";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { skillCategories } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#211C18] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* Header */}
        <ScrollReveal className="mb-10 text-center">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C96A4A]/80">
            Skills
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[#F4EFE7]">
            My Toolkit
          </h2>
        </ScrollReveal>

        {/* Skills */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 0.08}>
              <div
                className="
                  group
                  h-full
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-[#25201C]
                  px-6
                  py-6
                  transition-all
                  duration-300
                  hover:border-[#C96A4A]/25
                  hover:bg-[#29231F]
                "
              >
                {/* Category */}
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#C96A4A]/70
                      transition-all
                      duration-300
                      group-hover:bg-[#C96A4A]
                    "
                  />

                  <h3 className="text-sm font-medium text-[#F4EFE7]">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/[0.05]
                        pb-3
                        last:border-0
                        last:pb-0
                      "
                    >
                      <span className="text-sm text-[#C9C0B8]">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}