#!/usr/bin/env python3
"""Apply global hover system classes to all portfolio components."""

import os, re

BASE = "/home/z/my-project/src"

def read(path):
    with open(path, "r") as f:
        return f.read()

def write(path, content):
    with open(path, "w") as f:
        f.write(content)

def apply_edits(filepath, edits):
    """Apply a list of (old, new) replacements. Returns True if any changed."""
    content = read(filepath)
    original = content
    for old, new in edits:
        content = content.replace(old, new)
    if content != original:
        write(filepath, content)
        return True
    return False

changes = 0

# ─── 1. Navigation.tsx: Add hover-nav to nav links ───
f = os.path.join(BASE, "components/portfolio/Navigation.tsx")
if apply_edits(f, [
    # Desktop nav links — add hover-nav
    ('className="px-3 py-2 text-sm text-[#A8B8C8] hover:text-[#4F8FD8] transition-colors duration-200 rounded-lg hover:bg-white/5"',
     'className="px-3 py-2 text-sm text-[#A8B8C8] hover:text-[#4F8FD8] transition-colors duration-200 rounded-lg hover:bg-white/5 hover-nav"'),
    # Mobile nav links — add hover-nav
    ('className="block px-3 py-2.5 text-sm text-[#A8B8C8] hover:text-[#4F8FD8] hover:bg-white/5 rounded-lg transition-colors"',
     'className="block px-3 py-2.5 text-sm text-[#A8B8C8] hover:text-[#4F8FD8] hover:bg-white/5 rounded-lg transition-colors hover-nav"'),
]):
    changes += 1
    print("UPDATED: Navigation.tsx")

# ─── 2. HeroSection.tsx: hover-lift on buttons, hover-icon on socials ───
f = os.path.join(BASE, "sections/HeroSection.tsx")
if apply_edits(f, [
    # Primary CTA button
    ('className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F8FD8] text-[#071A2B] rounded-xl text-sm font-semibold hover:bg-[#6AA7E8] transition-colors duration-200"',
     'className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F8FD8] text-[#071A2B] rounded-xl text-sm font-semibold hover:bg-[#6AA7E8] transition-colors duration-200 hover-lift"'),
    # Glass Resume button
    ('className="inline-flex items-center gap-2 px-6 py-3 glass text-white rounded-xl text-sm font-medium hover:bg-white/10 transition-all duration-200"',
     'className="inline-flex items-center gap-2 px-6 py-3 glass text-white rounded-xl text-sm font-medium hover-glass"'),
    # Let's Connect button
    ('className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(150,195,225,0.18)] text-[#A8B8C8] rounded-xl text-sm font-medium hover:text-[#4F8FD8] hover:border-[rgba(150,195,225,0.35)] transition-all duration-200"',
     'className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(150,195,225,0.18)] text-[#A8B8C8] rounded-xl text-sm font-medium hover:text-[#4F8FD8] hover:border-[rgba(150,195,225,0.35)] transition-all duration-200 hover-lift"'),
    # Social links
    ('className="p-2.5 text-[#A8B8C8] hover:text-[#4F8FD8] hover:bg-white/5 rounded-xl transition-colors duration-200"',
     'className="p-2.5 text-[#A8B8C8] hover:text-[#4F8FD8] hover:bg-white/5 rounded-xl transition-colors duration-200 hover-icon"'),
]):
    changes += 1
    print("UPDATED: HeroSection.tsx")

# ─── 3. AboutSection.tsx: hover-glass on focus area cards ───
f = os.path.join(BASE, "sections/AboutSection.tsx")
if apply_edits(f, [
    # Add import for MouseGlow
    ('import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/portfolio/ScrollReveal";',
     'import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/portfolio/ScrollReveal";\nimport MouseGlow from "@/components/portfolio/MouseGlow";'),
    # Replace card hover
    ('<div className="glass-subtle rounded-2xl p-5 hover:bg-white/10 transition-all duration-300">',
     '<MouseGlow className="glass-subtle rounded-2xl p-5 hover-glass">'),
    # Close MouseGlow
    ('                </div>\n                </StaggerItem>\n              ))\n            </StaggerContainer>',
     '                </MouseGlow>\n                </StaggerItem>\n              ))\n            </StaggerContainer>'),
]):
    changes += 1
    print("UPDATED: AboutSection.tsx")

# ─── 4. SkillsSection.tsx: hover-glass on skill cards ───
f = os.path.join(BASE, "sections/SkillsSection.tsx")
if apply_edits(f, [
    ('import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/portfolio/ScrollReveal";',
     'import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/portfolio/ScrollReveal";\nimport MouseGlow from "@/components/portfolio/MouseGlow";'),
    ('<div className="glass-subtle rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">',
     '<MouseGlow className="glass-subtle rounded-2xl p-6 hover-glass h-full">'),
    # Close - need to find the matching </div> for each card
    ('            </StaggerItem>\n          ))\n        </StaggerContainer>',
     '            </MouseGlow>\n            </StaggerItem>\n          ))\n        </StaggerContainer>'),
]):
    changes += 1
    print("UPDATED: SkillsSection.tsx")

# ─── 5. ExperienceSection.tsx: hover-glass on timeline cards ───
f = os.path.join(BASE, "sections/ExperienceSection.tsx")
if apply_edits(f, [
    ('<div className="flex-1 glass-subtle rounded-2xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300">',
     '<MouseGlow className="flex-1 glass-subtle rounded-2xl p-5 sm:p-6 hover-glass">'),
    # Close MouseGlow - find the pattern for experience card close
    ('                    {exp.tags && (\n                      <div className="flex flex-wrap gap-1.5">\n                        {exp.tags.map((tag) => (\n                          <span key={tag} className="px-2 py-0.5 text-xs text-[#A8B8C8] bg-white/5 rounded-md">{tag}</span>\n                        ))}\n                      </div>\n                    )}\n                  </div>',
     '                    {exp.tags && (\n                      <div className="flex flex-wrap gap-1.5">\n                        {exp.tags.map((tag) => (\n                          <span key={tag} className="px-2 py-0.5 text-xs text-[#A8B8C8] bg-white/5 rounded-md">{tag}</span>\n                        ))}\n                      </div>\n                    )}\n                  </MouseGlow>'),
    # Add import
    ('import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/portfolio/ScrollReveal";',
     'import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/portfolio/ScrollReveal";\nimport MouseGlow from "@/components/portfolio/MouseGlow";'),
]):
    changes += 1
    print("UPDATED: ExperienceSection.tsx")

# ─── 6. EducationSection.tsx: hover-glass ───
f = os.path.join(BASE, "sections/EducationSection.tsx")
if apply_edits(f, [
    ('import ScrollReveal from "@/components/portfolio/ScrollReveal";',
     'import ScrollReveal from "@/components/portfolio/ScrollReveal";\nimport MouseGlow from "@/components/portfolio/MouseGlow";'),
    ('<div className="glass-subtle rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">',
     '<MouseGlow className="glass-subtle rounded-2xl p-6 sm:p-8 hover-glass">'),
    # Close - find the closing of the education card
    ('          </div>\n        </ScrollReveal>\n      </div>\n    </section>',
     '          </MouseGlow>\n        </ScrollReveal>\n      </div>\n    </section>'),
]):
    changes += 1
    print("UPDATED: EducationSection.tsx")

# ─── 7. CertificationsSection.tsx: hover-glass ───
f = os.path.join(BASE, "sections/CertificationsSection.tsx")
if apply_edits(f, [
    ('import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/portfolio/ScrollReveal";',
     'import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/portfolio/ScrollReveal";\nimport MouseGlow from "@/components/portfolio/MouseGlow";'),
    ('<div className="glass-subtle rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">',
     '<MouseGlow className="glass-subtle rounded-2xl p-5 hover-glass h-full flex flex-col">'),
    # Close cert card
    ('                )}\n              </div>\n            </StaggerItem>\n          ))\n        </StaggerContainer>',
     '                )}\n              </MouseGlow>\n            </StaggerItem>\n          ))\n        </StaggerContainer>'),
]):
    changes += 1
    print("UPDATED: CertificationsSection.tsx")

# ─── 8. GitHubSection.tsx: hover-glass on repo cards + hover-icon on profile icon ───
f = os.path.join(BASE, "sections/GitHubSection.tsx")
if apply_edits(f, [
    ('import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/portfolio/ScrollReveal";',
     'import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/portfolio/ScrollReveal";\nimport MouseGlow from "@/components/portfolio/MouseGlow";'),
    # Profile card
    ('<div className="glass-subtle rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5">',
     '<MouseGlow className="glass-subtle rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5 hover-glass">'),
    # Profile icon
    ('className="w-16 h-16 rounded-full bg-[#4F8FD8]/10 flex items-center justify-center text-[#4F8FD8] flex-shrink-0"',
     'className="w-16 h-16 rounded-full bg-[#4F8FD8]/10 flex items-center justify-center text-[#4F8FD8] flex-shrink-0 hover-icon"'),
    # Close profile card
    ('            </a>\n          </div>\n        </ScrollReveal>',
     '            </a>\n          </MouseGlow>\n        </ScrollReveal>'),
    # Repo cards - add hover-glass
    ('className="block glass-subtle rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 group"',
     'className="block glass-subtle rounded-2xl p-5 hover-glass group"'),
]):
    changes += 1
    print("UPDATED: GitHubSection.tsx")

# ─── 9. ContactSection.tsx: hover-glass on info card, hover-lift on buttons ───
f = os.path.join(BASE, "sections/ContactSection.tsx")
if apply_edits(f, [
    ('import ScrollReveal from "@/components/portfolio/ScrollReveal";',
     'import ScrollReveal from "@/components/portfolio/ScrollReveal";\nimport MouseGlow from "@/components/portfolio/MouseGlow";'),
    # Contact info card
    ('<div className="glass-subtle rounded-2xl p-5">',
     '<MouseGlow className="glass-subtle rounded-2xl p-5 hover-glass">'),
    # Close contact info card
    ('            </div>\n          </div>\n          <div className="flex items-center gap-3">',
     '            </MouseGlow>\n          </div>\n          <div className="flex items-center gap-3">'),
    # Social buttons
    ('className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white glass-subtle rounded-xl hover:bg-white/10 transition-all"',
     'className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white glass-subtle rounded-xl hover-glass"'),
    # Copy button
    ('className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#A8B8C8] bg-white/5 hover:bg-white/10 rounded-md transition-colors"',
     'className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#A8B8C8] bg-white/5 hover:bg-white/10 rounded-md transition-colors hover-lift"'),
    # Submit button
    ('className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F8FD8] text-[#071A2B] rounded-xl text-sm font-semibold hover:bg-[#6AA7E8] transition-colors duration-200 w-full sm:w-auto justify-center"',
     'className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F8FD8] text-[#071A2B] rounded-xl text-sm font-semibold hover:bg-[#6AA7E8] transition-colors duration-200 w-full sm:w-auto justify-center hover-lift"'),
]):
    changes += 1
    print("UPDATED: ContactSection.tsx")

# ─── 10. Footer.tsx: hover-icon on social links ───
f = os.path.join(BASE, "components/portfolio/Footer.tsx")
if apply_edits(f, [
    ('className="p-2 text-[#A8B8C8] hover:text-[#4F8FD8] hover:bg-white/5 rounded-lg transition-colors"',
     'className="p-2 text-[#A8B8C8] hover:text-[#4F8FD8] hover:bg-white/5 rounded-lg transition-colors hover-icon"'),
]):
    changes += 1
    print("UPDATED: Footer.tsx")

# ─── 11. ProjectsSection.tsx: Replace whileHover with CSS, add hover-zoom ───
f = os.path.join(BASE, "sections/ProjectsSection.tsx")
content = read(f)
original = content

# Add MouseGlow import
if 'import MouseGlow' not in content:
    content = content.replace(
        'import ScrollReveal,',
        'import MouseGlow from "@/components/portfolio/MouseGlow";\nimport ScrollReveal,'
    )

# Replace GlassBoard's motion.div with regular div + hover-glass
content = content.replace(
    '<motion.div\n      whileHover={{ scale: 1.015, y: -4 }}\n      transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}\n      className="glass glass-reflect rounded-3xl p-6 sm:p-8 flex flex-col h-full group cursor-pointer relative overflow-hidden"',
    '<MouseGlow className="glass glass-reflect rounded-3xl p-6 sm:p-8 flex flex-col h-full group cursor-pointer relative overflow-hidden hover-glass"'
)

# Close MouseGlow in GlassBoard (replace closing </div> before </MouseGlow>)
# The GlassBoard currently ends with: </div>\n    </motion.div>
content = content.replace(
    '      </div>\n    </motion.div>',
    '      </div>\n    </MouseGlow>'
)

# Add hover-zoom to project visual container
content = content.replace(
    '<div className="aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-500">',
    '<div className="aspect-[16/10] hover-zoom">'
)

# Replace "More Projects" motion.div hover with CSS
content = content.replace(
    '<motion.div\n                key={project.id}\n                whileHover={{ scale: 1.02 }}\n                transition={{ type: "tween", duration: 0.3 }}\n                className="glass-subtle glass-reflect rounded-2xl p-5 flex flex-col cursor-pointer group overflow-hidden"',
    '<MouseGlow className="glass-subtle glass-reflect rounded-2xl p-5 flex flex-col cursor-pointer group overflow-hidden hover-glass"'
)

# Close More Projects MouseGlow
content = content.replace(
    '                </motion.div>\n              ))',
    '                </MouseGlow>\n              ))'
)

# Remove the hover glow radial div since hover-glass handles it
content = content.replace(
    '''                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 0%, rgba(79,143,216,0.06) 0%, transparent 70%)",
                    }}
                  />''',
    ''
)

if content != original:
    write(f, content)
    changes += 1
    print("UPDATED: ProjectsSection.tsx")

print(f"\nDone. {changes} files updated.")
