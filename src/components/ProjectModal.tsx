"use client";

import { useState, useEffect } from "react";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  Cpu,
  Globe,
  RefreshCw,
  Monitor,
  Smartphone,
  Tablet,
  ShieldCheck,
} from "lucide-react";
import { GitHubIcon } from "./SocialIcons";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  type: "web3" | "backend" | "fullstack";
  liveUrl: string;
  githubUrl: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tech: string[];
  organization?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const reloadIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  const getContainerWidth = () => {
    switch (viewMode) {
      case "mobile":
        return "max-w-[400px]";
      case "tablet":
        return "max-w-[768px]";
      default:
        return "w-full";
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto glass-panel rounded-2xl border border-white/20 p-5 sm:p-7 shadow-2xl text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
              Live Project Preview
            </span>
            {project.organization && (
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Org: {project.organization}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live URL Browser Mockup Container */}
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#07090e] shadow-xl">
          {/* Simulated Browser Bar */}
          <div className="px-4 py-2.5 bg-[#0b0e17] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              
              <button
                onClick={reloadIframe}
                className="ml-2 p-1 text-slate-400 hover:text-white transition-colors"
                title="Reload preview"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center gap-1.5 px-3 py-1 rounded-md bg-black/50 border border-white/10 text-[11px] text-slate-300 truncate">
              <Globe className="w-3 h-3 text-cyan-400 shrink-0" />
              <span className="text-slate-400">https://</span>
              <span className="text-cyan-300 truncate">
                {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </div>

            {/* Device Switcher & External Link */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1 bg-white/5 p-0.5 rounded-lg border border-white/5">
                <button
                  onClick={() => setViewMode("desktop")}
                  className={`p-1.5 rounded ${
                    viewMode === "desktop" ? "bg-cyan-400 text-black font-bold" : "text-slate-400 hover:text-white"
                  }`}
                  title="Desktop View"
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode("tablet")}
                  className={`p-1.5 rounded ${
                    viewMode === "tablet" ? "bg-cyan-400 text-black font-bold" : "text-slate-400 hover:text-white"
                  }`}
                  title="Tablet View"
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode("mobile")}
                  className={`p-1.5 rounded ${
                    viewMode === "mobile" ? "bg-cyan-400 text-black font-bold" : "text-slate-400 hover:text-white"
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all"
              >
                <span>Open Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Live IFrame Preview */}
          <div className="relative w-full h-[400px] sm:h-[480px] bg-slate-950 flex items-center justify-center overflow-hidden">
            <div className={`h-full transition-all duration-300 mx-auto ${getContainerWidth()} relative w-full`}>
              <iframe
                key={iframeKey}
                src={project.liveUrl}
                title={`${project.title} Live Preview`}
                className="w-full h-full border-0 bg-white"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                loading="lazy"
              />

              {/* Floating Fallback Bar if frame is restricted */}
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Live Previewing: <strong className="text-white">{project.liveUrl}</strong>
                </span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  Launch Fullscreen ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-black bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-500/20 transition-all"
              >
                <span>Launch Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-200 bg-white/5 border border-white/10 hover:border-white/30 transition-all"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>Repository</span>
              </a>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Architectural Highlights */}
        <div className="space-y-3 pt-3 border-t border-white/10">
          <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span>Key Engineering Highlights</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <Layers className="w-4 h-4 text-violet-400" />
            <span>Tech Stack & Libraries</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
