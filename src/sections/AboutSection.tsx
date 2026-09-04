"use client";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { about, skillCategories } from "@/data/portfolio";

export default function AboutSection() {
  const approachSteps = [
    "Explore",
    "Clean",
    "Analyze",
    "Model",
    "Insight",
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#081412]
        py-24
        sm:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[430px]
            w-[430px]
            rounded-full
            border
            border-[#C7A86B]/[0.06]
          "
        />

        <div
          className="
            absolute
            -right-20
            -top-20
            h-[280px]
            w-[280px]
            rounded-full
            border
            border-[#C7A86B]/[0.045]
          "
        />

        <div
          className="
            absolute
            left-[5%]
            top-[25%]
            grid
            grid-cols-4
            gap-4
            opacity-20
          "
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              className="
                h-1
                w-1
                rounded-full
                bg-[#C7A86B]
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
          sm:px-8
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <ScrollReveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#C7A86B]/50" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#C7A86B]
              "
            >
              About Me
            </span>
          </div>

          <div
            className="
              mt-7
              grid
              gap-8
              lg:grid-cols-[1fr_0.8fr]
              lg:items-end
            "
          >
            <h2
              className="
                max-w-3xl
                text-4xl
                font-medium
                leading-[1.05]
                tracking-[-0.055em]
                text-[#F5F1E8]
                sm:text-5xl
                md:text-6xl
              "
            >
              A little about how I{" "}
              <span className="text-[#C7A86B]">
                work with data.
              </span>
            </h2>

            <p
              className="
                max-w-lg
                text-sm
                leading-7
                text-[#9BA8A2]
                lg:pb-1
              "
            >
              {about.bio[0]}
            </p>
          </div>
        </ScrollReveal>

        {/* =================================================
            APPROACH CARD
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.08}
          className="mt-12"
        >
          <article
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[#C7A86B]/20
              bg-white/[0.018]
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-[#C7A86B]/35
            "
          >
            {/* Decorative circle */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-56
                w-56
                rounded-full
                border
                border-[#C7A86B]/10
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

            <div
              className="
                relative
                grid
                gap-8
                p-7
                sm:p-9
                md:grid-cols-[90px_1fr]
                md:p-10
              "
            >
              {/* Number */}

              <div>
                <span
                  className="
                    text-5xl
                    font-light
                    tracking-[-0.08em]
                    text-[#C7A86B]/25
                  "
                >
                  01
                </span>
              </div>

              {/* Content */}

              <div>
                <p
                  className="
                    max-w-3xl
                    text-xl
                    leading-8
                    text-[#F5F1E8]
                    sm:text-2xl
                  "
                >
                  I turn data into meaningful insights
                  through a structured, problem-focused
                  approach.
                </p>

                <div className="my-7 h-px bg-[#C7A86B]/10" />

                <p
                  className="
                    max-w-3xl
                    text-sm
                    leading-7
                    text-[#9BA8A2]
                    sm:text-base
                  "
                >
                  {about.bio[1]}
                </p>

                {/* Process */}

                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    items-center
                    gap-y-4
                  "
                >
                  {approachSteps.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center"
                    >
                      <span
                        className="
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.16em]
                          text-[#D6D1C7]
                        "
                      >
                        {step}
                      </span>

                      {index <
                        approachSteps.length - 1 && (
                        <span
                          className="
                            mx-3
                            text-[#C7A86B]/50
                          "
                        >
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom hover line */}

            <div
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-[#C7A86B]
                transition-all
                duration-700
                group-hover:w-full
              "
            />
          </article>
        </ScrollReveal>

        {/* =================================================
            FOCUS AREAS + SKILLS
        ================================================= */}

        <div
          className="
            mt-16
            grid
            gap-12
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-16
          "
        >
          {/* =================================================
              FOCUS AREAS
          ================================================= */}

          <ScrollReveal direction="up">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#C7A86B]
                    shadow-[0_0_8px_rgba(199,168,107,0.5)]
                  "
                />

                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-[#C7A86B]
                  "
                >
                  Focus Areas
                </p>
              </div>

              <div className="space-y-3">
                {about.focusAreas.map((area, index) => (
                  <div
                    key={area.title}
                    className="
                      group
                      rounded-xl
                      border
                      border-[#C7A86B]/10
                      bg-white/[0.012]
                      p-5
                      transition-all
                      duration-300
                      hover:border-[#C7A86B]/25
                      hover:bg-[#C7A86B]/[0.025]
                    "
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#C7A86B]/20
                          text-[10px]
                          text-[#C7A86B]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h3
                          className="
                            text-base
                            font-medium
                            text-[#F5F1E8]
                            transition-colors
                            duration-300
                            group-hover:text-[#C7A86B]
                          "
                        >
                          {area.title}
                        </h3>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                            text-[#65736D]
                          "
                        >
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* =================================================
              SKILLS
          ================================================= */}

          <ScrollReveal
            direction="up"
            delay={0.1}
          >
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#C7A86B]
                    shadow-[0_0_8px_rgba(199,168,107,0.5)]
                  "
                />

                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-[#C7A86B]
                  "
                >
                  Skills
                </p>
              </div>

              <div className="space-y-7">
                {skillCategories.map(
                  (category, categoryIndex) => (
                    <div key={category.title}>
                      {/* Category */}

                      <div className="mb-3 flex items-center gap-3">
                        <span
                          className="
                            text-[10px]
                            tracking-[0.16em]
                            text-[#65736D]
                          "
                        >
                          {String(
                            categoryIndex + 1
                          ).padStart(2, "0")}
                        </span>

                        <h3
                          className="
                            text-sm
                            font-medium
                            text-[#D6D1C7]
                          "
                        >
                          {category.title}
                        </h3>

                        <span className="h-px flex-1 bg-[#C7A86B]/10" />
                      </div>

                      {/* Skills */}

                      <div
                        className="
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {category.skills.map(
                          (skill) => (
                            <span
                              key={skill.name}
                              className="
                                group
                                rounded-lg
                                border
                                border-[#C7A86B]/10
                                bg-white/[0.015]
                                px-3
                                py-2
                                text-xs
                                text-[#9BA8A2]
                                transition-all
                                duration-300
                                hover:border-[#C7A86B]/30
                                hover:bg-[#C7A86B]/[0.04]
                                hover:text-[#F5F1E8]
                              "
                            >
                              {skill.name}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* =================================================
            ADDITIONAL SKILLS MARQUEE
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.15}
          className="mt-16"
        >
          <div className="relative overflow-hidden">
            {/* Marquee Header */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C7A86B]/30" />

              <p
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#65736D]
                "
              >
                Technologies I Work With
              </p>
            </div>

            {/* Marquee */}

            <div className="relative overflow-hidden">
              <div className="skills-marquee flex w-max">
                {[...skillCategories, ...skillCategories].flatMap(
                  (category, categoryIndex) =>
                    category.skills.map(
                      (skill, skillIndex) => (
                        <div
                          key={`${categoryIndex}-${skillIndex}-${skill.name}`}
                          className="flex items-center"
                        >
                          <span
                            className="
                              whitespace-nowrap
                              text-sm
                              font-medium
                              tracking-wide
                              text-[#9BA8A2]
                              transition-colors
                              duration-300
                              hover:text-[#C7A86B]
                            "
                          >
                            {skill.name}
                          </span>

                          <span
                            className="
                              mx-6
                              text-[#C7A86B]/35
                            "
                          >
                            •
                          </span>
                        </div>
                      )
                    )
                )}
              </div>

              {/* Left Fade */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  z-10
                  w-20
                  bg-gradient-to-r
                  from-[#081412]
                  to-transparent
                "
              />

              {/* Right Fade */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  right-0
                  z-10
                  w-20
                  bg-gradient-to-l
                  from-[#081412]
                  to-transparent
                "
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}