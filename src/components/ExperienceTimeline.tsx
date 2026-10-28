"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      period: "2024 — Present",
      role: "Web3 & Smart Contract Developer",
      organization: "BlockDAG & Avalanche Ecosystems",
      badge: "Hackathon & DApps",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      description:
        "Architecting decentralized applications and verifiable smart contracts. Competed in BlockDAG hackathons designing DAG consensus supply chain tracking, and engineered DeFi analytics interfaces on Avalanche.",
      points: [
        "Implemented high-throughput smart contract calls with multi-call batching",
        "Designed Merkle proof verification workflows for immutable cargo verification",
        "Wrote automated contract test suites ensuring zero reentrancy risks",
      ],
    },
    {
      period: "2024",
      role: "Smart Contract Architect (Clarity)",
      organization: "Stacks Ecosystem Contest",
      badge: "Bitcoin L2 Contest",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      description:
        "Engineered the $LEO Token contract primitives and community distribution mechanics using Clarity, anchoring security and execution finality into Bitcoin blocks.",
      points: [
        "Leveraged Clarity's decidable language to eliminate unexpected gas out-of-bounds",
        "Built automated token vesting and community staking logic",
        "Validated state transitions with Clarinet CLI and unit test frameworks",
      ],
    },
    {
      period: "2023 — Present",
      role: "Backend & Systems Engineer",
      organization: "StormSale & Fixeroni Projects",
      badge: "High-Throughput APIs",
      badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      description:
        "Engineered backend API microservices, Redis caching clusters, and relational database layers powering production marketplace and affiliate systems.",
      points: [
        "Implemented Redis rate limiting and session stores handling heavy concurrent traffic",
        "Constructed PostgreSQL relational schemas with strict indexes and transactional locks",
        "Integrated third-party payment webhooks, automated notifications, and escrow holds",
      ],
    },
    {
      period: "Ongoing",
      role: "Student Software Engineer",
      organization: "Computer Science & Engineering",
      badge: "Academic Foundations",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      description:
        "Deepening computer science foundations across data structures, distributed systems, relational database theory, and cryptographic consensus algorithms.",
      points: [
        "Specializing in modern asynchronous runtime architectures and distributed state",
        "Actively contributing to open-source developer communities and Web3 research",
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
