"use client";

import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-[#EAE6DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202A35] mb-4">
            Education
          </h2>
          <div className="w-12 h-1 bg-[#607D9A] mx-auto rounded-full" />
        </ScrollReveal>

        {/* Education Card */}
        <ScrollReveal className="max-w-3xl mx-auto">
          <div className="bg-[#FAF9F6] rounded-xl border border-[#D9D5CD] p-6 sm:p-8 hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#607D9A]/10 flex items-center justify-center text-[#607D9A]">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#202A35] text-lg mb-1">
                  Faculty of Computers and Information
                </h3>
                <p className="text-[#607D9A] text-sm font-medium mb-3">
                  Bachelor&apos;s Degree — Computer Science
                </p>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-[#65717C] text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Expected Graduation</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-[#65717C] text-sm mb-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-medium">Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "Artificial Intelligence",
                      "Machine Learning",
                      "Database Systems",
                      "Statistics",
                      "Linear Algebra",
                      "Probability",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-0.5 text-xs text-[#65717C] bg-[#EAE6DE] rounded-md"
                      >
                        {course}
                      </span>
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
