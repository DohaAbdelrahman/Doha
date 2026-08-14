"use client";

import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/portfolio/ScrollReveal";
import { about } from "@/data/portfolio";

const focusIcons: Record<string, React.ReactNode> = {
  "bar-chart-3": (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),

  brain: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83L12 11.66l-2.83-2.83A4 4 0 0 1 12 2z" />
      <path d="M8 10c-2.21 0-4 1.79-4 4v2h16v-2c0-2.21-1.79-4-4-4H8z" />
    </svg>
  ),

  search: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),

  sparkles: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
      <path d="M19 14l.75 2.75L22.5 17.5l-2.75.75L19 21l-.75-2.75-2.75-.75 2.75-.75L19 14z" />
    </svg>
  ),
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#0A2138]
        py-24
        sm:py-32
      "
    >
      {/* Subtle background glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/4
          h-[400px]
          w-[400px]
          -translate-x-1/2
          rounded-full
          bg-[#4F8FD8]/5
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <ScrollReveal className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#6AA7E8]" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#6AA7E8]
              "
            >
              About Me
            </span>

            <span className="h-px w-8 bg-[#6AA7E8]" />
          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              tracking-[-0.03em]
              text-white

              sm:text-4xl
              md:text-5xl
            "
          >
            Turning data into
            <span className="text-[#6AA7E8]"> insight.</span>
          </h2>
        </ScrollReveal>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <ScrollReveal
          direction="up"
          delay={0.1}
          className="mx-auto mt-10 max-w-3xl text-center"
        >
          <p
            className="
              text-base
              leading-8
              text-[#A8B8C8]

              sm:text-lg
            "
          >
            {about.bio[0]}
          </p>
        </ScrollReveal>

        {/* =====================================================
            MY APPROACH
        ===================================================== */}

        <ScrollReveal
          direction="up"
          delay={0.15}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.025]
              px-6
              py-7
              sm:px-8
              sm:py-8
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
                bg-gradient-to-b
                from-[#6AA7E8]
                via-[#4F8FD8]/60
                to-transparent
              "
            />

            <div className="flex items-start gap-5">
              <div className="hidden pt-1 sm:block">
                <span
                  className="
                    text-xs
                    font-semibold
                    tracking-[0.2em]
                    text-[#6AA7E8]
                  "
                >
                  01
                </span>
              </div>

              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#71879A]
                  "
                >
                  My Approach
                </p>

                <p
                  className="
                    mt-3
                    text-base
                    leading-8
                    text-[#C0CEDB]

                    sm:text-lg
                  "
                >
                  {about.bio[1]}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =====================================================
            FOCUS AREAS
        ===================================================== */}

        <div className="mt-20">
          <ScrollReveal className="mb-8">
            <div className="flex items-end justify-between">
              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#6AA7E8]
                  "
                >
                  What I Focus On
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  Areas of expertise
                </h3>
              </div>

              <span
                className="
                  hidden
                  text-xs
                  text-[#71879A]

                  sm:block
                "
              >
                04 areas
              </span>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="
              grid
              grid-cols-1
              gap-3

              sm:grid-cols-2
            "
          >
            {about.focusAreas.map((area, index) => (
              <StaggerItem key={area.title}>
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-6
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#6AA7E8]/30
                    hover:bg-white/[0.04]
                  "
                >
                  {/* Hover glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-[#4F8FD8]/0
                      blur-[50px]
                      transition-all
                      duration-500

                      group-hover:bg-[#4F8FD8]/10
                    "
                  />

                  <div className="relative z-10">

                    {/* Number + Icon */}

                    <div className="flex items-center justify-between">
                      <span
                        className="
                          text-xs
                          font-medium
                          tracking-[0.2em]
                          text-[#526B80]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/10
                          bg-[#4F8FD8]/5
                          text-[#6AA7E8]
                          transition-all
                          duration-300

                          group-hover:border-[#6AA7E8]/30
                          group-hover:bg-[#4F8FD8]/10
                          group-hover:shadow-[0_0_20px_rgba(106,167,232,0.15)]
                        "
                      >
                        {focusIcons[area.icon]}
                      </div>
                    </div>

                    {/* Title */}

                    <h4
                      className="
                        mt-7
                        text-lg
                        font-semibold
                        text-white
                        transition-colors
                        duration-300

                        group-hover:text-[#8CC1F0]
                      "
                    >
                      {area.title}
                    </h4>

                    {/* Description */}

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-7
                        text-[#8297AA]
                        transition-colors
                        duration-300

                        group-hover:text-[#A8B8C8]
                      "
                    >
                      {area.description}
                    </p>

                    {/* Bottom line */}

                    <div
                      className="
                        mt-6
                        h-px
                        w-0
                        bg-[#6AA7E8]
                        transition-all
                        duration-500

                        group-hover:w-12
                      "
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}

        <ScrollReveal
          direction="up"
          delay={0.1}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p
            className="
              text-sm
              leading-7
              text-[#71879A]
            "
          >
            {about.bio[3]}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}