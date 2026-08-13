"use client";

import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/portfolio/ScrollReveal";
import { certifications } from "@/data/portfolio";
import { Award, ExternalLink, Calendar } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 sm:py-32 bg-[#F4F1EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202A35] mb-4">
            Certifications
          </h2>
          <p className="text-[#65717C] max-w-2xl mx-auto text-base sm:text-lg">
            Professional certifications and credentials earned through
            dedicated study and hands-on practice.
          </p>
          <div className="w-12 h-1 bg-[#607D9A] mx-auto rounded-full mt-4" />
        </ScrollReveal>

        {/* Certifications Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-[#FAF9F6] rounded-xl border border-[#D9D5CD] p-5 hover:shadow-md hover:border-[#607D9A]/30 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-[#607D9A]/10 flex items-center justify-center text-[#607D9A] mb-4">
                  <Award className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-[#202A35] text-sm mb-1">
                  {cert.title}
                </h3>

                {/* Organization */}
                <p className="text-[#607D9A] text-xs font-medium mb-2">
                  {cert.organization}
                </p>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-[#65717C] text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.date}</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs text-[#65717C] bg-[#EAE6DE] rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential Link */}
                {cert.credentialUrl && cert.credentialUrl !== "#" && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#607D9A] hover:text-[#4F6A84] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Credential
                  </a>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
