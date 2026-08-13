"use client";

import { profile } from "@/data/portfolio";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#071A2B] border-t border-[rgba(150,195,225,0.1)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white text-sm">{profile.name}</p>
            <p className="text-[#A8B8C8] text-xs mt-0.5">Data Scientist</p>
          </div>
          <div className="flex items-center gap-3">
            {[
              { href: profile.github, icon: <Github size={16} />, label: "GitHub" },
              { href: profile.linkedin, icon: <Linkedin size={16} />, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: <Mail size={16} />, label: "Email" },
            ].map((s) => (
              <a key={s.label} href={s.href} target={s.label !== "Email" ? "_blank" : undefined} rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-2 text-[#A8B8C8] hover:text-[#4F8FD8] hover:bg-white/5 rounded-lg transition-colors" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-[#71859A] text-xs flex items-center gap-1">
            &copy; {year} {profile.name}. Built with <Heart className="w-3 h-3 text-[#4F8FD8] inline" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
