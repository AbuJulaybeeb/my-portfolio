"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      period: "2024 — Present",
      role: "Backend Lead & Systems Architect",
      organization: "Fixeroni Platform",
      badge: "Marketplace & APIs",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      description:
        "Leading the core backend architecture powering Fixeroni artisan marketplace. Designed resilient microservice APIs, PostGIS geolocation discovery, and escrow transaction state machines in Node.js and PostgreSQL.",
      points: [
        "Implemented Redis rate limiting and concurrency locks handling artisan job dispatches",
        "Constructed PostgreSQL relational schemas with strict ACID transactional guarantees",
        "Integrated multi-channel webhook notifications and automated financial reconciliations",
      ],
    },
    {
      period: "2024 — Present",
      role: "Core Web3 & Smart Contract Engineer",
      organization: "StormSale Protocol",
      badge: "Affiliate Protocol",
      badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      description:
        "Architecting decentralized affiliate marketing smart contracts and automated commission payouts with zero counterparty custody risk.",
      points: [
        "Implemented smart contract escrow splits for automated on-chain referral payouts",
        "Engineered cryptographic signature verification preventing referral link tampering",
        "Deployed live production dashboard at stormsale-one.vercel.app with multi-wallet connectors",
      ],
    },
    {
      period: "2024",
      role: "Soroban Smart Contract & Payments Engineer",
      organization: "Stellar Ecosystem (IndigoPay & Accensa)",
      badge: "Stellar / Soroban",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      description:
        "Developed Soroban smart contracts in Rust and merchant infrastructure on Stellar network, including Stellar-IndigoPay climate donations and Accensa x402 payment back-office.",
      points: [
        "Authored Rust Soroban contracts for non-custodial donation routing and dynamic badge minting",
        "Constructed on-chain transaction indexer and modular @accensa/sdk TypeScript client library",
        "Shipped live deployments at stellar-indigo-pay.vercel.app and accensa-dashboard.vercel.app",
      ],
    },
    {
      period: "2024",
      role: "Oracle & Blockchain Contributor",
      organization: "Pi-Defi-world (Zyra Teams)",
      badge: "DeFi & Oracles",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      description:
        "Engineered Zyrachain oracle server in Node.js and contributed to decentralized wallet protocol components for the Pi-Defi ecosystem.",
      points: [
        "Built cryptographic price feed feeds and data relay handlers connecting off-chain telemetry",
        "Developed unit testing pipelines and RPC listener microservices",
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
            <span>Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-gradient-purple">Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A track record of shipping backend code, competing in hackathons, and solving hard technical challenges.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
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
                    <p className="text-xs sm:text-sm font-mono text-slate-300">
                      {exp.organization}
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
