"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { certifications } from "@/data/portfolio";

const colors = {
  background: "#081412",
  card: "#0D1C19",
  gold: "#C7A86B",
  goldHover: "#D8BC82",
  cream: "#F5F1E8",
  muted: "#9BA8A2",
  subtle: "#65736D",
};

export default function CertificationsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const openImage = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const openCredential = (url: string) => {
    let previewUrl = url;

    if (url.includes("drive.google.com/file/d/")) {
      const match = url.match(/\/file\/d\/([^/]+)/);

      if (match?.[1]) {
        previewUrl = `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }

    setSelectedPdf(previewUrl);
  };

  const closeModals = () => {
    setSelectedImage(null);
    setSelectedPdf(null);
    setSelectedTitle("");
  };

  return (
    <section
      id="certifications"
      className="
        relative
        overflow-hidden
        bg-[#081412]
        py-24
        sm:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top right circles */}

        <div
          className="
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#C7A86B]/[0.07]
          "
        />

        <div
          className="
            absolute
            -right-20
            -top-20
            h-[280px]
            w-[280px]
            rounded-full
            border
            border-[#C7A86B]/[0.05]
          "
        />

        {/* Bottom left circle */}

        <div
          className="
            absolute
            -bottom-52
            -left-40
            h-[440px]
            w-[440px]
            rounded-full
            border
            border-[#C7A86B]/[0.05]
          "
        />

        {/* Soft glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C7A86B]/[0.012]
            blur-[140px]
          "
        />

        {/* Dot pattern */}

        <div
          className="
            absolute
            left-[5%]
            top-[20%]
            grid
            grid-cols-4
            gap-4
            opacity-25
          "
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              className="
                h-1
                w-1
                rounded-full
                bg-[#C7A86B]/40
              "
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          px-6
          sm:px-10
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <ScrollReveal className="mb-14 text-center">
          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-10
                bg-[#C7A86B]/50
              "
            />

            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#C7A86B]
              "
            >
              Learning & Credentials
            </p>

            <span
              className="
                h-px
                w-10
                bg-[#C7A86B]/50
              "
            />
          </div>

          <h2
            className="
              text-5xl
              font-medium
              tracking-[-0.06em]
              text-[#F5F1E8]
              sm:text-6xl
              md:text-7xl
            "
          >
            Certifications
            <span className="text-[#C7A86B]">.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-[#9BA8A2]
              sm:text-base
            "
          >
            Professional certifications and learning
            milestones across data science,
            machine learning, and AI.
          </p>
        </ScrollReveal>

        {/* =================================================
            CERTIFICATION GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {certifications.map((cert, index) => (
            <motion.article
              key={`${cert.title}-${index}`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#C7A86B]/20
                bg-[#0D1C19]/70
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#C7A86B]/50
                hover:bg-[#C7A86B]/[0.025]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              "
            >
              {/* =================================================
                  CERTIFICATE IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  block
                  h-[210px]
                  overflow-hidden
                  border-b
                  border-[#C7A86B]/10
                  bg-[#06100E]
                "
              >
                {cert.image ? (
                  <button
                    type="button"
                    onClick={() =>
                      openImage(cert.image, cert.title)
                    }
                    aria-label={`Preview ${cert.title} certificate`}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      cursor-zoom-in
                    "
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="
                        h-full
                        w-full
                        object-contain
                        p-3
                        transition-transform
                        duration-500
                        group-hover:scale-[1.06]
                      "
                    />
                  </button>
                ) : (
                  <div
                    className="
                      flex
                      h-full
                      items-center
                      justify-center
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-[#65736D]
                    "
                  >
                    Certificate
                  </div>
                )}

                {/* Image overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#081412]/45
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Open credential button */}

                {cert.credentialUrl && (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      openCredential(cert.credentialUrl);
                    }}
                    aria-label={`Open ${cert.title} credential`}
                    className="
                      absolute
                      right-4
                      top-4
                      z-20
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C7A86B]/30
                      bg-[#081412]/80
                      text-[#C7A86B]
                      opacity-0
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:border-[#C7A86B]/70
                      hover:bg-[#C7A86B]/10
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight size={15} />
                  </button>
                )}
              </div>

              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div className="relative p-5 sm:p-6">
                {/* Number + Label */}

                <div className="flex items-start justify-between">
                  <span
                    className="
                      text-3xl
                      font-light
                      leading-none
                      tracking-[-0.07em]
                      text-[#C7A86B]/25
                      transition-colors
                      duration-300
                      group-hover:text-[#C7A86B]/55
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.22em]
                      text-[#65736D]
                    "
                  >
                    Certificate
                  </span>
                </div>

                {/* Organization */}

                <p
                  className="
                    mt-6
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#C7A86B]
                  "
                >
                  {cert.organization}
                </p>

                {/* Title */}

                <h3
                  className="
                    mt-2
                    max-w-[92%]
                    text-xl
                    font-medium
                    leading-tight
                    tracking-[-0.03em]
                    text-[#F5F1E8]
                    transition-colors
                    duration-300
                    group-hover:text-[#C7A86B]
                  "
                >
                  {cert.title}
                </h3>

                {/* Date */}

                <p
                  className="
                    mt-3
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-[#65736D]
                  "
                >
                  {cert.date}
                </p>

                {/* Skills */}

                {cert.skills?.length > 0 && (
                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-1.5
                    "
                  >
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-[#C7A86B]/10
                          bg-[#C7A86B]/[0.025]
                          px-2.5
                          py-1
                          text-[9px]
                          text-[#65736D]
                          transition-all
                          duration-200
                          group-hover:border-[#C7A86B]/20
                          group-hover:text-[#9BA8A2]
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom hover line */}

              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-px
                  w-0
                  -translate-x-1/2
                  bg-[#C7A86B]
                  shadow-[0_0_12px_rgba(199,168,107,0.6)]
                  transition-all
                  duration-500
                  group-hover:w-2/3
                "
              />
            </motion.article>
          ))}
        </div>

        {/* =================================================
            BOTTOM DECORATION
        ================================================= */}

        <ScrollReveal
          direction="up"
          delay={0.25}
          className="mt-14"
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-16
                bg-[#C7A86B]/15
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#C7A86B]/60
              "
            />

            <span
              className="
                h-px
                w-16
                bg-[#C7A86B]/15
              "
            />
          </div>
        </ScrollReveal>
      </div>

      {/* =====================================================
          IMAGE PREVIEW MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModals}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/85
              p-4
              backdrop-blur-md
              sm:p-8
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                flex
                max-h-[90vh]
                max-w-[95vw]
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-[#C7A86B]/30
                bg-[#06100E]
                p-3
                shadow-2xl
              "
            >
              <img
                src={selectedImage}
                alt={`${selectedTitle} certificate preview`}
                className="
                  max-h-[85vh]
                  max-w-full
                  object-contain
                "
              />

              <button
                type="button"
                onClick={closeModals}
                aria-label="Close certificate preview"
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C7A86B]/30
                  bg-[#081412]/90
                  text-[#F5F1E8]
                  backdrop-blur-md
                  transition-all
                  hover:border-[#C7A86B]/70
                  hover:text-[#C7A86B]
                "
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          PDF PREVIEW MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModals}
            className="
              fixed
              inset-0
              z-[110]
              flex
              items-center
              justify-center
              bg-black/90
              p-3
              backdrop-blur-md
              sm:p-6
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                h-[92vh]
                w-full
                max-w-5xl
                overflow-hidden
                rounded-xl
                border
                border-[#C7A86B]/30
                bg-[#06100E]
                shadow-2xl
              "
            >
              <iframe
                src={selectedPdf}
                title={`${selectedTitle} credential`}
                className="
                  h-full
                  w-full
                  border-0
                "
              />

              <button
                type="button"
                onClick={closeModals}
                aria-label="Close PDF preview"
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C7A86B]/30
                  bg-[#081412]/90
                  text-[#F5F1E8]
                  backdrop-blur-md
                  transition-all
                  hover:border-[#C7A86B]/70
                  hover:text-[#C7A86B]
                "
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}