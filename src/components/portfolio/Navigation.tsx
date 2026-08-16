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
      initial={{
        y: -20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        px-5
        pt-5
        sm:px-8
      "
    >
      {/* =====================================================
          DESKTOP / MAIN NAVIGATION
      ===================================================== */}

      <nav
        className={`
          mx-auto
          flex
          h-14
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          px-5
          transition-all
          duration-500
          sm:px-7

          ${
            scrolled
              ? `
                border-[#A7B68D]/20
                bg-[#0F1714]/70
                shadow-[0_8px_35px_rgba(0,0,0,0.18)]
                backdrop-blur-xl
              `
              : `
                border-[#D6CEC1]/10
                bg-[#F5F3EC]/[0.018]
                backdrop-blur-md
              `
          }
        `}
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <button
          type="button"
          onClick={handleLogoClick}
          aria-label="Go to home"
          className="
            group
            flex
            items-baseline
            gap-0.5
          "
        >
          <span
            className="
              text-lg
              font-semibold
              tracking-[-0.04em]
              text-[#F5F3EC]
              transition-colors
              duration-300
              group-hover:text-[#D6CEC1]
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
              text-[#A7B68D]
              transition-all
              duration-300
              group-hover:text-[#B8C49F]
              group-hover:drop-shadow-[0_0_8px_rgba(167,182,141,0.45)]
            "
          >
            .
          </span>
        </button>

        {/* =================================================
            DESKTOP LINKS
        ================================================= */}

        <div className="hidden items-center gap-7 md:flex lg:gap-9">
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
                  text-[10px]
                  font-medium
                  tracking-[0.2em]
                "
              >
                <span
                  className={`
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-[#F5F3EC]"
                        : "text-[#8E988F] group-hover:text-[#F5F3EC]"
                    }
                  `}
                >
                  {item.label}
                </span>

                {/* Active / Hover Line */}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-1/2
                    h-px
                    -translate-x-1/2
                    bg-[#A7B68D]
                    shadow-[0_0_8px_rgba(167,182,141,0.4)]
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

        {/* =================================================
            MOBILE BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-[#D6CEC1]/10
            bg-[#F5F3EC]/[0.025]
            text-[#F5F3EC]
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#A7B68D]/40
            hover:bg-[#A7B68D]/[0.06]
            md:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X
              size={18}
              strokeWidth={1.5}
            />
          ) : (
            <Menu
              size={18}
              strokeWidth={1.5}
            />
          )}
        </button>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              mx-auto
              mt-2
              max-w-7xl
              overflow-hidden
              rounded-2xl
              border
              border-[#A7B68D]/15
              bg-[#0F1714]/85
              shadow-[0_15px_50px_rgba(0,0,0,0.25)]
              backdrop-blur-xl
              md:hidden
            "
          >
            <div className="px-3 py-3">
              {navigation.map((item, index) => {
                const isActive = activeSection === item.section;

                return (
                  <motion.button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-4
                      text-left
                      transition-all
                      duration-300
                      hover:bg-[#F5F3EC]/[0.035]
                    "
                  >
                    <span
                      className={`
                        text-[11px]
                        font-medium
                        tracking-[0.2em]
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? "text-[#F5F3EC]"
                            : "text-[#8E988F] group-hover:text-[#F5F3EC]"
                        }
                      `}
                    >
                      {item.label}
                    </span>

                    <span
                      className={`
                        h-1.5
                        w-1.5
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "bg-[#A7B68D] shadow-[0_0_10px_rgba(167,182,141,0.7)]"
                            : "bg-[#6B7468]/30"
                        }
                      `}
                    />
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