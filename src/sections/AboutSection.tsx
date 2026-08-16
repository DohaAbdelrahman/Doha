"use client";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { about } from "@/data/portfolio";

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
        bg-[#080D18]
        py-28
        sm:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left orbit */}

        <div
          className="
            absolute
            -left-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#38BDF8]/[0.07]
          "
        />

        <div
          className="
            absolute
            -left-20
            -top-20
            h-[280px]
            w-[280px]
            rounded-full
            border
            border-[#38BDF8]/[0.05]
          "
        />

        {/* Bottom-right orbit */}

        <div
          className="
            absolute
            -bottom-48
            -right-40
            h-[450px]
            w-[450px]
            rounded-full
            border
            border-[#38BDF8]/[0.06]
          "
        />

        {/* Soft center glow */}

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
            bg-[#38BDF8]/[0.018]
            blur-[140px]
          "
        />

        {/* Dot pattern */}

        <div
          className="
            absolute
            right-[5%]
            top-[22%]
            grid
            grid-cols-4
            gap-4
            opacity-25
          "
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              className="
                h-1
                w-1
                rounded-full
                bg-[#38BDF8]/50
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

        <ScrollReveal className="text-center">
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
                w-12
                bg-[#38BDF8]/50
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.38em]
                text-[#38BDF8]
              "
            >
              About Me
            </span>

            <span
              className="
                h-px
                w-12
                bg-[#38BDF8]/50
              "
            />
          </div>

          <h2
            className="
              mt-6
              text-5xl
              font-medium
              tracking-[-0.06em]
              text-[#F8FAFC]
              sm:text-6xl
              md:text-7xl
            "
          >
            Turning data into{" "}
            <span className="text-[#38BDF8]">
              insight.
            </span>
          </h2>
        </ScrollReveal>

        {/* =================================================
            MAIN GLASS PANEL
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.1}
          className="mt-14"
        >
          <article
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[#38BDF8]/25
              bg-white/[0.018]
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:border-[#38BDF8]/45
            "
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
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-52
                w-52
                rounded-full
                border
                border-[#38BDF8]/10
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-28
                w-28
                rounded-full
                border
                border-[#38BDF8]/[0.07]
              "
            />

            <div
              className="
                relative
                grid
                lg:grid-cols-[150px_1fr]
              "
            >
              {/* =================================================
                  NUMBER
              ================================================= */}

              <div
                className="
                  relative
                  border-b
                  border-[#38BDF8]/10
                  px-7
                  py-8
                  lg:border-b-0
                  lg:border-r
                  lg:px-8
                  lg:py-10
                "
              >
                <span
                  className="
                    text-6xl
                    font-light
                    leading-none
                    tracking-[-0.08em]
                    text-[#38BDF8]/20
                  "
                >
                  01
                </span>

                <span
                  className="
                    absolute
                    bottom-8
                    left-8
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#38BDF8]
                    shadow-[0_0_12px_rgba(56,189,248,0.7)]
                  "
                />
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="px-7 py-9 sm:px-10 sm:py-10 lg:px-12">
                {/* Intro */}

                <p
                  className="
                    max-w-4xl
                    text-lg
                    leading-8
                    tracking-[-0.015em]
                    text-[#CBD5E1]
                    sm:text-xl
                  "
                >
                  {about.bio[0]}
                </p>

                {/* Divider */}

                <div className="my-9 h-px bg-[#38BDF8]/10" />

                {/* Approach */}

                <div>
                  <p
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.3em]
                      text-[#38BDF8]
                    "
                  >
                    My Approach
                  </p>

                  <p
                    className="
                      mt-4
                      max-w-4xl
                      text-sm
                      leading-7
                      text-[#94A3B8]
                      sm:text-base
                    "
                  >
                    {about.bio[1]}
                  </p>
                </div>

                {/* =================================================
                    PROCESS
                ================================================= */}

                <div className="mt-8">
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-y-3
                    "
                  >
                    {approachSteps.map(
                      (step, index) => (
                        <div
                          key={step}
                          className="flex items-center"
                        >
                          <span
                            className="
                              text-xs
                              font-medium
                              uppercase
                              tracking-[0.16em]
                              text-[#CBD5E1]
                            "
                          >
                            {step}
                          </span>

                          {index <
                            approachSteps.length - 1 && (
                            <span
                              className="
                                mx-4
                                text-[#38BDF8]/50
                              "
                            >
                              →
                            </span>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom glow line */}

            <span
              className="
                absolute
                bottom-0
                left-1/2
                h-px
                w-0
                -translate-x-1/2
                bg-[#38BDF8]
                shadow-[0_0_15px_rgba(56,189,248,0.6)]
                transition-all
                duration-700
                group-hover:w-1/2
              "
            />
          </article>
        </ScrollReveal>

        {/* =================================================
            FOCUS AREAS
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.15}
          className="mt-16"
        >
          <div
            className="
              flex
              flex-col
              gap-5
              border-t
              border-[#38BDF8]/10
              pt-8
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#38BDF8]
                "
              >
                What I Focus On
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-medium
                  tracking-[-0.04em]
                  text-[#F8FAFC]
                "
              >
                Areas I am exploring
              </h3>
            </div>

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#64748B]
              "
            >
              {String(about.focusAreas.length).padStart(
                2,
                "0"
              )}{" "}
              areas
            </span>
          </div>
        </ScrollReveal>

        {/* =================================================
            FOCUS AREA ROWS
        ================================================= */}

        <div className="mt-5">
          {about.focusAreas.map((area, index) => (
            <ScrollReveal
              key={area.title}
              direction="up"
              delay={index * 0.05}
            >
              <div
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-5
                  border-b
                  border-[#38BDF8]/10
                  py-5
                  transition-all
                  duration-300
                  hover:px-3
                "
              >
                {/* Number */}

                <span
                  className="
                    w-8
                    shrink-0
                    text-[10px]
                    tracking-[0.18em]
                    text-[#64748B]
                    transition-colors
                    duration-300
                    group-hover:text-[#38BDF8]
                  "
                >
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                {/* Title */}

                <h4
                  className="
                    min-w-0
                    text-base
                    font-medium
                    text-[#CBD5E1]
                    transition-colors
                    duration-300
                    group-hover:text-[#38BDF8]
                    sm:text-lg
                  "
                >
                  {area.title}
                </h4>

                {/* Description */}

                <p
                  className="
                    ml-auto
                    hidden
                    max-w-md
                    text-right
                    text-sm
                    leading-6
                    text-[#64748B]
                    md:block
                  "
                >
                  {area.description}
                </p>

                {/* Arrow */}

                <span
                  className="
                    shrink-0
                    text-[#64748B]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#38BDF8]
                  "
                >
                  ↗
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* =================================================
            CLOSING STATEMENT
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.2}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p
            className="
              text-sm
              leading-7
              text-[#64748B]
              sm:text-base
            "
          >
            {about.bio[3]}
          </p>
        </ScrollReveal>

        {/* =================================================
            BOTTOM DECORATION
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.25}
          className="mt-12"
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
                bg-[#38BDF8]/15
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#38BDF8]/60
              "
            />

            <span
              className="
                h-px
                w-16
                bg-[#38BDF8]/15
              "
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}