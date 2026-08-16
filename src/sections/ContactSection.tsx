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

export default function ContactSection() {
  const contactItems = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: profile.phone || "Add your phone",
      href: profile.phone
        ? `tel:${profile.phone}`
        : "#",
      icon: Phone,
    },
    {
      label: "GitHub",
      value: "DohaAbdelrahman",
      href: profile.github,
      icon: Github,
      external: true,
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: profile.linkedin,
      icon: Linkedin,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#07100D]
        px-6
        py-28
        sm:px-10
        sm:py-36
      "
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        {/* Glow */}

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
            bg-[#A7B68D]/[0.025]
            blur-[140px]
          "
        />

        {/* Large circles */}

        <div
          className="
            absolute
            -right-32
            top-[-80px]
            h-[380px]
            w-[380px]
            rounded-full
            border
            border-[#A7B68D]/10
          "
        />

        <div
          className="
            absolute
            -right-10
            top-[-30px]
            h-[250px]
            w-[250px]
            rounded-full
            border
            border-[#A7B68D]/[0.07]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            left-[-120px]
            h-[400px]
            w-[400px]
            rounded-full
            border
            border-[#A7B68D]/[0.06]
          "
        />

        {/* Dots */}

        <div
          className="
            absolute
            bottom-[18%]
            left-[6%]
            grid
            grid-cols-4
            gap-4
            opacity-40
          "
        >
          {Array.from({ length: 16 }).map(
            (_, index) => (
              <span
                key={index}
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#A7B68D]/50
                "
              />
            )
          )}
        </div>
      </div>

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
        "
      >
        {/* Header */}

        <ScrollReveal>
          <div
            className="
              mb-6
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
                bg-[#A7B68D]/60
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#A7B68D]
              "
            >
              Contact
            </span>

            <span
              className="
                h-px
                w-12
                bg-[#A7B68D]/60
              "
            />
          </div>

          <h2
            className="
              text-center
              text-5xl
              font-medium
              leading-[0.95]
              tracking-[-0.065em]
              text-[#F5F3EC]
              sm:text-6xl
              md:text-7xl
            "
          >
            Let&apos;s talk
            <span className="text-[#A7B68D]">
              .
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-center
              text-sm
              leading-7
              text-[#8D9489]
              sm:text-base
            "
          >
            Have an opportunity, a project, or a
            data problem? Let&apos;s connect.
          </p>
        </ScrollReveal>

        {/* Glass Cards */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
          "
        >
          {contactItems.map(
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
                    external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  onClick={(event) => {
                    if (
                      label === "Phone" &&
                      !profile.phone
                    ) {
                      event.preventDefault();
                    }
                  }}
                  className="
                    group
                    relative
                    block
                    min-h-[190px]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#A7B68D]/20
                    bg-[#A7B68D]/[0.025]
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#A7B68D]/55
                    hover:bg-[#A7B68D]/[0.05]
                    hover:shadow-[0_20px_60px_rgba(167,182,141,0.06)]
                  "
                >
                  {/* Card glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-36
                      w-36
                      rounded-full
                      border
                      border-[#A7B68D]/10
                      transition-transform
                      duration-700
                      group-hover:scale-125
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
                      border-[#A7B68D]/20
                      bg-[#A7B68D]/[0.035]
                      text-[#A7B68D]
                      transition-all
                      duration-300
                      group-hover:border-[#A7B68D]/50
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Label */}

                  <p
                    className="
                      relative
                      mt-8
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      text-[#A7B68D]
                    "
                  >
                    {label}
                  </p>

                  {/* Value */}

                  <div
                    className="
                      relative
                      mt-2
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <p
                      className="
                        truncate
                        text-sm
                        text-[#F5F3EC]
                        sm:text-base
                      "
                    >
                      {value}
                    </p>

                    <ArrowUpRight
                      size={17}
                      className="
                        shrink-0
                        text-[#8D9489]
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#A7B68D]
                      "
                    />
                  </div>

                  {/* Bottom line */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-0
                      bg-[#A7B68D]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </a>
              </ScrollReveal>
            )
          )}
        </div>

        {/* Bottom */}

        <ScrollReveal
          direction="up"
          delay={0.4}
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

          <p
            className="
              mt-5
              text-center
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-[#667068]
            "
          >
            Data · Insight · Impact
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}