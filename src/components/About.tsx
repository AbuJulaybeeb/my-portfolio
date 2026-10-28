"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  GraduationCap,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "backend" | "web3" | "frontend"
  >("all");

  const skillCategories = [
    { id: "all", label: "All Skills" },
    { id: "backend", label: "Backend & Systems" },
    { id: "web3", label: "Web3 & Blockchain" },
    { id: "frontend", label: "Frontend & UI" },
  ];

  const skills = [
    // Backend
    {
      name: "Node.js & Express",
      level: 95,
      category: "backend",
      desc: "High-throughput REST APIs & Microservices",
    },
    {
      name: "PostgreSQL & SQL",
      level: 92,
      category: "backend",
      desc: "Relational schema design, indexes & queries",
    },
    {
      name: "Redis & Caching",
      level: 88,
      category: "backend",
      desc: "In-memory caching, rate limiting & session stores",
    },
    {
      name: "System Architecture",
      level: 90,
      category: "backend",
      desc: "Scalable backend pipelines & clean abstractions",
    },

    // Web3
    {
      name: "Solidity Smart Contracts",
      level: 88,
      category: "web3",
      desc: "ERC-20, NFT, Staking & Custom Governance",
    },
    {
      name: "Avalanche (AVAX) Ecosystem",
      level: 85,
      category: "web3",
      desc: "Subnets, EVM deployment & DeFi tooling",
    },
    {
      name: "BlockDAG Networks",
      level: 86,
      category: "web3",
      desc: "High-speed DAG hackathon builds & consensus DApps",
    },
    {
      name: "Stacks & Clarity (Bitcoin L2)",
      level: 82,
      category: "web3",
      desc: "Clarity smart contracts anchored to Bitcoin",
    },

    // Frontend
    {
      name: "Next.js 15 & React 19",
      level: 85,
      category: "frontend",
      desc: "App router, Server components & SSR/SSG",
    },
    {
      name: "TypeScript",
      level: 88,
      category: "frontend",
      desc: "Strict type safety across full-stack applications",
    },
    {
      name: "Tailwind CSS & Framer",
      level: 90,
      category: "frontend",
      desc: "Modern responsive interfaces & fluid micro-interactions",
    },
    {
      name: "Web3.js / Ethers / Viem",
      level: 85,
      category: "frontend",
      desc: "Wallet connectors, contract read/writes & event listeners",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging resilient backend infrastructures with the boundless possibilities of the decentralized web.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Detailed Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-mono">
                  Jibril Raji Qasim
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Full-Stack Web3 & Backend Engineer
                </p>
              </div>
            </div>

            <div className="text-slate-300 text-sm leading-relaxed space-y-4">
              <p>
                Hi, I’m Jibril. I am a full-stack developer with a passion for clean code, 
                user-centric design, and deterministic decentralized systems.
              </p>
              <p>
                Currently building high-throughput backend services at{" "}
                <strong className="text-cyan-300">Fixeroni</strong>, engineering Web3 affiliate protocols at{" "}
                <strong className="text-cyan-300">StormSale</strong>, and developing smart contracts across{" "}
                <span className="text-violet-400 font-medium">Stellar (Soroban), Avalanche, and BlockDAG</span>.
              </p>
              <p>
                With over <strong className="text-white">230+ repositories on GitHub</strong> and active membership 
                in 7 developer organizations, I thrive on writing production-ready code from database layers to on-chain logic.
              </p>
            </div>

            {/* Quick Fact Pills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                  <GraduationCap className="w-4 h-4" />
                  <span>230+ Repos</span>
                </div>
                <div className="text-[11px] text-slate-400">Open source & production projects</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-violet-400 text-xs font-mono">
                  <Award className="w-4 h-4" />
                  <span>7 Active Orgs</span>
                </div>
                <div className="text-[11px] text-slate-400">Fixeroni, StormSale, Zyra, Stellar</div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-mono text-xs font-semibold text-white bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all"
              >
                <span>Discuss A Project</span>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </motion.div>

          {/* Right: Interactive Skills Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() =>
                    setActiveCategory(
                      cat.id as "all" | "backend" | "web3" | "frontend"
                    )
                  }
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                    activeCategory === cat.id
                      ? "bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/20"
                      : "bg-white/[0.03] text-slate-400 border border-white/5 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="glass-card rounded-xl p-4 border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-cyan-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        skill.category === "backend"
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                          : skill.category === "web3"
                          ? "bg-gradient-to-r from-violet-500 to-fuchsia-500"
                          : "bg-gradient-to-r from-emerald-400 to-cyan-400"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Badges Cloud */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Full Tech Ecosystem:
              </span>
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                {[
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                  "Redis",
                  "Solidity",
                  "Avalanche (AVAX)",
                  "BlockDAG",
                  "Stacks",
                  "Clarity",
                  "React",
                  "Next.js 15",
                  "TypeScript",
                  "Tailwind CSS",
                  "Ethers.js",
                  "Viem",
                  "Docker",
                  "Git",
                  "Linux",
                  "RESTful APIs",
                  "Microservices",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
