import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import siteData from '../siteData.json';
import { Link } from 'wouter';
import { 
  Layers, 
  Search, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  BookOpen, 
  ShieldCheck 
} from 'lucide-react';

export default function AnnouncementsDirectory() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const allArticles = siteData.pages.filter(p => p.category.includes('Announcement') || p.category.includes('Documents'));

  const categories = ['All', 'Announcement', 'Creator & Community', 'Documents & Policies'];

  const filtered = allArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase()) || 
                          article.description.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCat === 'All' || article.category.toLowerCase().includes(selectedCat.toLowerCase());
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#0E071A]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#3A2268]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C1854] text-[#FFEAA7] border border-[#9B51E0]/40 text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-[#F5B041]" />
              Official Communication Network
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8F9FA] font-heading">
              Announcements & <span className="gold-text-gradient">Policy Hub</span>
            </h1>
            <p className="text-sm text-[#C8B6E2] mt-1 max-w-xl">
              Every official update, balance patch, creator policy, and news announcement published across RecLora.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/creator/p/class-of-87-reunion"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F5B041] to-[#D4AC0D] text-[#0E071A] text-xs font-extrabold shadow-[0_0_15px_rgba(245,176,65,0.3)] hover:brightness-110 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Latest: Class of '87 Reunion</span>
            </Link>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8B6E2]" />
            <input
              type="text"
              placeholder="Search announcements, policies, patch notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#180D2E] border border-[#3A2268] text-xs text-[#F8F9FA] placeholder-[#C8B6E2]/50 focus:outline-none focus:border-[#F5B041]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCat(c)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCat === c
                    ? 'bg-[#F5B041] text-[#0E071A] font-bold shadow-md'
                    : 'bg-[#180D2E] text-[#C8B6E2] hover:text-[#FFEAA7] border border-[#3A2268]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <Link
              key={article.slug}
              href={article.path}
              className="group p-5 rounded-2xl bg-[#180D2E] border border-[#3A2268] hover:border-[#F5B041]/70 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#2C1854] text-[#FFEAA7] border border-[#9B51E0]/40">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-[#C8B6E2]">Official</span>
                </div>
                <h3 className="text-base font-bold text-[#F8F9FA] group-hover:text-[#FFEAA7] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-[#C8B6E2] line-clamp-3 leading-relaxed">
                  {article.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#2C1854] flex items-center justify-between text-xs text-[#F5B041] font-semibold">
                <span>View Full Document</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
