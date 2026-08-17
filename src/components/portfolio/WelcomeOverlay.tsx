"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const message = "Hey! Welcome to my portfolio 👋";

export default function WelcomeOverlay() {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    let index = 0;

    // Typing effect
    const typingInterval = setInterval(() => {
      index++;

      setText(message.slice(0, index));

      if (index >= message.length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          setShowSubtitle(true);
        }, 250);
      }
    }, 65);

    // Hide overlay
    const closeTimer = setTimeout(() => {
      setVisible(false);
    }, 3500);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(closeTimer);
    };
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
            bg-[#081412]/85
            backdrop-blur-md
          "
        >
          <div className="px-6 text-center">

            {/* Main Message */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                text-3xl
                font-medium
                tracking-[-0.04em]
                text-[#F5F1E8]
                sm:text-5xl
                md:text-6xl
              "
            >
              {text}

              {/* Typing Cursor */}

              <motion.span
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
                className="
                  ml-1
                  text-[#C7A86B]
                "
              >
                |
              </motion.span>
            </motion.h1>

            {/* Subtitle */}

            <AnimatePresence>
              {showSubtitle && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                    mt-5
                    text-sm
                    tracking-wide
                    text-[#9BA8A2]
                    sm:text-base
                  "
                >
                  {subtitle}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Gold Line */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: "70px",
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 0.5,
              }}
              className="
                mx-auto
                mt-7
                h-px
                bg-[#C7A86B]
              "
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}