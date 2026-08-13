"use client";

import { useRef, useCallback, type ReactNode } from "react";

/**
 * MouseGlow — wraps a glass surface to add a subtle cursor-following radial light.
 * Uses CSS custom properties (--mouse-x, --mouse-y) for GPU-friendly updates.
 * The .mouse-glow-layer CSS handles the visual gradient and opacity transitions.
 */
interface MouseGlowProps {
  children: ReactNode;
  className?: string;
}

export default function MouseGlow({ children, className = "" }: MouseGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  const handleMouseEnter = useCallback(() => {
    ref.current?.setAttribute("data-hovered", "true");
  }, []);

  const handleMouseLeave = useCallback(() => {
    ref.current?.removeAttribute("data-hovered");
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mouse-glow-layer absolute inset-0 z-0 rounded-[inherit]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
