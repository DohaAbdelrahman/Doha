"use client";

import { useState } from "react";
import ScrollReveal from "@/components/portfolio/ScrollReveal";
import { profile } from "@/data/portfolio";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Copy,
  CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with an email API or form service
    const mailtoLink = `mailto:${profile.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F4F1EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202A35] mb-4">
            Get In Touch
          </h2>
          <p className="text-[#65717C] max-w-2xl mx-auto text-base sm:text-lg">
            Interested in collaborating, have a data science project, or just
            want to connect? I&apos;d love to hear from you.
          </p>
          <div className="w-12 h-1 bg-[#607D9A] mx-auto rounded-full mt-4" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#202A35]">
                Let&apos;s work together
              </h3>
              <p className="text-[#65717C] leading-relaxed">
                Whether you&apos;re looking for a data scientist to join your
                team, need help with a machine learning project, or want to
                discuss data science opportunities — feel free to reach out.
              </p>

              {/* Email */}
              <div className="bg-[#FAF9F6] rounded-xl border border-[#D9D5CD] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#607D9A]/10 flex items-center justify-center text-[#607D9A]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#65717C]">Email</p>
                    <p className="text-[#202A35] font-medium text-sm">
                      {profile.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#65717C] bg-[#EAE6DE] hover:bg-[#D9D5CD] rounded-md transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#607D9A]" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Email
                    </>
                  )}
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#202A35] bg-[#FAF9F6] border border-[#D9D5CD] hover:border-[#607D9A]/40 hover:bg-[#EAE6DE] rounded-lg transition-all"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#202A35] bg-[#FAF9F6] border border-[#D9D5CD] hover:border-[#607D9A]/40 hover:bg-[#EAE6DE] rounded-lg transition-all"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Contact Form */}
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-[#202A35] mb-1.5"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-sm bg-[#FAF9F6] border border-[#D9D5CD] rounded-lg text-[#202A35] placeholder-[#8A96A3] focus:outline-none focus:ring-2 focus:ring-[#607D9A]/30 focus:border-[#607D9A] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-[#202A35] mb-1.5"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-sm bg-[#FAF9F6] border border-[#D9D5CD] rounded-lg text-[#202A35] placeholder-[#8A96A3] focus:outline-none focus:ring-2 focus:ring-[#607D9A]/30 focus:border-[#607D9A] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[#202A35] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-sm bg-[#FAF9F6] border border-[#D9D5CD] rounded-lg text-[#202A35] placeholder-[#8A96A3] focus:outline-none focus:ring-2 focus:ring-[#607D9A]/30 focus:border-[#607D9A] transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#607D9A] text-white rounded-lg text-sm font-medium hover:bg-[#4F6A84] transition-colors duration-200 shadow-sm w-full sm:w-auto justify-center"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
