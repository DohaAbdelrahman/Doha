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
        bg-[#F7F5F0]
        py-24
        sm:py-32
      "
    >
      {/* Subtle accent */}

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
          blur-[100px]
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
        {/* Heading */}

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
              Let's Connect
            </span>

            <span className="h-px w-8 bg-[#C96A4A]" />
          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              tracking-[-0.04em]
              text-[#171717]

              sm:text-5xl
              md:text-6xl
            "
          >
            Let's work
            <span className="text-[#C96A4A]"> together.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-base
              leading-7
              text-[#6B6B65]

              sm:text-lg
            "
          >
            Have a project, an opportunity, or simply want to connect?
            I&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        {/* Email */}

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
              border-[#171717]/10
              bg-white/60
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
                    text-[#8A8981]
                  "
                >
                  Email
                </p>

                <p
                  className="
                    mt-0.5
                    text-sm
                    font-medium
                    text-[#171717]
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
                border-[#171717]/10
                px-3
                py-2
                text-xs
                font-medium
                text-[#55544F]
                transition-all
                duration-200

                hover:border-[#C96A4A]/40
                hover:bg-[#C96A4A]/5
                hover:text-[#C96A4A]
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

        {/* Social links */}

        <ScrollReveal
          direction="up"
          delay={0.2}
          className="mt-8"
        >
          <div className="flex items-center justify-center gap-3">
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
                border-[#171717]/10
                bg-white/40
                px-4
                py-2.5
                text-sm
                font-medium
                text-[#3F3E3A]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#C96A4A]/40
                hover:bg-[#C96A4A]/5
                hover:text-[#C96A4A]
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
                border-[#171717]/10
                bg-white/40
                px-4
                py-2.5
                text-sm
                font-medium
                text-[#3F3E3A]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#C96A4A]/40
                hover:bg-[#C96A4A]/5
                hover:text-[#C96A4A]
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
                border-[#171717]/10
                bg-white/40
                px-4
                py-2.5
                text-sm
                font-medium
                text-[#3F3E3A]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#C96A4A]/40
                hover:bg-[#C96A4A]/5
                hover:text-[#C96A4A]
              "
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </ScrollReveal>

        {/* Main CTA */}

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
              bg-[#171717]
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#C96A4A]
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

        {/* Bottom */}

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
              bg-[#171717]/10
            "
          />

          <p
            className="
              mt-6
              text-xs
              text-[#8A8981]
            "
          >
            © {new Date().getFullYear()} Doha Abdelrahman. All rights reserved.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}