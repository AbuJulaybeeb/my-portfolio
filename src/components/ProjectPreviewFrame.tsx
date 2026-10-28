"use client";
import { useState, useEffect, useRef } from "react";
import { Globe, Loader2, Maximize2, ShieldCheck, ExternalLink } from "lucide-react";
import { getProjectPreviewSrc } from "@/lib/preview";

interface ProjectPreviewFrameProps {
  url: string;
  title: string;
  accentColor?: "cyan" | "violet";
  onOpenModal: () => void;
}

export default function ProjectPreviewFrame({
  url,
  title,
  accentColor = "cyan",
  onOpenModal,
}: ProjectPreviewFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const [inView, setInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasTimedOut, setHasTimedOut] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);
  const [scale, setScale] = useState<number>(0.28);

  const displayDomain = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const proxySrc = `/api/preview?url=${encodeURIComponent(url)}`;
  const defaultSrc = getProjectPreviewSrc(url);
  const effectiveSrc = hasFailed ? proxySrc : defaultSrc;

  // Lazy-load iframe only when card scrolls near the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Compute exact responsive scale factor so 1280x800 desktop canvas fits container 100% perfectly
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const updateScale = () => {
      const w = el.clientWidth;
      if (w > 0) {
        setScale(w / 1280);
      }
    };

    updateScale();
    const ro = new ResizeObserver(() => updateScale());
    ro.observe(el);

    return () => ro.disconnect();
  }, [inView]);

  // Graceful fallback if an upstream site is cold-booting or takes > 10s
  useEffect(() => {
    if (!inView || isLoaded || hasFailed) return;
    const timer = setTimeout(() => {
      setHasTimedOut(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [inView, isLoaded, hasFailed]);

  const accentBorder =
    accentColor === "violet" ? "hover:border-violet-500/40" : "hover:border-cyan-500/40";
  const accentBadge =
    accentColor === "violet" ? "bg-violet-600 text-white" : "bg-cyan-400 text-black";
  const iconColor =
    accentColor === "violet" ? "text-violet-400" : "text-cyan-400";

  return (
    <div
      ref={containerRef}
      className={`relative w-full bg-[#0a0d16] border-b border-white/10 flex flex-col group/preview ${accentBorder}`}
    >
      {/* Simulated Browser Bar */}
      <div className="px-3.5 py-2.5 bg-[#0e121d] border-b border-white/5 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        {/* Domain Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/60 border border-white/5 text-[10px] text-slate-300 max-w-[200px] truncate">
          <Globe className={`w-2.5 h-2.5 ${iconColor} shrink-0`} />
          <span className="truncate">{displayDomain}</span>
        </div>

        {/* Live Badge */}
        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          LIVE
        </span>
      </div>

      {/* Frame Viewport */}
      <div
        ref={viewportRef}
        className="relative w-full aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer"
        onClick={onOpenModal}
      >
        {inView ? (
          <>
            <iframe
              src={effectiveSrc}
              title={`${title} Preview`}
              style={{
                width: "1280px",
                height: "800px",
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
              className={`pointer-events-none border-0 bg-white transition-opacity duration-500 ${
                isLoaded && !hasFailed ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              onLoad={() => {
                setIsLoaded(true);
                setHasFailed(false);
              }}
              onError={() => {
                setHasFailed(true);
              }}
            />

            {/* Loading Shimmer / Standby State */}
            {!isLoaded && !hasTimedOut && !hasFailed && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#06080e] text-slate-400 font-mono text-xs">
                <Loader2 className={`w-5 h-5 animate-spin ${iconColor}`} />
                <span className="text-[11px] text-slate-500">Connecting to {displayDomain}...</span>
              </div>
            )}

            {/* Standby Card if Upstream takes time or errors */}
            {(!isLoaded && (hasTimedOut || hasFailed)) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[#07090f] text-center space-y-2">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <span className="font-mono text-xs text-white font-bold">{displayDomain}</span>
                <span className="font-mono text-[10px] text-slate-400 flex items-center justify-center gap-1">
                  <span>Verified Live Portal</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </span>
              </div>
            )}
          </>
        ) : (
          /* Placeholder while scrolling down to section */
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#07090f] text-slate-500 font-mono text-[11px]">
            <Globe className="w-5 h-5 text-slate-600 mb-1" />
            <span>{displayDomain}</span>
          </div>
        )}

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent opacity-60 group-hover/preview:opacity-20 transition-opacity" />

        {/* Interactive Hover Trigger */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <span className={`px-3.5 py-2 rounded-xl ${accentBadge} font-mono text-xs font-semibold shadow-lg flex items-center gap-1.5`}>
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Interactive Preview</span>
          </span>
        </div>
      </div>
    </div>
  );
}
