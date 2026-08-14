"use client";

import { motion } from "framer-motion";
import {
  Award,
  ArrowUpRight,
  Calendar,
  Clock3,
  Trophy,
} from "lucide-react";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { certifications } from "@/data/portfolio";

const COLORS = {
  background: "#211C18",
  surface: "#2A2420",
  surfaceHover: "#302923",
  text: "#F4EFE7",
  secondary: "#B8AEA4",
  muted: "#8E847B",
  accent: "#C96A4A",
  border: "rgba(244,239,231,0.12)",
};

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="bg-[#211C18] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">

        {/* ================= HEADER ================= */}

        <ScrollReveal className="mb-16 text-center">
          <p
            className="
              mb-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.28em]
            "
            style={{
              color: COLORS.accent,
            }}
          >
            Learning & Credentials
          </p>

          <h2
            className="
              text-4xl
              font-bold
              tracking-[-0.04em]
              sm:text-5xl
              md:text-6xl
            "
            style={{
              color: COLORS.text,
            }}
          >
            Certifications.
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              sm:text-base
            "
            style={{
              color: COLORS.secondary,
            }}
          >
            Professional certifications and learning milestones
            across data science, machine learning, AI, and technology.
          </p>
        </ScrollReveal>

        {/* ================= CERTIFICATIONS ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {certifications.map((cert, index) => (
            <motion.article
              key={`${cert.title}-${index}`}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-70px",
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              className="
                group
                relative
                flex
                min-h-[330px]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                p-7
                transition-all
                duration-300
                sm:p-8
              "
              style={{
                backgroundColor: COLORS.surface,
                borderColor: COLORS.border,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  COLORS.surfaceHover;

                e.currentTarget.style.borderColor =
                  `${COLORS.accent}50`;

                e.currentTarget.style.transform =
                  "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  COLORS.surface;

                e.currentTarget.style.borderColor =
                  COLORS.border;

                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >

              {/* Accent Line */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[2px]
                  opacity-60
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
                style={{
                  backgroundColor: COLORS.accent,
                }}
              />

              {/* ================= TOP ================= */}

              <div className="flex items-start justify-between">

                <span
                  className="
                    text-4xl
                    font-light
                    tracking-tight
                  "
                  style={{
                    color: `${COLORS.text}22`,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                  "
                  style={{
                    backgroundColor: `${COLORS.accent}12`,
                    color: COLORS.accent,
                  }}
                >
                  <Award size={21} />
                </div>

              </div>

              {/* ================= TITLE ================= */}

              <div className="mt-7">

                <h3
                  className="
                    text-xl
                    font-semibold
                    leading-snug
                    tracking-tight
                    sm:text-[21px]
                  "
                  style={{
                    color: COLORS.text,
                  }}
                >
                  {cert.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                  "
                  style={{
                    color: COLORS.accent,
                  }}
                >
                  {cert.organization}
                </p>

              </div>

              {/* ================= DETAILS ================= */}

              <div
                className="
                  mt-5
                  space-y-2.5
                  text-xs
                "
                style={{
                  color: COLORS.secondary,
                }}
              >

                {/* Date */}

                <div className="flex items-center gap-2">
                  <Calendar
                    size={14}
                    style={{
                      color: COLORS.muted,
                    }}
                  />

                  <span>
                    {cert.date}
                  </span>
                </div>

                {/* Skills */}

                {cert.skills?.length > 0 && (
                  <div className="flex items-start gap-2">
                    <Trophy
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{
                        color: COLORS.muted,
                      }}
                    />

                    <span>
                      {cert.skills.join(" · ")}
                    </span>
                  </div>
                )}

              </div>

              {/* ================= SPACER ================= */}

              <div className="flex-1" />

              {/* ================= DIVIDER ================= */}

              <div
                className="my-6 h-px"
                style={{
                  backgroundColor: COLORS.border,
                }}
              />

              {/* ================= CREDENTIAL ================= */}

              <div className="flex items-center justify-between">

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                  "
                  style={{
                    color: COLORS.muted,
                  }}
                >
                  Certificate
                </span>

                {cert.credentialUrl &&
                cert.credentialUrl !== "#" ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-medium
                      transition-all
                      duration-200
                      group-hover:translate-x-1
                    "
                    style={{
                      color: COLORS.text,
                    }}
                  >
                    View Credential

                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span
                    className="text-xs"
                    style={{
                      color: COLORS.muted,
                    }}
                  >
                    Credential unavailable
                  </span>
                )}

              </div>

            </motion.article>
          ))}
        </div>

        {/* ================= FOOTER ================= */}

        <ScrollReveal className="mt-8">

          <div
            className="
              flex
              items-center
              justify-between
              border-t
              pt-6
            "
            style={{
              borderColor: COLORS.border,
            }}
          >

            <span
              className="text-xs"
              style={{
                color: COLORS.muted,
              }}
            >
              {certifications.length} Certifications
            </span>

            <div
              className="
                hidden
                items-center
                gap-2
                text-xs
                sm:flex
              "
              style={{
                color: COLORS.muted,
              }}
            >
              <Clock3 size={13} />
              Continuous Learning
            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}