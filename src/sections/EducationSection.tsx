"use client";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

export default function EducationSection() {
  const academicFocus = [
    "Problem Solving",
    "Algorithms & Data Structures",
    "Object-Oriented Programming",
    "Database Management",
    "Software Development",
  ];

  return (
    <section
      id="education"
      className="
        relative
        overflow-hidden
        bg-[#081412]
        py-28
        sm:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top right orbit */}

        <div
          className="
            absolute
            -right-36
            -top-36
            h-[430px]
            w-[430px]
            rounded-full
            border
            border-[#C7A86B]/[0.08]
          "
        />

        <div
          className="
            absolute
            -right-16
            -top-16
            h-[300px]
            w-[300px]
            rounded-full
            border
            border-[#C7A86B]/[0.05]
          "
        />

        {/* Bottom left orbit */}

        <div
          className="
            absolute
            -bottom-48
            -left-36
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#C7A86B]/[0.06]
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
            bg-[#C7A86B]/[0.015]
            blur-[140px]
          "
        />

        {/* Dots */}

        <div
          className="
            absolute
            left-[4%]
            top-[25%]
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
                bg-[#C7A86B]/40
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

        <ScrollReveal className="mb-14 text-center">
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
                bg-[#C7A86B]/50
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#C7A86B]
              "
            >
              Education
            </span>

            <span
              className="
                h-px
                w-12
                bg-[#C7A86B]/50
              "
            />
          </div>

          <h2
            className="
              text-5xl
              font-medium
              tracking-[-0.06em]
              text-[#F5F1E8]
              sm:text-6xl
              md:text-7xl
            "
          >
            Academic Background
            <span className="text-[#C7A86B]">
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
              text-[#9BA8A2]
              sm:text-base
            "
          >
            My academic foundation in computer science
            and information technology.
          </p>
        </ScrollReveal>

        {/* =================================================
            EDUCATION GLASS PANEL
        ================================================= */}

        <ScrollReveal>
          <article
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[#C7A86B]/20
              bg-white/[0.018]
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:border-[#C7A86B]/40
              hover:bg-[#C7A86B]/[0.02]
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

            {/* Decorative orbit */}

            <div
              className="
                pointer-events-none
                absolute
                -left-24
                -top-24
                h-52
                w-52
                rounded-full
                border
                border-[#C7A86B]/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -left-10
                -top-10
                h-28
                w-28
                rounded-full
                border
                border-[#C7A86B]/10
              "
            />

            {/* =================================================
                DESKTOP GRID
            ================================================= */}

            <div
              className="
                relative
                grid
                lg:grid-cols-[180px_1fr_0.8fr]
              "
            >
              {/* =================================================
                  NUMBER / ICON
              ================================================= */}

              <div
                className="
                  relative
                  flex
                  min-h-[220px]
                  flex-col
                  items-center
                  justify-center
                  border-b
                  border-[#C7A86B]/10
                  px-6
                  lg:min-h-[390px]
                  lg:border-b-0
                  lg:border-r
                "
              >
                {/* Number */}

                <span
                  className="
                    absolute
                    left-6
                    top-6
                    text-6xl
                    font-light
                    leading-none
                    tracking-[-0.08em]
                    text-[#C7A86B]/20
                  "
                >
                  01
                </span>

                {/* University Icon */}

                <div
                  className="
                    relative
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C7A86B]/30
                    bg-[#C7A86B]/[0.025]
                    shadow-[inset_0_0_35px_rgba(199,168,107,0.025)]
                    transition-all
                    duration-500
                    group-hover:border-[#C7A86B]/55
                  "
                >
                  <div
                    className="
                      absolute
                      inset-3
                      rounded-full
                      border
                      border-[#C7A86B]/10
                    "
                  />

                  <GraduationCap
                    size={42}
                    strokeWidth={1.1}
                    className="
                      relative
                      text-[#C7A86B]
                    "
                  />
                </div>

                {/* Small dot */}

                <span
                  className="
                    absolute
                    bottom-8
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#C7A86B]
                    shadow-[0_0_12px_rgba(199,168,107,0.65)]
                  "
                />
              </div>

              {/* =================================================
                  UNIVERSITY INFO
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  justify-center
                  border-b
                  border-[#C7A86B]/10
                  px-7
                  py-9
                  sm:px-10
                  lg:border-b-0
                  lg:border-r
                  lg:px-12
                "
              >
                {/* Date */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-[#C7A86B]
                  "
                >
                  <Calendar
                    size={13}
                    strokeWidth={1.5}
                  />

                  <span>
                    October 2023 — Present
                  </span>
                </div>

                {/* University + Faculty */}

                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    items-baseline
                    gap-x-3
                    gap-y-1
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-medium
                      leading-tight
                      tracking-[-0.045em]
                      text-[#F5F1E8]
                      sm:text-3xl
                    "
                  >
                    Helwan National University
                  </h3>

                  <span
                    className="
                      text-sm
                      font-medium
                      leading-6
                      text-[#C7A86B]
                      sm:text-base
                    "
                  >
                    Computer Science &amp; Information Technology
                  </span>
                </div>

                {/* Degree */}

                <p
                  className="
                    mt-3
                    text-base
                    font-medium
                    leading-6
                    text-[#B8C1BC]
                    sm:text-lg
                  "
                >
                  B.Sc. Data Science &amp; AI
                </p>

                {/* GPA */}

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-[#C7A86B]
                  "
                >
                  GPA: 2.6
                </p>

                {/* Location */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-[#9BA8A2]
                  "
                >
                  <MapPin
                    size={14}
                    strokeWidth={1.5}
                    className="text-[#C7A86B]"
                  />

                  <span>
                    Cairo, Egypt
                  </span>
                </div>

                {/* Description */}

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-sm
                    leading-7
                    text-[#9BA8A2]
                  "
                >
                  Building a strong academic foundation
                  in computer science and information
                  technology, with an emphasis on
                  problem-solving, programming,
                  algorithms, and teamwork.
                </p>
              </div>

              {/* =================================================
                  ACADEMIC FOCUS
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  justify-center
                  px-7
                  py-9
                  sm:px-10
                  lg:px-10
                  xl:px-12
                "
              >
                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-[#C7A86B]
                  "
                >
                  Academic Focus
                </p>

                <div
                  className="
                    mt-7
                    space-y-5
                  "
                >
                  {academicFocus.map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#C7A86B]
                        "
                      />

                      <span
                        className="
                          text-sm
                          text-[#B8C1BC]
                        "
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom accent */}

                <div
                  className="
                    mt-8
                    h-px
                    w-16
                    bg-[#C7A86B]/40
                  "
                />
              </div>
            </div>

            {/* Bottom glass line */}

            <span
              className="
                absolute
                bottom-0
                left-1/2
                h-px
                w-0
                -translate-x-1/2
                bg-[#C7A86B]
                shadow-[0_0_15px_rgba(199,168,107,0.5)]
                transition-all
                duration-700
                group-hover:w-1/2
              "
            />
          </article>
        </ScrollReveal>

        {/* =================================================
            BOTTOM DECORATION
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.2}
          className="mt-14"
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
                bg-[#C7A86B]/15
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#C7A86B]/60
              "
            />

            <span
              className="
                h-px
                w-16
                bg-[#C7A86B]/15
              "
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}