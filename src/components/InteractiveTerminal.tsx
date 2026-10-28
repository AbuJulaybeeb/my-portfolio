"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "whoami",
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-cyan-400 font-bold">
            Jibril Raji Qasim — Web3 & Backend Engineer
          </p>
          <p className="text-slate-400 text-xs">
            Location: Remote / Global | Focus: Node.js, PostgreSQL, Solidity, Avalanche, BlockDAG
          </p>
        </div>
      ),
    },
    {
      command: "system-status",
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Core Runtime: Node.js v22 (LTS) & PostgreSQL Engine [READY]
          </p>
          <p className="text-violet-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            EVM & BlockDAG RPC Providers [ACTIVE]
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleRunCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-semibold">Available commands:</p>
            <p><span className="text-yellow-400 font-mono">bio</span> — Summary of engineering journey</p>
            <p><span className="text-yellow-400 font-mono">orgs</span> — Active organizations & affiliations</p>
            <p><span className="text-yellow-400 font-mono">projects</span> — Flagship production deployments</p>
            <p><span className="text-yellow-400 font-mono">skills</span> — Technical proficiency breakdown</p>
            <p><span className="text-yellow-400 font-mono">chains</span> — Active Web3 ecosystems</p>
            <p><span className="text-yellow-400 font-mono">contact</span> — Get verified contact coordinates</p>
            <p><span className="text-yellow-400 font-mono">clear</span> — Clear terminal output</p>
          </div>
        );
        break;

      case "bio":
        output = (
          <div className="text-xs text-slate-300 space-y-1">
            <p>
              Full-stack developer with <strong className="text-white">3+ years of software development experience</strong> and <strong className="text-white">2+ years specializing in Web3 protocols & smart contracts</strong>.
            </p>
            <p className="text-slate-400">
              Currently engineering with Northdemy (revamped platform on Hostinger), collaborator on PI-DEFI (ZyraDex), co-developer & co-owner of Vera Protocol / VeraOS, and founder/CEO of StormSale.
            </p>
          </div>
        );
        break;

      case "orgs":
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-semibold">Active Organizations & Collaborations:</p>
            <p>1. <strong className="text-emerald-400">NorthDemy Limited</strong> — Current Org (northdemy.com - revamped on Hostinger)</p>
            <p>2. <strong className="text-cyan-300">Vera Protocol</strong> — Co-Dev & Co-Owner (vera-os-xi.vercel.app - AI Agent Verification)</p>
            <p>3. <strong className="text-violet-400">PI-DEFI World</strong> — Core Collaborator (zyradex.com - Pi Network DEX & AMM)</p>
            <p>4. <strong className="text-amber-400">StormSale</strong> — Founder & CEO (stormsale-one.vercel.app - Web3 Affiliate Protocol)</p>
            <p>5. <strong className="text-blue-400">Stellar-MarketPay</strong> — Core Protocol Dev (stellar-market-pay.vercel.app)</p>
            <p>6. <strong className="text-teal-400">Fixeroni</strong> — Lead Backend & Systems Architect (fixeroni-page.netlify.app)</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p><span className="text-cyan-400">Backend:</span> Node.js, Express, PostgreSQL, Redis, REST APIs, System Architecture</p>
            <p><span className="text-violet-400">Web3:</span> Stellar (Soroban/Rust), Solidity, Pi Network DeFi, Smart Contracts</p>
            <p><span className="text-emerald-400">Frontend:</span> Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion</p>
            <p><span className="text-amber-400">Platforms & Tools:</span> Hostinger, Vercel, Docker, Git, Linux, Postman</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-semibold">Featured Production Deployments:</p>
            <p>1. <strong className="text-white">Northdemy</strong> — northdemy.com (Hostinger Educational Portal Revamp)</p>
            <p>2. <strong className="text-white">StormSale</strong> — stormsale-one.vercel.app (Web3 Affiliate Protocol & DApp)</p>
            <p>3. <strong className="text-white">360RadioTV</strong> — 360radiotv.com (24/7 Live Broadcast Streaming)</p>
            <p>4. <strong className="text-white">Sicolines</strong> — sicolines.com (Enterprise Maritime Logistics)</p>
            <p>5. <strong className="text-white">VeraOS</strong> — vera-os-xi.vercel.app (AI Agent Verification Protocol)</p>
            <p>6. <strong className="text-white">Stellar-MarketPay</strong> — stellar-market-pay.vercel.app (Merchant Escrow Payments)</p>
            <p>7. <strong className="text-white">ZyraDex</strong> — zyradex.com (Pi Network AMM & DEX)</p>
            <p>8. <strong className="text-white">Fixeroni</strong> — fixeroni-page.netlify.app (Artisan Marketplace Platform)</p>
          </div>
        );
        break;

      case "chains":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-purple-400 font-semibold">• Stellar (Soroban) — Rust Smart Contracts, StormSale & MarketPay</p>
            <p className="text-violet-400 font-semibold">• Pi Network — ZyraDex AMM & Zyrachain Infrastructure</p>
            <p className="text-blue-400 font-semibold">• Ethereum & EVM — Solidity Smart Contracts & Escrow</p>
            <p className="text-cyan-400 font-semibold">• Autonomous AI Protocols — VeraOS Verification Layer</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>Primary Email: <a href="mailto:abujulaybeeb08@gmail.com" className="text-cyan-400 underline font-semibold">abujulaybeeb08@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/AbuJulaybeeb" target="_blank" className="text-cyan-400 underline">github.com/AbuJulaybeeb (230+ repos)</a></p>
            <p>Twitter / X: <a href="https://x.com/AJDEV01" target="_blank" className="text-cyan-400 underline">@AJDEV01</a></p>
            <p>Telegram: <a href="https://t.me/AJDEV_Official" target="_blank" className="text-cyan-400 underline">@AJDEV_Official</a></p>
            <p className="text-emerald-400 mt-1">Status: Open for Full-Time, Contract & High-Impact Web3 Engineering</p>
          </div>
        );
        break;

      case "whoami":
        output = (
          <p className="text-xs text-cyan-300">
            Jibril Raji Qasim | Senior Full-Stack & Web3 Developer (3+ Yrs Dev • 2+ Yrs Web3) | Northdemy • VeraOS • PI-DEFI • StormSale | abujulaybeeb08@gmail.com
          </p>
        );
        break;

      default:
        output = (
          <p className="text-xs text-red-400 font-mono">
            zsh: command not found: {cmd}. Type <span className="text-yellow-400 underline cursor-pointer" onClick={() => handleRunCommand("help")}>help</span> to view supported commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInputVal("");
  };

  const quickPills = ["help", "bio", "orgs", "projects", "skills", "chains", "contact", "clear"];

  return (
    <section id="terminal" className="py-20 relative overflow-hidden bg-[#050608]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive Terminal</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer <span className="text-gradient-cyan">Console</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Execute commands or click interactive shortcuts to inspect system credentials.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl glass-panel border border-white/10 shadow-2xl overflow-hidden font-mono text-sm">
          
          {/* Terminal Titlebar */}
          <div className="px-4 py-3 bg-[#0d121c] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-400 text-xs ml-2 hidden sm:inline">
                jibril@dev-workstation:~ (zsh)
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                v2.5.0
              </span>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div className="p-5 sm:p-6 space-y-4 min-h-[260px] max-h-[380px] overflow-y-auto bg-[#07090f]/95">
            <div className="text-xs text-slate-400 pb-2 border-b border-white/5 space-y-0.5">
              <p>Welcome to Jibril Raji Qasim&apos;s Web3 & Backend CLI.</p>
              <p>Type <span className="text-yellow-400">&apos;help&apos;</span> or tap any shortcut below to query portfolio data.</p>
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-cyan-400 font-bold">jibril@web3-core:~$</span>
                  <span className="text-white font-medium">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-white/10 py-0.5">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Quick Shortcuts Bar */}
          <div className="px-5 py-2.5 bg-[#0a0d15] border-t border-white/5 flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-slate-400 font-mono mr-1">Quick:</span>
            {quickPills.map((pill) => (
              <button
                key={pill}
                onClick={() => handleRunCommand(pill)}
                className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-300 border border-white/5 transition-all"
              >
                ${pill}
              </button>
            ))}
          </div>

          {/* Input Prompt */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRunCommand(inputVal);
            }}
            className="px-4 py-3 bg-[#0d121c] border-t border-white/10 flex items-center gap-3"
          >
            <span className="text-cyan-400 font-bold text-xs sm:text-sm">
              jibril@web3-core:~$
            </span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'skills', 'projects'..."
              className="flex-1 bg-transparent text-white text-xs sm:text-sm font-mono focus:outline-none placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
              aria-label="Execute command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
