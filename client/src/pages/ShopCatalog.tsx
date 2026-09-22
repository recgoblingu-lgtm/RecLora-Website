import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import siteData from '../siteData.json';
import { Link } from 'wouter';
import { 
  ShoppingBag, 
  Search, 
  Sparkles, 
  Filter, 
  Tag, 
  ShieldCheck,
  Check
} from 'lucide-react';

export default function ShopCatalog() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [purchasedItem, setPurchasedItem] = useState<string | null>(null);

  const categories = ['All', 'Clothing', 'Skins', 'Headwear', 'Eyewear', 'Props', 'Inventions', 'Gadgets'];

  const filteredItems = siteData.sample_items.filter((item) => {
    const slug = String(item[0]);
    const name = String(item[1]);
    const cat = String(item[2]);
    const desc = String(item[4]);

    const matchesSearch = name.toLowerCase().includes(search.toLowerCase()) || 
                          desc.toLowerCase().includes(search.toLowerCase()) ||
                          cat.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCat === 'All' || cat.toLowerCase().includes(selectedCat.toLowerCase());

    return matchesSearch && matchesCat;
  });

  const handleBuy = (name: string) => {
    setPurchasedItem(name);
    setTimeout(() => setPurchasedItem(null), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0E071A]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#3A2268]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C1854] text-[#FFEAA7] border border-[#9B51E0]/40 text-xs font-semibold mb-3">
              <ShoppingBag className="w-3.5 h-3.5 text-[#F5B041]" />
              Virtual Merchandise & Inventions
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8F9FA] font-heading">
              RecLora <span className="gold-text-gradient">Store & Shop</span>
            </h1>
            <p className="text-sm text-[#C8B6E2] mt-1 max-w-xl">
              Equip custom purple & gold skins, retro hoodies, sound props, and creator-invented dorm decorations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-[#180D2E] border border-[#F5B041]/60 text-xs font-bold text-[#FFEAA7] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F5B041]" />
              <span>Balance: 12,500 Tokens</span>
            </div>
          </div>
        </div>

        {/* Purchase Notification */}
        {purchasedItem && (
          <div className="mt-4 p-4 rounded-xl bg-[#2ECC71]/20 border border-[#2ECC71] text-xs font-bold text-[#2ECC71] flex items-center gap-2 animate-fade-in">
            <Check className="w-4 h-4" />
            <span>Successfully unlocked "{purchasedItem}"! Item added to your avatar locker.</span>
          </div>
        )}

        {/* Filter Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8B6E2]" />
            <input
              type="text"
              placeholder="Search items, apparel, Maker Pen skins..."
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

        {/* Items Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const slug = String(item[0]);
            const name = String(item[1]);
            const cat = String(item[2]);
            const price = Number(item[3]);
            const desc = String(item[4]);

            return (
              <div
                key={slug}
                className="group p-5 rounded-2xl bg-[#180D2E] border border-[#3A2268] hover:border-[#F5B041] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-40 rounded-xl bg-[#120A21] border border-[#2C1854] flex items-center justify-center p-4 mb-4 group-hover:scale-105 transition-transform relative overflow-hidden">
                    <ShoppingBag className="w-12 h-12 text-[#F5B041]" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#2C1854] text-[#FFEAA7] text-[10px] font-bold">
                      {cat}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#F8F9FA] group-hover:text-[#FFEAA7] transition-colors">
                    {name}
                  </h3>
                  <p className="text-xs text-[#C8B6E2] mt-1.5 line-clamp-2 leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#2C1854] flex items-center justify-between">
                  <div>
                    <span className="text-sm font-black text-[#FFEAA7]">{price.toLocaleString()}</span>
                    <span className="text-[10px] text-[#C8B6E2] ml-1">Tokens</span>
                  </div>

                  <button
                    onClick={() => handleBuy(name)}
                    className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#F5B041] to-[#D4AC0D] text-[#0E071A] text-xs font-extrabold hover:brightness-110 shadow-sm transition-all"
                  >
                    Unlock
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
