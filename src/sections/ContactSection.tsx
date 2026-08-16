"use client";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { profile } from "@/data/portfolio";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const contacts = [
  {
    label: "EMAIL",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "PHONE",
    value: profile.phone || "Add your phone",
    href: profile.phone ? `tel:${profile.phone}` : "#",
    icon: Phone,
    external: false,
  },
  {
    label: "GITHUB",
    value: "DohaAbdelrahman",
    href: profile.github,
    icon: Github,
    external: true,
  },
  {
    label: "LINKEDIN",
    value: "Connect with me",
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#07100D]
        px-6
        py-24
        sm:px-10
        sm:py-28
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
            top-[45%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#A7B68D]/[0.035]
            blur-[140px]
          "
        />

        {/* Top right orbit */}

        <div
          className="
            absolute
            -right-[170px]
            -top-[170px]
            h-[430px]
            w-[430px]
            rounded-full
            border
            border-[#A7B68D]/20
          "
        />

        <div
          className="
            absolute
            -right-[110px]
            -top-[110px]
            h-[310px]
            w-[310px]
            rounded-full
            border
            border-[#A7B68D]/10
          "
        />

        <div
          className="
            absolute
            -right-[60px]
            -top-[60px]
            h-[210px]
            w-[210px]
            rounded-full
            border
            border-[#A7B68D]/[0.07]
          "
        />

        {/* Bottom left orbit */}

        <div
          className="
            absolute
            -bottom-[250px]
            -left-[200px]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#A7B68D]/10
          "
        />

        {/* Left dots */}

        <div
          className="
            absolute
            left-[10px]
            top-[18%]
            grid
            grid-cols-5
            gap-4
            opacity-50
          "
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className="
                h-1
                w-1
                rounded-full
                bg-[#A7B68D]/50
              "
            />
          ))}
        </div>

        {/* Right bottom dots */}

        <div
          className="
            absolute
            bottom-[20%]
            right-[4%]
            grid
            grid-cols-4
            gap-4
            opacity-30
          "
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
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
          max-w-5xl
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            {/* Contact label */}

            <div className="flex items-center gap-5">
              <span
                className="
                  h-px
                  w-14
                  bg-[#A7B68D]/50
                  sm:w-20
                "
              />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.45em]
                  text-[#A7B68D]
                "
              >
                Contact
              </span>

              <span
                className="
                  h-px
                  w-14
                  bg-[#A7B68D]/50
                  sm:w-20
                "
              />
            </div>

            {/* Center dot */}

            <div
              className="
                mt-4
                h-2
                w-2
                rounded-full
                bg-[#A7B68D]
                shadow-[0_0_18px_rgba(167,182,141,0.8)]
              "
            />

            {/* Main title */}

            <h2
              className="
                mt-7
                font-serif
                text-6xl
                font-normal
                leading-none
                tracking-[-0.055em]
                sm:text-7xl
                md:text-8xl
              "
              style={{
                color: "#F5F3EC",
              }}
            >
              Let&apos;s{" "}
              <span className="text-[#A7B68D]">
                talk.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-7
                sm:text-lg
              "
              style={{
                color: "#8D9489",
              }}
            >
              Have an opportunity, a project,
              <br className="hidden sm:block" />
              or a data problem? Let&apos;s connect.
            </p>
          </div>
        </ScrollReveal>

        {/* =================================================
            CONTACT CARDS
        ================================================= */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
          "
        >
          {contacts.map(
            (
              {
                label,
                value,
                href,
                icon: Icon,
                external,
              },
              index
            ) => (
              <ScrollReveal
                key={label}
                direction="up"
                delay={index * 0.08}
              >
                <a
                  href={href}
                  target={
                    external ? "_blank" : undefined
                  }
                  rel={
                    external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  onClick={(event) => {
                    if (
                      label === "PHONE" &&
                      !profile.phone
                    ) {
                      event.preventDefault();
                    }
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[290px]
                    flex-col
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-[#A7B68D]/25
                    bg-white/[0.025]
                    p-7
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#A7B68D]/65
                    hover:bg-[#A7B68D]/[0.045]
                    hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
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
                      opacity-60
                    "
                  />

                  {/* Card orbit */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-44
                      w-44
                      rounded-full
                      border
                      border-[#A7B68D]/15
                      transition-transform
                      duration-700
                      group-hover:scale-125
                    "
                  />

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
                    "
                  />

                  {/* Small dots */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-8
                      top-10
                      grid
                      grid-cols-4
                      gap-2.5
                      opacity-20
                    "
                  >
                    {Array.from({ length: 12 }).map(
                      (_, i) => (
                        <span
                          key={i}
                          className="
                            h-1
                            w-1
                            rounded-full
                            bg-[#A7B68D]
                          "
                        />
                      )
                    )}
                  </div>

                  {/* Icon */}

                  <div
                    className="
                      relative
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#A7B68D]/35
                      bg-[#A7B68D]/[0.025]
                      text-[#A7B68D]
                      shadow-[inset_0_0_25px_rgba(167,182,141,0.025)]
                      transition-all
                      duration-500
                      group-hover:border-[#A7B68D]/70
                      group-hover:bg-[#A7B68D]/[0.06]
                    "
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.35}
                    />
                  </div>

                  {/* Card content */}

                  <div className="relative mt-auto">
                    <p
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.32em]
                        text-[#A7B68D]
                      "
                    >
                      {label}
                    </p>

                    <span
                      className="
                        mt-3
                        block
                        h-px
                        w-7
                        bg-[#A7B68D]/60
                      "
                    />

                    <div className="mt-4 flex items-end justify-between gap-4">
                      <p
                        className="
                          truncate
                          text-lg
                          tracking-[-0.02em]
                          text-[#F5F3EC]
                          sm:text-xl
                        "
                      >
                        {value}
                      </p>

                      <ArrowUpRight
                        size={22}
                        strokeWidth={1.3}
                        className="
                          shrink-0
                          text-[#A7B68D]
                          transition-all
                          duration-500
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </div>

                  {/* Bottom glow line */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-px
                      w-0
                      -translate-x-1/2
                      bg-[#A7B68D]
                      shadow-[0_0_15px_rgba(167,182,141,0.7)]
                      transition-all
                      duration-700
                      group-hover:w-2/3
                    "
                  />
                </a>
              </ScrollReveal>
            )
          )}
        </div>

        {/* =================================================
            SIGNATURE
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.45}
        >
          <div className="mt-20">
            <div className="flex items-center justify-center gap-5">
              <span
                className="
                  h-px
                  w-20
                  bg-[#A7B68D]/30
                  sm:w-32
                "
              />

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#A7B68D]
                  shadow-[0_0_18px_rgba(167,182,141,0.7)]
                "
              />

              <span
                className="
                  h-px
                  w-20
                  bg-[#A7B68D]/30
                  sm:w-32
                "
              />
            </div>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                mx-auto
                mt-7
                block
                font-serif
                text-2xl
                tracking-[0.25em]
                text-[#A7B68D]
                transition-colors
                duration-300
                hover:text-[#F5F3EC]
              "
            >
              DOHA.
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}