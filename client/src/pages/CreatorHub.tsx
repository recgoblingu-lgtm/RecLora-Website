import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import siteData from '../siteData.json';
import { Link } from 'wouter';
import { 
  BookOpen, 
  DollarSign, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  ArrowRight, 
  Users, 
  Layers, 
  Award,
  Video
} from 'lucide-react';

export default function CreatorHub() {
  const academyGuides = siteData.academy_guides;
  const docs = siteData.docs_pages;

  return (
    <div className="min-h-screen flex flex-col bg-[#0E071A]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="pb-8 border-b border-[#3A2268] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C1854] text-[#FFEAA7] border border-[#9B51E0]/40 text-xs font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#F5B041]" />
              Architect & Builder Central
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8F9FA] font-heading">
              RecLora <span className="gold-text-gradient">Creator Hub</span>
            </h1>
            <p className="text-sm text-[#C8B6E2] mt-1 max-w-xl">
              Everything you need to build thriving worlds, monetize your inventions, and level up your Maker Pen craftsmanship.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/creator/p/cashout"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F5B041] to-[#D4AC0D] text-[#0E071A] text-xs font-extrabold shadow-[0_0_15px_rgba(245,176,65,0.3)] hover:brightness-110 transition-all"
            >
              <DollarSign className="w-4 h-4" />
              <span>Token Cash Out Program</span>
            </Link>
          </div>
        </div>

        {/* 3 Core Highlight Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Link
            href="/creator/p/creator-academy"
            className="group p-6 rounded-2xl bg-[#180D2E] border border-[#3A2268] hover:border-[#F5B041] transition-all space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#2C1854] flex items-center justify-center border border-[#9B51E0]/40 text-[#F5B041] group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#F8F9FA] group-hover:text-[#FFEAA7]">
              Maker Pen Academy
            </h3>
            <p className="text-xs text-[#C8B6E2] leading-relaxed">
              Step-by-step video tutorials and interactive rooms teaching 3D modeling, snapping, materials, and physics constraints.
            </p>
          </Link>

          <Link
            href="/creator/p/cashout"
            className="group p-6 rounded-2xl bg-[#180D2E] border border-[#3A2268] hover:border-[#F5B041] transition-all space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#2C1854] flex items-center justify-center border border-[#9B51E0]/40 text-[#F5B041] group-hover:scale-110 transition-transform">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#F8F9FA] group-hover:text-[#FFEAA7]">
              Monetization & Payouts
            </h3>
            <p className="text-xs text-[#C8B6E2] leading-relaxed">
              Earn tokens from room keys, tips, and invention sales. Convert your earned tokens directly into real-world cash.
            </p>
          </Link>

          <Link
            href="/creator/p/creativeclubs"
            className="group p-6 rounded-2xl bg-[#180D2E] border border-[#3A2268] hover:border-[#F5B041] transition-all space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#2C1854] flex items-center justify-center border border-[#9B51E0]/40 text-[#F5B041] group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#F8F9FA] group-hover:text-[#FFEAA7]">
              Creative Clubs & Meetups
            </h3>
            <p className="text-xs text-[#C8B6E2] leading-relaxed">
              Collaborate with specialized creator teams, join building jams, and attend bi-weekly developer AMAs.
            </p>
          </Link>
        </div>

        {/* Creator Academy Guides Grid */}
        <section className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-[#F8F9FA] font-heading flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#F5B041]" />
                Creator Academy Tutorials ({academyGuides.length})
              </h2>
              <p className="text-xs text-[#C8B6E2] mt-0.5">Official guides from introductory modeling to advanced network replication.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {academyGuides.map((guide) => {
              const slug = String(guide[0]);
              const title = String(guide[1]);
              const desc = String(guide[2]);

              return (
                <Link
                  key={slug}
                  href={`/creator/academy/${slug}`}
                  className="group p-5 rounded-2xl bg-[#180D2E] border border-[#3A2268] hover:border-[#9B51E0] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5B041]">
                      Tutorial Guide
                    </span>
                    <h4 className="text-sm font-bold text-[#F8F9FA] group-hover:text-[#FFEAA7] transition-colors">
                      {title}
                    </h4>
                    <p className="text-xs text-[#C8B6E2] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-[#2C1854] flex items-center justify-between text-xs text-[#FFEAA7]">
                    <span>Read Tutorial</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Documentation & Policies */}
        <section className="mt-14 pt-10 border-t border-[#3A2268]/60">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-[#F8F9FA] font-heading flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#F5B041]" />
                Policies & Developer Documentation ({docs.length})
              </h2>
              <p className="text-xs text-[#C8B6E2] mt-0.5">Platform terms, verification standards, and code of conduct.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {docs.map((doc) => {
              const slug = String(doc[0]);
              const title = String(doc[1]);
              const desc = String(doc[2]);

              return (
                <Link
                  key={slug}
                  href={`/creator/docs/${slug}`}
                  className="group p-4 rounded-xl bg-[#180D2E] border border-[#3A2268] hover:border-[#F5B041] transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-[#F8F9FA] group-hover:text-[#FFEAA7] transition-colors leading-snug">
                      {title}
                    </h4>
                    <p className="text-[11px] text-[#C8B6E2] mt-1.5 line-clamp-2 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#F5B041] mt-3 block">
                    Read Document →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
