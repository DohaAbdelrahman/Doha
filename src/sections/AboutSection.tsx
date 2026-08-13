"use client";

import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/portfolio/ScrollReveal";
import { about } from "@/data/portfolio";

const focusIcons: Record<string, React.ReactNode> = {
  "bar-chart-3": (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  brain: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83L12 11.66l-2.83-2.83A4 4 0 0 1 12 2z" />
      <path d="M8 10c-2.21 0-4 1.79-4 4v2h16v-2c0-2.21-1.79-4-4-4H8z" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  sparkles: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
      <path d="M19 14l.75 2.75L22.5 17.5l-2.75.75L19 21l-.75-2.75-2.75-.75 2.75-.75L19 14z" />
    </svg>
  ),
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#E8ECEA]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#263238] mb-4">
            About Me
          </h2>
          <div className="w-12 h-1 bg-[#4F7C78] mx-auto rounded-full" />
        </ScrollReveal>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Bio */}
          <ScrollReveal className="lg:col-span-3" direction="left">
            <div className="space-y-5">
              {about.bio.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[#607174] leading-relaxed text-base sm:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Focus Area Cards */}
          <div className="lg:col-span-2">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {about.focusAreas.map((area) => (
                <StaggerItem key={area.title}>
                  <div className="bg-[#F8FAF9] rounded-xl p-5 border border-[#D6DEDA] hover:shadow-md hover:border-[#4F7C78]/30 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#4F7C78]/10 flex items-center justify-center text-[#4F7C78]">
                        {focusIcons[area.icon]}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#263238] text-sm mb-1.5">
                          {area.title}
                        </h3>
                        <p className="text-[#607174] text-sm leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
