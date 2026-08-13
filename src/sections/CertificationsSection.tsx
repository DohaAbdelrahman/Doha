"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/portfolio/ScrollReveal";
import { certifications } from "@/data/portfolio";
import { Award, ExternalLink, Calendar } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 sm:py-32 bg-[#0A2138]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-[#A8B8C8] max-w-2xl mx-auto text-base sm:text-lg">
            Professional certifications earned through dedicated study and hands-on practice.
          </p>
          <div className="w-12 h-1 bg-[#4F8FD8] mx-auto rounded-full mt-4" />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, idx) => (
            <StaggerItem key={idx}>
              <div className="glass-subtle rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-[#4F8FD8]/10 flex items-center justify-center text-[#4F8FD8] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{cert.title}</h3>
                <p className="text-[#4F8FD8] text-xs font-medium mb-2">{cert.organization}</p>
                <div className="flex items-center gap-1.5 text-[#A8B8C8] text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" /><span>{cert.date}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                  {cert.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 text-xs text-[#A8B8C8] bg-white/5 rounded-md">{s}</span>
                  ))}
                </div>
                {cert.credentialUrl && cert.credentialUrl !== "#" && (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4F8FD8] hover:text-[#6AA7E8] transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />View Credential
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
