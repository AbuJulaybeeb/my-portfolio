"use client";

import { motion } from "framer-motion";
import { Server, Blocks, Globe, Check, ArrowUpRight, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Server,
      title: "Backend Architecture & APIs",
      tagline: "Scalable • High-Throughput • Resilient",
      description:
        "Designing and maintaining mission-critical server architectures using Node.js, Express, and PostgreSQL. Leveraging Redis for caching, pub/sub message queues, and rate-limiting to deliver sub-50ms API response times.",
      highlights: [
        "RESTful & GraphQL API design with clean MVC architecture",
        "PostgreSQL schema optimization, indexing & ACID compliance",
        "Redis caching layers, session stores & background workers",
        "Role-based access control (RBAC), JWT authentication & security",
      ],
      tech: ["Node.js", "Express", "PostgreSQL", "Redis", "TypeScript", "Docker"],
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      accentColor: "text-cyan-400",
      borderColor: "group-hover:border-cyan-500/50",
    },
    {
      icon: Blocks,
      title: "Web3 DApps & Smart Contracts",
      tagline: "Decentralized • Immutable • EVM & DAG",
      description:
        "Developing deterministic smart contracts and decentralized logic across EVM networks (Avalanche) and high-speed BlockDAG ecosystems. Delivering transparent tokenomics, affiliate tracking, and DeFi protocols.",
      highlights: [
        "Secure Solidity smart contracts (ERC-20, NFT, Staking)",
        "Avalanche subnet integration & BlockDAG hackathon logic",
        "Stacks Bitcoin L2 smart contract engineering with Clarity",
        "Frontend Web3 integrations with Ethers.js, Viem & Wagmi",
      ],
      tech: ["Solidity", "Avalanche", "BlockDAG", "Stacks (Clarity)", "Ethers.js", "Hardhat"],
      gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
      accentColor: "text-violet-400",
      borderColor: "group-hover:border-violet-500/50",
    },
    {
      icon: Globe,
      title: "Full-Stack Web Engineering",
      tagline: "Modern • Responsive • Performance-First",
      description:
        "Building end-to-end applications that bridge sleek, fluid frontend interfaces with rock-solid server databases. Creating seamless user journeys from mobile to desktop with modern Next.js and Tailwind CSS.",
      highlights: [
        "Next.js 15 App Router with Server Components & SSR",
        "Responsive, accessible design systems with Tailwind CSS v4",
        "Real-time state synchronization, WebSockets & notifications",
        "Fintech integrations, payment gateways & webhook handlers",
      ],
      tech: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion", "PostgreSQL", "REST"],
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      accentColor: "text-emerald-400",
      borderColor: "group-hover:border-emerald-500/50",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Specialized <span className="text-gradient-purple">Services</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering high-caliber engineering from database queries and server clusters to on-chain smart contracts.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`group glass-card rounded-2xl p-7 border border-white/10 ${service.borderColor} flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-2xl`}
              >
                {/* Background Ambient Gradient on hover */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="space-y-6 relative z-10">
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${service.accentColor}`} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                      0{idx + 1} {"//"} CAPABILITY
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className={`font-mono text-xs ${service.accentColor}`}>
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {service.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${service.accentColor}`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills & Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-white/10 relative z-10 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-cyan-400 transition-colors pt-1"
                  >
                    <span>Request Engineering Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
