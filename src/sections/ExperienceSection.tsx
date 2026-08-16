"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Building2,
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
        py-28
        sm:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top right circles */}

        <div
          className="
            absolute
            -right-36
            -top-36
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#C7A86B]/[0.07]
          "
        />

        <div
          className="
            absolute
            -right-16
            -top-16
            h-[280px]
            w-[280px]
            rounded-full
            border
            border-[#C7A86B]/[0.05]
          "
        />

        {/* Bottom left */}

        <div
          className="
            absolute
            -bottom-52
            -left-40
            h-[450px]
            w-[450px]
            rounded-full
            border
            border-[#C7A86B]/[0.05]
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
            bg-[#C7A86B]/[0.012]
            blur-[140px]
          "
        />

        {/* Dots */}

        <div
          className="
            absolute
            left-[4%]
            top-[18%]
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
          max-w-5xl
          px-6
          sm:px-8
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <ScrollReveal className="mb-16 text-center">
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

            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#C7A86B]
              "
            >
              Experience
            </p>

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
            My Journey
            <span className="text-[#C7A86B]">.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-[#9BA8A2]
              sm:text-base
            "
          >
            Training programs, scholarships, and practical
            experiences that shaped my path in data science
            and technology.
          </p>
        </ScrollReveal>

        {/* =================================================
            EXPERIENCE CARDS
        ================================================= */}

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollReveal
              key={`${exp.title}-${index}`}
              delay={index * 0.06}
            >
              <ExperienceCard
                exp={exp}
                index={index}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom decoration */}

        <ScrollReveal
          direction="up"
          delay={0.2}
          className="mt-16"
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
    date: string;
    description: string;
    location?: string;
    mode?: string;
    achievements?: string[];
    tags?: string[];
    type?: string;
    verifyUrl?: string;
  };
  index: number;
}) {
  return (
    <motion.article
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[#C7A86B]/20
        bg-white/[0.018]
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-[#C7A86B]/40
        hover:bg-[#C7A86B]/[0.025]
        sm:p-8
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
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          border
          border-[#C7A86B]/[0.08]
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      {/* =================================================
          TOP
      ================================================= */}

      <div
        className="
          relative
          flex
          flex-col
          gap-5
          lg:flex-row
          lg:items-start
          lg:justify-between
        "
      >
        <div className="min-w-0">
          {/* Number */}

          <div
            className="
              mb-4
              text-3xl
              font-light
              leading-none
              tracking-[-0.08em]
              text-[#C7A86B]/25
              transition-colors
              duration-300
              group-hover:text-[#C7A86B]/55
            "
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Title */}

          <h3
            className="
              text-2xl
              font-medium
              leading-tight
              tracking-[-0.035em]
              text-[#F5F1E8]
              transition-colors
              duration-300
              group-hover:text-[#C7A86B]
              sm:text-3xl
            "
          >
            {exp.title}
          </h3>

          {/* Organization */}

          <p
            className="
              mt-3
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
              group/verify
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-2
              rounded-xl
              border
              border-[#C7A86B]/25
              bg-white/[0.02]
              px-4
              py-2.5
              text-xs
              font-medium
              text-[#F5F1E8]
              transition-all
              duration-300
              hover:border-[#C7A86B]/60
              hover:bg-[#C7A86B]/[0.06]
            "
          >
            Verify

            <ArrowUpRight
              size={14}
              className="
                text-[#C7A86B]
                transition-transform
                duration-300
                group-hover/verify:-translate-y-0.5
                group-hover/verify:translate-x-0.5
              "
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
          mt-7
          flex
          flex-wrap
          gap-x-6
          gap-y-3
          border-t
          border-[#C7A86B]/10
          pt-5
        "
      >
        {exp.mode && (
          <MetaItem label="Mode">
            {exp.mode}
          </MetaItem>
        )}

        {exp.location && (
          <MetaItem
            icon={<MapPin size={14} />}
            label="Location"
          >
            {exp.location}
          </MetaItem>
        )}

        <MetaItem
          icon={<CalendarDays size={14} />}
          label="Date"
        >
          {exp.date}
        </MetaItem>

        <MetaItem
          icon={<Building2 size={14} />}
          label="Organization"
        >
          {exp.organization}
        </MetaItem>
      </div>

      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <div className="relative mt-7">
        <p
          className="
            max-w-4xl
            text-sm
            leading-7
            text-[#9BA8A2]
            sm:text-[15px]
          "
        >
          {exp.description}
        </p>
      </div>

      {/* =================================================
          ACHIEVEMENTS
      ================================================= */}

      {exp.achievements &&
        exp.achievements.length > 0 && (
          <div
            className="
              relative
              mt-8
              border-t
              border-[#C7A86B]/10
              pt-7
            "
          >
            <h4
              className="
                mb-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#F5F1E8]
              "
            >
              Key Achievements
            </h4>

            <ul className="space-y-3">
              {exp.achievements.map(
                (achievement) => (
                  <li
                    key={achievement}
                    className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      leading-6
                      text-[#9BA8A2]
                    "
                  >
                    <span
                      className="
                        mt-2
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-[#C7A86B]
                        shadow-[0_0_8px_rgba(199,168,107,0.35)]
                      "
                    />

                    <span>{achievement}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        )}

      {/* =================================================
          TECHNOLOGIES
      ================================================= */}

      {exp.tags && exp.tags.length > 0 && (
        <div
          className="
            relative
            mt-8
            border-t
            border-[#C7A86B]/10
            pt-7
          "
        >
          <h4
            className="
              mb-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#F5F1E8]
            "
          >
            Technologies Used
          </h4>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-[#C7A86B]/15
                  bg-[#C7A86B]/[0.035]
                  px-3
                  py-1.5
                  text-xs
                  text-[#9BA8A2]
                  transition-all
                  duration-300
                  hover:border-[#C7A86B]/40
                  hover:bg-[#C7A86B]/[0.07]
                  hover:text-[#F5F1E8]
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bottom accent */}

      <span
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-0
          -translate-x-1/2
          bg-[#C7A86B]
          shadow-[0_0_14px_rgba(199,168,107,0.45)]
          transition-all
          duration-500
          group-hover:w-1/2
        "
      />
    </motion.article>
  );
}

/* =============================================================
   META ITEM
============================================================= */

function MetaItem({
  icon,
  label,
  children,
}: {
  icon?: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      {icon && (
        <span className="text-[#C7A86B]">
          {icon}
        </span>
      )}

      <span
        className="
          text-[10px]
          uppercase
          tracking-[0.15em]
          text-[#65736D]
        "
      >
        {label}:
      </span>

      <span
        className="
          text-xs
          text-[#9BA8A2]
        "
      >
        {children}
      </span>
    </div>
  );
}