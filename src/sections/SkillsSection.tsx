"use client";

import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/portfolio/ScrollReveal";

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
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C96A4A]">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#F4EFE7] sm:text-4xl">
            Technologies I Use.
          </h2>
        </ScrollReveal>

        {/* Skill Boxes */}
        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {skillCategories.slice(0, 4).map((category) => (
            <StaggerItem key={category.title}>

              <div
                className="
                  group
                  rounded-2xl
                  border
                  border-white/[0.09]
                  bg-[#2A2420]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C96A4A]/40
                "
              >

                {/* Category Header */}
                <div className="mb-4 flex items-center justify-between">

                  <h3 className="text-base font-semibold text-[#F4EFE7]">
                    {category.title}
                  </h3>

                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#C96A4A]
                      opacity-70
                      transition-opacity
                      group-hover:opacity-100
                    "
                  />

                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">

                  {category.skills.flatMap((skill) => [
                    <span
                      key={skill.name}
                      className="
                        rounded-lg
                        border
                        border-[#C96A4A]/20
                        bg-[#C96A4A]/[0.06]
                        px-2.5
                        py-1
                        text-xs
                        font-medium
                        text-[#D8CEC4]
                      "
                    >
                      {skill.name}
                    </span>,

                    ...skill.context.map((context) => (
                      <span
                        key={`${skill.name}-${context}`}
                        className="
                          rounded-lg
                          border
                          border-white/[0.07]
                          bg-white/[0.03]
                          px-2.5
                          py-1
                          text-xs
                          text-[#9F958C]
                        "
                      >
                        {context}
                      </span>
                    )),
                  ])}

                </div>

              </div>

            </StaggerItem>
          ))}

        </StaggerContainer>

      </div>
    </section>
  );
}