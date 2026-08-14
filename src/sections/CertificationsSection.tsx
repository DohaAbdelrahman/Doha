"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Award } from "lucide-react";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { certifications } from "@/data/portfolio";

const COLORS = {
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
      <div className="mx-auto max-w-5xl px-6 sm:px-8">

        {/* Header */}
        <ScrollReveal className="mb-16 text-center">
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: COLORS.accent }}
          >
            Learning & Credentials
          </p>

          <h2
            className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl"
            style={{ color: COLORS.text }}
          >
            Certifications.
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base"
            style={{ color: COLORS.secondary }}
          >
            Professional certifications and learning milestones
            across data science, machine learning, AI, and technology.
          </p>
        </ScrollReveal>

        {/* Certifications List */}
        <div>
          {certifications.map((cert, index) => (
            <motion.article
              key={`${cert.title}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
              className="group border-t py-7 sm:py-8"
              style={{
                borderColor: COLORS.border,
              }}
            >
              <div className="grid gap-5 sm:grid-cols-[70px_1fr_auto] sm:items-center">

                {/* Number */}
                <div>
                  <span
                    className="text-3xl font-light tracking-tight"
                    style={{
                      color: `${COLORS.text}28`,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Main Information */}
                <div className="min-w-0">

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3
                      className="text-lg font-semibold tracking-tight sm:text-xl"
                      style={{ color: COLORS.text }}
                    >
                      {cert.title}
                    </h3>

                    <span
                      className="hidden h-1 w-1 rounded-full sm:block"
                      style={{
                        backgroundColor: COLORS.accent,
                      }}
                    />

                    <span
                      className="text-xs sm:text-sm"
                      style={{
                        color: COLORS.accent,
                      }}
                    >
                      {cert.organization}
                    </span>
                  </div>

                  <div
                    className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm"
                    style={{
                      color: COLORS.muted,
                    }}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} />
                      {cert.date}
                    </span>

                    {cert.skills?.length > 0 && (
                      <>
                        <span
                          className="hidden h-1 w-1 rounded-full sm:block"
                          style={{
                            backgroundColor: COLORS.muted,
                          }}
                        />

                        <span>
                          {cert.skills.join(" · ")}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Credential */}
                <div>
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
                        color: COLORS.secondary,
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
              </div>
            </motion.article>
          ))}

          {/* Bottom border */}
          <div
            className="border-t"
            style={{
              borderColor: COLORS.border,
            }}
          />
        </div>

        {/* Footer Count */}
        <ScrollReveal className="mt-6 flex items-center justify-between">
          <span
            className="text-xs"
            style={{ color: COLORS.muted }}
          >
            {certifications.length} Certifications
          </span>

          <div
            className="flex items-center gap-2 text-xs"
            style={{ color: COLORS.muted }}
          >
            <Award size={13} />
            Continuous Learning
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}