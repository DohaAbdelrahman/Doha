"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface DataPoint {
  x: number;
  y: number;
  targetY: number;
  phase: number;
  speed: number;
}

function useReducedMotion() {
  const subscribe = (callback: () => void) => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", callback);
    return () => mq.removeEventListener("change", callback);
  };
  const getSnapshot = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const getServerSnapshot = () => false;
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.parentElement?.clientHeight || 600;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || 600;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const nodeCount = reducedMotion ? 15 : 35;
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const maxDist = 150;

    /* ── Dashboard chart data points ── */
    const dataPoints: DataPoint[] = [];
    const chartCount = reducedMotion ? 8 : 20;
    for (let i = 0; i < chartCount; i++) {
      dataPoints.push({
        x: width * 0.15 + (width * 0.7 / (chartCount - 1)) * i,
        y: height * 0.55,
        targetY: height * 0.3 + Math.random() * height * 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: 0.003 + Math.random() * 0.005,
      });
    }

    /* ── Dashboard bar chart data ── */
    const barCount = 8;
    const barData: number[] = [];
    for (let i = 0; i < barCount; i++) {
      barData.push(0.3 + Math.random() * 0.6);
    }

    const drawDashboard = (time: number) => {
      const cx = width * 0.5;
      const cy = height * 0.5;

      /* ── Subtle grid lines ── */
      ctx.strokeStyle = "rgba(79, 143, 216, 0.04)";
      ctx.lineWidth = 0.5;
      const gridSpacing = 60;
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      /* ── Dashboard panel outlines ── */
      // Left panel - mini chart
      const lpX = width * 0.08;
      const lpY = height * 0.15;
      const lpW = width * 0.25;
      const lpH = height * 0.35;
      ctx.strokeStyle = "rgba(150, 195, 225, 0.08)";
      ctx.lineWidth = 1;
      roundRect(ctx, lpX, lpY, lpW, lpH, 12);
      ctx.stroke();

      // Mini bars in left panel
      const barW = lpW / (barCount * 1.5 + 0.5);
      for (let i = 0; i < barCount; i++) {
        const bh = barData[i] * lpH * 0.6;
        const bx = lpX + lpW * 0.1 + i * (barW * 1.5);
        const by = lpY + lpH - lpH * 0.1 - bh;
        ctx.fillStyle = `rgba(79, 143, 216, ${0.06 + barData[i] * 0.08})`;
        roundRect(ctx, bx, by, barW, bh, 2);
        ctx.fill();
      }

      // Right panel - scatter
      const rpX = width * 0.67;
      const rpY = height * 0.12;
      const rpW = width * 0.25;
      const rpH = height * 0.3;
      ctx.strokeStyle = "rgba(150, 195, 225, 0.08)";
      roundRect(ctx, rpX, rpY, rpW, rpH, 12);
      ctx.stroke();

      // Scatter points
      for (let i = 0; i < 12; i++) {
        const sx = rpX + rpW * 0.1 + Math.random() * rpW * 0.8;
        const sy = rpY + rpH * 0.1 + Math.random() * rpH * 0.8;
        ctx.beginPath();
        ctx.arc(sx, sy, 2 + Math.random() * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 143, 216, ${0.15 + Math.random() * 0.15})`;
        ctx.fill();
      }

      // Bottom panel - line chart
      const bpX = width * 0.25;
      const bpY = height * 0.6;
      const bpW = width * 0.5;
      const bpH = height * 0.25;
      ctx.strokeStyle = "rgba(150, 195, 225, 0.08)";
      roundRect(ctx, bpX, bpY, bpW, bpH, 12);
      ctx.stroke();

      /* ── Animated line chart in bottom panel ── */
      const linePoints = 15;
      ctx.beginPath();
      for (let i = 0; i < linePoints; i++) {
        const lx = bpX + bpW * 0.08 + (bpW * 0.84 / (linePoints - 1)) * i;
        const baseY = bpY + bpH * 0.5;
        const wave = Math.sin(time * 0.001 + i * 0.5) * bpH * 0.2;
        const trend = (i / linePoints) * bpH * 0.15;
        const ly = baseY - wave - trend;
        if (i === 0) ctx.moveTo(lx, ly);
        else ctx.lineTo(lx, ly);
      }
      ctx.strokeStyle = "rgba(79, 143, 216, 0.2)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Area fill under line
      const lastLx = bpX + bpW * 0.08 + bpW * 0.84;
      ctx.lineTo(lastLx, bpY + bpH * 0.9);
      ctx.lineTo(bpX + bpW * 0.08, bpY + bpH * 0.9);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, bpY, 0, bpY + bpH);
      grad.addColorStop(0, "rgba(79, 143, 216, 0.08)");
      grad.addColorStop(1, "rgba(79, 143, 216, 0.0)");
      ctx.fillStyle = grad;
      ctx.fill();

      /* ── Central glow ── */
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, width * 0.3);
      glow.addColorStop(0, "rgba(79, 143, 216, 0.03)");
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const drawFrame = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      /* Dashboard panels */
      drawDashboard(time);

      /* Floating data nodes */
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      /* Connection lines */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const a = (1 - dist / maxDist) * 0.08;
            ctx.strokeStyle = `rgba(79, 143, 216, ${a})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      /* Nodes */
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 143, 216, ${n.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(drawFrame);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      drawDashboard(0);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const a = (1 - dist / maxDist) * 0.08;
            ctx.strokeStyle = `rgba(79, 143, 216, ${a})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 143, 216, ${n.opacity})`;
        ctx.fill();
      });
    };

    if (!reducedMotion) {
      animationRef.current = requestAnimationFrame(drawFrame);
    } else {
      drawStatic();
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

/* Rounded rect helper */
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
