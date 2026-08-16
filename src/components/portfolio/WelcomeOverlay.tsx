"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function WelcomeOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("portfolio-welcome");

    if (!hasVisited) {
      setVisible(true);
      sessionStorage.setItem("portfolio-welcome", "true");

      const timer = setTimeout(() => {
        setVisible(false);
      }, 2200);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
            },
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-[#081412]/80
            backdrop-blur-md
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.97,
              y: -10,
              transition: {
                duration: 0.45,
              },
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="
              px-6
              text-center
            "
          >
            <p
              className="
                text-3xl
                font-medium
                tracking-[-0.04em]
                text-[#F5F1E8]
                sm:text-5xl
                md:text-6xl
              "
            >
              Hey! Welcome to my portfolio
              <span className="ml-2">👋</span>
            </p>


            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: "70px",
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
                duration: 0.5,
              }}
              className="
                mx-auto
                mt-7
                h-px
                bg-[#C7A86B]
              "
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}