"use client";

import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/portfolio/ScrollReveal";
import { githubProfile } from "@/data/portfolio";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

export default function GitHubSection() {
  return (
    <section id="github" className="py-24 sm:py-32 bg-[#E8ECEA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#263238] mb-4">
            GitHub &amp; Technical Activity
          </h2>
          <p className="text-[#607174] max-w-2xl mx-auto text-base sm:text-lg">
            Open-source projects and technical contributions.
          </p>
          <div className="w-12 h-1 bg-[#4F7C78] mx-auto rounded-full mt-4" />
        </ScrollReveal>

        {/* Profile Card */}
        <ScrollReveal className="max-w-3xl mx-auto mb-10">
          <div className="bg-[#F8FAF9] rounded-xl border border-[#D6DEDA] p-6 flex flex-col sm:flex-row items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-[#4F7C78]/10 flex items-center justify-center text-[#4F7C78] flex-shrink-0">
              <Github className="w-8 h-8" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="font-semibold text-[#263238] text-lg">
                @{githubProfile.username}
              </h3>
              <p className="text-[#607174] text-sm">
                Data Science &amp; Machine Learning Projects
              </p>
            </div>
            <a
              href={githubProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#263238] hover:bg-[#37474F] rounded-lg transition-colors"
            >
              <Github size={16} />
              View Profile
            </a>
          </div>
        </ScrollReveal>

        {/* Featured Repos */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {githubProfile.featuredRepos.map((repo) => (
            <StaggerItem key={repo.name}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#F8FAF9] rounded-xl border border-[#D6DEDA] p-5 hover:shadow-md hover:border-[#4F7C78]/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2 text-[#4F7C78] text-sm font-medium">
                    <GitFork className="w-4 h-4" />
                    <span className="group-hover:underline">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#7A9A96]" />
                </div>
                <p className="text-[#607174] text-sm leading-relaxed mb-3">
                  {repo.description}
                </p>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 text-xs text-[#607174] bg-[#E8ECEA] rounded-md">
                    {repo.language}
                  </span>
                  <div className="flex items-center gap-1 text-[#7A9A96] text-xs">
                    <Star className="w-3.5 h-3.5" />
                    <span>{repo.stars}</span>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
