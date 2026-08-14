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
        overflow-hidden
        bg-[#211C18]
        py-24
        sm:py-32
      "
    >
      {/* Subtle Terracotta Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C96A4A]/5
          blur-[110px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          px-6
          text-center
          sm:px-8
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <ScrollReveal>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C96A4A]" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#C96A4A]
              "
            >
              Let&apos;s Connect
            </span>

            <span className="h-px w-8 bg-[#C96A4A]" />
          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              tracking-[-0.04em]
              text-[#F4EFE7]

              sm:text-5xl
              md:text-6xl
            "
          >
            Let&apos;s work
            <span className="text-[#C96A4A]"> together.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-base
              leading-7
              text-[#B8AEA4]

              sm:text-lg
            "
          >
            Have a project, an opportunity, or simply want to connect?
            I&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        {/* =====================================================
            EMAIL
        ===================================================== */}

        <ScrollReveal
          direction="up"
          delay={0.1}
          className="mt-12"
        >
          <div
            className="
              mx-auto
              flex
              max-w-xl
              flex-col
              items-center
              justify-between
              gap-4
              rounded-2xl
              border
              border-[#F4EFE7]/10
              bg-[#2A2420]/80
              px-5
              py-5
              backdrop-blur-sm

              sm:flex-row
              sm:px-6
            "
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
                  bg-[#C96A4A]/10
                  text-[#C96A4A]
                "
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
                    text-[#8E847B]
                  "
                >
                  Email
                </p>

                <p
                  className="
                    mt-0.5
                    text-sm
                    font-medium
                    text-[#F4EFE7]
                  "
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
                border-[#F4EFE7]/10
                px-3
                py-2
                text-xs
                font-medium
                text-[#B8AEA4]
                transition-all
                duration-200

                hover:border-[#C96A4A]/40
                hover:bg-[#C96A4A]/10
                hover:text-[#D77B5B]
              "
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
                border-[#F4EFE7]/10
                bg-[#2A2420]/60
                px-4
                py-2.5
                text-sm
                font-medium
                text-[#B8AEA4]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#C96A4A]/40
                hover:bg-[#C96A4A]/10
                hover:text-[#F4EFE7]
              "
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
                border-[#F4EFE7]/10
                bg-[#2A2420]/60
                px-4
                py-2.5
                text-sm
                font-medium
                text-[#B8AEA4]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#C96A4A]/40
                hover:bg-[#C96A4A]/10
                hover:text-[#F4EFE7]
              "
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
                border-[#F4EFE7]/10
                bg-[#2A2420]/60
                px-4
                py-2.5
                text-sm
                font-medium
                text-[#B8AEA4]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#C96A4A]/40
                hover:bg-[#C96A4A]/10
                hover:text-[#F4EFE7]
              "
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </ScrollReveal>

        {/* =====================================================
            CTA
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
              bg-[#C96A4A]
              px-7
              py-3.5
              text-sm
              font-semibold
              text-[#F4EFE7]
              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#D77B5B]
              hover:shadow-[0_12px_30px_rgba(201,106,74,0.22)]
            "
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
            FOOTER
        ===================================================== */}

        <ScrollReveal
          direction="up"
          delay={0.4}
          className="mt-20"
        >
          <div
            className="
              mx-auto
              h-px
              max-w-2xl
              bg-[#F4EFE7]/10
            "
          />

          <p
            className="
              mt-6
              text-xs
              text-[#8E847B]
            "
          >
            © {new Date().getFullYear()} Doha Abdelrahman. All rights reserved.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}