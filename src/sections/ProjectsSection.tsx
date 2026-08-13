"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  ArrowUpRight,
  FileText,
  Database,
  BarChart3,
  BrainCircuit,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";
import MouseGlow from "@/components/portfolio/MouseGlow";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/portfolio/ScrollReveal";
import { projects, type Project } from "@/data/portfolio";

/* ════════════════════════════════════════════════════════════════════
   PROJECT-SPECIFIC SVG VISUALS
   Each featured project gets a unique data-science visualization
   ════════════════════════════════════════════════════════════════════ */

/* ── 01: Customer Churn Prediction — Feature importance bars + churn funnel ── */
function ChurnVisual() {
  const features = [
    { name: "Contract", pct: 0.85 },
    { name: "Tenure", pct: 0.72 },
    { name: "Charges", pct: 0.65 },
    { name: "Support", pct: 0.48 },
    { name: "Payment", pct: 0.35 },
    { name: "Internet", pct: 0.28 },
  ];
  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Grid dots */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 9 }).map((_, col) => (
          <circle
            key={`d${row}${col}`}
            cx={18 + col * 34}
            cy={15 + row * 42}
            r="0.8"
            fill="rgba(150,195,225,0.12)"
          />
        ))
      )}

      {/* Title label */}
      <text x="20" y="14" fill="rgba(79,143,216,0.5)" fontSize="6" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.5">FEATURE IMPORTANCE</text>

      {/* Feature bars */}
      {features.map((f, i) => (
        <g key={f.name}>
          <rect
            x={80}
            y={28 + i * 22}
            width={f.pct * 180}
            height={12}
            rx={3}
            fill={`rgba(79,143,216,${0.08 + f.pct * 0.12})`}
            stroke="rgba(150,195,225,0.08)"
            strokeWidth="0.5"
          />
          <rect
            x={80}
            y={28 + i * 22}
            width={f.pct * 180}
            height={12}
            rx={3}
            fill={`rgba(79,143,216,${0.04 + f.pct * 0.06})`}
          />
          <text
            x={72}
            y={37 + i * 22}
            fill="rgba(241,245,249,0.5)"
            fontSize="6"
            fontFamily="Inter, sans-serif"
            textAnchor="end"
          >
            {f.name}
          </text>
          {/* Pct label */}
          <text
            x={84 + f.pct * 180}
            y={37 + i * 22}
            fill="rgba(79,143,216,0.6)"
            fontSize="5"
            fontFamily="Inter, sans-serif"
          >
            {(f.pct * 100).toFixed(0)}%
          </text>
        </g>
      ))}

      {/* Mini churn indicator */}
      <circle cx={270} cy={30} r="16" fill="none" stroke="rgba(150,195,225,0.1)" strokeWidth="1" />
      <circle cx={270} cy={30} r="16" fill="none" stroke="rgba(79,143,216,0.3)" strokeWidth="2"
        strokeDasharray={`${16 * Math.PI * 0.78} ${16 * Math.PI * 0.22}`}
        strokeDashoffset={-16 * Math.PI * 0.25}
        strokeLinecap="round"
      />
      <text x={270} y={32} fill="rgba(241,245,249,0.6)" fontSize="7" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">78%</text>

      {/* Small confusion matrix */}
      <rect x={20} y={165} width={70} height={30} rx="3" fill="rgba(10,33,56,0.5)" stroke="rgba(150,195,225,0.1)" strokeWidth="0.5" />
      <text x={55} y={177} fill="rgba(79,143,216,0.4)" fontSize="5" fontFamily="Inter, sans-serif" textAnchor="middle">CONFUSION</text>
      <text x={55} y={186} fill="rgba(79,143,216,0.4)" fontSize="5" fontFamily="Inter, sans-serif" textAnchor="middle">MATRIX</text>
      <rect x={35} y={192} width={25} height={8} rx="1" fill="rgba(79,143,216,0.1)" />
      <rect x={63} y={192} width={25} height={8} rx="1" fill="rgba(150,195,225,0.04)" />
    </svg>
  );
}

/* ── 02: Sentiment Analysis — Word frequency + sentiment distribution ── */
function SentimentVisual() {
  const words = [
    { word: "excellent", size: 11, x: 40, y: 50 },
    { word: "quality", size: 9, x: 130, y: 40 },
    { word: "service", size: 10, x: 210, y: 55 },
    { word: "value", size: 8, x: 280, y: 38 },
    { word: "fast", size: 7, x: 60, y: 75 },
    { word: "delivery", size: 8, x: 160, y: 72 },
    { word: "price", size: 9, x: 245, y: 78 },
    { word: "love", size: 7, x: 50, y: 100 },
    { word: "recommend", size: 8, x: 180, y: 98 },
    { word: "amazing", size: 10, x: 120, y: 115 },
  ];
  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Grid dots */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 9 }).map((_, col) => (
          <circle
            key={`d${row}${col}`}
            cx={18 + col * 34}
            cy={15 + row * 42}
            r="0.8"
            fill="rgba(150,195,225,0.12)"
          />
        ))
      )}

      <text x="20" y="14" fill="rgba(79,143,216,0.5)" fontSize="6" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.5">SENTIMENT ANALYSIS</text>

      {/* Word cloud */}
      {words.map((w) => (
        <text
          key={w.word}
          x={w.x}
          y={w.y}
          fill={`rgba(79,143,216,${0.15 + w.size * 0.03})`}
          fontSize={w.size}
          fontFamily="Inter, sans-serif"
          fontWeight="500"
        >
          {w.word}
        </text>
      ))}

      {/* Sentiment bar distribution */}
      <g transform="translate(30, 140)">
        <text x={0} y={0} fill="rgba(241,245,249,0.4)" fontSize="5" fontFamily="Inter, sans-serif">Positive</text>
        <rect x={0} y={5} width={180} height={8} rx={4} fill="rgba(79,143,216,0.12)" />
        <rect x={0} y={5} width={140} height={8} rx={4} fill="rgba(79,143,216,0.25)" />
        <text x={185} y={12} fill="rgba(79,143,216,0.5)" fontSize="5" fontFamily="Inter, sans-serif">72%</text>

        <text x={0} y={26} fill="rgba(241,245,249,0.4)" fontSize="5" fontFamily="Inter, sans-serif">Neutral</text>
        <rect x={0} y={31} width={180} height={8} rx={4} fill="rgba(79,143,216,0.12)" />
        <rect x={0} y={31} width={45} height={8} rx={4} fill="rgba(79,143,216,0.15)" />
        <text x={185} y={38} fill="rgba(79,143,216,0.5)" fontSize="5" fontFamily="Inter, sans-serif">18%</text>

        <text x={0} y={52} fill="rgba(241,245,249,0.4)" fontSize="5" fontFamily="Inter, sans-serif">Negative</text>
        <rect x={0} y={57} width={180} height={8} rx={4} fill="rgba(79,143,216,0.12)" />
        <rect x={0} y={57} width={30} height={8} rx={4} fill="rgba(79,143,216,0.1)" />
        <text x={185} y={64} fill="rgba(79,143,216,0.5)" fontSize="5" fontFamily="Inter, sans-serif">10%</text>
      </g>

      {/* Model accuracy ring */}
      <circle cx={275} cy={165} r="20" fill="none" stroke="rgba(150,195,225,0.08)" strokeWidth="3" />
      <circle cx={275} cy={165} r="20" fill="none" stroke="rgba(79,143,216,0.35)" strokeWidth="3"
        strokeDasharray={`${20 * Math.PI * 0.82} ${20 * Math.PI * 0.18}`}
        strokeDashoffset={-20 * Math.PI * 0.25}
        strokeLinecap="round"
      />
      <text x={275} y={168} fill="rgba(241,245,249,0.6)" fontSize="8" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">NLP</text>
    </svg>
  );
}

/* ── 03: Sales Forecasting — Time series + forecast envelope ── */
function ForecastVisual() {
  const actual: [number, number][] = [
    [30, 120], [58, 105], [86, 115], [114, 90], [142, 100],
    [170, 80], [198, 85], [226, 70], [254, 75], [282, 60],
  ];
  const forecast: [number, number][] = [
    [282, 60], [295, 55], [308, 50], [321, 48], [335, 42], [348, 38],
  ];

  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Grid dots */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 9 }).map((_, col) => (
          <circle
            key={`d${row}${col}`}
            cx={18 + col * 34}
            cy={15 + row * 42}
            r="0.8"
            fill="rgba(150,195,225,0.12)"
          />
        ))
      )}

      <text x="20" y="14" fill="rgba(79,143,216,0.5)" fontSize="6" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.5">SALES FORECAST</text>

      {/* Axis lines */}
      <line x1={25} y1={140} x2={300} y2={140} stroke="rgba(150,195,225,0.1)" strokeWidth="0.5" />
      <line x1={25} y1={30} x2={25} y2={140} stroke="rgba(150,195,225,0.1)" strokeWidth="0.5" />

      {/* Y-axis labels */}
      {["High", "Mid", "Low"].map((label, i) => (
        <text key={label} x={22} y={50 + i * 40} fill="rgba(150,195,225,0.15)" fontSize="4" fontFamily="Inter, sans-serif" textAnchor="end">{label}</text>
      ))}

      {/* Confidence band */}
      <path
        d={`M${actual[actual.length - 1][0]},${actual[actual.length - 1][1] - 15} 
           L${forecast[forecast.length - 1][0]},${forecast[forecast.length - 1][1] - 20}
           L${forecast[forecast.length - 1][0]},${forecast[forecast.length - 1][1] + 25}
           L${actual[actual.length - 1][0]},${actual[actual.length - 1][1] + 10} Z`}
        fill="rgba(79,143,216,0.06)"
      />

      {/* Area under actual */}
      <path
        d={`M${actual.map(([x, y]) => `${x},${y}`).join(" L")} L${actual[actual.length - 1][0]},140 L${actual[0][0]},140 Z`}
        fill="rgba(79,143,216,0.04)"
      />

      {/* Actual line */}
      <polyline
        points={actual.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="none"
        stroke="rgba(79,143,216,0.5)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Forecast line (dashed) */}
      <polyline
        points={forecast.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="none"
        stroke="rgba(106,167,232,0.4)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Data points on actual */}
      {actual.map(([x, y], i) => (
        <circle key={`a${i}`} cx={x} cy={y} r="2.5" fill="#071A2B" stroke="rgba(79,143,216,0.6)" strokeWidth="1" />
      ))}

      {/* Forecast points */}
      {forecast.map(([x, y], i) => (
        <circle key={`f${i}`} cx={x} cy={y} r="2" fill="rgba(106,167,232,0.3)" stroke="rgba(106,167,232,0.5)" strokeWidth="0.8" />
      ))}

      {/* Legend */}
      <line x1={30} y1={165} x2={45} y2={165} stroke="rgba(79,143,216,0.5)" strokeWidth="1.5" />
      <text x={48} y={167} fill="rgba(241,245,249,0.4)" fontSize="5" fontFamily="Inter, sans-serif">Actual</text>
      <line x1={85} y1={165} x2={100} y2={165} stroke="rgba(106,167,232,0.4)" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x={103} y={167} fill="rgba(241,245,249,0.4)" fontSize="5" fontFamily="Inter, sans-serif">Forecast</text>

      {/* Stats panel */}
      <rect x={200} y={155} width={95} height={35} rx="5" fill="rgba(10,33,56,0.5)" stroke="rgba(150,195,225,0.08)" strokeWidth="0.5" />
      <text x={210} y={168} fill="rgba(241,245,249,0.35)" fontSize="4" fontFamily="Inter, sans-serif">MAPE</text>
      <text x={248} y={168} fill="rgba(79,143,216,0.5)" fontSize="5" fontFamily="Inter, sans-serif" fontWeight="600">Low</text>
      <text x={210} y={180} fill="rgba(241,245,249,0.35)" fontSize="4" fontFamily="Inter, sans-serif">Direction</text>
      <text x={248} y={180} fill="rgba(79,143,216,0.5)" fontSize="5" fontFamily="Inter, sans-serif" fontWeight="600">High</text>
    </svg>
  );
}

/* ── Generic visual for non-featured projects ── */
function GenericVisual({ index }: { index: number }) {
  const c = ["#4F8FD8", "#6AA7E8", "#3A7AB8"][index % 3];
  const cLight = [
    "rgba(79,143,216,0.12)",
    "rgba(106,167,232,0.12)",
    "rgba(58,122,184,0.12)",
  ][index % 3];
  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 9 }).map((_, col) => (
          <circle
            key={`d${row}${col}`}
            cx={18 + col * 34}
            cy={15 + row * 42}
            r="0.8"
            fill="rgba(150,195,225,0.12)"
          />
        ))
      )}
      {[80, 130, 160, 100, 140, 180, 120, 170].map((h, i) => (
        <rect
          key={`b${i}`}
          x={24 + i * 36}
          y={190 - h * 0.5}
          width="22"
          height={h * 0.5}
          rx="3"
          fill={cLight}
        />
      ))}
      <polyline
        points="35,140 71,115 107,95 143,110 179,75 215,100 251,65 287,85"
        fill="none"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      {[
        [35, 140],
        [107, 95],
        [179, 75],
        [251, 65],
      ].map(([cx, cy], i) => (
        <circle
          key={`p${i}`}
          cx={cx}
          cy={cy}
          r="3.5"
          fill="#071A2B"
          stroke={c}
          strokeWidth="1.5"
          opacity="0.6"
        />
      ))}
    </svg>
  );
}

/* ── Visual dispatcher ── */
function ProjectVisual({ projectId, index }: { projectId: string; index: number }) {
  switch (projectId) {
    case "customer-churn":
      return <ChurnVisual />;
    case "sentiment-analysis":
      return <SentimentVisual />;
    case "sales-forecasting":
      return <ForecastVisual />;
    default:
      return <GenericVisual index={index} />;
  }
}

/* ════════════════════════════════════════════════════════════════════
   CASE STUDY MODAL
   ════════════════════════════════════════════════════════════════════ */

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const steps = [
    {
      icon: <FileText className="w-4 h-4" />,
      label: "Overview",
      key: "problem" as const,
    },
    {
      icon: <Database className="w-4 h-4" />,
      label: "Dataset",
      key: "data" as const,
    },
    {
      icon: <BarChart3 className="w-4 h-4" />,
      label: "Analysis",
      key: "analysis" as const,
    },
    {
      icon: <BrainCircuit className="w-4 h-4" />,
      label: "Modeling",
      key: "modeling" as const,
    },
    {
      icon: <FlaskConical className="w-4 h-4" />,
      label: "Evaluation",
      key: "evaluation" as const,
    },
    {
      icon: <CheckCircle2 className="w-4 h-4" />,
      label: "Results",
      key: "results" as const,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A2B]/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="glass-strong rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 glass-strong rounded-t-3xl px-6 py-4 flex items-start justify-between z-10 border-b border-[rgba(150,195,225,0.12)]">
          <div>
            <h3 className="text-xl font-bold text-[#F1F5F9]">
              {project.title}
            </h3>
            <span className="inline-block mt-1.5 px-2.5 py-0.5 text-xs font-medium rounded-md bg-[#4F8FD8]/15 text-[#4F8FD8]">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A8B8C8] hover:text-[#F1F5F9] hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-xs font-semibold text-[#A8B8C8] uppercase tracking-wider mb-4">
              Process
            </h4>
            <div className="bg-[#0D2942] rounded-xl p-4">
              <p className="text-[#A8B8C8] text-sm leading-relaxed">
                {project.process}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.key} className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#4F8FD8]/10 flex items-center justify-center text-[#4F8FD8] mt-0.5">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-[#F1F5F9] mb-1">
                    {step.label}
                  </h4>
                  <p className="text-[#A8B8C8] text-sm leading-relaxed">
                    {project[step.key]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#A8B8C8] uppercase tracking-wider mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium text-[#4F8FD8] bg-[#4F8FD8]/10 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 border-t border-[rgba(150,195,225,0.12)]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#F1F5F9] glass-subtle rounded-lg hover:bg-white/10 transition-all"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#F1F5F9] bg-[#4F8FD8] hover:bg-[#6AA7E8] rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   SINGLE GLASS BOARD
   ════════════════════════════════════════════════════════════════════ */

function GlassBoard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <MouseGlow className="glass glass-reflect rounded-3xl p-6 sm:p-8 flex flex-col h-full group cursor-pointer relative overflow-hidden hover-glass"
      onClick={onOpen}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(79,143,216,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Number + Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl sm:text-4xl font-bold text-[#F1F5F9]/[0.07] group-hover:text-[#F1F5F9]/[0.14] transition-colors duration-500">
            {number}
          </span>
          <span className="px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase text-[#4F8FD8]/70 bg-[#4F8FD8]/10 rounded-lg">
            {project.category}
          </span>
        </div>

        {/* Project Visual */}
        <div className="rounded-2xl overflow-hidden mb-5 bg-[#0A2138] border border-[rgba(150,195,225,0.08)] group-hover:border-[rgba(150,195,225,0.2)] transition-all duration-500">
          <div className="aspect-[16/10] hover-zoom">
            <ProjectVisual projectId={project.id} index={index} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#F1F5F9] mb-2 group-hover:text-[#4F8FD8] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#A8B8C8] text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] text-[#A8B8C8] bg-white/5 rounded-lg border border-[rgba(150,195,225,0.08)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2.5 py-1 text-[11px] text-[#A8B8C8]/60 bg-white/5 rounded-lg">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Key Result */}
        <p className="text-[#4F8FD8]/70 text-xs leading-relaxed mb-5 line-clamp-2 italic">
          {project.results}
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-3 mt-auto">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#4F8FD8] glass-subtle rounded-xl group-hover:bg-white/10 transition-all duration-300">
            View Case Study
            <span className="group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm text-[#A8B8C8] hover:text-[#4F8FD8] transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </MouseGlow>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PROJECTS SECTION
   ════════════════════════════════════════════════════════════════════ */

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#071A2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-[#4F8FD8] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Featured Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">
            Data Science in Practice
          </h2>
          <p className="text-[#A8B8C8] max-w-2xl mx-auto text-base sm:text-lg">
            Real projects. Real data. Real impact.
          </p>
        </ScrollReveal>

        {/* ── 3 Glass Boards side by side ── */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {featured.map((project, idx) => (
            <StaggerItem key={project.id}>
              <GlassBoard
                project={project}
                index={idx}
                onOpen={() => setSelectedProject(project)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── More Projects ── */}
        {others.length > 0 && (
          <ScrollReveal>
            <h3 className="text-xl font-semibold text-[#F1F5F9] mb-8 text-center">
              More Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {others.map((project, idx) => (
                <MouseGlow
                  key={project.id}
                  className="glass-subtle glass-reflect rounded-2xl p-5 flex flex-col cursor-pointer group overflow-hidden hover-glass"
                >
                  <div className="relative z-10" onClick={() => setSelectedProject(project)}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#4F8FD8]/40 text-lg font-bold">
                        {String(featured.length + idx + 1).padStart(2, "0")}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-[#4F8FD8]/60 bg-[#4F8FD8]/8 rounded-md">
                        {project.category}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-[#F1F5F9] mb-2 group-hover:text-[#4F8FD8] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-[#A8B8C8] text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] text-[#A8B8C8] bg-white/5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-[#4F8FD8]/70 text-xs font-medium group-hover:text-[#4F8FD8] transition-colors">
                      View Case Study{" "}
                      <span className="group-hover:translate-x-0.5 transition-transform inline-block">
                        →
                      </span>
                    </div>
                  </div>
                </MouseGlow>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* ── Case Study Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
