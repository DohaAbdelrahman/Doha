"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navigation = [
  {
    label: "ABOUT",
    href: "#about",
    section: "about",
  },
  {
    label: "PROJECTS",
    href: "#projects",
    section: "projects",
  },
  {
    label: "Training",
    href: "#experience",
    section: "experience",
  },
  {
    label: "EDUCATION",
    href: "#education",
    section: "education",
  },
  {
    label: "CERTIFICATIONS",
    href: "#certifications",
    section: "certifications",
  },
  {
    label: "CONTACT",
    href: "#contact",
    section: "contact",
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 40);

      if (scrollY < 250) {
        setActiveSection("home");
        return;
      }

      let currentSection = "home";

      navigation.forEach(({ section }) => {
        const element = document.getElementById(section);

        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 180) {
          currentSection = section;
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

    const element = document.querySelector(href);

    if (!element) return;

    element.scrollIntoView({
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

    setActiveSection("home");
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
        px-4
        pt-4
        sm:px-6
        sm:pt-5
      "
    >
      {/* =====================================================
          NAVBAR
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
          px-4
          transition-all
          duration-500
          sm:px-6

          ${
            scrolled
              ? `
                border-[#C7A86B]/20
                bg-[#081412]/80
                shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                backdrop-blur-xl
              `
              : `
                border-[#F5F1E8]/[0.08]
                bg-[#F5F1E8]/[0.02]
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
            shrink-0
            items-baseline
            gap-0.5
          "
        >
          <span
            className="
              text-lg
              font-semibold
              tracking-[-0.04em]
              text-[#F5F1E8]
              transition-colors
              duration-300
              group-hover:text-white
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
              text-[#C7A86B]
              transition-all
              duration-300
              group-hover:text-[#D8BC82]
              group-hover:drop-shadow-[0_0_8px_rgba(199,168,107,0.45)]
            "
          >
            .
          </span>
        </button>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div
          className="
            hidden
            items-center
            gap-5
            md:flex
            lg:gap-7
          "
        >
          {navigation.map((item) => {
            const isActive =
              activeSection === item.section;

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="
                  group
                  relative
                  whitespace-nowrap
                  py-2
                  text-[9px]
                  font-medium
                  tracking-[0.17em]
                  lg:text-[10px]
                  lg:tracking-[0.19em]
                "
              >
                <span
                  className={`
                    transition-colors
                    duration-300

                    ${
                      isActive
                        ? "text-[#F5F1E8]"
                        : "text-[#9BA8A2] group-hover:text-[#F5F1E8]"
                    }
                  `}
                >
                  {item.label}
                </span>

                {/* Active Line */}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-1/2
                    h-px
                    -translate-x-1/2
                    bg-[#C7A86B]
                    shadow-[0_0_8px_rgba(199,168,107,0.45)]
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
          onClick={() =>
            setMobileOpen((prev) => !prev)
          }
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            border-[#C7A86B]/15
            bg-[#F5F1E8]/[0.025]
            text-[#F5F1E8]
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#C7A86B]/40
            hover:bg-[#C7A86B]/[0.06]
            md:hidden
          "
        >
          {mobileOpen ? (
            <X size={18} strokeWidth={1.5} />
          ) : (
            <Menu size={18} strokeWidth={1.5} />
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
              border-[#C7A86B]/15
              bg-[#081412]/90
              shadow-[0_15px_50px_rgba(0,0,0,0.3)]
              backdrop-blur-xl
              md:hidden
            "
          >
            <div className="px-3 py-3">
              {navigation.map((item, index) => {
                const isActive =
                  activeSection === item.section;

                return (
                  <motion.button
                    key={item.href}
                    type="button"
                    onClick={() =>
                      handleNavClick(item.href)
                    }
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
                      hover:bg-[#C7A86B]/[0.04]
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
                            ? "text-[#F5F1E8]"
                            : "text-[#9BA8A2] group-hover:text-[#F5F1E8]"
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
                            ? "bg-[#C7A86B] shadow-[0_0_10px_rgba(199,168,107,0.7)]"
                            : "bg-[#65736D]/30"
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