"use client";

import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/portfolio/ScrollReveal";
import { experiences } from "@/data/portfolio";

const typeIcons: Record<string, React.ReactNode> = {
  education: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  program: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  milestone: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F4F1EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202A35] mb-4">
            Learning &amp; Professional Journey
          </h2>
          <p className="text-[#65717C] max-w-2xl mx-auto text-base sm:text-lg">
            Key milestones and programs that have shaped my data science
            journey.
          </p>
          <div className="w-12 h-1 bg-[#607D9A] mx-auto rounded-full mt-4" />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-[#D9D5CD]" />

          <StaggerContainer className="space-y-8">
            {experiences.map((exp, idx) => (
              <StaggerItem key={idx}>
                <div className="relative flex gap-6 sm:gap-8">
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-[#FAF9F6] border-2 border-[#607D9A] flex items-center justify-center text-[#607D9A]">
                      {typeIcons[exp.type]}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-[#FAF9F6] rounded-xl border border-[#D9D5CD] p-5 sm:p-6 hover:shadow-md hover:border-[#607D9A]/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-[#202A35] text-base sm:text-lg">
                        {exp.title}
                      </h3>
                      <span className="text-xs font-medium text-[#607D9A] bg-[#607D9A]/10 px-2.5 py-0.5 rounded-md whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-[#607D9A] text-sm font-medium mb-2">
                      {exp.organization}
                    </p>
                    <p className="text-[#65717C] text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    {exp.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs text-[#65717C] bg-[#EAE6DE] rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
