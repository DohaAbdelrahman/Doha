"use client";

import { useState } from "react";
import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { profile } from "@/data/portfolio";
import { Mail, Send, Github, Linkedin, Copy, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = `mailto:${profile.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.open(link);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0A2540]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-[#8B9BB4] max-w-2xl mx-auto text-base sm:text-lg">
            Interested in collaborating, have a data science project, or just want to connect? I&apos;d love to hear from you.
          </p>
          <div className="w-12 h-1 bg-[#7EB8DA] mx-auto rounded-full mt-4" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Let&apos;s work together</h3>
              <p className="text-[#8B9BB4] leading-relaxed">
                Whether you&apos;re looking for a data scientist to join your team, need help with a machine learning project, or want to discuss data science opportunities — feel free to reach out.
              </p>

              <div className="glass-subtle rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7EB8DA]/10 flex items-center justify-center text-[#7EB8DA]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8B9BB4]">Email</p>
                    <p className="text-white font-medium text-sm">{profile.email}</p>
                  </div>
                </div>
                <button onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#8B9BB4] bg-white/5 hover:bg-white/10 rounded-md transition-colors">
                  {copied ? <><CheckCircle2 className="w-3.5 h-3.5 text-[#7EB8DA]" />Copied</> : <><Copy className="w-3.5 h-3.5" />Copy Email</>}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a href={profile.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white glass-subtle rounded-xl hover:bg-white/10 transition-all">
                  <Github size={16} />GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white glass-subtle rounded-xl hover:bg-white/10 transition-all">
                  <Linkedin size={16} />LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-white mb-1.5">Name</label>
                <input id="contact-name" type="text" required value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-white/5 border border-[rgba(150,200,230,0.15)] rounded-xl text-white placeholder-[#5A7A94] focus:outline-none focus:ring-2 focus:ring-[#7EB8DA]/30 focus:border-[#7EB8DA]/50 transition-colors"
                  placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-white mb-1.5">Email</label>
                <input id="contact-email" type="email" required value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-white/5 border border-[rgba(150,200,230,0.15)] rounded-xl text-white placeholder-[#5A7A94] focus:outline-none focus:ring-2 focus:ring-[#7EB8DA]/30 focus:border-[#7EB8DA]/50 transition-colors"
                  placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-white mb-1.5">Message</label>
                <textarea id="contact-message" required rows={5} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-white/5 border border-[rgba(150,200,230,0.15)] rounded-xl text-white placeholder-[#5A7A94] focus:outline-none focus:ring-2 focus:ring-[#7EB8DA]/30 focus:border-[#7EB8DA]/50 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..." />
              </div>
              <button type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#7EB8DA] text-[#071A2B] rounded-xl text-sm font-semibold hover:bg-[#5BA3D0] transition-colors duration-200 w-full sm:w-auto justify-center">
                <Send className="w-4 h-4" />Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
