#!/usr/bin/env python3
"""Batch color replacement for Deep Navy + Frosted Glass Phase 3."""

import os

BASE = "/home/z/my-project/src"

FILES = [
    "app/page.tsx",
    "components/portfolio/Navigation.tsx",
    "components/portfolio/HeroVisual.tsx",
    "components/portfolio/Footer.tsx",
    "sections/HeroSection.tsx",
    "sections/AboutSection.tsx",
    "sections/SkillsSection.tsx",
    "sections/ProjectsSection.tsx",
    "sections/ExperienceSection.tsx",
    "sections/EducationSection.tsx",
    "sections/CertificationsSection.tsx",
    "sections/GitHubSection.tsx",
    "sections/ContactSection.tsx",
]

REPLACEMENTS = [
    ("#7EB8DA", "#4F8FD8"),
    ("#5BA3D0", "#6AA7E8"),
    ("#3D7FA8", "#3A7AB8"),
    ("#E2E8F0", "#F1F5F9"),
    ("#8B9BB4", "#A8B8C8"),
    ("#5A7A94", "#71859A"),
    ("#0A2540", "#0A2138"),
    ("#0D2D4A", "#0D2942"),
    ("rgba(126, 184, 218,", "rgba(79, 143, 216,"),
    ("rgba(126,184,218,", "rgba(79,143,216,"),
    ("rgba(20, 55, 85, 0.45)", "rgba(20, 55, 85, 0.42)"),
    ("rgba(20, 55, 85, 0.30)", "rgba(20, 55, 85, 0.25)"),
    ("rgba(20, 55, 85, 0.3)", "rgba(20, 55, 85, 0.25)"),
    ("rgba(20, 55, 85, 0.60)", "rgba(20, 55, 85, 0.55)"),
    ("rgba(20, 55, 85, 0.6)", "rgba(20, 55, 85, 0.55)"),
    ("rgba(150, 200, 230,", "rgba(150, 195, 225,"),
    ("rgba(150,200,230,", "rgba(150,195,225,"),
]

count = 0
for rel in FILES:
    fpath = os.path.join(BASE, rel)
    if not os.path.exists(fpath):
        print(f"SKIP: {fpath}")
        continue
    with open(fpath, "r") as f:
        content = f.read()
    original = content
    for old, new in REPLACEMENTS:
        content = content.replace(old, new)
    if content != original:
        with open(fpath, "w") as f:
            f.write(content)
        print(f"UPDATED: {rel}")
        count += 1
    else:
        print(f"OK: {rel}")

print(f"\nDone. {count} files updated.")
