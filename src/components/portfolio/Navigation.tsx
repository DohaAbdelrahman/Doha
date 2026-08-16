"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "WORK", href: "#projects", section: "projects" },
  { label: "ABOUT", href: "#about", section: "about" },
  { label: "JOURNEY", href: "#experience", section: "experience" },
  { label: "CONTACT", href: "#contact", section: "contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let currentSection = "home";

      navigation.forEach(({ section }) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 160) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

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

  const handleLogoClick = () => {
    setMobileOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="fixed left-0 right-0 top-0 z-50 px-5 pt-5 sm:px-8"
    >
      <nav
        className={`
          mx-auto
          flex
          h-14
          max-w-7xl
          items-center
          justify-between
          transition-all
          duration-500
          ${
            scrolled
              ? `
                border-b
                border-[#D6CEC1]/10
                bg-[#3A2A23]/90
                backdrop-blur-md
              `
              : `
                bg-transparent
              `
          }
        `}
      >
        {/* Logo */}

        <button
          type="button"
          onClick={handleLogoClick}
          className="
            group
            flex
            items-baseline
            gap-0.5
            text-left
          "
          aria-label="Go to home"
        >
          <span
            className="
              text-lg
              font-semibold
              tracking-[-0.03em]
              text-[#F4F0E8]
              transition-colors
              duration-300
              group-hover:text-[#B5ADA0]
              sm:text-xl
            "
          >
            DOHA
          </span>

          <span
            className="
              text-xl
              font-semibold
              leading-none
              text-[#A8AD8A]
              transition-transform
              duration-300
              group-hover:translate-y-[-1px]
            "
          >
            .
          </span>
        </button>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            const isActive = activeSection === item.section;

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="
                  group
                  relative
                  py-2
                  text-[11px]
                  font-medium
                  tracking-[0.18em]
                "
              >
                <span
                  className={`
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-[#F4F0E8]"
                        : "text-[#B5ADA0] hover:text-[#F4F0E8]"
                    }
                  `}
                >
                  {item.label}
                </span>

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-px
                    bg-[#A8AD8A]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            text-[#F4F0E8]
            md:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={21} strokeWidth={1.5} />
          ) : (
            <Menu size={21} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              mx-auto
              mt-2
              max-w-7xl
              border-t
              border-[#D6CEC1]/10
              bg-[#3A2A23]/95
              backdrop-blur-md
              md:hidden
            "
          >
            <div className="px-2 py-4">
              {navigation.map((item, index) => {
                const isActive = activeSection === item.section;

                return (
                  <motion.button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-3
                      py-3.5
                      text-left
                    "
                  >
                    <span
                      className={`
                        text-xs
                        tracking-[0.18em]
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? "text-[#F4F0E8]"
                            : "text-[#B5ADA0]"
                        }
                      `}
                    >
                      {item.label}
                    </span>

                    {isActive && (
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#A8AD8A]
                        "
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}