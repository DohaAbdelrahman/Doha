"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, ExternalLink, Github, ArrowUpRight,
  FileText, Database, BarChart3, BrainCircuit,
  FlaskConical, CheckCircle2,
} from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/portfolio/ScrollReveal";
import { projects, type Project } from "@/data/portfolio";

/* ── SVG data-science visual for each board ── */
function ProjectVisual({ index }: { index: number }) {
  const c = ["#7EB8DA", "#5BA3D0", "#3D7FA8"][index % 3];
  const cLight = ["rgba(126,184,218,0.15)", "rgba(91,163,208,0.15)", "rgba(61,127,168,0.15)"][index % 3];
  return (
    <svg viewBox="0 0 320 220" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {/* Grid dots */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle key={`d${row}${col}`} cx={20 + col * 38} cy={18 + row * 36} r="1" fill="rgba(150,200,230,0.15)" />
        ))
      )}
      {/* Bars */}
      {[80, 130, 160, 100, 140, 180, 120, 170].map((h, i) => (
        <rect key={`b${i}`} x={24 + i * 36} y={190 - h * 0.5} width="22" height={h * 0.5} rx="3" fill={cLight} />
      ))}
      {/* Trend line */}
      <polyline
        points="35,140 71,115 107,95 143,110 179,75 215,100 251,65 287,85"
        fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"
      />
      {/* Dots on trend */}
      {[[35, 140], [107, 95], [179, 75], [251, 65]].map(([cx, cy], i) => (
        <circle key={`p${i}`} cx={cx} cy={cy} r="3.5" fill="#071A2B" stroke={c} strokeWidth="1.5" opacity="0.8" />
      ))}
      {/* Confusion matrix block */}
      <rect x="230" y="155" width="70" height="48" rx="4" fill="rgba(10,37,64,0.6)" stroke="rgba(150,200,230,0.15)" strokeWidth="0.5" />
      <rect x="234" y="159" width="28" height="18" rx="2" fill={cLight} />
      <rect x="266" y="159" width="30" height="18" rx="2" fill="rgba(150,200,230,0.08)" />
      <rect x="234" y="181" width="28" height="16" rx="2" fill="rgba(150,200,230,0.08)" />
      <rect x="266" y="181" width="30" height="16" rx="2" fill={cLight} />
    </svg>
  );
}

/* ── Case Study Modal ── */
function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const steps = [
    { icon: <FileText className="w-4 h-4" />, label: "Overview", key: "problem" as const },
    { icon: <Database className="w-4 h-4" />, label: "Dataset", key: "data" as const },
    { icon: <BarChart3 className="w-4 h-4" />, label: "Analysis", key: "analysis" as const },
    { icon: <BrainCircuit className="w-4 h-4" />, label: "Modeling", key: "modeling" as const },
    { icon: <FlaskConical className="w-4 h-4" />, label: "Evaluation", key: "evaluation" as const },
    { icon: <CheckCircle2 className="w-4 h-4" />, label: "Results", key: "results" as const },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A2B]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="glass-strong rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 glass-strong rounded-t-3xl px-6 py-4 flex items-start justify-between z-10 border-b border-[rgba(150,200,230,0.12)]">
          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <span className="inline-block mt-1.5 px-2.5 py-0.5 text-xs font-medium rounded-md bg-[#7EB8DA]/15 text-[#7EB8DA]">
              {project.category}
            </span>
          </div>
          <button onClick={onClose} className="p-2 text-[#8B9BB4] hover:text-white hover:bg-white/10 rounded-lg transition-colors" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-xs font-semibold text-[#8B9BB4] uppercase tracking-wider mb-4">Process</h4>
            <div className="bg-[#0D2D4A] rounded-xl p-4">
              <p className="text-[#8B9BB4] text-sm leading-relaxed">{project.process}</p>
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.key} className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#7EB8DA]/10 flex items-center justify-center text-[#7EB8DA] mt-0.5">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white mb-1">{step.label}</h4>
                  <p className="text-[#8B9BB4] text-sm leading-relaxed">{project[step.key]}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#8B9BB4] uppercase tracking-wider mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium text-[#7EB8DA] bg-[#7EB8DA]/10 rounded-lg">{tech}</span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 border-t border-[rgba(150,200,230,0.12)]">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white glass-subtle rounded-lg hover:bg-white/10 transition-all">
                <Github size={16} />Source Code
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#071A2B] bg-[#7EB8DA] hover:bg-[#5BA3D0] rounded-lg transition-colors">
                <ExternalLink size={16} />Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Single Glass Board ── */
function GlassBoard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "tween", duration: 0.4 }}
      className="glass rounded-3xl p-6 sm:p-8 flex flex-col h-full group cursor-default relative overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(126,184,218,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 flex flex-col h-full">
        {/* Number + Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl sm:text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500">
            {number}
          </span>
          <span className="px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase text-[#7EB8DA]/70 bg-[#7EB8DA]/10 rounded-lg">
            {project.category}
          </span>
        </div>

        {/* Visual */}
        <div className="rounded-2xl overflow-hidden mb-5 bg-[#0A2540] border border-[rgba(150,200,230,0.08)] group-hover:border-[rgba(150,200,230,0.2)] transition-all duration-500">
          <div className="aspect-[16/10]">
            <ProjectVisual index={index} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#7EB8DA] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#8B9BB4] text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-[11px] text-[#8B9BB4] bg-white/5 rounded-lg border border-[rgba(150,200,230,0.08)]">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2.5 py-1 text-[11px] text-[#8B9BB4]/60 bg-white/5 rounded-lg">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Key Result */}
        <p className="text-[#7EB8DA]/80 text-xs leading-relaxed mb-5 line-clamp-2 italic">
          {project.results}
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-3 mt-auto">
          <button
            onClick={() => {/* handled by parent */}}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#7EB8DA] hover:text-white glass-subtle rounded-xl hover:bg-white/10 transition-all duration-300 group/btn"
          >
            View Case Study
            <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
          </button>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm text-[#8B9BB4] hover:text-[#7EB8DA] transition-colors">
              GitHub
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Projects Section ── */
export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#071A2B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-[#7EB8DA] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-[#8B9BB4] max-w-2xl mx-auto text-base sm:text-lg">
            Real projects built with data, machine learning, and problem-solving.
          </p>
        </ScrollReveal>

        {/* 3 Glass Boards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featured.map((project, idx) => (
            <StaggerItem key={project.id}>
              <div onClick={() => setSelectedProject(project)}>
                <GlassBoard project={project} index={idx} />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* More Projects */}
        <ScrollReveal>
          <h3 className="text-xl font-semibold text-white mb-6 text-center">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((project, idx) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "tween", duration: 0.3 }}
                className="glass-subtle rounded-2xl p-5 flex flex-col cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#7EB8DA]/50 text-lg font-bold">{String(featured.length + idx + 1).padStart(2, "0")}</span>
                  <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-[#7EB8DA]/60 bg-[#7EB8DA]/8 rounded-md">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-white mb-2 group-hover:text-[#7EB8DA] transition-colors">{project.title}</h4>
                <p className="text-[#8B9BB4] text-sm leading-relaxed mb-4 flex-1 line-clamp-2">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[11px] text-[#8B9BB4] bg-white/5 rounded-md">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[#7EB8DA]/70 text-xs font-medium group-hover:text-[#7EB8DA] transition-colors">
                  View Case Study <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
