"use client";

import { profile } from "@/data/portfolio";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EAE6DE] border-t border-[#D9D5CD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="text-center sm:text-left">
            <p className="font-semibold text-[#202A35] text-sm">
              {profile.name}
            </p>
            <p className="text-[#65717C] text-xs mt-0.5">
              Data Scientist
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#65717C] hover:text-[#607D9A] hover:bg-[#D9D5CD] rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#65717C] hover:text-[#607D9A] hover:bg-[#D9D5CD] rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 text-[#65717C] hover:text-[#607D9A] hover:bg-[#D9D5CD] rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Right */}
          <p className="text-[#65717C] text-xs flex items-center gap-1">
            &copy; {currentYear} {profile.name}. Built with{" "}
            <Heart className="w-3 h-3 text-[#607D9A] inline" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
