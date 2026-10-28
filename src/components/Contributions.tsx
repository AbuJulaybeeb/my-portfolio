"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitPullRequest,
  ExternalLink,
  ArrowUpRight,
  Maximize2,
  Globe,
} from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import ProjectModal, { ProjectData } from "./ProjectModal";

export default function Contributions() {
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "stellar" | "defi" | "creator"
  >("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  const contributions: (ProjectData & { filterCategory: "stellar" | "defi" | "creator"; role: string })[] = [
    {
      id: "accensa-app",
      title: "Accensa App",
      category: "Stellar Payment Back-Office",
      type: "web3",
      filterCategory: "stellar",
      role: "Contributor (SDK & Merchant Dashboard)",
      liveUrl: "https://accensa-dashboard.vercel.app",
      githubUrl: "https://github.com/AbuJulaybeeb/accensa-app",
      description:
        "Merchant back-office and checkout portal for x402 sellers on Stellar: Next.js dashboard, on-chain indexer, and @accensa/sdk TypeScript client.",
      longDescription:
        "Contributed to the Accensa merchant payment infrastructure for Stellar. Developed administrative dashboard components, transaction event listeners, and the @accensa/sdk TypeScript client library for embedding wallet-to-wallet payment flows.",
      highlights: [
        "Constructed @accensa/sdk TypeScript client library",
        "Built responsive merchant analytics and transaction history dashboard",
        "Integrated Soroban contract event indexing telemetry",
        "Live deployment at accensa-dashboard.vercel.app",
      ],
      tech: ["Next.js", "Stellar", "Soroban", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "stellar-indigopay",
      title: "Stellar-IndigoPay",
      category: "Climate Web3 Donation Protocol",
      type: "web3",
      filterCategory: "stellar",
      organization: "Stellar-Search",
      role: "Contributor (Soroban Contracts & DApp)",
      liveUrl: "https://stellar-indigo-pay.vercel.app",
      githubUrl: "https://github.com/AbuJulaybeeb/Stellar-IndigoPay",
      description:
        "Climate donation platform built on the Stellar network. Donors give XLM directly to verified environmental projects via Soroban contracts.",
      longDescription:
        "Contributed to Stellar-IndigoPay connecting donors with verified conservation initiatives. Engineered Soroban smart contracts in Rust for non-custodial donation routing and dynamic on-chain badge minting.",
      highlights: [
        "Rust Soroban smart contracts for direct donation distribution",
        "Dynamic on-chain impact tier badges (Seedling, Tree, Forest)",
        "Zero custodial counterparty risk with transparent ledgers",
        "Live deployment at stellar-indigo-pay.vercel.app",
      ],
      tech: ["Stellar", "Soroban (Rust)", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "safeswap",
      title: "SafeSwap",
      category: "P2P Escrow & Marketplace",
      type: "web3",
      filterCategory: "defi",
      role: "Contributor (Escrow Protocols)",
      liveUrl: "https://safe-swap-landing.vercel.app/",
      githubUrl: "https://github.com/AbuJulaybeeb/SafeSwap",
      description:
        "Decentralized peer-to-peer escrow marketplace providing cryptographically secured buyer and seller transaction protection.",
      longDescription:
        "Contributed to SafeSwap's decentralized P2P exchange. Built smart contract payment locks, dispute resolution triggers, and a high-converting landing interface.",
      highlights: [
        "Smart contract escrow holds and dual-party release confirmation",
        "Modern cyber glassmorphism landing experience",
        "Multi-wallet connection state management",
        "Live deployment at safe-swap-landing.vercel.app",
      ],
      tech: ["Next.js", "Smart Contracts", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "audioblocks",
      title: "AudioBlocks",
      category: "Web3 Music & Creator Streaming",
      type: "fullstack",
      filterCategory: "creator",
      role: "Contributor (Creator Portal & Micropayments)",
      liveUrl: "https://audio-blocks-frontend-v1.vercel.app",
      githubUrl: "https://github.com/AbuJulaybeeb/AudioBlocks_Frontend_v1",
      description:
        "Decentralized music streaming and artist monetization platform enabling direct listener-to-creator micropayments and track royalties.",
      longDescription:
        "Contributed to AudioBlocks' decentralized music streaming architecture, designing creator upload portals, wallet streaming listeners, and IPFS metadata handling.",
      highlights: [
        "Creator onboarding portal for direct artist royalties",
        "Decentralized IPFS audio streaming and metadata pins",
        "Web3 wallet streaming session connectors",
        "Live deployment at audio-blocks-frontend-v1.vercel.app",
      ],
      tech: ["Next.js", "Web3.js", "Node.js", "Tailwind CSS", "IPFS"],
    },
    {
      id: "b-buildathon",
      title: "B.Buildathon Board",
      category: "Hackathon Leaderboard DApp",
      type: "web3",
      filterCategory: "creator",
      role: "Contributor (Leaderboard & Verification)",
      liveUrl: "https://b-buildathon-board.vercel.app",
      githubUrl: "https://github.com/AbuJulaybeeb/B.Buildathon-Board",
      description:
        "Interactive hackathon leaderboard and submission verification board built for ecosystem builders and developer competitions.",
      longDescription:
        "Contributed to the B.Buildathon Board application for real-time hackathon team scoring, project submission verification, and builder showcase rankings.",
      highlights: [
        "Real-time builder team submission verification",
        "Dynamic leaderboard ranking algorithms and scoring breakdown",
        "Responsive competition UI with GitHub repo link integration",
        "Live deployment at b-buildathon-board.vercel.app",
      ],
      tech: ["React", "Next.js", "Tailwind CSS", "Web3"],
    },
    {
      id: "lumenpulse",
      title: "Lumenpulse",
      category: "Decentralized Media & Analytics",
      type: "web3",
      filterCategory: "stellar",
      role: "Contributor (Stellar Analytics Feed)",
      liveUrl: "https://starkpulse.vercel.app/",
      githubUrl: "https://github.com/AbuJulaybeeb/Lumenpulse",
      description:
        "Decentralized crypto intelligence and market trend platform powered by the Stellar blockchain with community reward incentives.",
      longDescription:
        "Contributed to Lumenpulse on Stellar, building content curation telemetry, automated trend indexers, and community reward distribution interfaces.",
      highlights: [
        "Real-time crypto news curation and market feeds",
        "On-chain contributor reward incentive mechanics",
        "Live deployment at starkpulse.vercel.app",
      ],
      tech: ["Stellar", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "eduvault",
      title: "EduVault",
      category: "Student-Owned Credential Storage",
      type: "web3",
      filterCategory: "creator",
      role: "Contributor (IPFS & Credential Archiving)",
      liveUrl: "https://eduvault-alpha.vercel.app",
      githubUrl: "https://github.com/AbuJulaybeeb/eduvault-archive",
      description:
        "Student-owned digital credential storage, decentralized document verification, and academic resource marketplace.",
      longDescription:
        "Contributed to EduVault's credential archiving architecture, implementing tamper-evident IPFS diploma pinning and student-controlled verifiable records.",
      highlights: [
        "Decentralized IPFS academic credential storage",
        "Student-controlled digital identity and certificate verification",
        "Live alpha deployment at eduvault-alpha.vercel.app",
      ],
      tech: ["Next.js", "IPFS", "Web3", "Tailwind CSS"],
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Contributions" },
    { id: "stellar", label: "Stellar & Soroban" },
    { id: "defi", label: "DeFi & Escrow" },
    { id: "creator", label: "Creator & Community" },
  ];

  const filteredContributions =
    selectedFilter === "all"
      ? contributions
      : contributions.filter((c) => c.filterCategory === selectedFilter);

  return (
    <section id="contributions" className="py-24 relative overflow-hidden bg-[#070910]/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs uppercase tracking-wider">
              <GitPullRequest className="w-3.5 h-3.5" />
              <span>Open-Source Impact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Web3 <span className="text-gradient-purple">Contributions</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Open-source repositories, protocol tooling, and community codebases where I have contributed smart contracts, client SDKs, and decentralized applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/[0.03] border border-white/5 rounded-2xl p-1.5 backdrop-blur-md self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setSelectedFilter(
                    tab.id as "all" | "stellar" | "defi" | "creator"
                  )
                }
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  selectedFilter === tab.id
                    ? "bg-violet-500 text-white font-semibold shadow-md shadow-violet-500/25"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contributions Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredContributions.map((item, idx) => {
              const displayDomain = item.liveUrl
                .replace(/^https?:\/\//, "")
                .replace(/\/$/, "");
              const previewSrc = `/api/preview?url=${encodeURIComponent(item.liveUrl)}`;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/40 flex flex-col justify-between"
                >
                  {/* Browser Mockup Header & Preview Frame */}
                  <div className="relative w-full bg-[#0a0d16] border-b border-white/10 flex flex-col">
                    <div className="px-3.5 py-2.5 bg-[#0e121d] border-b border-white/5 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/60 border border-white/5 text-[10px] text-slate-300 max-w-[200px] truncate">
                        <Globe className="w-2.5 h-2.5 text-violet-400 shrink-0" />
                        <span className="truncate">{displayDomain}</span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        LIVE
                      </span>
                    </div>

                    {/* Interactive Frame */}
                    <div
                      className="relative w-full aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer"
                      onClick={() => setActiveModalProject(item)}
                    >
                      <iframe
                        src={previewSrc}
                        title={`${item.title} Preview`}
                        className="w-[1280px] h-[800px] origin-top-left scale-[0.32] sm:scale-[0.34] md:scale-[0.29] lg:scale-[0.31] pointer-events-none border-0 bg-white"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                        <span className="px-3.5 py-2 rounded-xl bg-violet-600 text-white font-mono text-xs font-semibold shadow-lg flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Interactive Preview</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400 font-medium">
                          {item.category}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-500/10 text-violet-300 border border-violet-500/20">
                          {item.role}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors flex items-center justify-between">
                        <span>{item.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-violet-400" />
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Tech Badges & Actions */}
                    <div className="space-y-4 pt-3 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-400 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1 font-mono text-xs">
                        <button
                          onClick={() => setActiveModalProject(item)}
                          className="text-violet-400 hover:text-violet-300 hover:underline flex items-center gap-1 font-medium"
                        >
                          <span>Inspect Live</span>
                          <Maximize2 className="w-3 h-3" />
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={item.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/40 transition-colors"
                            title="GitHub Repository"
                            aria-label={`View ${item.title} GitHub repository`}
                          >
                            <GitHubIcon className="w-3.5 h-3.5" />
                          </a>

                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-300 hover:bg-violet-500 hover:text-white transition-colors"
                            title="Open Live Deployment"
                            aria-label={`Open ${item.title} live deployment`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
