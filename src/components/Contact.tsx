"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle,
  Copy,
  Check,
  Clock,
  Sparkles,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, TwitterXIcon } from "./SocialIcons";
import { submitContactForm, ContactState } from "@/app/actions/contact";

const initialState: ContactState = {
  success: false,
  message: "",
};

export default function Contact() {
  const [state, setState] = useState<ContactState>(initialState);
  const [isPending, setIsPending] = useState(false);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await submitContactForm(null, formData);
      setState(res);
      if (res.success) {
        formRef.current?.reset();
      }
    } catch {
      setState({
        success: false,
        message: "An unexpected network error occurred. Please try again.",
      });
    } finally {
      setIsPending(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@jibrilraji.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050609]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Communication</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something <span className="text-gradient-cyan">Remarkable</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project in mind, need backend architecture consultation, or looking for an experienced Web3 engineer? Send a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Coordinates Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white font-mono">
                Direct Contact Coordinates
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fastest response via email or GitHub.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase">Primary Email</div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-sm sm:text-base text-cyan-300 font-medium truncate">
                  contact@jibrilraji.dev
                </span>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  type="button"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Meta details */}
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Timezone / Availability</span>
                  <span>UTC+1 (West Africa Standard Time) • Remote Ready</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Current Status</span>
                  <span className="text-emerald-400">Available for Contract & Full-Time</span>
                </div>
              </div>
            </div>

            {/* Socials Grid */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase">
                Digital Presence
              </div>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://github.com/AbuJulaybeeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all group"
                >
                  <GitHubIcon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-[11px] font-mono text-slate-300 mt-1">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all group"
                >
                  <LinkedInIcon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-[11px] font-mono text-slate-300 mt-1">LinkedIn</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all group"
                >
                  <TwitterXIcon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-[11px] font-mono text-slate-300 mt-1">Twitter</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Working Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            {/* Feedback notification banner */}
            {state?.success ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-3 text-center my-8">
                <CheckCircle className="w-12 h-12 mx-auto text-emerald-400" />
                <h4 className="text-lg font-bold text-white font-mono">
                  Message Dispatched Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {state.message}
                </p>
                <button
                  type="button"
                  onClick={() => setState(initialState)}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-mono bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {state?.message && !state?.success && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{state.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Vance"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.05] transition-all font-sans"
                    />
                    {state?.errors?.name && (
                      <p className="text-xs text-red-400 font-mono">
                        {state.errors.name[0]}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.05] transition-all font-sans"
                    />
                    {state?.errors?.email && (
                      <p className="text-xs text-red-400 font-mono">
                        {state.errors.email[0]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Category / Subject Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Subject / Area of Interest
                  </label>
                  <select
                    name="subject"
                    defaultValue="Backend & API Architecture"
                    className="w-full px-4 py-3 rounded-xl bg-[#0c1018] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-all font-sans"
                  >
                    <option value="Backend & API Architecture">Backend & API Architecture (Node.js/PostgreSQL)</option>
                    <option value="Web3 DApp & Smart Contracts">Web3 DApp & Smart Contracts (Solidity/Avalanche/BlockDAG)</option>
                    <option value="Full-Stack Web Engineering">Full-Stack Web Engineering (Next.js/React)</option>
                    <option value="Contract / Full-Time Role">Contract or Full-Time Engineering Role</option>
                    <option value="Other Inquiries">General Collaboration & Mentorship</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Message Details <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your project, timeline, or engineering goals..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.05] transition-all font-sans resize-y"
                  />
                  {state?.errors?.message && (
                    <p className="text-xs text-red-400 font-mono">
                      {state.errors.message[0]}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="group w-full py-3.5 px-6 rounded-xl font-mono text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
