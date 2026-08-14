"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { certifications } from "@/data/portfolio";

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="bg-[#211C18] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">

        {/* Header */}
        <ScrollReveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#C96A4A]">
            Learning & Credentials
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#F4EFE7] sm:text-5xl">
            Certifications.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#B8AEA4] sm:text-base">
            Professional certifications and learning milestones across
            data science, machine learning, AI, and technology.
          </p>
        </ScrollReveal>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.article
              key={`${cert.title}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              className="
                group
                flex
                min-h-[500px]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.10]
                bg-[#2A2420]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#C96A4A]/40
                hover:shadow-2xl
              "
            >
              {/* ================= IMAGE ================= */}

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative
                  block
                  h-[230px]
                  overflow-hidden
                  bg-[#181411]
                "
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="
                    h-full
                    w-full
                    object-contain
                    p-4
                    transition-transform
                    duration-500
                    group-hover:scale-[1.03]
                  "
                />

                {/* Image overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#2A2420]/50
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* View image */}
                <div
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-[#211C18]/80
                    text-[#F4EFE7]
                    opacity-0
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight size={16} />
                </div>
              </a>

              {/* ================= CONTENT ================= */}

              <div className="flex flex-1 flex-col p-6 sm:p-7">

                {/* Title */}
                <div>
                  <h3 className="text-xl font-semibold leading-snug text-[#F4EFE7]">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#C96A4A]">
                    {cert.organization}
                  </p>
                </div>

                {/* Date */}
                <div className="mt-5 flex items-center gap-2 text-sm text-[#B8AEA4]">
                  <Calendar size={14} className="text-[#8E847B]" />

                  <span>{cert.date}</span>
                </div>

                {/* Skills / Details */}
                {cert.skills?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-white/[0.08]
                          bg-white/[0.04]
                          px-3
                          py-1
                          text-xs
                          text-[#B8AEA4]
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Divider */}
                <div className="my-6 h-px bg-white/[0.09]" />

                {/* Credential Button */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/[0.10]
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-[#F4EFE7]
                    transition-all
                    duration-200
                    hover:border-[#C96A4A]/50
                    hover:bg-[#C96A4A]/10
                  "
                >
                  <span>View Credential</span>

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}