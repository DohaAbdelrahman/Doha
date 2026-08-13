"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
} from "lucide-react";
import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { projects } from "@/data/portfolio";

/* ── abstract data-science visual per project ── */
function ProjectVisual({ project, index }: { project: typeof projects[number]; index: number }) {
  const palettes = [
    ["#607D9A", "#8A96A3", "#D9D5CD"], // blue-ish
    ["#4F6A84", "#607D9A", "#EAE6DE"], // deep blue
    ["#8A96A3", "#B0B8C4", "#FAF9F6"], // steel
  ];
  const [c1, c2, c3] = palettes[index % palettes.length];

  return (
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-[#EAE6DE] to-[#FAF9F6]">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Decorative grid dots */}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => (
            <circle
              key={`dot-${row}-${col}`}
              cx={30 + col * 40}
              cy={25 + row * 35}
              r="1.5"
              fill={c3}
              opacity="0.5"
            />
          ))
        )}

        {/* Chart-style bars */}
        <rect x="40" y="180" width="28" height="80" rx="3" fill={c1} opacity="0.25" />
        <rect x="80" y="140" width="28" height="120" rx="3" fill={c1} opacity="0.35" />
        <rect x="120" y="100" width="28" height="160" rx="3" fill={c1} opacity="0.5" />
        <rect x="160" y="130" width="28" height="130" rx="3" fill={c2} opacity="0.4" />
        <rect x="200" y="80" width="28" height="180" rx="3" fill={c1} opacity="0.6" />
        <rect x="240" y="110" width="28" height="150" rx="3" fill={c2} opacity="0.35" />
        <rect x="280" y="60" width="28" height="200" rx="3" fill={c1} opacity="0.7" />
        <rect x="320" y="90" width="28" height="170" rx="3" fill={c2} opacity="0.45" />

        {/* Trend line */}
        <polyline
          points="54,170 94,125 134,85 174,115 214,65 254,95 294,45 334,75"
          fill="none"
          stroke={c1}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
        <polyline
          points="54,190 94,160 134,140 174,155 214,120 254,145 294,100 334,130"
          fill="none"
          stroke={c2}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="6 4"
          opacity="0.4"
        />

        {/* Data points on trend */}
        {[
          [54, 170], [94, 125], [134, 85], [174, 115],
          [214, 65], [254, 95], [294, 45], [334, 75],
        ].map(([cx, cy], i) => (
          <circle key={`pt-${i}`} cx={cx} cy={cy} r="4" fill="#FAF9F6" stroke={c1} strokeWidth="2" opacity="0.7" />
        ))}

        {/* Confusion-matrix style block */}
        <rect x="280" y="210" width="90" height="60" rx="4" fill="#FAF9F6" stroke={c2} strokeWidth="0.8" opacity="0.6" />
        <rect x="284" y="214" width="38" height="24" rx="2" fill={c1} opacity="0.5" />
        <rect x="326" y="214" width="40" height="24" rx="2" fill={c2} opacity="0.2" />
        <rect x="284" y="242" width="38" height="22" rx="2" fill={c2} opacity="0.2" />
        <rect x="326" y="242" width="40" height="22" rx="2" fill={c1} opacity="0.4" />

        {/* Title badge */}
        <rect x="30" y="20" width="140" height="28" rx="6" fill="#FAF9F6" opacity="0.85" />
        <text x="40" y="39" fontSize="11" fontFamily="sans-serif" fill={c1} fontWeight="600" opacity="0.7">
          {project.category}
        </text>
      </svg>
    </div>
  );
}

/* ── single case-study block ── */
function CaseStudy({
  project,
  index,
}: {
  project: typeof projects[number];
  index: number;
}) {
  const isEven = index % 2 === 0; // text-left, visual-right
  const number = String(index + 1).padStart(2, "0");

  return (
    <ScrollReveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text side */}
        <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
          {/* Project number */}
          <span className="text-[#607D9A] text-sm font-semibold tracking-widest">
            {number}
          </span>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-[#202A35] mt-2 mb-3">
            {project.title}
          </h3>

          {/* Short description */}
          <p className="text-[#65717C] leading-relaxed mb-8">
            {project.shortDescription}
          </p>

          {/* PROBLEM / APPROACH / RESULT */}
          <div className="space-y-6 mb-8">
            <div>
              <h4 className="text-xs font-semibold text-[#607D9A] uppercase tracking-wider mb-2">
                Problem
              </h4>
              <p className="text-[#65717C] text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-[#607D9A] uppercase tracking-wider mb-2">
                Approach
              </h4>
              <p className="text-[#65717C] text-sm leading-relaxed">
                {project.modeling}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-[#607D9A] uppercase tracking-wider mb-2">
                Result
              </h4>
              <p className="text-[#65717C] text-sm leading-relaxed">
                {project.results}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-[#65717C] uppercase tracking-wider mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium text-[#65717C] bg-[#EAE6DE] rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#202A35] bg-[#FAF9F6] border border-[#D9D5CD] hover:border-[#607D9A]/40 hover:bg-[#EAE6DE] rounded-lg transition-all duration-200"
              >
                <Github size={16} />
                Source Code
                <ArrowUpRight
                  size={14}
                  className="text-[#65717C] group-hover:text-[#607D9A] transition-colors"
                />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#607D9A] hover:bg-[#4F6A84] rounded-lg transition-colors duration-200"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Visual side */}
        <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="rounded-lg overflow-hidden shadow-sm border border-[#D9D5CD] hover:shadow-md transition-shadow duration-300"
          >
            <ProjectVisual project={project} index={index} />
          </motion.div>
        </div>
      </div>

      {/* Divider (except last) */}
      {index < projects.length - 1 && (
        <div className="mt-24 mb-2 flex items-center justify-center">
          <div className="w-px h-16 bg-[#D9D5CD]" />
        </div>
      )}
    </ScrollReveal>
  );
}

/* ── projects section ── */
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#EAE6DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202A35] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#65717C] max-w-2xl mx-auto text-base sm:text-lg">
            Data science case studies showcasing problem-solving through
            data — from exploration to deployment.
          </p>
          <div className="w-12 h-1 bg-[#607D9A] mx-auto rounded-full mt-4" />
        </ScrollReveal>

        {/* Case Studies */}
        <div className="space-y-0">
          {projects.map((project, idx) => (
            <CaseStudy key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
