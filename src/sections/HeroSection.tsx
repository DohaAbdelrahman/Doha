"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

import { profile} from "@/data/portfolio";



export default function HeroSection() {
  const scrollToProjects = () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#071A2B]">
      

      {/* Subtle radial glow behind content */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4F8FD8]/5 blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">



        {/* Floating Orb Field */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {/* Large soft orbs */}
          <motion.div
            className="absolute w-24 h-24 rounded-full border border-[#7FB2E5]/20 bg-[#5B9FE3]/8 shadow-[0_0_50px_rgba(91,159,227,0.10)]"
            style={{ top: "12%", left: "8%" }}
            animate={{
              x: [0, 25, -15, 10, 0],
              y: [0, -20, 15, -10, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute w-16 h-16 rounded-full border border-[#7FB2E5]/20 bg-[#6AA7E8]/8 shadow-[0_0_40px_rgba(106,167,232,0.10)]"
            style={{ top: "20%", right: "9%" }}
            animate={{
              x: [0, -20, 15, -10, 0],
              y: [0, 20, -15, 10, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute w-12 h-12 rounded-full border border-[#8BBBE8]/20 bg-[#8BBBE8]/8"
            style={{ bottom: "18%", left: "11%" }}
            animate={{
              x: [0, 20, -10, 15, 0],
              y: [0, -15, 20, -10, 0],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute w-14 h-14 rounded-full border border-[#7FB2E5]/20 bg-[#5B9FE3]/8"
            style={{ bottom: "20%", right: "12%" }}
            animate={{
              x: [0, -15, 10, -20, 0],
              y: [0, 15, -20, 10, 0],
            }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Many small floating particles */}
          {[
            ["12%", "32%"],
            ["18%", "72%"],
            ["25%", "15%"],
            ["30%", "82%"],
            ["36%", "9%"],
            ["42%", "92%"],
            ["48%", "17%"],
            ["54%", "86%"],
            ["61%", "8%"],
            ["67%", "94%"],
            ["73%", "18%"],
            ["78%", "82%"],
            ["84%", "12%"],
            ["90%", "70%"],
            ["94%", "35%"],
            ["15%", "52%"],
            ["27%", "91%"],
            ["72%", "88%"],
            ["87%", "48%"],
            ["57%", "94%"],
          ].map(([top, left], index) => (
            <motion.span
              key={index}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#7FB2E5]/45 shadow-[0_0_10px_rgba(127,178,229,0.25)]"
              style={{ top, left }}
              animate={{
                y: [0, -8, 0, 8, 0],
                opacity: [0.3, 0.7, 0.35, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + (index % 4),
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}

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
          Data Science
          <span className="mx-3 text-[#5B9FE3]/50">|</span>
          Machine Learning
          <span className="mx-3 text-[#5B9FE3]/50">|</span>
          Data Analysis
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
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
      </div>
        
      {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 rounded-full border border-[#7FB2E5]/50 flex items-start justify-center p-1.5">
            <motion.span
              animate={{ y: [0, 12, 0], opacity: [1, 0.4, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-[#6AA7E8] shadow-[0_0_8px_rgba(106,167,232,0.7)]"
            />
          </div>

          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="w-2.5 h-2.5 border-r border-b border-[#7FB2E5]/60 rotate-45"
          />
        </motion.div>

    </section>
  );
}
