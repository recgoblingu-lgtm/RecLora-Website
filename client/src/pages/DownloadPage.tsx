import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Download, Monitor, Smartphone, Glasses, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function DownloadPage() {
  const platforms = [
    {
      title: "PC & Steam",
      icon: Monitor,
      desc: "Full 144Hz high-fidelity desktop experience with Maker Pen keyboard & mouse precision shortcuts.",
      button: "Download for Windows",
      badge: "Direct & Steam"
    },
    {
      title: "VR Headsets",
      icon: Glasses,
      desc: "Full 6-DOF roomscale VR immersion for Meta Quest 2/3/Pro, SteamVR, and PlayStation VR2.",
      button: "Get on VR Store",
      badge: "Cross-Play VR"
    },
    {
      title: "Mobile (iOS & Android)",
      icon: Smartphone,
      desc: "Stay connected with friends, chat in lounges, and manage inventions on the go from your phone.",
      button: "Download Mobile",
      badge: "App Store / Google Play"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0E071A]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C1854] text-[#FFEAA7] border border-[#9B51E0]/40 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B041]" />
            Free To Play • Cross-Platform
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#F8F9FA] font-heading">
            Play <span className="gold-text-gradient">RecLora Anywhere</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C8B6E2] leading-relaxed">
            Download the official RecLora client on your favorite device. One account gives you access to all your rooms, inventions, avatar cosmetics, and friends across PC, VR, and mobile.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-3xl border border-[#3A2268] bg-[#180D2E] p-8 flex flex-col justify-between hover:border-[#F5B041] transition-all space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#2C1854] flex items-center justify-center text-[#F5B041] border border-[#9B51E0]/40 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#120A21] text-[#FFEAA7] border border-[#3A2268]">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8F9FA] group-hover:text-[#FFEAA7]">
                    {p.title}
                  </h3>

                  <p className="text-xs text-[#C8B6E2] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <button
                  onClick={() => alert(`Starting download for ${p.title}! Client installer packaging.`)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#F5B041] to-[#D4AC0D] text-[#0E071A] text-xs font-black hover:brightness-110 shadow-md transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{p.button}</span>
                </button>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
