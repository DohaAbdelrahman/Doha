"use client";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { Calendar, MapPin, BookOpen } from "lucide-react";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="bg-[#211C18] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* Header */}
        <ScrollReveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#C96A4A]">
            Education
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#F4EFE7] sm:text-5xl">
            Academic Background.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#B8AEA4] sm:text-base">
            My academic foundation in computer science and information
            technology.
          </p>
        </ScrollReveal>

        {/* Education Card */}
        <ScrollReveal>
          <article
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.10]
              bg-[#2A2420]
              transition-all
              duration-300
              hover:border-[#C96A4A]/40
              hover:shadow-2xl
            "
          >
            {/* Accent */}
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-[2px]
                bg-[#C96A4A]
                opacity-60
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            <div className="grid md:grid-cols-[0.9fr_1.1fr]">

              {/* ================= IMAGE ================= */}

              <div className="relative min-h-[280px] overflow-hidden md:min-h-[500px]">
                <img
                  src="Image/helwan.jpg"
                  alt="Helwan National University"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#211C18]/70
                    via-transparent
                    to-transparent
                  "
                />

                {/* Location */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-[#211C18]/75
                    px-3
                    py-2
                    text-xs
                    text-[#F4EFE7]
                    backdrop-blur-md
                  "
                >
                  <MapPin size={14} className="text-[#C96A4A]" />
                  Cairo, Egypt
                </div>
              </div>

              {/* ================= CONTENT ================= */}

              <div className="flex flex-col justify-center p-7 sm:p-9 md:p-12">

                {/* Date */}
                <div
                  className="
                    mb-5
                    flex
                    w-fit
                    items-center
                    gap-2
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
                  <Calendar size={14} />
                  October 2023 — Present
                </div>

                {/* University */}
                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-tight
                    text-[#F4EFE7]
                    sm:text-3xl
                  "
                >
                  Helwan National University
                </h3>

                {/* Major */}
                <p className="mt-3 text-base font-medium text-[#C96A4A]">
                  Computer Science &amp; Information Technology
                </p>

                {/* Description */}
                <p className="mt-6 text-sm leading-7 text-[#B8AEA4] sm:text-base">
                  Building a strong academic foundation in computer science
                  and information technology, with an emphasis on
                  problem-solving, programming, algorithms, and teamwork.
                </p>

                {/* Divider */}
                <div className="my-7 h-px bg-white/[0.08]" />

                {/* Key Takeaways */}
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <BookOpen
                      size={17}
                      className="text-[#C96A4A]"
                    />

                    <h4 className="text-sm font-semibold text-[#F4EFE7]">
                      Key Takeaways
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Teamwork and project management",
                      "C++, Java, and Python programming",
                      "Object-Oriented Programming, data structures, and algorithms",
                      "Web development and database management",
                      "Building a strong foundation for specialization",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[#B8AEA4]"
                      >
                        <span
                          className="
                            mt-2
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-[#C96A4A]
                          "
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </article>
        </ScrollReveal>

      </div>
    </section>
  );
}