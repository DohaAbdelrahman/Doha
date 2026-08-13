"use client";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-[#071A2B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-12 h-1 bg-[#7EB8DA] mx-auto rounded-full" />
        </ScrollReveal>

        <ScrollReveal className="max-w-3xl mx-auto">
          <div className="glass-subtle rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#7EB8DA]/10 flex items-center justify-center text-[#7EB8DA]">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white text-lg mb-1">Faculty of Computers and Information</h3>
                <p className="text-[#7EB8DA] text-sm font-medium mb-3">Bachelor&apos;s Degree — Computer Science</p>
                <div className="flex items-center gap-1.5 text-[#8B9BB4] text-sm mb-4">
                  <Calendar className="w-4 h-4" /><span>Expected Graduation</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[#8B9BB4] text-sm mb-2">
                    <BookOpen className="w-4 h-4" /><span className="font-medium">Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Data Structures", "Algorithms", "Artificial Intelligence", "Machine Learning", "Database Systems", "Statistics", "Linear Algebra", "Probability"].map((c) => (
                      <span key={c} className="px-2.5 py-0.5 text-xs text-[#8B9BB4] bg-white/5 rounded-md">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
