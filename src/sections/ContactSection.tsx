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

  // Main portfolio colors
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
      className="relative overflow-hidden py-28 sm:py-36"
      style={{
        backgroundColor: colors.background,
      }}
    >
      {/* =====================================================
          SUBTLE BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[380px]
          w-[380px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[120px]
        "
        style={{
          backgroundColor: colors.accent,
          opacity: 0.045,
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <ScrollReveal className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span
              className="h-px w-8"
              style={{ backgroundColor: colors.accent }}
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
              "
              style={{ color: colors.accent }}
            >
              Let&apos;s Connect
            </span>

            <span
              className="h-px w-8"
              style={{ backgroundColor: colors.accent }}
            />
          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              tracking-[-0.04em]
              sm:text-5xl
              md:text-6xl
            "
            style={{ color: colors.text }}
          >
            Let&apos;s work{" "}
            <span style={{ color: colors.accent }}>
              together.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-base
              leading-7
              sm:text-lg
            "
            style={{ color: colors.secondary }}
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
          className="mx-auto mt-12 max-w-xl"
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-4
              rounded-2xl
              border
              px-5
              py-5
              sm:flex-row
              sm:px-6
            "
            style={{
              backgroundColor: colors.surface,
              borderColor: `${colors.text}18`,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                "
                style={{
                  backgroundColor: `${colors.accent}18`,
                  color: colors.accent,
                }}
              >
                <Mail size={18} />
              </div>

              <div className="text-left">
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                  "
                  style={{ color: colors.muted }}
                >
                  Email
                </p>

                <p
                  className="mt-0.5 text-sm font-medium"
                  style={{ color: colors.text }}
                >
                  {profile.email}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                px-3
                py-2
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
                e.currentTarget.style.borderColor = `${colors.accent}66`;
                e.currentTarget.style.color = colors.accentHover;
                e.currentTarget.style.backgroundColor = `${colors.accent}12`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${colors.text}18`;
                e.currentTarget.style.color = colors.secondary;
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {copied ? (
                <>
                  <Check size={14} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={14} />
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
          <div className="flex flex-wrap items-center justify-center gap-3">

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-4
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
            >
              <Github size={16} />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-4
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
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-4
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
            >
              <Mail size={16} />
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
          className="mt-10 text-center"
        >
          <a
            href={`mailto:${profile.email}`}
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-xl
              px-7
              py-3.5
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-1
            "
            style={{
              backgroundColor: colors.accent,
              color: colors.text,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                colors.accentHover;
              e.currentTarget.style.boxShadow =
                `0 14px 35px ${colors.accent}35`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                colors.accent;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Send me an email

            <ArrowUpRight
              size={17}
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
            SIMPLE COPYRIGHT
            No separate footer section
        ===================================================== */}

        <ScrollReveal
          direction="up"
          delay={0.4}
          className="mt-20 text-center"
        >
          <div
            className="mx-auto h-px max-w-2xl"
            style={{
              backgroundColor: `${colors.text}12`,
            }}
          />

          <p
            className="mt-6 text-xs"
            style={{ color: colors.muted }}
          >
            © Doha Abdelrahman. All rights reserved.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}