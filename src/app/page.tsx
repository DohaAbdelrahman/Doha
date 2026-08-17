"use client";

import Navigation from "@/components/portfolio/Navigation";


import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import EducationSection from "@/sections/EducationSection";
import CertificationsSection from "@/sections/CertificationsSection";
import ContactSection from "@/sections/ContactSection";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#081412]">


      {/* Navigation */}
      <Navigation />

      <main className="flex-1">

        <HeroSection />

        <AboutSection />

        <ProjectsSection />

        <ExperienceSection />

        <EducationSection />

        <CertificationsSection />

        <ContactSection />

      </main>



    </div>
  );
}