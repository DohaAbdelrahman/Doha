"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((link) => link.href.replace("#", ""));

      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 140) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4"
    >
      <nav
        className={`
          mx-auto
          max-w-6xl
          rounded-2xl
          border
          transition-all
          duration-300
          ${
          scrolled
            ? `
              border-white/10
              bg-[#06192A]/95
              backdrop-blur-xl
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
            `
            : `
              border-white/5
              bg-[#06192A]/55
              backdrop-blur-md
            `
        }
        `}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          
          {/* Logo / Name */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="
              group
              flex
              items-center
              gap-2
              text-left
            "
          >
            <span
              className="
                text-base
                sm:text-lg
                font-semibold
                tracking-tight
                text-white
                transition-colors
                duration-300
                group-hover:text-[#6AA7E8]
              "
            >
              {profile.name}
            </span>

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#5B9FE3]
                shadow-[0_0_10px_rgba(91,159,227,0.8)]
              "
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const section = link.href.replace("#", "");
              const isActive = activeSection === section;

              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="
                    relative
                    px-3
                    py-2
                    text-sm
                    font-medium
                    transition-colors
                    duration-300
                  "
                >
                  <span
                    className={`
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-[#A8B8C8] hover:text-white"
                      }
                    `}
                  >
                    {link.label}
                  </span>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="
                        absolute
                        left-1/2
                        -bottom-0.5
                        h-1
                        w-1
                        -translate-x-1/2
                        rounded-full
                        bg-[#6AA7E8]
                        shadow-[0_0_10px_rgba(106,167,232,0.9)]
                      "
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Contact Button */}
          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className="
              hidden
              md:inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-[#5B9FE3]/30
              bg-[#4F8FD8]/10
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:border-[#6AA7E8]/60
              hover:bg-[#4F8FD8]/20
              hover:-translate-y-0.5
            "
          >
            Let's Talk

            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              md:hidden
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              text-white
              transition-all
              duration-300
              hover:bg-white/[0.08]
            "
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                overflow-hidden
                border-t
                border-white/10
                bg-[#06192A]/95
                md:hidden
              "
            >
              <div className="px-4 py-4">
                <div className="space-y-1">
                  {navLinks.map((link) => {
                    const section = link.href.replace("#", "");
                    const isActive = activeSection === section;

                    return (
                      <button
                        key={link.href}
                        type="button"
                        onClick={() => handleNavClick(link.href)}
                        className={`
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-3
                          text-left
                          text-sm
                          font-medium
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "bg-[#4F8FD8]/10 text-white"
                              : "text-[#A8B8C8] hover:bg-white/[0.04] hover:text-white"
                          }
                        `}
                      >
                        <span>{link.label}</span>

                        {isActive && (
                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-[#6AA7E8]
                              shadow-[0_0_10px_rgba(106,167,232,0.8)]
                            "
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => handleNavClick("#contact")}
                  className="
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#5B9FE3]/30
                    bg-[#4F8FD8]/10
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#4F8FD8]/20
                  "
                >
                  Let's Talk

                  <ArrowUpRight size={15} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}