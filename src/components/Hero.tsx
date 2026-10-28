"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, TwitterXIcon } from "./SocialIcons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Senior Full-Stack & Web3 Developer (3+ Yrs Dev • 2+ Yrs Web3)</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-slate-400">
                Hello, I am
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Jibril Raji <span className="text-gradient-cyan">Qasim</span>
              </h1>
            </div>

            {/* Subtitle / Bio summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Full-stack developer with <strong className="text-white">3+ years of experience</strong> engineering scalable web architectures and <strong className="text-white">2+ years</strong> specializing in production Web3 protocols and smart contracts.
              Currently working with{" "}
              <a href="https://northdemy.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-semibold">Northdemy</a> (revamped platform on Hostinger),
              collaborating on{" "}
              <a href="https://zyradex.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline font-semibold">PI-DEFI</a>,
              co-dev & co-owner of{" "}
              <a href="https://vera-os-xi.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline font-semibold">Vera Protocol / VeraOS</a>,
              and founder at{" "}
              <a href="https://stormsale-one.vercel.app" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline font-semibold">StormSale</a>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-white hover:shadow-cyan-500/25 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Works</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-medium text-slate-200 bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Contact Me</span>
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-sm font-medium text-slate-300 hover:text-white transition-colors"
                title="Download CV"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <span className="font-mono text-xs uppercase text-slate-400 tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/AbuJulaybeeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/40 hover:text-cyan-400 transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/40 hover:text-cyan-400 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/AJDEV01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/40 hover:text-cyan-400 transition-all hover:scale-110"
                  aria-label="Twitter / X"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:abujulaybeeb08@gmail.com"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/40 hover:text-cyan-400 transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-px bg-white/10 hidden sm:block" />

              <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Clean Architecture</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Profile Card with Live Floating Chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Card Outer Container with Neon Border */}
            <div className="relative w-full max-w-md">
              {/* Backlight Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-violet-600/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

              <div className="relative rounded-2xl glass-panel p-3 border border-white/10 shadow-2xl overflow-hidden group">
                
                {/* Developer Image */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 border border-white/5">
                  <Image
                    src="/images/hero.png"
                    alt="Jibril Raji Qasim at workstation"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Dark Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent opacity-80" />

                  {/* Top Bar Info Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/60 backdrop-blur-md border border-white/10 text-cyan-300">
                      <Cpu className="w-3 h-3 text-cyan-400" />
                      DEV_ENV: ONLINE
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE
                    </span>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-white font-mono font-bold text-sm">
                        Jibril Raji Qasim
                      </p>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                        v2.5.0
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-mono">
                      Northdemy • VeraOS • PI-DEFI • StormSale
                    </p>
                  </div>
                </div>

                {/* Floating Micro-Badge 1: Experience */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-4 top-1/4 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0b0f19]/90 backdrop-blur-md border border-cyan-500/30 shadow-xl shadow-cyan-950/40"
                >
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Track Record</div>
                    <div className="text-xs font-mono font-bold text-white">3+ Yrs Dev • 2+ Yrs Web3</div>
                  </div>
                </motion.div>

                {/* Floating Micro-Badge 2: GitHub Repos */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -right-4 bottom-1/4 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0b0f19]/90 backdrop-blur-md border border-emerald-500/30 shadow-xl shadow-emerald-950/40"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">GitHub Portfolio</div>
                    <div className="text-xs font-mono font-bold text-white">230+ Repositories</div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
