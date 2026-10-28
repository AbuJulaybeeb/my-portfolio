"use client";

import { ArrowUp } from "lucide-react";
import { GitHubIcon, LinkedInIcon, TwitterXIcon } from "./SocialIcons";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#040507] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <Link
              href="#home"
              className="inline-flex items-center gap-2.5 text-lg font-bold font-mono text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center">
                <span className="text-black font-black text-sm">JR</span>
              </div>
              <span>Jibril Raji Qasim</span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Specialized in scalable Node.js/PostgreSQL backend architectures, EVM/DAG smart contracts, and production decentralized applications.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/AbuJulaybeeb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  {"// 01. About Me"}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {"// 02. Capabilities"}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  {"// 03. Selected Works"}
                </a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-cyan-400 transition-colors">
                  {"// 04. Developer Console"}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  {"// 05. Trajectory & Milestones"}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  {"// 06. Get in Touch"}
                </a>
              </li>
            </ul>
          </div>

          {/* System Telemetry */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              Engineering Specs
            </h4>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 font-mono text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span>Next.js Stack:</span>
                <span className="text-cyan-400">v15 (App Router)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Styling Engine:</span>
                <span className="text-cyan-400">Tailwind CSS v4</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Runtime:</span>
                <span className="text-slate-300">Node.js 22 LTS</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Deployment:</span>
                <span className="text-emerald-400">Zero-Downtime Edge</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© 2025 Jibril Raji Qasim. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
