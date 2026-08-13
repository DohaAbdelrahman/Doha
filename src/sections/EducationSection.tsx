"use client";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import MouseGlow from "@/components/portfolio/MouseGlow";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-[#071A2B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-12 h-1 bg-[#4F8FD8] mx-auto rounded-full" />
        </ScrollReveal>

        <ScrollReveal className="max-w-3xl mx-auto">
          <MouseGlow className="glass-subtle rounded-2xl p-6 sm:p-8 hover-glass">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#4F8FD8]/10 flex items-center justify-center text-[#4F8FD8]">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white text-lg mb-1">Faculty of Computers and Information</h3>
                <p className="text-[#4F8FD8] text-sm font-medium mb-3">Bachelor&apos;s Degree — Computer Science</p>
                <div className="flex items-center gap-1.5 text-[#A8B8C8] text-sm mb-4">
                  <Calendar className="w-4 h-4" /><span>Expected Graduation</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[#A8B8C8] text-sm mb-2">
                    <BookOpen className="w-4 h-4" /><span className="font-medium">Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Data Structures", "Algorithms", "Artificial Intelligence", "Machine Learning", "Database Systems", "Statistics", "Linear Algebra", "Probability"].map((c) => (
                      <span key={c} className="px-2.5 py-0.5 text-xs text-[#A8B8C8] bg-white/5 rounded-md">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MouseGlow>
        </ScrollReveal>
      </div>
    </section>
  );
}
