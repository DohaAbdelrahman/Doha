"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { profile } from "@/data/portfolio";

const contacts = [
  {
    label: "EMAIL",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "PHONE",
    value: profile.phone || "Add your phone",
    href: profile.phone ? `tel:${profile.phone}` : "#",
    icon: Phone,
  },
  {
    label: "GITHUB",
    value: "GitHub Profile",
    href: profile.github,
    icon: Github,
  },
  {
    label: "LINKEDIN",
    value: "LinkedIn Profile",
    href: profile.linkedin,
    icon: Linkedin,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#081412]
        px-6
        py-24
        sm:px-10
        sm:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Center glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C7A86B]/[0.012]
            blur-[130px]
          "
        />

        {/* Top right orbit */}

        <div
          className="
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#C7A86B]/[0.06]
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
            border-[#C7A86B]/[0.04]
          "
        />

        {/* Bottom left orbit */}

        <div
          className="
            absolute
            -bottom-44
            -left-36
            h-[400px]
            w-[400px]
            rounded-full
            border
            border-[#C7A86B]/[0.04]
          "
        />

        {/* Small dots */}

        <div
          className="
            absolute
            right-[8%]
            top-[28%]
            grid
            grid-cols-4
            gap-3
            opacity-20
          "
        >
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="
                h-1
                w-1
                rounded-full
                bg-[#C7A86B]
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
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <ScrollReveal className="mb-12 text-center">

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
              Contact
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
              md:text-7xl
            "
          >
            Let&apos;s talk
            <span className="text-[#C7A86B]">.</span>
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
            Have a project, an opportunity, or a data
            problem? Let&apos;s connect.
          </p>
        </ScrollReveal>

        {/* =================================================
            CONTACT GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
          "
        >
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <ScrollReveal
                key={contact.label}
                delay={index * 0.06}
              >
                <motion.a
                  href={contact.href}
                  target={
                    contact.label === "EMAIL" ||
                    contact.label === "PHONE"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    contact.label === "EMAIL" ||
                    contact.label === "PHONE"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="
                    group
                    relative
                    block
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#C7A86B]/15
                    bg-white/[0.018]
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#C7A86B]/40
                    hover:bg-[#C7A86B]/[0.02]
                  "
                >
                  {/* Card glow */}

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

                  {/* Icon */}

                  <div
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#C7A86B]/20
                      bg-[#C7A86B]/[0.025]
                      text-[#C7A86B]
                      transition-all
                      duration-300
                      group-hover:border-[#C7A86B]/50
                      group-hover:bg-[#C7A86B]/[0.06]
                    "
                  >
                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  {/* Label */}

                  <div className="relative mt-7">

                    <div className="flex items-center gap-3">

                      <p
                        className="
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.25em]
                          text-[#C7A86B]
                        "
                      >
                        {contact.label}
                      </p>

                      <span
                        className="
                          h-px
                          w-7
                          bg-[#C7A86B]/40
                        "
                      />
                    </div>

                    {/* Value */}

                    <p
                      className="
                        mt-3
                        truncate
                        text-base
                        font-medium
                        text-[#F5F1E8]
                        transition-colors
                        duration-300
                        group-hover:text-[#C7A86B]
                        sm:text-lg
                      "
                    >
                      {contact.value}
                    </p>
                  </div>

                  {/* Arrow */}

                  <div
                    className="
                      absolute
                      bottom-6
                      right-6
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C7A86B]/15
                      text-[#65736D]
                      transition-all
                      duration-300
                      group-hover:border-[#C7A86B]/40
                      group-hover:text-[#C7A86B]
                    "
                  >
                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </div>

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
                      transition-all
                      duration-500
                      group-hover:w-1/2
                    "
                  />
                </motion.a>
              </ScrollReveal>
            );
          })}
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <ScrollReveal
          delay={0.2}
          className="mt-14"
        >
          <div className="flex items-center justify-center gap-4">

            <span className="h-px w-16 bg-[#C7A86B]/15" />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#C7A86B]/70
                shadow-[0_0_10px_rgba(199,168,107,0.5)]
              "
            />

            <span className="h-px w-16 bg-[#C7A86B]/15" />

          </div>
        </ScrollReveal>

        {/* =================================================
            SIGNATURE
        ================================================= */}

        <ScrollReveal
          delay={0.25}
          className="mt-8 text-center"
        >
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-[#C7A86B]/60
            "
          >
            Abdallah Adel
          </p>

          <p
            className="
              mt-2
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[#65736D]
            "
          >
            Data Scientist
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}