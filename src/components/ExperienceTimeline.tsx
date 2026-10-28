"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight, ExternalLink } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      period: "2024 — Present",
      role: "Lead Platform & Systems Architect",
      organization: "NorthDemy Limited (Current Organization)",
      badge: "Current Org",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      liveUrl: "https://northdemy.com",
      description:
        "Leading platform engineering and system revamping for Northdemy (northdemy.com). Overhauled core web infrastructure on Hostinger, optimized application throughput, student cohort pipelines, and high-concurrency database queries.",
      points: [
        "Architectural revamping deployed to production on Hostinger cloud infrastructure",
        "Optimized page load speeds, resource bundling, and responsive cohort enrollment workflows",
        "Modernized database schema and API endpoints for frictionless student course delivery",
      ],
    },
    {
      period: "2024 — Present",
      role: "Co-Developer & Co-Owner",
      organization: "Vera Protocol (VeraOS)",
      badge: "Autonomous AI Verification",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      liveUrl: "https://vera-os-xi.vercel.app",
      description:
        "Co-architecting VeraOS (vera-os-xi.vercel.app), the decentralized verification layer for autonomous AI agents. Independently checking agent work, cryptographic evidence, and deterministic execution outcomes before trust.",
      points: [
        "Co-developer and co-owner building decentralized AI agent proof verification protocols",
        "Constructed cryptographic evidence validation and verifiable outcome attestations",
        "Shipped live production interface deployed at vera-os-xi.vercel.app",
      ],
    },
    {
      period: "2024 — Present",
      role: "CEO, Lead Full-Stack & Smart Contract Developer",
      organization: "StormSale Protocol",
      badge: "Founder & Web3 Protocol",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      liveUrl: "https://stormsale-one.vercel.app",
      description:
        "Founded and engineered StormSale (stormsale-one.vercel.app), a decentralized Web3 affiliate marketing protocol on Stellar Soroban with automated smart contract commission payouts.",
      points: [
        "Authored Soroban smart contracts for automated non-custodial referral fee distribution",
        "Designed cryptographic referral signature verification preventing attribution fraud",
        "Built responsive Web3 dashboard with Albedo, Freighter, and multi-wallet bridges",
      ],
    },
    {
      period: "2023 — Present",
      role: "Core Collaborator & DeFi Protocol Engineer",
      organization: "PI-DEFI World (Zyra Teams)",
      badge: "DeFi & AMM",
      badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      liveUrl: "https://zyradex.com",
      description:
        "Collaborating on decentralized finance protocols on the Pi Network (zyradex.com), building the ZyraDex Automated Market Maker (AMM), oracle relays, and Zyrachain node infrastructure.",
      points: [
        "Contributed to ZyraDex AMM decentralized liquidity pools and swap state machines",
        "Engineered Zyrachain oracle server handlers relaying off-chain financial telemetry",
        "Enforced PiRC compliance and decentralized wallet connectivity standards",
      ],
    },
    {
      period: "2024",
      role: "Lead Payment Protocol Engineer",
      organization: "Stellar-MarketPay",
      badge: "Soroban Merchant Payments",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      liveUrl: "https://stellar-market-pay.vercel.app",
      description:
        "Engineered high-speed decentralized checkout and escrow settlement protocols on Stellar Soroban (stellar-market-pay.vercel.app) delivering sub-cent merchant transaction finality.",
      points: [
        "Implemented Soroban escrow contracts ensuring dual-party buyer/seller protection",
        "Developed embedded checkout modal and real-time transaction listener indexing on-chain events",
        "Shipped live production application deployed at stellar-market-pay.vercel.app",
      ],
    },
    {
      period: "2022 — 2024",
      role: "Senior Full-Stack Developer",
      organization: "Production Web Systems (360RadioTV & Sicolines)",
      badge: "3+ Years Full-Stack",
      badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
      liveUrl: "https://360radiotv.com",
      description:
        "Architected and delivered high-scale web platforms. Built 360RadioTV (360radiotv.com) with 24/7 continuous low-latency audio/video broadcast streaming. Co-built enterprise maritime logistics portal Sicolines (sicolines.com).",
      points: [
        "Engineered 360RadioTV broadcasting web platform with persistent background media playback",
        "Co-built Sicolines enterprise logistics portal, cargo consignment tracking, and quote pipelines",
        "Delivered responsive, highly optimized web applications with high availability and CDN caching",
      ],
    },
    {
      period: "2023 — Present",
      role: "Backend Lead & Systems Architect",
      organization: "Fixeroni Platform",
      badge: "Marketplace & APIs",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      liveUrl: "https://fixeroni-page.netlify.app/",
      description:
        "Leading the core backend architecture powering Fixeroni artisan marketplace (fixeroni-page.netlify.app). Designed resilient microservice APIs, PostGIS geolocation discovery, and escrow transaction state machines in Node.js and PostgreSQL.",
      points: [
        "Implemented Redis rate limiting and concurrency locks handling artisan job dispatches",
        "Constructed PostgreSQL relational schemas with strict ACID transactional guarantees",
        "Integrated multi-channel webhook notifications and automated financial reconciliations",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trajectory & Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-gradient-purple">Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            <strong className="text-white">3+ years</strong> of full-stack software development combined with <strong className="text-white">2+ years</strong> specializing in production Web3 protocols, smart contracts, and decentralized systems.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.organization}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#06070a] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-lg shadow-cyan-500/50">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Date Column on Desktop */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28 font-mono text-xs text-slate-400 font-semibold">
                {exp.period}
              </div>

              {/* Content Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="sm:hidden font-mono text-xs text-cyan-400 block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-slate-300 flex items-center gap-2 mt-0.5">
                      <span>{exp.organization}</span>
                      {exp.liveUrl && (
                        <a
                          href={exp.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:underline inline-flex items-center gap-0.5"
                          title="Open Live Deployment"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${exp.badgeColor}`}
                  >
                    {exp.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {exp.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
