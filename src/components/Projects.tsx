"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  ArrowUpRight,
  Maximize2,
  Globe,
} from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import ProjectModal, { ProjectData } from "./ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "web3" | "backend" | "fullstack"
  >("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: "stormsale",
      title: "StormSale",
      category: "Web3 Affiliate Protocol & DApp",
      type: "web3",
      organization: "StormSale",
      liveUrl: "https://stormsale-one.vercel.app",
      githubUrl: "https://github.com/StormSale/StormSale",
      description:
        "Decentralized Web3 affiliate marketing protocol featuring automated smart contract escrow, crypto commission payouts, and on-chain analytics.",
      longDescription:
        "Built under the StormSale organization, this platform solves attribution fraud and delayed payouts in digital marketing. Leveraging smart contracts on EVM and high-throughput Node.js/PostgreSQL services, it automates referral attribution, cryptographic proofs, and instant multi-token commission distribution.",
      highlights: [
        "Real-time conversion tracking with cryptographic referral signatures",
        "Smart contract automated commission splits with zero custodial counterparty risk",
        "Responsive Web3 dashboard connecting multi-wallet providers",
        "Live production deployment on Vercel at stormsale-one.vercel.app",
      ],
      tech: ["Next.js", "Solidity", "Node.js", "PostgreSQL", "Ethers.js", "Tailwind CSS"],
    },
    {
      id: "fixeroni",
      title: "Fixeroni Marketplace & Engine",
      category: "Artisan Marketplace Platform",
      type: "backend",
      organization: "Fixeroni",
      liveUrl: "https://fixeroni-page.netlify.app/",
      githubUrl: "https://github.com/Fixeroni/Fixeroni-Backend",
      description:
        "Artisan marketplace connecting clients with verified local technicians via geospatial queries, escrow payments, and real-time scheduling.",
      longDescription:
        "Powering the Fixeroni service marketplace, this platform features geolocation radius searches for local trade specialists, escrow payment holds guaranteeing fair worker compensation, and a resilient pub/sub event bus for real-time dispatch and notifications.",
      highlights: [
        "Geospatial PostGIS radius queries for sub-second technician discovery",
        "Escrow wallet state machine guaranteeing fair worker compensation",
        "Dual-role authentication (Clients, Technicians, Platform Admins)",
        "Live deployment on Netlify at fixeroni-page.netlify.app",
      ],
      tech: ["Node.js", "Express", "PostgreSQL", "Redis", "TypeScript", "Docker"],
    },
    {
      id: "accensa-app",
      title: "Accensa App",
      category: "Stellar Payment Back-Office",
      type: "web3",
      liveUrl: "https://accensa-dashboard.vercel.app",
      githubUrl: "https://github.com/AbuJulaybeeb/accensa-app",
      description:
        "Merchant back-office and checkout portal for x402 sellers on Stellar: Next.js dashboard, on-chain indexer, and @accensa/sdk TypeScript client.",
      longDescription:
        "Accensa provides merchant infrastructure for x402 sellers on the Stellar blockchain. Features a Next.js administrative dashboard, an on-chain payment indexer, and the @accensa/sdk TypeScript SDK for embedding wallet-to-wallet transactions.",
      highlights: [
        "Conformance spike implementation for Stellar x402 payment facilitator",
        "Real-time on-chain transaction indexer and analytics telemetry",
        "Modular @accensa/sdk TypeScript client library",
        "Live deployment on Vercel at accensa-dashboard.vercel.app",
      ],
      tech: ["Next.js", "Stellar", "Soroban", "TypeScript", "Tailwind CSS", "x402"],
    },
    {
      id: "stellar-indigopay",
      title: "Stellar-IndigoPay",
      category: "Climate Web3 Donation Protocol",
      type: "web3",
      organization: "Stellar-Search",
      liveUrl: "https://stellar-indigo-pay.vercel.app",
      githubUrl: "https://github.com/AbuJulaybeeb/Stellar-IndigoPay",
      description:
        "Climate donation platform built on the Stellar network. Donors give XLM directly to verified environmental projects via Soroban contracts.",
      longDescription:
        "Built on the Stellar network, Stellar-IndigoPay connects donors directly with verified environmental conservation initiatives. Funds never touch a custodian; every donation is recorded on-chain via a Soroban smart contract with automated impact badge issuance.",
      highlights: [
        "Direct non-custodial XLM donation routing via Soroban smart contracts",
        "On-chain dynamic impact badges (Seedling, Tree, Forest, Earth Guardian)",
        "Zero platform fee architecture with radical transparency",
        "Live production deployment at stellar-indigo-pay.vercel.app",
      ],
      tech: ["Stellar", "Soroban (Rust)", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "safeswap",
      title: "SafeSwap",
      category: "P2P Escrow & Marketplace",
      type: "web3",
      liveUrl: "https://safe-swap-landing.vercel.app/",
      githubUrl: "https://github.com/AbuJulaybeeb/SafeSwap",
      description:
        "Safe decentralized marketplace and peer-to-peer escrow platform providing guaranteed buyer and seller protection.",
      longDescription:
        "SafeSwap offers an intuitive, tamper-proof exchange environment for digital and physical asset transfers. Incorporates smart contract payment holds and two-party cryptographic release triggers to prevent transaction fraud.",
      highlights: [
        "Smart contract escrow lock and dispute mitigation workflows",
        "Responsive cyber glassmorphism landing interface",
        "Secure buyer-seller confirmation handshakes",
        "Live production landing page at safe-swap-landing.vercel.app",
      ],
      tech: ["Next.js", "Smart Contracts", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "audioblocks",
      title: "AudioBlocks",
      category: "Web3 Music & Creator Streaming",
      type: "fullstack",
      liveUrl: "https://audio-blocks-frontend-v1.vercel.app",
      githubUrl: "https://github.com/AbuJulaybeeb/AudioBlocks_Frontend_v1",
      description:
        "Decentralized music streaming and artist monetization platform enabling direct listener-to-creator micropayments and NFT tracks.",
      longDescription:
        "AudioBlocks empowers independent music artists with direct streaming royalties and decentralized audio track registry. Includes dedicated listener and artist portals (AudioBlocks For Artist) with instant on-chain micropayment settlement.",
      highlights: [
        "Dual interface ecosystem for listeners and music creators",
        "On-chain streaming royalties eliminating traditional label intermediaries",
        "Web3 wallet streaming session connectors",
        "Live deployments on Vercel at audio-blocks-frontend-v1.vercel.app",
      ],
      tech: ["Next.js", "Web3.js", "Node.js", "Tailwind CSS", "IPFS"],
    },
    {
      id: "b-buildathon",
      title: "B.Buildathon Board",
      category: "Hackathon Leaderboard DApp",
      type: "web3",
      liveUrl: "https://b-buildathon-board.vercel.app",
      githubUrl: "https://github.com/AbuJulaybeeb/B.Buildathon-Board",
      description:
        "Interactive hackathon leaderboard and submission verification board built for ecosystem builders and hackathons.",
      longDescription:
        "Built to power developer hackathons and ecosystem buildathons, this DApp tracks live builder team submissions, judges scoring criteria, and verifies project repositories with real-time leaderboard rankings.",
      highlights: [
        "Real-time submission registry and automated verification",
        "Transparent scoring breakdown and team profiles",
        "Live deployment at b-buildathon-board.vercel.app",
      ],
      tech: ["React", "Next.js", "Tailwind CSS", "Web3"],
    },
    {
      id: "lumenpulse",
      title: "Lumenpulse",
      category: "Decentralized Media & Analytics",
      type: "web3",
      liveUrl: "https://starkpulse.vercel.app/",
      githubUrl: "https://github.com/AbuJulaybeeb/Lumenpulse",
      description:
        "Decentralized crypto news, trend analysis, and market insights platform powered by the Stellar blockchain with reward incentives.",
      longDescription:
        "Lumenpulse delivers a reliable source of decentralized crypto news and market intelligence on Stellar, curating stories from trusted sources and rewarding high-value community contributions.",
      highlights: [
        "Community contribution and curation reward mechanics",
        "Real-time crypto intelligence feeds",
        "Live deployment at starkpulse.vercel.app",
      ],
      tech: ["Stellar", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "eduvault",
      title: "EduVault",
      category: "Student-Owned Credential Storage",
      type: "web3",
      liveUrl: "https://eduvault-alpha.vercel.app",
      githubUrl: "https://github.com/AbuJulaybeeb/eduvault-archive",
      description:
        "Student-owned digital credential storage, decentralized document verification, and academic resource marketplace.",
      longDescription:
        "EduVault provides students and educational institutions with tamper-evident digital credential archiving, cryptographic diploma verification, and a peer-to-peer academic resource exchange.",
      highlights: [
        "Decentralized document provenance and credential verification",
        "Student-controlled digital identity and academic record vaults",
        "Live alpha deployment at eduvault-alpha.vercel.app",
      ],
      tech: ["Next.js", "IPFS", "Web3", "Tailwind CSS"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web3", label: "Web3 & Blockchain" },
    { id: "backend", label: "Backend & Systems" },
    { id: "fullstack", label: "Full-Stack" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.type === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Verified Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="text-gradient-cyan">Projects</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Live production web applications, decentralized protocols, and backend microservices fetched directly from GitHub with active deployments.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/[0.03] border border-white/5 rounded-2xl p-1.5 backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  setSelectedCategory(
                    cat.id as "all" | "web3" | "backend" | "fullstack"
                  )
                }
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat.id
                    ? "bg-cyan-400 text-black font-semibold shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const displayDomain = project.liveUrl
                .replace(/^https?:\/\//, "")
                .replace(/\/$/, "");

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between"
                >
                  {/* Live Web Browser Mockup Header & Preview Frame */}
                  <div className="relative w-full bg-[#0a0d16] border-b border-white/10 flex flex-col">
                    {/* Simulated Browser Bar */}
                    <div className="px-3.5 py-2.5 bg-[#0e121d] border-b border-white/5 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>

                      {/* Domain Badge */}
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/60 border border-white/5 text-[10px] text-slate-300 max-w-[200px] truncate">
                        <Globe className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{displayDomain}</span>
                      </div>

                      {/* Live Badge */}
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        LIVE
                      </span>
                    </div>

                    {/* Interactive Live URL Frame / Viewport */}
                    <div
                      className="relative w-full aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer"
                      onClick={() => setActiveModalProject(project)}
                    >
                      <iframe
                        src={project.liveUrl}
                        title={`${project.title} Preview`}
                        className="w-[1280px] h-[800px] origin-top-left scale-[0.32] sm:scale-[0.34] md:scale-[0.29] lg:scale-[0.31] pointer-events-none border-0 bg-white"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms"
                      />

                      {/* Hover Overlay with Live Actions */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-[3px] p-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-white bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Interactive Preview & Specs</span>
                        </span>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono font-semibold text-black bg-cyan-400 hover:bg-cyan-300 shadow-md transition-colors"
                        >
                          <span>Launch Live Website</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      {/* Category Pill Tag at bottom */}
                      <div className="absolute bottom-2.5 left-2.5 pointer-events-none">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-black/80 backdrop-blur-md text-cyan-300 border border-white/10">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3
                          onClick={() => setActiveModalProject(project)}
                          className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                        >
                          {project.title}
                        </h3>
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                          title="View Full Architecture"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="space-y-3 pt-3 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-400 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-cyan-400">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Bottom Actions */}
                      <div className="flex items-center justify-between pt-1 text-xs font-mono">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="text-slate-400 hover:text-white transition-colors"
                          >
                            Specs
                          </button>

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                            title="View Repository"
                          >
                            <GitHubIcon className="w-4 h-4" />
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

        {/* Modal Dialog */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
}
