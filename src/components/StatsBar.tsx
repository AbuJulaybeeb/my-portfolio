"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Zap, GitBranch } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      icon: Terminal,
      value: "2+ Years",
      label: "Industry & Web3 Experience",
      detail: "Scalable APIs & DApps",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
    },
    {
      icon: GitBranch,
      value: "10+",
      label: "Shipped Projects & Contracts",
      detail: "Full-Stack & Backend",
      color: "text-violet-400",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/20",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Clean Code & Test Coverage",
      detail: "Deterministic Contracts",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      icon: Zap,
      value: "3+",
      label: "Decentralized Ecosystems",
      detail: "Avalanche, BlockDAG, Stacks",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
    },
  ];

  return (
    <section className="relative z-10 -mt-6 sm:-mt-10 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl ${stat.bgColor} border ${stat.borderColor} flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-200">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400 mt-1">
                    {stat.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
