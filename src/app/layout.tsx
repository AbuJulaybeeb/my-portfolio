import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jibril Raji Qasim | Web3 & Backend Developer",
  description:
    "Portfolio of Jibril Raji Qasim — Web3 & Backend Developer specializing in scalable Node.js/PostgreSQL infrastructure, EVM/DAG smart contracts, and high-performance decentralized systems.",
  keywords: [
    "Jibril Raji Qasim",
    "Web3 Developer",
    "Backend Developer",
    "Smart Contracts",
    "Node.js",
    "PostgreSQL",
    "Solidity",
    "Avalanche",
    "BlockDAG",
    "Stacks",
    "Decentralized Applications",
  ],
  authors: [{ name: "Jibril Raji Qasim" }],
  creator: "Jibril Raji Qasim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jibril-raji-qasim.vercel.app",
    title: "Jibril Raji Qasim | Web3 & Backend Developer",
    description:
      "Specializing in scalable Node.js/PostgreSQL infrastructure, EVM/DAG smart contracts, and high-performance decentralized systems.",
    siteName: "Jibril Raji Qasim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jibril Raji Qasim | Web3 & Backend Developer",
    description:
      "Specializing in scalable Node.js/PostgreSQL infrastructure, EVM/DAG smart contracts, and high-performance decentralized systems.",
    creator: "@j_r_qasim",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-[#06070a] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300 relative overflow-x-hidden`}
      >
        {/* Ambient Glowing Orbs Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-violet-600/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
          <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
