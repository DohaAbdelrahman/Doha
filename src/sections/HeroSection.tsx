"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import HeroVisual from "@/components/portfolio/HeroVisual";
import { profile, heroStats } from "@/data/portfolio";

const statIcons: Record<string, React.ReactNode> = {
  brain: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83L12 11.66l-2.83-2.83A4 4 0 0 1 12 2z" />
      <path d="M8 10c-2.21 0-4 1.79-4 4v2h16v-2c0-2.21-1.79-4-4-4H8z" />
    </svg>
  ),
  "code-2": (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  award: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  target: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

export default function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F4F1EB]"
    >
      <HeroVisual />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#607D9A] font-medium text-sm sm:text-base tracking-wider uppercase mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#202A35] mb-4 tracking-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#607D9A] mb-6"
        >
          {profile.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-lg sm:text-xl text-[#607D9A] font-medium mb-6 italic"
        >
          &ldquo;{profile.tagline}&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl mx-auto text-[#65717C] text-base sm:text-lg leading-relaxed mb-10"
        >
          {profile.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#607D9A] text-white rounded-lg text-sm font-medium hover:bg-[#4F6A84] transition-colors duration-200 shadow-sm"
          >
            View My Projects
          </button>
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#202A35] text-white rounded-lg text-sm font-medium hover:bg-[#37474F] transition-colors duration-200 shadow-sm"
          >
            Download Resume
          </a>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#D9D5CD] text-[#202A35] rounded-lg text-sm font-medium hover:bg-[#EAE6DE] transition-colors duration-200"
          >
            Let&apos;s Connect
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-[#65717C] hover:text-[#607D9A] hover:bg-[#EAE6DE] rounded-lg transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-[#65717C] hover:text-[#607D9A] hover:bg-[#EAE6DE] rounded-lg transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-2.5 text-[#65717C] hover:text-[#607D9A] hover:bg-[#EAE6DE] rounded-lg transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-[#65717C]"
            >
              <span className="text-[#607D9A]">{statIcons[stat.icon]}</span>
              <span className="text-sm font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-[#8A96A3]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
