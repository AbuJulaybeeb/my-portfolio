"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  ArrowUpRight,
  Maximize2,
} from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import ProjectModal, { ProjectData } from "./ProjectModal";
import ProjectPreviewFrame from "./ProjectPreviewFrame";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "personal" | "web3" | "backend" | "fullstack"
  >("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: "thezango",
      title: "The Zango",
      category: "Investigative Journalism & Media Platform",
      type: "fullstack",
      isPersonal: true,
      liveUrl: "https://thezango.com",
      githubUrl: "https://github.com/NorthDemy-Limited/The-Zango",
      description:
        "Independent journalism and investigative analysis publication for Northern Nigeria and the Sahel, featuring dual editorial/writer dashboards, offline draft replication, and Cloud Firestore sync.",
      longDescription:
        "Architected and built the official digital publication and analytical news portal for The Zango. Designed to deliver high-impact investigative reporting from Northern Nigeria and the Sahel, the platform features a public editorial hub with instant taxonomy filters, dual role-based dashboards (Chief Editor CMS with review pipelines and Writer Workspace), local storage draft replication with offline-sync resilience, read-time calculation, and high-performance server-side rendering.",
      highlights: [
        "Lead Full-Stack Architect & Core Developer (Personal Project)",
        "Dual role-based dashboards: Chief Editor CMS with editorial review pipelines & Writer Workspace",
        "Offline database replication, auto-save states, and resilient background submission queue",
        "Live production digital publication deployed at thezango.com",
      ],
      tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "Firebase / Firestore", "TypeScript", "Node.js"],
    },
    {
      id: "northdemy",
      title: "Northdemy Platform",
      category: "Educational Tech & Learning System",
      type: "fullstack",
      organization: "NorthDemy-Limited",
      liveUrl: "https://northdemy.com",
      githubUrl: "https://github.com/NorthDemy-Limited",
      description:
        "Complete overhaul and architectural revamping of the Northdemy education portal on Hostinger, optimizing throughput, user experience, and scalability.",
      longDescription:
        "As the lead system developer for Northdemy, executed a comprehensive architectural overhaul deployed to production on Hostinger. Re-engineered core web pipelines, optimized asset delivery, streamlined student cohort enrollment flows, and elevated Core Web Vitals to deliver a lightning-fast learning portal.",
      highlights: [
        "Full architectural system revamping deployed on Hostinger infrastructure",
        "Sub-second page load times with aggressive asset compression & caching",
        "Responsive student course management and enrollment workflow pipelines",
        "High-reliability multi-tier learning management system",
      ],
      tech: ["Full-Stack", "PHP / Node.js", "Hostinger", "JavaScript", "Tailwind CSS", "MySQL"],
    },
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
        "Founded and engineered as CEO & Lead Developer of StormSale, this platform eliminates attribution fraud and payment delays in digital marketing. Leveraging smart contracts on Stellar/Soroban and high-throughput microservices, it automates cryptographic referral tracking and non-custodial commission splits.",
      highlights: [
        "CEO & Lead Full-Stack & Smart Contract Developer",
        "Cryptographic referral signature validation eliminating attribution fraud",
        "Automated smart contract escrow splits with zero counterparty custody",
        "Live production DApp deployed at stormsale-one.vercel.app",
      ],
      tech: ["Stellar", "Soroban", "Next.js", "TypeScript", "Tailwind CSS", "Albedo / Freighter"],
    },
    {
      id: "360radiotv",
      title: "360RadioTV",
      category: "Broadcast & Continuous Media Streaming",
      type: "fullstack",
      isPersonal: true,
      liveUrl: "https://360radiotv.com",
      githubUrl: "https://github.com/AbuJulaybeeb",
      description:
        "Full-scale online radio and TV broadcasting web application delivering continuous audio/video live streaming, programming schedules, and editorial feeds.",
      longDescription:
        "Architected and built 360RadioTV from the ground up to deliver 24/7 continuous online radio and television broadcasting. Features low-latency audio/video streaming, background playback, dynamic program schedule grids, and real-time news management.",
      highlights: [
        "Architected and built full production broadcasting web platform",
        "Low-latency continuous audio/video live streaming architecture",
        "Cross-device media player with persistent background playback",
        "Dynamic programming schedule manager and news publishing pipeline",
      ],
      tech: ["React / Next.js", "Streaming Protocols (HLS)", "Node.js", "Tailwind CSS", "REST API"],
    },
    {
      id: "sicolines",
      title: "Sicolines Logistics & Corporate Portal",
      category: "Enterprise Maritime & Logistics Platform",
      type: "fullstack",
      liveUrl: "https://sicolines.com",
      githubUrl: "https://github.com/AbuJulaybeeb",
      description:
        "Co-built enterprise corporate portal and cargo tracking infrastructure for Sicolines shipping, logistics, and marine services.",
      longDescription:
        "Co-architected and engineered the official Sicolines platform. Delivered an enterprise-grade digital experience covering fleet capabilities, logistics consignment tracking, dynamic quote inquiries, and high-availability corporate communication channels.",
      highlights: [
        "Co-built corporate digital portal and consignment tracking",
        "Sleek enterprise UI with multi-tier service catalog",
        "Optimized asset delivery and global CDN routing",
        "Streamlined B2B freight inquiry and quote management pipelines",
      ],
      tech: ["Full-Stack", "TypeScript", "Tailwind CSS", "Node.js", "Cloud Infrastructure"],
    },
    {
      id: "veraos",
      title: "VeraOS (Vera Protocol)",
      category: "Autonomous AI Agent Verification Layer",
      type: "web3",
      organization: "Vera-Protocal",
      liveUrl: "https://vera-os-xi.vercel.app",
      githubUrl: "https://github.com/Vera-Protocal/VeraOS",
      description:
        "The verification layer for AI agents: independently checking agent work, cryptographic evidence, and execution outcomes before trust.",
      longDescription:
        "Co-developed and co-owned by AbuJulaybeeb, VeraOS provides a decentralized verification protocol for autonomous AI agents. Validates deterministic state transitions, tool call outputs, and cryptographic proofs to ensure AI reliability.",
      highlights: [
        "Co-Developer and Co-Owner of Vera Protocol",
        "Decentralized verification engine for autonomous AI agents",
        "Cryptographic evidence validation and outcome attestations",
        "Live deployment at vera-os-xi.vercel.app",
      ],
      tech: ["Next.js", "TypeScript", "AI Agent Protocols", "Cryptography", "Tailwind CSS", "Web3"],
    },
    {
      id: "stellar-marketpay",
      title: "Stellar-MarketPay",
      category: "Decentralized Merchant Payment Protocol",
      type: "web3",
      isPersonal: true,
      organization: "Stellar-MarkeyPay",
      liveUrl: "https://stellar-market-pay.vercel.app",
      githubUrl: "https://github.com/AbuJulaybeeb/Stellar-MarketPay-",
      description:
        "Decentralized payment and escrow settlement protocol built on Stellar & Soroban smart contracts for high-speed merchant checkouts.",
      longDescription:
        "Engineered to deliver frictionless Web3 commerce, Stellar-MarketPay connects e-commerce merchants with instant settlement on Stellar. Built-in escrow rules protect both buyers and sellers while maintaining sub-cent transaction costs.",
      highlights: [
        "Soroban smart contract escrow & non-custodial merchant settlement",
        "Sub-second transaction finality on Stellar network",
        "Embedded merchant checkout modal and webhook indexer",
        "Live deployment at stellar-market-pay.vercel.app",
      ],
      tech: ["Stellar", "Soroban (Rust)", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "zyradex",
      title: "ZyraDex (PI-DEFI)",
      category: "Decentralized Exchange (DEX) & AMM",
      type: "web3",
      organization: "Pi-Defi-world",
      liveUrl: "https://zyradex.com",
      githubUrl: "https://github.com/Pi-Defi-world/Zyradex-frontend",
      description:
        "Pi Network DeFi protocol and Automated Market Maker (AMM) complying with PiRC standards for decentralized financial exchanges.",
      longDescription:
        "As a core collaborator on PI-DEFI, contributed to the ZyraDex decentralized exchange protocol. Powers liquidity pools, automated token swaps, and non-custodial wallet connectivity adhering to Pi Network specifications.",
      highlights: [
        "Core collaborator on Pi-Defi-world ecosystem",
        "Automated Market Maker (AMM) and decentralized token swap interface",
        "PiRC compliant wallet integration and transaction signing",
        "Live production portal at zyradex.com",
      ],
      tech: ["React / Next.js", "Smart Contracts", "DeFi / AMM", "Web3", "Tailwind CSS"],
    },
    {
      id: "fixeroni",
      title: "Fixeroni Marketplace & Engine",
      category: "Artisan Marketplace Platform",
      type: "backend",
      isPersonal: true,
      organization: "Fixeroni",
      liveUrl: "https://fixeroni-page.netlify.app/",
      githubUrl: "https://github.com/Fixeroni/Fixeroni-Backend",
      description:
        "Artisan marketplace connecting clients with verified local technicians via geospatial queries, escrow payments, and real-time scheduling.",
      longDescription:
        "Powering the Fixeroni service marketplace, this platform features geolocation radius searches for local trade specialists, escrow payment holds guaranteeing fair worker compensation, and a resilient pub/sub event bus for real-time dispatch and notifications.",
      highlights: [
        "Lead Backend & Systems Architect",
        "Geospatial PostGIS radius queries for sub-second technician discovery",
        "Escrow wallet state machine guaranteeing fair worker compensation",
        "Live deployment on Netlify at fixeroni-page.netlify.app",
      ],
      tech: ["Node.js", "Express", "PostgreSQL", "Redis", "TypeScript", "Docker"],
    },
    {
      id: "mediflow",
      title: "MediFlow",
      category: "Healthcare Coordination & Pharmacy Network",
      type: "backend",
      isPersonal: true,
      liveUrl: "https://github.com/Sardaunatechworks/MediFlow",
      githubUrl: "https://github.com/Sardaunatechworks/MediFlow",
      description:
        "Intelligent healthcare coordination platform connecting clinical triage, urgency-based patient queuing, and a distributed pharmacy prescription locator.",
      longDescription:
        "Engineered MediFlow to solve hospital emergency bottleneck delays and fragmented medicine access. The system provides real-time clinical triage urgency ranking, live hospital consultation queues, and a distributed pharmacy network enabling patients to instantly discover and reserve prescribed medicines at verified local dispensaries.",
      highlights: [
        "Lead Architect & Systems Engineer (Personal Project)",
        "Clinical triage urgency classification engine & live queue state machines",
        "Distributed verified pharmacy inventory indexing and reservation protocol",
        "REST API with JWT role-based security, audit trails, and PostgreSQL storage",
      ],
      tech: ["TypeScript", "Node.js", "Express", "PostgreSQL", "React", "Docker"],
    },
    {
      id: "xpend",
      title: "Xpend",
      category: "Conversational Fintech & Banking Engine",
      type: "backend",
      isPersonal: true,
      liveUrl: "https://github.com/AbuJulaybeeb",
      githubUrl: "https://github.com/AbuJulaybeeb",
      description:
        "Conversational fintech banking engine integrated with WhatsApp Cloud API for mobile-first money transfers, automated airtime top-ups, and ledger reconciliation.",
      longDescription:
        "Engineered conversational microservices enabling instant banking workflows on WhatsApp for mobile-first users. Features dual-entry accounting ledgers stored in PostgreSQL with strict ACID properties, Redis concurrency guards preventing double-spend, and PCI-DSS compliant payload encryption.",
      highlights: [
        "Personal Fintech Project / Core Engineer",
        "WhatsApp Cloud API banking workflow engine with conversational AI states",
        "Dual-entry ledger system in PostgreSQL guaranteeing strict financial auditability",
        "Sub-second webhook processing with Redis concurrency guards",
      ],
      tech: ["Node.js", "Express", "Redis", "PostgreSQL", "WhatsApp API", "TypeScript"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "personal", label: "Personal Projects" },
    { id: "fullstack", label: "Production Platforms" },
    { id: "web3", label: "Web3 & Protocols" },
    { id: "backend", label: "Backend & Systems" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : selectedCategory === "personal"
      ? projects.filter((p) => p.isPersonal)
      : projects.filter((p) => p.type === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Verified Production Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="text-gradient-cyan">Projects</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Production web applications, decentralized protocols, and enterprise platforms built and maintained with live deployments.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/[0.03] border border-white/5 rounded-2xl p-1.5 backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  setSelectedCategory(
                    cat.id as "all" | "personal" | "web3" | "backend" | "fullstack"
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
            {filteredProjects.map((project, idx) => (
              <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between"
                >
                  {/* High-Performance Lazy Live Web Browser Mockup */}
                  <ProjectPreviewFrame
                    url={project.liveUrl}
                    title={project.title}
                    accentColor="cyan"
                    onOpenModal={() => setActiveModalProject(project)}
                  />

                  {/* Body Content */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-medium">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {project.isPersonal && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                              Personal
                            </span>
                          )}
                          {project.organization && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                              {project.organization}
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges & Actions */}
                    <div className="space-y-4 pt-3 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-400 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-500 border border-white/5">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-1 font-mono text-xs">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1 font-medium"
                        >
                          <span>Inspect Live</span>
                          <Maximize2 className="w-3 h-3" />
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                            title="GitHub Repository"
                            aria-label={`View ${project.title} GitHub repository`}
                          >
                            <GitHubIcon className="w-3.5 h-3.5" />
                          </a>

                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-colors"
                            title="Open Live Deployment"
                            aria-label={`Open ${project.title} live deployment`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
            ))}
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
