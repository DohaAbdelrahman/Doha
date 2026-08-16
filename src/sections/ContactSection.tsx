"use client";

import { useState } from "react";
import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { profile } from "@/data/portfolio";
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const colors = {
  background: "#07100D",
  cream: "#F5F3EC",
  olive: "#A7B68D",
  muted: "#8D9489",
  line: "rgba(167, 182, 141, 0.16)",
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const socials = [
    {
      label: "GitHub",
      href: profile.github,
      icon: Github,
      external: true,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      icon: Mail,
      external: false,
    },
  ];

  return (
    <section
      id="contact"
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
        {/* Main glow */}

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

        {/* Orbital circles */}

        <div
          className="
            absolute
            -right-32
            top-16
            h-[350px]
            w-[350px]
            rounded-full
            border
            border-[#A7B68D]/[0.07]
          "
        />

        <div
          className="
            absolute
            -right-12
            top-36
            h-[220px]
            w-[220px]
            rounded-full
            border
            border-[#A7B68D]/[0.06]
          "
        />

        {/* Dots */}

        <div
          className="
            absolute
            bottom-[15%]
            left-[7%]
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
                  bg-[#A7B68D]/40
                "
              />
            )
          )}
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
          sm:px-10
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <ScrollReveal>
          <div
            className="
              mb-7
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-12
                bg-[#A7B68D]/70
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
              "
              style={{
                color: colors.olive,
              }}
            >
              Contact
            </span>
          </div>

          <h2
            className="
              max-w-4xl
              text-6xl
              font-medium
              leading-[0.92]
              tracking-[-0.065em]
              sm:text-7xl
              md:text-8xl
            "
            style={{
              color: colors.cream,
            }}
          >
            Let&apos;s
            <br />

            <span
              style={{
                color: colors.olive,
              }}
            >
              connect.
            </span>
          </h2>

          <p
            className="
              mt-8
              max-w-xl
              text-base
              leading-7
              sm:text-lg
            "
            style={{
              color: colors.muted,
            }}
          >
            Have a data problem, an opportunity, or
            an interesting idea? Let&apos;s turn it
            into something meaningful.
          </p>
        </ScrollReveal>

        {/* =================================================
            EMAIL ROW
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.1}
          className="mt-16"
        >
          <div
            className="
              border-y
              border-[#A7B68D]/15
              py-6
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              {/* Email */}

              <div>
                <p
                  className="
                    mb-2
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                  "
                  style={{
                    color: colors.olive,
                  }}
                >
                  Email
                </p>

                <a
                  href={`mailto:${profile.email}`}
                  className="
                    text-lg
                    tracking-[-0.02em]
                    transition-colors
                    duration-300
                    hover:text-[#A7B68D]
                    sm:text-xl
                  "
                  style={{
                    color: colors.cream,
                  }}
                >
                  {profile.email}
                </a>
              </div>

              {/* Copy */}

              <button
                type="button"
                onClick={copyEmail}
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  border
                  border-[#A7B68D]/20
                  bg-[#A7B68D]/[0.025]
                  px-4
                  py-2.5
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  transition-all
                  duration-300
                  hover:border-[#A7B68D]/60
                  hover:bg-[#A7B68D]/[0.06]
                "
                style={{
                  color: colors.muted,
                }}
              >
                {copied ? (
                  <>
                    <Check
                      size={14}
                      style={{
                        color: colors.olive,
                      }}
                    />

                    Copied
                  </>
                ) : (
                  <>
                    <Copy
                      size={14}
                      className="
                        transition-colors
                        group-hover:text-[#A7B68D]
                      "
                    />

                    Copy Email
                  </>
                )}
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* =================================================
            SOCIAL LINKS
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.2}
          className="mt-7"
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-8
              gap-y-4
            "
          >
            {socials.map(
              ({
                label,
                href,
                icon: Icon,
                external,
              }) => (
                <a
                  key={label}
                  href={href}
                  target={
                    external ? "_blank" : undefined
                  }
                  rel={
                    external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2.5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                  "
                  style={{
                    color: colors.muted,
                  }}
                >
                  <Icon
                    size={14}
                    className="
                      transition-colors
                      duration-300
                      group-hover:text-[#A7B68D]
                    "
                  />

                  <span
                    className="
                      transition-colors
                      duration-300
                      group-hover:text-[#F5F3EC]
                    "
                  >
                    {label}
                  </span>

                  <ArrowUpRight
                    size={12}
                    className="
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#A7B68D]
                    "
                  />
                </a>
              )
            )}
          </div>
        </ScrollReveal>

        {/* =================================================
            CLOSING
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.3}
          className="mt-24"
        >
          <div
            className="
              flex
              flex-col
              gap-5
              border-t
              border-[#A7B68D]/10
              pt-7
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.22em]
              "
              style={{
                color: "#667068",
              }}
            >
              Data
              <span
                className="mx-2"
                style={{
                  color: colors.olive,
                }}
              >
                ·
              </span>
              Insight
              <span
                className="mx-2"
                style={{
                  color: colors.olive,
                }}
              >
                ·
              </span>
              Impact
            </p>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                group
                flex
                items-center
                gap-2
                text-[9px]
                uppercase
                tracking-[0.2em]
                transition-colors
                duration-300
                hover:text-[#A7B68D]
              "
              style={{
                color: colors.muted,
              }}
            >
              Back to top

              <ArrowUpRight
                size={12}
                className="
                  rotate-[-45deg]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}