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

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const colors = {
    background: "#211C18",
    surface: "#2A2420",
    text: "#F4EFE7",
    secondary: "#B8AEA4",
    muted: "#8E847B",
    accent: "#C96A4A",
    accentHover: "#D77B5B",
  };

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

  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        overflow-hidden
        py-28
        sm:py-36
      "
      style={{
        backgroundColor: colors.background,
      }}
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[130px]
        "
        style={{
          backgroundColor: colors.accent,
          opacity: 0.045,
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-7rem)]
          max-w-5xl
          flex-col
          items-center
          justify-center
          px-6
          sm:px-8
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <ScrollReveal className="w-full text-center">
          <div className="flex items-center justify-center gap-3">
            <span
              className="h-px w-10"
              style={{
                backgroundColor: colors.accent,
              }}
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.32em]
              "
              style={{
                color: colors.accent,
              }}
            >
              Let&apos;s Connect
            </span>

            <span
              className="h-px w-10"
              style={{
                backgroundColor: colors.accent,
              }}
            />
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              tracking-[-0.045em]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
            style={{
              color: colors.text,
            }}
          >
            Let&apos;s work{" "}
            <span
              style={{
                color: colors.accent,
              }}
            >
              together.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              sm:text-lg
            "
            style={{
              color: colors.secondary,
            }}
          >
            Have a project, an opportunity, or simply want to
            connect? I&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        {/* =====================================================
            EMAIL CARD
        ===================================================== */}

        <ScrollReveal
          direction="up"
          delay={0.1}
          className="
            mt-12
            w-full
            max-w-2xl
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-5
              rounded-2xl
              border
              px-5
              py-5
              sm:flex-row
              sm:px-6
              sm:py-6
            "
            style={{
              backgroundColor: `${colors.surface}CC`,
              borderColor: `${colors.text}18`,
              boxShadow: `0 20px 60px ${colors.accent}08`,
            }}
          >
            {/* Email Information */}

            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                "
                style={{
                  backgroundColor: `${colors.accent}18`,
                  color: colors.accent,
                }}
              >
                <Mail size={21} />
              </div>

              <div className="text-left">
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                  "
                  style={{
                    color: colors.muted,
                  }}
                >
                  Email
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-medium
                    sm:text-base
                  "
                  style={{
                    color: colors.text,
                  }}
                >
                  {profile.email}
                </p>
              </div>
            </div>

            {/* Copy Button */}

            <button
              type="button"
              onClick={copyEmail}
              className="
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-lg
                border
                px-4
                py-2.5
                text-xs
                font-medium
                transition-all
                duration-200
              "
              style={{
                borderColor: `${colors.text}18`,
                color: colors.secondary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  `${colors.accent}66`;

                e.currentTarget.style.color =
                  colors.accentHover;

                e.currentTarget.style.backgroundColor =
                  `${colors.accent}12`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  `${colors.text}18`;

                e.currentTarget.style.color =
                  colors.secondary;

                e.currentTarget.style.backgroundColor =
                  "transparent";
              }}
            >
              {copied ? (
                <>
                  <Check size={15} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={15} />
                  Copy Email
                </>
              )}
            </button>
          </div>
        </ScrollReveal>

        {/* =====================================================
            SOCIAL LINKS
        ===================================================== */}

        <ScrollReveal
          direction="up"
          delay={0.2}
          className="mt-8"
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
            "
          >
            {/* GitHub */}

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-5
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                borderColor: `${colors.text}18`,
                color: colors.secondary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  `${colors.accent}66`;

                e.currentTarget.style.color =
                  colors.text;

                e.currentTarget.style.backgroundColor =
                  `${colors.accent}0D`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  `${colors.text}18`;

                e.currentTarget.style.color =
                  colors.secondary;

                e.currentTarget.style.backgroundColor =
                  "transparent";
              }}
            >
              <Github size={17} />
              GitHub
            </a>

            {/* LinkedIn */}

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-5
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                borderColor: `${colors.text}18`,
                color: colors.secondary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  `${colors.accent}66`;

                e.currentTarget.style.color =
                  colors.text;

                e.currentTarget.style.backgroundColor =
                  `${colors.accent}0D`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  `${colors.text}18`;

                e.currentTarget.style.color =
                  colors.secondary;

                e.currentTarget.style.backgroundColor =
                  "transparent";
              }}
            >
              <Linkedin size={17} />
              LinkedIn
            </a>

            {/* Email */}

            <a
              href={`mailto:${profile.email}`}
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-5
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                borderColor: `${colors.text}18`,
                color: colors.secondary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  `${colors.accent}66`;

                e.currentTarget.style.color =
                  colors.text;

                e.currentTarget.style.backgroundColor =
                  `${colors.accent}0D`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  `${colors.text}18`;

                e.currentTarget.style.color =
                  colors.secondary;

                e.currentTarget.style.backgroundColor =
                  "transparent";
              }}
            >
              <Mail size={17} />
              Email
            </a>
          </div>
        </ScrollReveal>

        {/* =====================================================
            MAIN CTA
        ===================================================== */}

        <ScrollReveal
          direction="up"
          delay={0.3}
          className="mt-10"
        >
          <a
            href={`mailto:${profile.email}`}
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-xl
              px-8
              py-4
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-1
            "
            style={{
              backgroundColor: colors.accent,
              color: colors.text,
              boxShadow: `0 12px 35px ${colors.accent}20`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                colors.accentHover;

              e.currentTarget.style.boxShadow =
                `0 16px 40px ${colors.accent}35`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                colors.accent;

              e.currentTarget.style.boxShadow =
                `0 12px 35px ${colors.accent}20`;
            }}
          >
            Send me an email

            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </ScrollReveal>

        {/* =====================================================
            COPYRIGHT
            This is NOT a separate footer section.
        ===================================================== */}

        <ScrollReveal
          direction="up"
          delay={0.4}
          className="
            mt-20
            w-full
            max-w-2xl
          "
        >
          <div
            className="h-px w-full"
            style={{
              backgroundColor: `${colors.text}12`,
            }}
          />

          <p
            className="
              mt-6
              text-center
              text-xs
            "
            style={{
              color: colors.muted,
            }}
          >
            © Doha Abdelrahman. All rights reserved.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}