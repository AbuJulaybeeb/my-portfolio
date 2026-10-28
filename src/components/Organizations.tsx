"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, ExternalLink, ShieldCheck } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";

export interface Organization {
  name: string;
  login: string;
  role: string;
  badge: string;
  badgeStyle: string;
  description: string;
  githubUrl: string;
  avatarUrl: string;
  websiteUrl?: string;
  tags: string[];
}

export default function Organizations() {
  const organizations: Organization[] = [
    {
      name: "NorthDemy Limited",
      login: "NorthDemy-Limited",
      role: "Lead Platform & Systems Architect",
      badge: "CURRENT ORG",
      badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      description:
        "The organization I currently work with. Revamped the complete educational platform and systems on Hostinger (northdemy.com), optimizing site architecture, throughput, and cohort management.",
      githubUrl: "https://github.com/NorthDemy-Limited",
      avatarUrl: "https://avatars.githubusercontent.com/u/304049549?v=4",
      websiteUrl: "https://northdemy.com",
      tags: ["Hostinger", "Architecture", "Full-Stack", "EdTech"],
    },
    {
      name: "Vera Protocol (VeraOS)",
      login: "Vera-Protocal",
      role: "Co-Developer & Co-Owner",
      badge: "CO-OWNER & CO-DEV",
      badgeStyle: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      description:
        "Co-owner and co-developer of Vera Protocol. Building VeraOS (vera-os-xi.vercel.app) as the verification layer for autonomous AI agents, independently validating evidence, proofs, and outcomes.",
      githubUrl: "https://github.com/Vera-Protocal",
      avatarUrl: "https://avatars.githubusercontent.com/u/334193237?v=4",
      websiteUrl: "https://vera-os-xi.vercel.app",
      tags: ["AI Agents", "VeraOS", "Cryptography", "Verification"],
    },
    {
      name: "PI-DEFI World",
      login: "Pi-Defi-world",
      role: "Core Collaborator & Smart Contract Dev",
      badge: "COLLABORATOR",
      badgeStyle: "bg-violet-500/10 text-violet-400 border-violet-500/30",
      description:
        "Core collaborator on PI-DEFI. Engineering decentralized financial protocols for the Pi Network, including the ZyraDex AMM platform (zyradex.com), oracle relays, and Zyrachain node infrastructure.",
      githubUrl: "https://github.com/Pi-Defi-world",
      avatarUrl: "https://avatars.githubusercontent.com/u/236618606?v=4",
      websiteUrl: "https://zyradex.com",
      tags: ["DeFi", "ZyraDex", "Pi Network", "Smart Contracts"],
    },
    {
      name: "Stellar-MarketPay",
      login: "Stellar-MarkeyPay",
      role: "Lead Payment Protocol Engineer",
      badge: "CORE PROTOCOL",
      badgeStyle: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      description:
        "Architecting decentralized merchant checkout workflows, on-chain invoice escrow settlement, and micropayment channels on Stellar/Soroban (stellar-market-pay.vercel.app).",
      githubUrl: "https://github.com/AbuJulaybeeb/Stellar-MarketPay-",
      avatarUrl: "https://avatars.githubusercontent.com/u/292564934?v=4",
      websiteUrl: "https://stellar-market-pay.vercel.app",
      tags: ["Stellar", "Soroban (Rust)", "Merchant Payments", "Escrow"],
    },
    {
      name: "StormSale",
      login: "StormSale",
      role: "CEO, Lead Full-Stack & Smart Contract Dev",
      badge: "FOUNDER & CEO",
      badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      description:
        "Decentralized Web3 affiliate marketing protocol on Stellar Soroban (stormsale-one.vercel.app). Features automated smart contract escrow, instant crypto commission payouts, and on-chain analytics.",
      githubUrl: "https://github.com/StormSale",
      avatarUrl: "https://avatars.githubusercontent.com/u/305386482?v=4",
      websiteUrl: "https://stormsale-one.vercel.app",
      tags: ["Soroban", "Next.js", "Web3 Affiliate", "Smart Contracts"],
    },
    {
      name: "Fixeroni",
      login: "Fixeroni",
      role: "Backend Lead & Systems Architect",
      badge: "PLATFORM LEAD",
      badgeStyle: "bg-teal-500/10 text-teal-400 border-teal-500/30",
      description:
        "On-demand artisan and service marketplace platform (fixeroni-page.netlify.app) connecting clients with trusted local technicians via smart geolocation radius queries and escrow payments.",
      githubUrl: "https://github.com/Fixeroni",
      avatarUrl: "https://avatars.githubusercontent.com/u/196773281?v=4",
      websiteUrl: "https://fixeroni-page.netlify.app/",
      tags: ["Node.js", "PostgreSQL", "Redis", "Geospatial"],
    },
    {
      name: "Stellar-Search",
      login: "Stellar-Search",
      role: "Soroban Smart Contract Developer",
      badge: "ECOSYSTEM DEV",
      badgeStyle: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      description:
        "Stellar ecosystem developer group building decentralized applications, climate donation platforms (IndigoPay), and on-chain explorers.",
      githubUrl: "https://github.com/Stellar-Search",
      avatarUrl: "https://avatars.githubusercontent.com/u/287296603?v=4",
      tags: ["Stellar", "Soroban", "Rust", "Donations"],
    },
  ];

  return (
    <section id="organizations" className="py-20 relative overflow-hidden bg-[#06080e]/80 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Active Affiliations & Collaborations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Organizations & <span className="text-gradient-cyan">Teams</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Currently working with <strong className="text-white">Northdemy</strong>, collaborating with <strong className="text-white">PI-DEFI</strong>, co-owning <strong className="text-white">Vera Protocol</strong>, and founding <strong className="text-white">StormSale</strong>.
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
                {/* Header: Avatar, Name & Role Badge */}
                <div className="flex items-start justify-between gap-3">
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
                      <span className={`inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${org.badgeStyle}`}>
                        {org.badge}
                      </span>
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

                <p className="text-xs font-mono text-cyan-400 font-medium">
                  {org.role}
                </p>

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
                  <span>Verified Entity</span>
                </span>

                {org.websiteUrl ? (
                  <a
                    href={org.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group/link"
                  >
                    <span>Visit Live Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                ) : (
                  <a
                    href={org.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    <span>Organization Repos</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
