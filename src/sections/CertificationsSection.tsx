"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { certifications } from "@/data/portfolio";

const colors = {
  background: "#07100D",
  cream: "#F5F3EC",
  olive: "#A7B68D",
  muted: "#8D9489",
  border: "rgba(167, 182, 141, 0.20)",
};

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="
        relative
        overflow-hidden
        bg-[#07100D]
        py-28
        sm:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Large orbital circles */}

        <div
          className="
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#A7B68D]/[0.07]
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
            border-[#A7B68D]/[0.05]
          "
        />

        {/* Bottom orbit */}

        <div
          className="
            absolute
            -bottom-52
            -left-40
            h-[440px]
            w-[440px]
            rounded-full
            border
            border-[#A7B68D]/[0.06]
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
            bg-[#A7B68D]/[0.018]
            blur-[140px]
          "
        />

        {/* Dot pattern */}

        <div
          className="
            absolute
            left-[5%]
            top-[20%]
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
                bg-[#A7B68D]/50
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
                w-10
                bg-[#A7B68D]/50
              "
            />

            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#A7B68D]
              "
            >
              Learning & Credentials
            </p>

            <span
              className="
                h-px
                w-10
                bg-[#A7B68D]/50
              "
            />
          </div>

          <h2
            className="
              text-5xl
              font-medium
              tracking-[-0.06em]
              text-[#F5F3EC]
              sm:text-6xl
              md:text-7xl
            "
          >
            Certifications
            <span className="text-[#A7B68D]">
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
              text-[#8D9489]
              sm:text-base
            "
          >
            Professional certifications and learning
            milestones across data science,
            machine learning, and AI.
          </p>
        </ScrollReveal>

        {/* =================================================
            CERTIFICATION GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {certifications.map((cert, index) => (
            <motion.article
              key={`${cert.title}-${index}`}
              initial={{
                opacity: 0,
                y: 20,
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
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="
                group
                relative
                flex
                min-h-[250px]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-[#A7B68D]/20
                bg-white/[0.018]
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#A7B68D]/55
                hover:bg-[#A7B68D]/[0.035]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              "
            >
              {/* =================================================
                  CARD DECORATION
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-28
                  w-28
                  rounded-full
                  border
                  border-[#A7B68D]/10
                  transition-transform
                  duration-700
                  group-hover:scale-125
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  right-6
                  top-7
                  h-1
                  w-1
                  rounded-full
                  bg-[#A7B68D]/50
                  shadow-[0_0_10px_rgba(167,182,141,0.5)]
                "
              />

              {/* =================================================
                  TOP ROW
              ================================================= */}

              <div
                className="
                  relative
                  flex
                  items-start
                  justify-between
                "
              >
                {/* Number */}

                <span
                  className="
                    text-4xl
                    font-light
                    leading-none
                    tracking-[-0.07em]
                    text-[#A7B68D]/25
                    transition-colors
                    duration-300
                    group-hover:text-[#A7B68D]/60
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Credential */}

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} credential`}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#A7B68D]/20
                    text-[#8D9489]
                    transition-all
                    duration-300
                    hover:border-[#A7B68D]/70
                    hover:bg-[#A7B68D]/[0.07]
                    hover:text-[#A7B68D]
                  "
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                  />
                </a>
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="relative mt-auto pt-10">
                {/* Organization */}

                <p
                  className="
                    mb-2
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#A7B68D]
                  "
                >
                  {cert.organization}
                </p>

                {/* Title */}

                <h3
                  className="
                    max-w-[90%]
                    text-xl
                    font-medium
                    leading-tight
                    tracking-[-0.03em]
                    text-[#F5F3EC]
                    transition-colors
                    duration-300
                    group-hover:text-[#A7B68D]
                  "
                >
                  {cert.title}
                </h3>

                {/* Date */}

                <p
                  className="
                    mt-3
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-[#667068]
                  "
                >
                  {cert.date}
                </p>

                {/* Skills */}

                {cert.skills?.length > 0 && (
                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-x-3
                      gap-y-1.5
                    "
                  >
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          text-[9px]
                          text-[#707A72]
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* =================================================
                  BOTTOM LINE
              ================================================= */}

              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-px
                  w-0
                  -translate-x-1/2
                  bg-[#A7B68D]
                  shadow-[0_0_12px_rgba(167,182,141,0.6)]
                  transition-all
                  duration-500
                  group-hover:w-2/3
                "
              />
            </motion.article>
          ))}
        </div>

        {/* =================================================
            BOTTOM DECORATION
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.25}
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
                bg-[#A7B68D]/15
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#A7B68D]/60
              "
            />

            <span
              className="
                h-px
                w-16
                bg-[#A7B68D]/15
              "
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}