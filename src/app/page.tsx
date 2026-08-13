"use client";

import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import EducationSection from "@/sections/EducationSection";
import CertificationsSection from "@/sections/CertificationsSection";
import GitHubSection from "@/sections/GitHubSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F1EB]">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
