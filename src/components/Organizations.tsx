"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, ExternalLink, ShieldCheck } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";

export interface Organization {
  name: string;
  login: string;
  role: string;
  description: string;
  githubUrl: string;
  avatarUrl: string;
  websiteUrl?: string;
  tags: string[];
}

export default function Organizations() {
  const organizations: Organization[] = [
    {
      name: "Fixeroni",
      login: "Fixeroni",
      role: "Backend Engineer & Platform Lead",
      description:
        "On-demand artisan and service marketplace platform connecting clients with trusted local technicians via smart geolocation and escrow payments.",
      githubUrl: "https://github.com/Fixeroni",
      avatarUrl: "https://avatars.githubusercontent.com/u/196773281?v=4",
      websiteUrl: "https://fixeroni-page.netlify.app/",
      tags: ["Node.js", "PostgreSQL", "Redis", "Marketplace"],
    },
    {
      name: "StormSale",
      login: "StormSale",
      role: "Core Web3 & Smart Contract Developer",
      description:
        "Decentralized Web3 affiliate marketing protocol featuring automated smart contract escrow, crypto commission payouts, and on-chain analytics.",
      githubUrl: "https://github.com/StormSale",
      avatarUrl: "https://avatars.githubusercontent.com/u/305386482?v=4",
      websiteUrl: "https://stormsale-one.vercel.app",
      tags: ["Solidity", "Next.js", "Web3", "Affiliate DApp"],
    },
    {
      name: "Pi-Defi-world",
      login: "Pi-Defi-world",
      role: "Blockchain & Infrastructure Contributor",
      description:
        "Decentralized finance ecosystem and oracle infrastructure built by Zyra teams, powering Zyrachain oracle services and non-custodial crypto wallet protocols.",
      githubUrl: "https://github.com/Pi-Defi-world",
      avatarUrl: "https://avatars.githubusercontent.com/u/236618606?v=4",
      tags: ["DeFi", "Zyrachain", "Oracle", "Smart Contracts"],
    },
    {
      name: "Stellar-Search",
      login: "Stellar-Search",
      role: "Soroban Smart Contract Developer",
      description:
        "Stellar ecosystem developer group building decentralized applications, climate donation platforms (GreenPay), and high-speed blockchain search explorers.",
      githubUrl: "https://github.com/Stellar-Search",
      avatarUrl: "https://avatars.githubusercontent.com/u/287296603?v=4",
      tags: ["Stellar", "Soroban", "Rust", "GreenPay"],
    },
    {
      name: "Stellar-MarkeyPay",
      login: "Stellar-MarkeyPay",
      role: "Payment Systems Engineer",
      description:
        "Building decentralized merchant payment checkout workflows, on-chain invoice settlement, and micropayment channels on Stellar network.",
      githubUrl: "https://github.com/Stellar-MarkeyPay",
      avatarUrl: "https://avatars.githubusercontent.com/u/292564934?v=4",
      tags: ["Stellar", "Payments", "Soroban", "Fintech"],
    },
    {
      name: "NorthDemy Limited",
      login: "NorthDemy-Limited",
      role: "Software Engineering Instructor & Hub Dev",
      description:
        "Mission-driven digital skills academy, software development provider, and startup incubation hub based in Nigeria accelerating next-gen tech talent.",
      githubUrl: "https://github.com/NorthDemy-Limited",
      avatarUrl: "https://avatars.githubusercontent.com/u/304049549?v=4",
      tags: ["Incubation", "Digital Skills", "Mentorship", "Software"],
    },
    {
      name: "Vera Protocol",
      login: "Vera-Protocal",
      role: "Decentralized AI Verification Contributor",
      description:
        "The verification layer for AI agents (VeraOS): independently validating agent actions, cryptographic evidence, and deterministic outcomes on-chain.",
      githubUrl: "https://github.com/Vera-Protocal",
      avatarUrl: "https://avatars.githubusercontent.com/u/334193237?v=4",
      tags: ["AI Agents", "VeraOS", "Cryptography", "Verification"],
    },
  ];

  return (
    <section id="organizations" className="py-20 relative overflow-hidden bg-[#06080e]/80 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Active Affiliations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Organizations & <span className="text-gradient-cyan">Teams</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Leading backend architecture, engineering smart contracts, and building across production organizations on GitHub.
          </p>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizations.map((org, idx) => (
            <motion.div
              key={org.login}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between transition-all"
            >
              <div className="space-y-4">
                {/* Header: Avatar, Name & GitHub Link */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-800 border border-white/10 group-hover:scale-105 transition-transform shrink-0">
                      <Image
                        src={org.avatarUrl}
                        alt={`${org.name} avatar`}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {org.name}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400">
                        {org.role}
                      </p>
                    </div>
                  </div>

                  <a
                    href={org.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/30 transition-colors shrink-0"
                    title={`View ${org.name} on GitHub`}
                    aria-label={`View ${org.name} on GitHub`}
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {org.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {org.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Organization
                </span>

                {org.websiteUrl ? (
                  <a
                    href={org.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Live Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <a
                    href={org.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    <span>GitHub Org</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
