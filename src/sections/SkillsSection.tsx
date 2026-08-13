"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/portfolio/ScrollReveal";
import { skillCategories } from "@/data/portfolio";

const categoryIcons: Record<string, React.ReactNode> = {
  "code-2": <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  "bar-chart-3": <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>,
  brain: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83L12 11.66l-2.83-2.83A4 4 0 0 1 12 2z" /><path d="M8 10c-2.21 0-4 1.79-4 4v2h16v-2c0-2.21-1.79-4-4-4H8z" /></svg>,
  cpu: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>,
  rocket: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#071A2B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills &amp; Technologies</h2>
          <p className="text-[#8B9BB4] max-w-2xl mx-auto text-base sm:text-lg">
            Technologies and tools across the data science pipeline — from data wrangling to model deployment.
          </p>
          <div className="w-12 h-1 bg-[#7EB8DA] mx-auto rounded-full mt-4" />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.title}>
              <div className="glass-subtle rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#7EB8DA]/10 flex items-center justify-center text-[#7EB8DA] flex-shrink-0">
                    {categoryIcons[cat.icon]}
                  </div>
                  <h3 className="font-semibold text-white">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7EB8DA] flex-shrink-0" />
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 ml-3.5">
                        {skill.context.map((ctx) => (
                          <span key={ctx} className="px-2 py-0.5 text-xs text-[#8B9BB4] bg-white/5 rounded-md">{ctx}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
