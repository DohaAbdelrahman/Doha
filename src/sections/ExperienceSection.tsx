"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
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
            -right-32
            -top-32
            h-[360px]
            w-[360px]
            rounded-full
            border
            border-[#C7A86B]/[0.07]
          "
        />

        <div
          className="
            absolute
            -left-32
            -bottom-40
            h-[380px]
            w-[380px]
            rounded-full
            border
            border-[#C7A86B]/[0.05]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C7A86B]/[0.01]
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
          px-6
          sm:px-8
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <ScrollReveal className="mb-12 text-center">
          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-10
                bg-[#C7A86B]/50
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-[#C7A86B]
              "
            >
              Experience
            </span>

            <span
              className="
                h-px
                w-10
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
            "
          >
            My Journey
            <span className="text-[#C7A86B]">.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-[#9BA8A2]
            "
          >
            Training programs and experiences that shaped
            my path in data science and technology.
          </p>
        </ScrollReveal>

        {/* =================================================
            EXPERIENCE LIST
        ================================================= */}

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ScrollReveal
              key={`${exp.title}-${index}`}
              delay={index * 0.05}
            >
              <ExperienceCard
                exp={exp}
                index={index}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom decoration */}

        <div
          className="
            mt-12
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px w-14 bg-[#C7A86B]/15" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#C7A86B]/60" />

          <span className="h-px w-14 bg-[#C7A86B]/15" />
        </div>
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
}: {
  exp: {
    title: string;
    organization: string;
    location: string;
    mode: "Remote" | "On-Site" | "Hybrid";
    date: string;
    description: string;
    achievements: string[];
    tags: string[];
    verifyUrl?: string;
  };
  index: number;
}) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-[#C7A86B]/15
        bg-white/[0.018]
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#C7A86B]/35
        hover:bg-[#C7A86B]/[0.018]
        sm:p-6
      "
    >
      {/* Subtle glass highlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/[0.025]
          via-transparent
          to-transparent
        "
      />

      {/* =================================================
          TOP ROW
      ================================================= */}

      <div
        className="
          relative
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-start
          sm:justify-between
        "
      >
        <div className="min-w-0">
          {/* Number + Type */}

          <div className="mb-2 flex items-center gap-3">
            <span
              className="
                text-xs
                font-medium
                tracking-[0.12em]
                text-[#C7A86B]/60
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="h-px w-5 bg-[#C7A86B]/20" />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#65736D]
              "
            >
              {exp.type === "program"
                ? "Training / Program"
                : "Milestone"}
            </span>
          </div>

          {/* Title */}

          <h3
            className="
              text-xl
              font-medium
              leading-tight
              tracking-[-0.025em]
              text-[#F5F1E8]
              transition-colors
              duration-300
              group-hover:text-[#C7A86B]
              sm:text-2xl
            "
          >
            {exp.title}
          </h3>

          {/* Organization */}

          <p
            className="
              mt-1.5
              text-sm
              font-medium
              text-[#C7A86B]
            "
          >
            {exp.organization}
          </p>
        </div>

        {/* Verify */}

        {exp.verifyUrl && (
          <a
            href={exp.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-2
              rounded-lg
              border
              border-[#C7A86B]/25
              px-3
              py-2
              text-[10px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-[#F5F1E8]
              transition-all
              duration-200
              hover:border-[#C7A86B]/60
              hover:bg-[#C7A86B]/[0.06]
            "
          >
            Verify

            <ArrowUpRight
              size={13}
              className="text-[#C7A86B]"
            />
          </a>
        )}
      </div>

      {/* =================================================
          META
      ================================================= */}

      <div
        className="
          relative
          mt-4
          flex
          flex-wrap
          items-center
          gap-x-5
          gap-y-2
          text-xs
          text-[#65736D]
        "
      >
        <span className="flex items-center gap-1.5">
          <CalendarDays
            size={13}
            className="text-[#C7A86B]/70"
          />

          {exp.date}
        </span>

        <span className="hidden h-3 w-px bg-[#C7A86B]/15 sm:block" />

        <span className="flex items-center gap-1.5">
          <MapPin
            size={13}
            className="text-[#C7A86B]/70"
          />

          {exp.location}
        </span>

        <span className="hidden h-3 w-px bg-[#C7A86B]/15 sm:block" />

        <span className="text-[#9BA8A2]">
          {exp.mode}
        </span>
      </div>

      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <p
        className="
          relative
          mt-5
          max-w-4xl
          text-sm
          leading-6
          text-[#9BA8A2]
        "
      >
        {exp.description}
      </p>

      {/* =================================================
          KEY ACHIEVEMENTS
      ================================================= */}

      {exp.achievements?.length > 0 && (
        <div
          className="
            relative
            mt-5
            border-t
            border-[#C7A86B]/10
            pt-5
          "
        >
          <p
            className="
              mb-3
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#F5F1E8]
            "
          >
            Key Achievements
          </p>

          <ul className="grid gap-2 sm:grid-cols-2">
            {exp.achievements
              .slice(0, 3)
              .map((achievement) => (
                <li
                  key={achievement}
                  className="
                    flex
                    items-start
                    gap-2.5
                    text-xs
                    leading-5
                    text-[#9BA8A2]
                  "
                >
                  <span
                    className="
                      mt-[7px]
                      h-1
                      w-1
                      shrink-0
                      rounded-full
                      bg-[#C7A86B]
                    "
                  />

                  <span>{achievement}</span>
                </li>
              ))}
          </ul>
        </div>
      )}

      {/* =================================================
          TECHNOLOGIES
      ================================================= */}

      {exp.tags?.length > 0 && (
        <div
          className="
            relative
            mt-5
            flex
            flex-wrap
            gap-1.5
          "
        >
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-[#C7A86B]/10
                bg-[#C7A86B]/[0.025]
                px-2.5
                py-1
                text-[10px]
                text-[#65736D]
                transition-colors
                duration-200
                group-hover:border-[#C7A86B]/20
                group-hover:text-[#9BA8A2]
              "
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Bottom hover line */}

      <span
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-0
          -translate-x-1/2
          bg-[#C7A86B]
          transition-all
          duration-500
          group-hover:w-1/3
        "
      />
    </motion.article>
  );
}