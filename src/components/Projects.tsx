"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ArrowUpRight, Maximize2 } from "lucide-react";
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
      category: "Web3 Affiliate Platform",
      type: "web3",
      image: "/images/projects/stormsale.jpg",
      description:
        "High-conversion decentralized affiliate marketing engine with on-chain commission distribution and crypto revenue dashboards.",
      longDescription:
        "StormSale is a decentralized affiliate infrastructure built to solve tracking transparency and delayed payouts in digital marketing. Leveraging smart contracts on EVM and high-throughput databases, it automates referral link attribution, cryptographic transaction proofs, and instant multi-token commission withdrawals.",
      highlights: [
        "Cryptographically signed affiliate attribution links preventing spoofing",
        "Automated smart contract escrow splits for zero-trust commissions",
        "Real-time analytics dashboard with sub-second websocket telemetry",
        "Multi-wallet integration (MetaMask, WalletConnect, Coinbase)",
      ],
      tech: ["Next.js", "Solidity", "Node.js", "PostgreSQL", "Ethers.js", "Tailwind CSS"],
      liveUrl: "https://github.com/AbuJulaybeeb",
      githubUrl: "https://github.com/AbuJulaybeeb",
    },
    {
      id: "xpend",
      title: "Xpend",
      category: "WhatsApp Banking App & Fintech",
      type: "backend",
      image: "/images/hero1.png",
      description:
        "Conversational fintech banking bot integrating financial transactions, instant wallet transfers, and automated balance reconciliation.",
      longDescription:
        "Xpend brings accessible banking directly into WhatsApp for millions of unbanked and mobile-first users. Built with high-security Node.js microservices and Redis-backed state machines, it executes instant transfers, airtime top-ups, and balance checks via conversational AI workflows.",
      highlights: [
        "Sub-second webhook processing with Redis concurrency guards",
        "PCI-DSS compliant data masking and bank-grade encryption",
        "Dual-entry accounting ledger stored in PostgreSQL with strict ACID properties",
        "Interactive conversational UX integrated with WhatsApp Cloud API",
      ],
      tech: ["Node.js", "Express", "Redis", "PostgreSQL", "WhatsApp API", "TypeScript"],
      liveUrl: "https://github.com/AbuJulaybeeb",
      githubUrl: "https://github.com/AbuJulaybeeb",
    },
    {
      id: "fixeroni",
      title: "Fixeroni",
      category: "Backend Marketplace API",
      type: "backend",
      image: "/images/projects/fixeroni.jpg",
      description:
        "Robust service marketplace engine with role-based auth, escrow transactions, geolocation queries, and real-time order states.",
      longDescription:
        "Fixeroni powers an on-demand artisan and service marketplace. The backend provides high-performance geospatial lookups for local service technicians, escrow payment holds until job completion, and a resilient pub/sub event bus for real-time dispatch and updates.",
      highlights: [
        "PostGIS geospatial indexing for ultra-fast local technician discovery",
        "Escrow wallet state machine guaranteeing fair worker compensation",
        "Role-based access control (Customers, Technicians, SuperAdmins)",
        "Automated invoice generation and webhook transaction notifications",
      ],
      tech: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Redis", "Docker"],
      liveUrl: "https://github.com/AbuJulaybeeb",
      githubUrl: "https://github.com/AbuJulaybeeb",
    },
    {
      id: "supply-chain",
      title: "Supply Chain DApp",
      category: "BlockDAG Hackathon Project",
      type: "web3",
      image: "/images/projects/supplychain.jpg",
      description:
        "Immutable product provenance tracking platform built for the BlockDAG hackathon, guaranteeing end-to-end cargo auditability.",
      longDescription:
        "Developed during the competitive BlockDAG hackathon, this DApp leverages directed acyclic graph consensus to register, verify, and track high-value physical goods through international shipping corridors without blockchain throughput bottlenecks.",
      highlights: [
        "High-throughput BlockDAG contract interactions with instant finality",
        "Cryptographic Merkle proofs embedded in dynamic verification QR codes",
        "Real-time sensor threshold checks (temperature, humidity, geofence)",
        "Clean decentralized audit history accessible by customs and end-buyers",
      ],
      tech: ["BlockDAG", "Solidity", "Web3.js", "React", "Node.js", "Ethers"],
      liveUrl: "https://github.com/AbuJulaybeeb",
      githubUrl: "https://github.com/AbuJulaybeeb",
    },
    {
      id: "avalanche-card",
      title: "Avalanche Card",
      category: "Ecosystem DeFi Infrastructure",
      type: "web3",
      image: "/images/projects/avalanche.jpg",
      description:
        "Interactive DeFi yield portal and decentralized asset management platform engineered specifically for the Avalanche network.",
      longDescription:
        "Avalanche Card enables DeFi participants to track cross-subnet liquidity, inspect staking yields, and generate interactive cryptographic cards representing their on-chain governance participation and rewards.",
      highlights: [
        "Direct integration with Avalanche C-Chain RPC endpoints",
        "Interactive yield simulation algorithms and APY auto-compounding models",
        "Gas-optimized smart contract read calls with multicall aggregation",
        "Ultra-responsive cyber glassmorphism frontend built with Next.js",
      ],
      tech: ["Avalanche (AVAX)", "Solidity", "Next.js", "Tailwind CSS", "Viem"],
      liveUrl: "https://github.com/AbuJulaybeeb",
      githubUrl: "https://github.com/AbuJulaybeeb",
    },
    {
      id: "leo-token",
      title: "$LEO Token & Protocol",
      category: "Stacks Ecosystem Contest",
      type: "web3",
      image: "/images/projects/stacks.jpg",
      description:
        "Smart contract architecture and tokenomics protocol built with Clarity for the Stacks ecosystem contest anchored to Bitcoin.",
      longDescription:
        "Developed for the Stacks Ecosystem competition, this project explores non-Turing-complete Clarity smart contracts anchored securely to Bitcoin finality. Features predictable execution without gas reentrancy vulnerabilities and deterministic community tokenomics.",
      highlights: [
        "Clarity smart contract ensuring formal verification and no reentrancy",
        "Direct settlement guarantees anchored into Bitcoin blocks",
        "Automated community governance staking pool logic",
        "Comprehensive contract unit test suite with Clarinet",
      ],
      tech: ["Clarity", "Stacks (STX)", "Bitcoin L2", "Clarinet", "Smart Contracts"],
      liveUrl: "https://github.com/AbuJulaybeeb",
      githubUrl: "https://github.com/AbuJulaybeeb",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web3", label: "Web3 & Blockchain" },
    { id: "backend", label: "Backend & Systems" },
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
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="text-gradient-cyan">Projects</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Production-grade backend infrastructures, hackathon-winning DApps, and decentralized protocols.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-2xl p-1.5 backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  setSelectedCategory(cat.id as "all" | "web3" | "backend")
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
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between"
              >
                {/* Image Container with Hover Action */}
                <div
                  className="relative w-full aspect-[16/10] bg-slate-900 overflow-hidden cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Subtle Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090c14] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Quick Inspect Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-white bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Inspect Details</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3
                        onClick={() => setActiveModalProject(project)}
                        className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
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
                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
                      >
                        <span>Architecture & Scope</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors"
                          title="View Repository"
                        >
                          <GitHubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
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
