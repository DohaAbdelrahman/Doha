"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

import { profile, heroStats } from "@/data/portfolio";

const statIcons: Record<string, React.ReactNode> = {
  brain: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83L12 11.66l-2.83-2.83A4 4 0 0 1 12 2z" />
      <path d="M8 10c-2.21 0-4 1.79-4 4v2h16v-2c0-2.21-1.79-4-4-4H8z" />
    </svg>
  ),
  "code-2": (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  award: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  target: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

export default function HeroSection() {
  const scrollToProjects = () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#071A2B]">
      

      {/* Subtle radial glow behind content */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4F8FD8]/5 blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">



        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {/* Orb 1 */}
          <motion.div
            className="
              absolute
              w-32 h-32
              rounded-full
              bg-[#5B9FE3]/10
              border border-[#7FB2E5]/20
              shadow-[0_0_70px_rgba(91,159,227,0.12)]
              backdrop-blur-sm
            "
            style={{ top: "16%", left: "10%" }}
            animate={{
              x: [0, 20, -10, 15, 0],
              y: [0, -25, 15, -10, 0],
              scale: [1, 1.05, 0.98, 1.03, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Orb 2 */}
          <motion.div
            className="
              absolute
              w-24 h-24
              rounded-full
              bg-[#6AA7E8]/10
              border border-[#8BBBE8]/20
              shadow-[0_0_60px_rgba(106,167,232,0.12)]
              backdrop-blur-sm
            "
            style={{ top: "22%", right: "12%" }}
            animate={{
              x: [0, -20, 15, -10, 0],
              y: [0, 25, -15, 20, 0],
              scale: [1, 0.97, 1.04, 0.99, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Orb 3 */}
          <motion.div
            className="
              absolute
              w-14 h-14
              rounded-full
              bg-[#8BBBE8]/15
              border border-[#8BBBE8]/25
              shadow-[0_0_40px_rgba(139,187,232,0.15)]
            "
            style={{ bottom: "24%", left: "18%" }}
            animate={{
              x: [0, 25, -15, 10, 0],
              y: [0, -20, 15, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Orb 4 */}
          <motion.div
            className="
              absolute
              w-16 h-16
              rounded-full
              bg-[#5B9FE3]/10
              border border-[#7FB2E5]/20
              shadow-[0_0_45px_rgba(91,159,227,0.12)]
            "
            style={{ bottom: "20%", right: "18%" }}
            animate={{
              x: [0, -20, 15, -10, 0],
              y: [0, 15, -20, 10, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Small floating particles */}
          <motion.span
            className="absolute w-2 h-2 rounded-full bg-[#7FB2E5]/40"
            style={{ top: "25%", left: "32%" }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.span
            className="absolute w-1.5 h-1.5 rounded-full bg-[#7FB2E5]/50"
            style={{ top: "38%", right: "28%" }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-10 h-px bg-[#4F8FD8]/50" />

          <span className="text-[#6AA7E8] text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[0.18em]">
            EXPLORE ME
          </span>

          <span className="w-10 h-px bg-[#4F8FD8]/50" />
        </motion.div>


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#4F8FD8] mb-6"
        >
          {profile.title}
        </motion.h2>

        

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="
            mt-6
            text-base
            sm:text-lg
            font-medium
            tracking-wide
            text-[#A9BACB]
          "
        >
          Data Analysis
          <span className="mx-3 text-[#5B9FE3]/50">|</span>
          Machine Learning
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F8FD8] text-[#071A2B] rounded-xl text-sm font-semibold hover:bg-[#6AA7E8] transition-colors duration-200 hover-lift"
          >
            View My Projects
          </button>
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 px-6 py-3 glass text-white rounded-xl text-sm font-medium hover-glass"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            { href: profile.github, icon: <Github size={20} />, label: "GitHub" },
            { href: profile.linkedin, icon: <Linkedin size={20} />, label: "LinkedIn" },
            { href: `mailto:${profile.email}`, icon: <Mail size={20} />, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
              className="p-2.5 text-[#A8B8C8] hover:text-[#4F8FD8] hover:bg-white/5 rounded-xl transition-colors duration-200 hover-icon"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {heroStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-[#A8B8C8]">
              <span className="text-[#4F8FD8]/70">{statIcons[stat.icon]}</span>
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
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ArrowDown className="w-5 h-5 text-[#71859A]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
