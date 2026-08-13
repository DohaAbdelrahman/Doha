"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  ArrowRight,
  Database,
  BrainCircuit,
  BarChart3,
  FlaskConical,
  CheckCircle2,
  FileText,
} from "lucide-react";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/portfolio/ScrollReveal";
import { projects, type Project } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  "Machine Learning": "bg-[#4F7C78]/10 text-[#4F7C78]",
  "NLP / Deep Learning": "bg-[#3F6864]/10 text-[#3F6864]",
  "Data Science": "bg-[#7A9A96]/10 text-[#7A9A96]",
  "Deep Learning": "bg-[#3F6864]/10 text-[#3F6864]",
};

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#263238]/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-[#F8FAF9] rounded-2xl border border-[#D6DEDA] shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#F8FAF9] border-b border-[#D6DEDA] px-6 py-4 flex items-start justify-between z-10">
          <div>
            <h3 className="text-xl font-bold text-[#263238]">{project.title}</h3>
            <span
              className={`inline-block mt-1.5 px-2.5 py-0.5 text-xs font-medium rounded-md ${
                categoryColors[project.category] || "bg-[#E8ECEA] text-[#607174]"
              }`}
            >
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#607174] hover:text-[#263238] hover:bg-[#E8ECEA] rounded-lg transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Process Steps */}
          <div>
            <h4 className="text-xs font-semibold text-[#607174] uppercase tracking-wider mb-4">
              Process
            </h4>
            <div className="bg-[#F1F3F2] rounded-lg p-4 mb-4">
              <p className="text-[#607174] text-sm leading-relaxed">{project.process}</p>
            </div>
          </div>

          {/* Detailed Steps */}
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.key} className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#4F7C78]/10 flex items-center justify-center text-[#4F7C78] mt-0.5">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-[#263238] mb-1">
                    {step.label}
                  </h4>
                  <p className="text-[#607174] text-sm leading-relaxed">
                    {project[step.key]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-semibold text-[#607174] uppercase tracking-wider mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium text-[#4F7C78] bg-[#4F7C78]/10 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-2 border-t border-[#D6DEDA]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#263238] bg-[#E8ECEA] hover:bg-[#D6DEDA] rounded-lg transition-colors"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#4F7C78] hover:bg-[#3F6864] rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#E8ECEA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#263238] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#607174] max-w-2xl mx-auto text-base sm:text-lg">
            Data science case studies showcasing problem-solving through data —
            from exploration to deployment.
          </p>
          <div className="w-12 h-1 bg-[#4F7C78] mx-auto rounded-full mt-4" />
        </ScrollReveal>

        {/* Filter */}
        <ScrollReveal className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                filter === cat
                  ? "bg-[#4F7C78] text-white"
                  : "text-[#607174] bg-[#F8FAF9] border border-[#D6DEDA] hover:border-[#4F7C78]/40"
              }`}
            >
              {cat === "all" ? "All Projects" : cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Project Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <StaggerItem key={project.id}>
              <div
                className={`bg-[#F8FAF9] rounded-xl border border-[#D6DEDA] overflow-hidden hover:shadow-lg hover:border-[#4F7C78]/30 transition-all duration-300 cursor-pointer group h-full flex flex-col ${
                  project.featured ? "md:col-span-1" : ""
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Card Header Visual */}
                <div className="h-40 bg-gradient-to-br from-[#4F7C78]/15 to-[#7A9A96]/10 relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-[#4F7C78]/10 flex items-center justify-center">
                    <BrainCircuit className="w-8 h-8 text-[#4F7C78]/60" />
                  </div>
                  {project.featured && (
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 text-xs font-medium bg-[#4F7C78] text-white rounded-md">
                      Featured
                    </span>
                  )}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 text-xs font-medium rounded-md bg-[#F8FAF9]/80 text-[#4F7C78] backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-[#263238] text-lg mb-2 group-hover:text-[#4F7C78] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#607174] text-sm leading-relaxed mb-4 flex-1">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs text-[#607174] bg-[#E8ECEA] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-xs text-[#607174] bg-[#E8ECEA] rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action */}
                  <div className="flex items-center gap-2 text-[#4F7C78] text-sm font-medium">
                    <span>View Case Study</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
